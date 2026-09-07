import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import PublicLayout from "../layouts/PublicLayout";
import AdminLayout from "../layouts/AdminLayout";

// Public Pages
import Homepage from "../pages/Homepage";

// Admin Pages
import AdminDashboard from "../pages/admin/AdminDashboard";
import MediaManager from "../pages/admin/MediaManager";
import EventScheduler from "../pages/admin/EventScheduler";
import ProjectEditor from "../pages/admin/ProjectEditor";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Site Routes */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Homepage />} />
        </Route>

        {/* Admin Dashboard Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="media" element={<MediaManager />} />
          <Route path="events" element={<EventScheduler />} />
          <Route path="projects" element={<ProjectEditor />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}