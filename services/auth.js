import { supabase } from 'Supabase/client'

export default {
  deleteUser: async () => {
    const res = await supabase.rpc('delete_user');
    if (res) return res;
  },
  register: async (data) => {
    const res = await supabase.auth.signUp(data);
    if (res) return res;
  },
  signIn: async (data) => {
    const res = await supabase.auth.signIn(data);
    if (res) return res;
  },
  signOut: async () => {
    const res = await supabase.auth.signOut();
    if (res) return res;
  },
  updateUser: async (token, data) => {
    const res = await supabase.auth.api.updateUser(token, data);
    if (res) return res;
  },
  resetEmail: async (email) => {
    const res = await supabase.auth.api.resetPasswordForEmail(email);
    if (res) return res;
  }
}