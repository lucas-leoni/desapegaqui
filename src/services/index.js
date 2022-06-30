import { createClient } from '@supabase/supabase-js';

const URL = '';
const KEY = '';
const SUPABASE_AUTH = createClient(URL, KEY);

export default SUPABASE_AUTH;
