import { supabase } from 'Supabase/client'

export default {
  deleteGratitudes: async (id) => {
    const res = await supabase.from('gratitudes').delete().eq('user_id', id);
    if (res) return res;
  },
}