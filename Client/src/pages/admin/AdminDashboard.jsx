export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900">System Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <span className="text-xs text-slate-500 uppercase font-semibold">Active Projects</span>
          <p className="text-3xl font-extrabold text-slate-900 mt-2">12</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <span className="text-xs text-slate-500 uppercase font-semibold">Scheduled Events</span>
          <p className="text-3xl font-extrabold text-slate-900 mt-2">5</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <span className="text-xs text-slate-500 uppercase font-semibold">Media Gallery Assets</span>
          <p className="text-3xl font-extrabold text-slate-900 mt-2">48</p>
        </div>
      </div>
    </div>
  );
}