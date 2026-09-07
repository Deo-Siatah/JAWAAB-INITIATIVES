import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function uploadImage(file, folder = "projects") {
  // 1. Sanitize file name
  const fileExt = file.name.split(".").pop();
  const fileName = `${folder}/${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;

  // 2. Upload to storage bucket
  const { error: uploadError } = await supabase.storage
    .from("jawaab-assets")
    .upload(fileName, file, {
      cacheControl: "3600",
      upsert: false,
    });

  if (uploadError) throw uploadError;

  // 3. Retrieve public URL
  const { data } = supabase.storage
    .from("jawaab-assets")
    .getPublicUrl(fileName);

  return data.publicUrl;
}

/**
 * Uploads multiple files to Supabase 'jawaab-assets' bucket 
 * and returns an array of public URLs.
 */
export async function uploadMultipleImages(files, folder = "projects/gallery") {
  const uploadPromises = Array.from(files).map((file) => uploadImage(file, folder));
  return Promise.all(uploadPromises);
}