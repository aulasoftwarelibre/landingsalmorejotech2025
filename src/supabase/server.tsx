import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(import.meta.env.VITE_SOME_KEY|| " ", import.meta.env.VITE_SUPABASE_ANON_KEY ||" ");
