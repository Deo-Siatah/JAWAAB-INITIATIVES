import { Outlet, Link, useLocation } from "react-router-dom";

export default function AdminLayout() {
  const location = useLocation();

  const navItems = [
    { label: "Dashboard", path: "/admin" },
    { label: "Media & Slides", path: "/admin/media" },
    { label: "Events & Schedule", path: "/admin/events" },
    { label: "Projects & Impact", path: "/admin/projects" },
  ];

  return (
    <div className="min-h-screen flex bg-slate-100 text-slate-800">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-slate-200 flex flex-col justify-between p-6">
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="text-xl font-bold tracking-wide text-white">Jaawaab Admin</span>
          </div>
          <nav className="space-y-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-emerald-600 text-white"
                      : "hover:bg-slate-800 text-slate-400 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
        <Link
          to="/"
          className="text-xs text-slate-400 hover:text-white transition-colors"
        >
          ← Back to Public Website
        </Link>
      </aside>

      {/* Main Admin Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white border-b border-slate-200 px-8 flex items-center justify-between">
          <h1 className="text-lg font-semibold text-slate-700">Admin Control Center</h1>
          <div className="flex items-center gap-4">
            <span className="text-xs bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full font-medium">
              Live System
            </span>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}