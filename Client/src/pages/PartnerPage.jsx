import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { 
  HeartHandshake, 
  UserPlus, 
  MessageSquare, 
  Heart, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Mail,
  MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PartnerPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("volunteer"); // "volunteer" | "inquiry" | "contribute"
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    interestArea: "Mental Wellness",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (activeTab === "contribute") {
      navigate("/donate");
      return;
    }

    // Submit to Formspree endpoint or fallback to mailto trigger
    const mailtoSubject = encodeURIComponent(`[JAWAAB Website ${activeTab.toUpperCase()}] ${formData.fullName}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nInterest Area: ${formData.interestArea}\n\nMessage:\n${formData.message}`
    );

    // Trigger Formspree or native mail client pointing directly to jawaabempowerment1@gmail.com
    window.location.href = `mailto:jawaabempowerment1@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

    setSubmitted(true);
  };

  return (
    <article className="min-h-screen bg-slate-50/50 font-sans-inter pt-28 pb-20 selection:bg-emerald-600 selection:text-white">
      
      {/* 1. Page Header */}
      <section className="max-w-4xl mx-auto px-6 text-center space-y-4 mb-12">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Walk With Us</span>
        </span>

        <h1 className="text-4xl sm:text-6xl font-serif-editorial font-bold text-slate-900 leading-[1.15]">
          Partner With Jawaab Initiatives
        </h1>

        <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          Whether you wish to volunteer in Narok, partner on community projects, offer feedback, or financially empower our local drives—your voice matters.
        </p>
      </section>

      {/* 2. Interactive Modal Tabs Container */}
      <section className="max-w-3xl mx-auto px-6 mb-16">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xl space-y-8">
          
          {/* Modal Tab Buttons */}
          <div className="grid grid-cols-3 gap-2 p-1.5 bg-slate-100 rounded-2xl">
            <button
              onClick={() => setActiveTab("volunteer")}
              className={`py-3 px-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === "volunteer"
                  ? "bg-white text-emerald-800 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <UserPlus className="w-4 h-4 text-emerald-600 hidden sm:inline" />
              <span>Join / Volunteer</span>
            </button>

            <button
              onClick={() => setActiveTab("inquiry")}
              className={`py-3 px-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === "inquiry"
                  ? "bg-white text-emerald-800 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <MessageSquare className="w-4 h-4 text-emerald-600 hidden sm:inline" />
              <span>Inquiry & Feedback</span>
            </button>

            <button
              onClick={() => setActiveTab("contribute")}
              className={`py-3 px-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === "contribute"
                  ? "bg-amber-400 text-slate-950 shadow-xs font-extrabold"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Heart className="w-4 h-4 fill-current text-slate-950 hidden sm:inline" />
              <span>Contribute</span>
            </button>
          </div>

          {/* Form Content Body */}
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="text-2xl font-serif-editorial font-bold text-slate-900">Message Prepared!</h3>
              <p className="text-slate-600 text-sm max-w-md mx-auto">
                Thank you for reaching out to Jawaab. If your mail client did not open automatically, please send your email directly to <strong className="text-emerald-700">jawaabempowerment1@gmail.com</strong>.
              </p>
              <Button onClick={() => setSubmitted(false)} className="cursor-pointer mt-4">
                Send Another Inquiry
              </Button>
            </div>
          ) : activeTab === "contribute" ? (
            /* Contribute Redirect Prompt */
            <div className="py-8 text-center space-y-6">
              <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 max-w-md mx-auto space-y-2">
                <Heart className="w-8 h-8 text-amber-600 mx-auto fill-amber-600" />
                <h3 className="text-xl font-bold text-slate-900">Direct Financial Contribution</h3>
                <p className="text-xs text-slate-600">
                  Support our M-Pesa paybill, bank transfer accounts, or specific field initiatives in Narok.
                </p>
              </div>

              <div className="pt-2">
                <Button
                  onClick={() => navigate("/donate")}
                  size="lg"
                  className="rounded-2xl px-8 py-6 font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all cursor-pointer shadow-md"
                >
                  <span>Proceed to Ways to Give</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          ) : (
            /* Multi-Modal Form */
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1">
                <h3 className="text-xl font-serif-editorial font-bold text-slate-900">
                  {activeTab === "volunteer" ? "Join the Movement in Narok" : "Questions & Community Feedback"}
                </h3>
                <p className="text-xs text-slate-500">
                  Submissions are sent directly to <strong className="text-slate-800">jawaabempowerment1@gmail.com</strong>.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="e.g. Jerim Owino"
                    className="w-full border border-slate-200 rounded-xl p-3 text-sm focus:outline-none focus:border-emerald-600 bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="yourname@gmail.com"
                    className="w-full border border-slate-200 rounded-xl p-3 text-sm focus:outline-none focus:border-emerald-600 bg-slate-50/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+254 700 000 000"
                    className="w-full border border-slate-200 rounded-xl p-3 text-sm focus:outline-none focus:border-emerald-600 bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Primary Interest Area</label>
                  <select
                    name="interestArea"
                    value={formData.interestArea}
                    onChange={handleInputChange}
                    className="w-full border border-slate-200 rounded-xl p-3 text-sm focus:outline-none focus:border-emerald-600 bg-slate-50/50"
                  >
                    <option value="Mental Wellness">Mental Wellness</option>
                    <option value="Gender Equity">Gender Equity</option>
                    <option value="Climate Action">Climate Action</option>
                    <option value="WASH Initiative">WASH Initiative</option>
                    <option value="General Volunteer">General Volunteer / Internship</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Your Message or Experience *</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us how you would like to collaborate or share your feedback..."
                  className="w-full border border-slate-200 rounded-xl p-3 text-sm focus:outline-none focus:border-emerald-600 bg-slate-50/50"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full rounded-xl py-6 font-bold cursor-pointer flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit to Field Team</span>
              </Button>
            </form>
          )}

        </div>
      </section>

      {/* 3. Direct Contact Details */}
      <section className="max-w-3xl mx-auto px-6 text-center text-xs text-slate-500 space-y-2">
        <p className="flex items-center justify-center gap-2">
          <Mail className="w-4 h-4 text-emerald-600" />
          <span>Direct Email: <strong className="text-slate-800">jawaabempowerment1@gmail.com</strong></span>
        </p>
        <p className="flex items-center justify-center gap-2">
          <MapPin className="w-4 h-4 text-emerald-600" />
          <span>Location: <strong className="text-slate-800">Narok County, Kenya</strong></span>
        </p>
      </section>

    </article>
  );
}