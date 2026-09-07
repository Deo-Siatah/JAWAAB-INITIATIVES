import React, { useState, useEffect } from "react";
import { supabase, uploadImage, uploadMultipleImages } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, Edit3, Loader2, X, Image as ImageIcon, Check } from "lucide-react";

export default function ProjectEditor() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // Form States
  const [title, setTitle] = useState("");
  const [area, setArea] = useState("Mental Wellness");
  const [eventDate, setEventDate] = useState(new Date().toISOString().split("T")[0]);
  const [location, setLocation] = useState("Narok County, Kenya");
  const [impactMetric, setImpactMetric] = useState("150+ Lives Impacted");
  const [quote, setQuote] = useState("");
  const [description, setDescription] = useState("");
  const [fullStory, setFullStory] = useState("");
  const [accomplishmentsInput, setAccomplishmentsInput] = useState("");
  
  // Image Upload States
  const [coverFile, setCoverFile] = useState(null);
  const [existingCoverUrl, setExistingCoverUrl] = useState("");
  const [galleryFiles, setGalleryFiles] = useState([]);
  const [existingGalleryUrls, setExistingGalleryUrls] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    setLoading(true);
    const { data } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false });
    setProjects(data || []);
    setLoading(false);
  };

  const handleEditClick = (proj) => {
    setEditingId(proj.id);
    setTitle(proj.title || "");
    setArea(proj.area || "Mental Wellness");
    setEventDate(proj.event_date || new Date().toISOString().split("T")[0]);
    setLocation(proj.location || "Narok County, Kenya");
    setImpactMetric(proj.impact_metric || "150+ Lives Impacted");
    setQuote(proj.quote || "");
    setDescription(proj.description || "");
    setFullStory(proj.full_story || "");
    setAccomplishmentsInput(proj.accomplishments ? proj.accomplishments.join("\n") : "");
    setExistingCoverUrl(proj.image_url || "");
    setExistingGalleryUrls(proj.gallery_urls || []);
    setCoverFile(null);
    setGalleryFiles([]);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    resetForm();
  };

  const resetForm = () => {
    setTitle("");
    setArea("Mental Wellness");
    setEventDate(new Date().toISOString().split("T")[0]);
    setLocation("Narok County, Kenya");
    setImpactMetric("150+ Lives Impacted");
    setQuote("");
    setDescription("");
    setFullStory("");
    setAccomplishmentsInput("");
    setCoverFile(null);
    setExistingCoverUrl("");
    setGalleryFiles([]);
    setExistingGalleryUrls([]);
  };

  const handleSaveProject = async (e) => {
    e.preventDefault();

    if (!editingId && !coverFile) {
      return alert("Please select a cover image for the project card.");
    }

    try {
      setUploading(true);

      // 1. Upload new cover image if selected
      let coverUrl = existingCoverUrl;
      if (coverFile) {
        coverUrl = await uploadImage(coverFile, "projects/covers");
      }

      // 2. Upload new gallery images if selected
      let newGalleryUrls = [];
      if (galleryFiles.length > 0) {
        newGalleryUrls = await uploadMultipleImages(galleryFiles, "projects/gallery");
      }
      const finalGalleryUrls = [...existingGalleryUrls, ...newGalleryUrls];

      // 3. Process accomplishments list
      const accomplishmentsArray = accomplishmentsInput
        ? accomplishmentsInput.split("\n").filter((item) => item.trim() !== "")
        : [];

      const payload = {
        title,
        area,
        event_date: eventDate,
        location,
        impact_metric: impactMetric,
        quote: quote ? `“${quote.replace(/^[“"]|[”"]$/g, "")}”` : null,
        description,
        full_story: fullStory || null,
        accomplishments: accomplishmentsArray,
        image_url: coverUrl,
        gallery_urls: finalGalleryUrls,
      };

      if (editingId) {
        // UPDATE Existing Project
        const { error } = await supabase
          .from("projects")
          .update(payload)
          .eq("id", editingId);
        if (error) throw error;
      } else {
        // INSERT New Project
        const { error } = await supabase.from("projects").insert([payload]);
        if (error) throw error;
      }

      setEditingId(null);
      resetForm();
      fetchProjects();
    } catch (err) {
      alert(`Error saving project: ${err.message}`);
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this project card?")) return;
    await supabase.from("projects").delete().eq("id", id);
    fetchProjects();
  };

  const removeGalleryImage = (indexToRemove) => {
    setExistingGalleryUrls((prev) => prev.filter((_, idx) => idx !== indexToRemove));
  };

  return (
    <div className="space-y-8 font-sans-inter">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold font-heading-poppins text-slate-900">
            {editingId ? "Edit Initiative Story" : "Project & Story Editor"}
          </h2>
          <p className="text-sm text-slate-500">
            {editingId ? "Updating existing project card." : "Publish new initiatives with gallery images and custom field dates."}
          </p>
        </div>

        {editingId && (
          <Button variant="outline" onClick={handleCancelEdit} className="flex items-center gap-2 cursor-pointer">
            <X className="w-4 h-4" />
            <span>Cancel Edit Mode</span>
          </Button>
        )}
      </div>

      {/* Editor Form Container */}
      <form onSubmit={handleSaveProject} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
        <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider">
          {editingId ? "Modify Card & Full Story Details" : "Create New Initiative Card"}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Project Title *</label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Visit to Teseru Girls"
              className="w-full border border-slate-200 rounded-xl p-2.5 text-sm focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Impact Category *</label>
            <select
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="w-full border border-slate-200 rounded-xl p-2.5 text-sm focus:outline-none focus:border-emerald-500 bg-white"
            >
              <option value="Mental Wellness">Mental Wellness</option>
              <option value="Gender Equity">Gender Equity</option>
              <option value="Climate Action">Climate Action</option>
              <option value="WASH">WASH</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Event / Field Visit Date *</label>
            <input
              type="date"
              required
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              className="w-full border border-slate-200 rounded-xl p-2.5 text-sm focus:outline-none focus:border-emerald-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g. Narok County, Kenya"
              className="w-full border border-slate-200 rounded-xl p-2.5 text-sm focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Impact Metric</label>
            <input
              type="text"
              value={impactMetric}
              onChange={(e) => setImpactMetric(e.target.value)}
              placeholder="e.g. 150+ Lives Impacted"
              className="w-full border border-slate-200 rounded-xl p-2.5 text-sm focus:outline-none focus:border-emerald-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1">Card Hover Quote</label>
          <input
            type="text"
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
            placeholder='e.g. "Inspiring to see these young women speak boldly."'
            className="w-full border border-slate-200 rounded-xl p-2.5 text-sm focus:outline-none focus:border-emerald-500"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1">Card Short Description *</label>
          <textarea
            required
            rows={2}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Brief summary displayed on the card..."
            className="w-full border border-slate-200 rounded-xl p-2.5 text-sm focus:outline-none focus:border-emerald-500"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1">Full Story Report</label>
          <textarea
            rows={4}
            value={fullStory}
            onChange={(e) => setFullStory(e.target.value)}
            placeholder="Detailed narrative rendered on the Read Story page..."
            className="w-full border border-slate-200 rounded-xl p-2.5 text-sm focus:outline-none focus:border-emerald-500"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1">Key Outcomes (One per line)</label>
          <textarea
            rows={3}
            value={accomplishmentsInput}
            onChange={(e) => setAccomplishmentsInput(e.target.value)}
            placeholder="Distributed essential educational supplies&#10;Facilitated peer mentorship sessions"
            className="w-full border border-slate-200 rounded-xl p-2.5 text-sm focus:outline-none focus:border-emerald-500"
          />
        </div>

        {/* Primary Cover Image Input */}
        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1">
            Primary Cover Image {editingId ? "(Select new file to overwrite existing)" : "*"}
          </label>
          {existingCoverUrl && !coverFile && (
            <div className="mb-2 flex items-center gap-3 p-2 bg-slate-50 border border-slate-200 rounded-xl">
              <img src={existingCoverUrl} alt="Cover Preview" className="h-12 w-16 object-cover rounded-lg" />
              <span className="text-xs text-slate-500">Current Cover Image Active</span>
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            required={!editingId && !existingCoverUrl}
            onChange={(e) => setCoverFile(e.target.files[0])}
            className="w-full text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100 cursor-pointer"
          />
        </div>

        {/* Gallery Images Array Input */}
        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1">
            Story Multi-Image Gallery (Optional - Upload multiple photos)
          </label>
          
          {existingGalleryUrls.length > 0 && (
            <div className="mb-3 grid grid-cols-4 sm:grid-cols-6 gap-2">
              {existingGalleryUrls.map((url, idx) => (
                <div key={idx} className="relative group rounded-lg overflow-hidden border border-slate-200 aspect-square">
                  <img src={url} alt={`Gallery ${idx}`} className="w-full h-full object-cover" />
                  <button
                    type="button"
                    onClick={() => removeGalleryImage(idx)}
                    className="absolute inset-0 bg-slate-950/60 text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4 text-rose-400" />
                  </button>
                </div>
              ))}
            </div>
          )}

          <input
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => setGalleryFiles(Array.from(e.target.files))}
            className="w-full text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-slate-100 file:text-slate-700 hover:file:bg-slate-200 cursor-pointer"
          />
        </div>

        <div className="pt-2 flex items-center gap-3">
          <Button type="submit" disabled={uploading} className="flex items-center gap-2 cursor-pointer font-semibold">
            {uploading ? <Loader2 className="w-4 h-4 animate-spin" /> : editingId ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
            <span>{uploading ? "Saving Changes..." : editingId ? "Update Project & Story" : "Publish Project Card"}</span>
          </Button>

          {editingId && (
            <Button type="button" variant="outline" onClick={handleCancelEdit} className="cursor-pointer">
              Cancel
            </Button>
          )}
        </div>
      </form>

      {/* Published Initiatives Table / Grid */}
      <div>
        <h3 className="text-base font-bold text-slate-900 mb-4">Published Initiatives ({projects.length})</h3>
        {loading ? (
          <p className="text-xs text-slate-400">Loading initiatives...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((proj) => (
              <div key={proj.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs flex flex-col justify-between">
                <div>
                  <div className="relative h-44 w-full bg-slate-100">
                    <img src={proj.image_url} alt={proj.title} className="h-full w-full object-cover" />
                    <span className="absolute top-3 right-3 bg-slate-950/70 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-xs">
                      {proj.event_date ? new Date(proj.event_date).toLocaleDateString("en-US", { month: "short", year: "numeric" }) : "Active"}
                    </span>
                  </div>
                  <div className="p-4">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 uppercase">
                      {proj.area}
                    </span>
                    <h4 className="font-bold text-slate-900 text-base mt-2">{proj.title}</h4>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">{proj.description}</p>
                    {proj.gallery_urls?.length > 0 && (
                      <p className="text-[11px] font-semibold text-emerald-600 mt-2 flex items-center gap-1">
                        <ImageIcon className="w-3.5 h-3.5" />
                        <span>{proj.gallery_urls.length} Gallery Photos</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="p-4 pt-0 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => handleEditClick(proj)}
                    className="py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                    <span>Edit</span>
                  </button>
                  <button
                    onClick={() => handleDelete(proj.id)}
                    className="py-2 px-3 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}