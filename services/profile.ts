import { supabase } from 'Supabase/client';

import { validUsername } from 'Helpers/validation';
import { notification } from 'antd';

const handleProfileError = (err: Error, msg: string) => {
  notification.open({
    type: 'error',
    message: msg,
  });
  console.log(err);
};

export const ProfileService = {
  deleteProfile: async (id: string) => {
    const res = await supabase.from('profiles').delete().eq('id', id);
    if (res) return res;
  },
  getProfile: async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId);

      if (error) throw error;

      return data?.[0];
    } catch (err) {
      handleProfileError(err, 'Unable to get profile data');
    }
  },
  updateProfileUsername: async (id: string, username: string) => {
    if (!validUsername(username)) return;

    const res = await supabase
      .from('profiles')
      .update({ username, updated_username: true })
      .eq('id', id);
    if (res) return res;
  },
};
