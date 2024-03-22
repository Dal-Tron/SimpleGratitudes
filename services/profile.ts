import { notification } from 'antd';

import { createClient } from '@/utils/supabase/component';

const handleProfileError = (err: Error, msg: string) => {
  notification.open({
    type: 'error',
    message: msg,
  });
  console.log(err);
};

export const ProfileService = {
  deleteProfile: async (id: string) => {
    const client = createClient();

    const res = await client.from('profiles').delete().eq('id', id);

    if (res) return res;
  },
  getProfile: async (userId: string) => {
    const client = createClient();

    try {
      const { data, error } = await client
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
    const client = createClient();

    const res = await client
      .from('profiles')
      .update({ username, updated_username: true })
      .eq('id', id);

    if (res) return res;
  },
};
