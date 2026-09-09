import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";

// Layouts
import PublicLayout from "../layouts/PublicLayout";
import AdminLayout from "../layouts/AdminLayout";
import ProtectedRoute from "./ProtectedRoutes";
import ProjectStoryPage from "../pages/ProjectStorypage";

// Public Pages
import Homepage from "../pages/Homepage";
import ProgramDetailPage from "../pages/ProgramDetailPage";
import DonatePage from "../pages/Donatepage";
import JawaabStory from "../pages/JawaabStory";
import PartnerPage from "../pages/PartnerPage";

// Admin Pages
import AdminLogin from "../pages/admin/AdminLogin";
import AdminDashboard from "../pages/admin/AdminDashboard";
import MediaManager from "../pages/admin/MediaManager";
import EventScheduler from "../pages/admin/EventScheduler";
import ProjectEditor from "../pages/admin/ProjectEditor";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Public Site */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Homepage />} />
          <Route path="projects/:id" element={<ProjectStoryPage />} />
          <Route path="programs/:id" element={<ProgramDetailPage />} />
          <Route path="donate" element={<DonatePage />} />
          <Route path="our-story" element={<JawaabStory />} />
          <Route path="partner" element={<PartnerPage />} />
        </Route>

        {/* Public Login Route */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Protected Admin Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="media" element={<MediaManager />} />
            <Route path="events" element={<EventScheduler />} />
            <Route path="projects" element={<ProjectEditor />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}