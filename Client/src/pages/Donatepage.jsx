import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Heart, 
  Copy, 
  Check, 
  CreditCard, 
  Smartphone, 
  Building2, 
  ShieldCheck, 
  HeartHandshake, 
  Users, 
  Sparkles,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const givingMethods = [
  {
    id: "mpesa",
    title: "M-Pesa Mobile Money (Kenya)",
    icon: Smartphone,
    color: "bg-emerald-50 text-emerald-800 border-emerald-200",
    details: [
      { label: "Paybill Number", value: "247247" },
      { label: "Account Number", value: "0712345678" },
      { label: "Account Name", value: "Jawaab Empowerment" },
    ],
    note: "Instant & zero fees for direct local donations across Kenya.",
  },
  {
    id: "bank",
    title: "Direct Bank Transfer",
    icon: Building2,
    color: "bg-sky-50 text-sky-800 border-sky-200",
    details: [
      { label: "Bank Name", value: "Equity Bank Kenya" },
      { label: "Branch Name", value: "Narok Branch" },
      { label: "Account Name", value: "Jawaab Empowerment Initiatives" },
      { label: "Account Number", value: "0120283746591" },
      { label: "SWIFT / BIC Code", value: "EQBLKENAXXX" },
    ],
    note: "Recommended for international bank transfers and regional wire grants.",
  },
];

const targetedInitiatives = [
  {
    title: "Girl-Child Dignity & Education Kits",
    target: "KSh 150,000",
    raised: "KSh 95,000",
    progress: 63,
    description: "Provides sanitary supplies, school uniforms, and textbooks to 200 girls in Narok East.",
  },
  {
    title: "Mau Reforestation & Youth Nurseries",
    target: "KSh 300,000",
    raised: "KSh 210,000",
    progress: 70,
    description: "Funds 10,000 native tree seedlings and equips 3 youth groups to manage local tree nurseries.",
  },
  {
    title: "School Mental Wellness Workshops",
    target: "KSh 100,000",
    raised: "KSh 45,000",
    progress: 45,
    description: "Sponsors peer counseling materials and mental health champions across 6 secondary schools.",
  },
];

export default function DonatePage() {
  const [copiedKey, setCopiedKey] = useState(null);

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <article className="min-h-screen bg-slate-50/50 font-sans-inter pt-28 pb-20 selection:bg-emerald-600 selection:text-white">
      
      {/* 1. Header Banner */}
      <section className="max-w-5xl mx-auto px-6 text-center space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
          <Heart className="w-3.5 h-3.5 fill-emerald-800" />
          <span>Transparent Giving</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-serif-editorial font-bold text-slate-900 leading-[1.15]">
          Fuel Direct Change in Narok
        </h1>

        <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
          100% of community contributions directly fund local school drives, mental wellness counseling, native tree nurseries, and WASH water access points.
        </p>
      </section>

      {/* 2. Official Accounts & Ways to Give Grid */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <h2 className="text-2xl font-bold font-serif-editorial text-slate-900 mb-8 flex items-center gap-2">
          <CreditCard className="w-6 h-6 text-emerald-700" />
          <span>Official Contribution Channels</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {givingMethods.map((method) => {
            const Icon = method.icon;
            return (
              <div
                key={method.id}
                className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-6"
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-2xl border ${method.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{method.title}</h3>
                  </div>

                  <div className="space-y-3 pt-2">
                    {method.details.map((item, idx) => {
                      const itemKey = `${method.id}-${idx}`;
                      const isCopied = copiedKey === itemKey;

                      return (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-100"
                        >
                          <div>
                            <span className="block text-[11px] font-bold uppercase text-slate-400">
                              {item.label}
                            </span>
                            <span className="text-sm font-bold font-mono text-slate-800">
                              {item.value}
                            </span>
                          </div>

                          <button
                            onClick={() => copyToClipboard(item.value, itemKey)}
                            className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-emerald-700 hover:border-emerald-300 transition-colors cursor-pointer"
                            title="Copy to clipboard"
                          >
                            {isCopied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <p className="text-xs text-slate-500 italic bg-slate-50 p-3 rounded-xl border border-slate-100">
                  {method.note}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Targeted Active Initiatives (Dummy Accounts & Progress) */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <div className="mb-8">
          <h2 className="text-2xl font-bold font-serif-editorial text-slate-900 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-emerald-700" />
            <span>Targeted Active Drives</span>
          </h2>
          <p className="text-sm text-slate-500 mt-1">Sponsor a specific community drive currently deployed on the ground.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {targetedInitiatives.map((drive, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="font-bold text-slate-900 text-base leading-snug">{drive.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{drive.description}</p>
              </div>

              <div className="space-y-2 pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-emerald-700">{drive.raised} raised</span>
                  <span className="text-slate-400">Target: {drive.target}</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-emerald-600 rounded-full transition-all duration-1000"
                    style={{ width: `${drive.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Accountability Assurance */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4" />
              <span>Full Financial Transparency</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif-editorial font-bold">
              Need a Custom Grant or Receipt Confirmation?
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              For corporate partnerships, physical donation drops, or official tax reporting receipts, reach out directly to our field coordinator team.
            </p>
          </div>

          <Link to="/#newsletter">
            <Button size="lg" className="rounded-2xl px-8 py-6 font-bold text-slate-900 bg-emerald-400 hover:bg-emerald-300 transition-all cursor-pointer whitespace-nowrap">
              <span>Contact Field Operations</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

    </article>
  );
}