import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { supabase } from "@/lib/supabase";

export default function ProtectedRoute() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white font-sans-inter">
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-emerald-500 animate-ping" />
          <p className="text-sm font-semibold tracking-wide">Verifying Credentials...</p>
        </div>
      </div>
    );
  }

  return session ? <Outlet /> : <Navigate to="/admin/login" replace />;
}