import React, { useState, useEffect } from "react";
import { supabase, uploadImage } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, Edit2, Loader2, Eye, EyeOff, Image as ImageIcon } from "lucide-react";

export default function MediaManager() {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Form State
  const [editingId, setEditingId] = useState(null);
  const [caption, setCaption] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [displayOrder, setDisplayOrder] = useState(0);
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    fetchGallery();
  }, []);

  async function fetchGallery() {
    setLoading(true);
    const { data } = await supabase
      .from("gallery")
      .select("*")
      .order("display_order", { ascending: true });
    setSlides(data || []);
    setLoading(false);
  }

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      setSaving(true);
      let finalUrl = imageUrl;

      // Upload file if new file selected
      if (imageFile) {
        finalUrl = await uploadImage(imageFile, "gallery");
      }

      if (!finalUrl) return alert("Please provide an image URL or upload a file.");

      const payload = {
        image_url: finalUrl,
        caption,
        display_order: parseInt(displayOrder, 10) || 0,
      };

      if (editingId) {
        await supabase.from("gallery").update(payload).eq("id", editingId);
      } else {
        await supabase.from("gallery").insert([payload]);
      }

      resetForm();
      fetchGallery();
    } catch (err) {
      alert(`Error saving slide: ${err.message}`);
    } finally {
      setSaving(false);
    }
  };

  const toggleVisibility = async (id, currentStatus) => {
    await supabase.from("gallery").update({ is_active: !currentStatus }).eq("id", id);
    fetchGallery();
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this slide?")) return;
    await supabase.from("gallery").delete().eq("id", id);
    fetchGallery();
  };

  const handleEdit = (slide) => {
    setEditingId(slide.id);
    setCaption(slide.caption);
    setImageUrl(slide.image_url);
    setDisplayOrder(slide.display_order || 0);
  };

  const resetForm = () => {
    setEditingId(null);
    setCaption("");
    setImageUrl("");
    setDisplayOrder(0);
    setImageFile(null);
  };

  return (
    <div className="space-y-8 font-sans-inter">
      <div>
        <h2 className="text-2xl font-bold font-heading-poppins text-slate-900">Gallery Carousel Manager</h2>
        <p className="text-sm text-slate-500">Add, reorder, or edit image slides and captions shown in the public carousel.</p>
      </div>

      {/* Slide Editor Form */}
      <form onSubmit={handleSave} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
        <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider">
          {editingId ? "Edit Slide Record" : "Add Slide to Gallery"}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Slide Caption *</label>
            <input
              type="text"
              required
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="e.g. Tree planting drive at Ntulele Mosque"
              className="w-full border border-slate-200 rounded-xl p-2.5 text-sm focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Display Weight / Order</label>
            <input
              type="number"
              value={displayOrder}
              onChange={(e) => setDisplayOrder(e.target.value)}
              placeholder="0"
              className="w-full border border-slate-200 rounded-xl p-2.5 text-sm focus:outline-none focus:border-emerald-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1">Existing Supabase Image URL</label>
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Paste public URL of existing Supabase asset..."
            className="w-full border border-slate-200 rounded-xl p-2.5 text-sm focus:outline-none focus:border-emerald-500"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1">Or Upload New Image File</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files[0])}
            className="w-full text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100 cursor-pointer"
          />
        </div>

        <div className="flex items-center gap-3">
          <Button type="submit" disabled={saving} className="cursor-pointer font-semibold">
            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
            <span>{editingId ? "Update Slide" : "Add Slide"}</span>
          </Button>

          {editingId && (
            <Button type="button" variant="outline" onClick={resetForm} className="cursor-pointer">
              Cancel
            </Button>
          )}
        </div>
      </form>

      {/* Active Carousel Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {slides.map((slide) => (
          <div key={slide.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs flex flex-col justify-between">
            <div className="relative h-48 bg-slate-100">
              <img src={slide.image_url} alt={slide.caption} className="w-full h-full object-cover" />
              <button
                onClick={() => toggleVisibility(slide.id, slide.is_active)}
                className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-xs text-xs font-bold ${
                  slide.is_active ? "bg-emerald-500/90 text-white" : "bg-slate-900/80 text-slate-300"
                }`}
              >
                {slide.is_active ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
              </button>
            </div>

            <div className="p-4 space-y-2">
              <p className="text-xs text-slate-400 font-semibold">Order Index: {slide.display_order}</p>
              <p className="text-sm font-bold text-slate-800 line-clamp-2">{slide.caption}</p>
            </div>

            <div className="p-4 pt-0 grid grid-cols-2 gap-2">
              <button
                onClick={() => handleEdit(slide)}
                className="py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-semibold flex items-center justify-center gap-1 transition-colors cursor-pointer"
              >
                <Edit2 className="w-3.5 h-3.5" />
                <span>Edit</span>
              </button>
              <button
                onClick={() => handleDelete(slide.id)}
                className="py-2 px-3 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-xl text-xs font-semibold flex items-center justify-center gap-1 transition-colors cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Delete</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}