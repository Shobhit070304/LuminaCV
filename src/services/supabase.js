import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export async function uploadResume(userId, file) {
  const { data, error } = await supabase.storage
    .from("resumes")
    .upload(`${userId}/${file.name}`, file);

  if (error) throw error;

  // Get public URL
  const url = supabase.storage.from("resumes").getPublicUrl(data.path);

  console.log("PDF uploaded! URL:", url.publicUrl);
  return url.publicUrl;
}
