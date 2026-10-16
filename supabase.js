// =====================================
// KAYBGRAM - SUPABASE CONNECTION
// =====================================

// Your Supabase project URL
const SUPABASE_URL = "https://qpwmlpisveearglmagvt.supabase.co";

// Your Supabase publishable key
const SUPABASE_ANON_KEY = "sb_publishable_-Qo13brD7ZoeOwwtC4sQMQ_X2k8fnlB";

// Create the Supabase connection
window.supabaseClient = window.supabase.createClient(
SUPABASE_URL,
SUPABASE_ANON_KEY
);

// Check the connection setup
console.log("Kaybgram Supabase client is ready!");
