import { createClient } from '@supabase/supabase-js';
import { SUPABASE_CONFIG } from '@/config';

const customSupabaseClient = createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);

export default customSupabaseClient;

export {
    customSupabaseClient,
    customSupabaseClient as supabase,
};
