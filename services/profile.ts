import { notification } from 'antd';

import { createClient } from '@/utils/supabase/component';

export const ProfileService = {
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
      notification.open({
        type: 'error',
        message: 'Unable to get profile data',
      });
    }
  },
  updateProfileUsername: async (userId: string, username: string) => {
    const client = createClient();

    try {
      const { error, data } = await client
        .from('profiles')
        .update({ username, updated_username: true })
        .eq('user_id', userId)
        .select('*');

      if (error) throw error;

      notification.open({
        type: 'success',
        message: 'Successfully updated username!',
        duration: 0,
      });

      return data[0];
    } catch (err) {
      if (err.message?.indexOf('duplicate') >= 0) {
        return notification.open({
          type: 'error',
          message: 'Username is unavailable',
          duration: 0,
        });
      }

      notification.open({
        type: 'error',
        message: 'Unable to update username',
        duration: 0,
      });
    }
  },
};
