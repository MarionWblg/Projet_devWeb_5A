import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://leyaefbbfxsayadxlulz.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxleWFlZmJiZnhzYXlhZHhsdWx6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg1MjgyMjEsImV4cCI6MTk4NDEwNDIyMX0.tjj_loIwzxHVxPjZnhs82zT7j0FUbEv_3ynOv5j7yWk";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);