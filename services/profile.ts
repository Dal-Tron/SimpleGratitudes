import { notification } from 'antd';

import { createClient } from '@/utils/supabase/component';

const handleProfileError = (err: Error, msg: string) => {
  notification.open({
    type: 'error',
    message: msg,
  });
};

export const ProfileService = {
  deleteProfile: async (userId: string) => {
    const client = createClient();

    try {
      const { error: profileError } = await client
        .from('profiles')
        .delete()
        .eq('user_id', userId);

      if (profileError) throw profileError;

      const { error: userError } = await client.auth.admin.deleteUser(userId);

      if (userError) throw userError;

      notification.open({
        type: 'success',
        message: 'Successfully deleted profile!',
      });
    } catch (err) {
      handleProfileError(err, 'Unable to delete profile.');
    }
  },
  getProfile: async (userId: string) => {
    const client = createClient();

    try {
      const { data, error } = await client
        .from('profiles')
        .select('*')
        .eq('user_id', userId);

      if (error) throw error;

      return data?.[0];
    } catch (err) {
      handleProfileError(err, 'Unable to get profile data');
    }
  },
  updateProfileUsername: async (userId: string, username: string) => {
    const client = createClient();

    const res = await client
      .from('profiles')
      .update({ username, updated_username: true })
      .eq('user_id', userId);

    if (res) return res;
  },
};
