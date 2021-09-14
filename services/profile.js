import { supabase } from 'Supabase/client'

import { validUsername } from 'Helpers/validation'

export default {
  insertProfile: async (id, username) => {
    if (validUsername(username)) {
      const res = await supabase.from('profiles').insert([{ id, username }]);
      if (res) return res;
    }
  },
  deleteProfile: async (id) => {
    const res = await supabase.from('profiles').delete().eq('id', id);
    if (res) return res;
  },
  getProfile: async (id) => {
    const res = await supabase.from('profiles').select('*').eq('id', id);
    if (res) return res;
  },
  updateProfileUsername: async (id, username) => {
    const res = await supabase.from('profiles').update({ username }).eq('id', id);
    if (res) return res;
  }
}