import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ipeexdaxpmsvcztyokrp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlwZWV4ZGF4cG1zdmN6dHlva3JwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg5MTY4NTEsImV4cCI6MTk5NDQ5Mjg1MX0.gjyDRKgsRUNky1zuuZGrD7_0XJj6gr0zxmloG1IcPgs";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
