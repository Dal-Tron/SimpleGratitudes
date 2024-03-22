import { notification } from 'antd';

import { supabase } from '@/supabase/client';

const handleServiceError = (err: Error) => {
  if (err.message === 'JWT expired') {
    return notification.open({
      type: 'info',
      message: 'Your secure session has expired. Please sign in again.',
      duration: 0,
    });
  }

  notification.open({
    type: 'error',
    message: err.message,
  });
};

export const GratitudesService = {
  readPrivateData: async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('gratitudes')
        .select('*')
        .eq('user_id', userId);

      if (error) throw error;

      return data;
    } catch (err) {
      handleServiceError(err);
    }
  },
  readPublicUserData: async (username: string) => {
    try {
      const { data, error } = await supabase
        .from('gratitudes')
        .select('*')
        .eq('username', username)
        .filter('public', 'eq', true);

      if (error) throw error;

      return data;
    } catch (err) {
      handleServiceError(err);
    }
  },
  readFeaturedGratitudes: async () => {
    try {
      const { data, error } = await supabase
        .from('gratitudes')
        .select('*')
        .eq('approved', true)
        .eq('public', true);

      if (error) throw error;

      return data;
    } catch (err) {
      handleServiceError(err);
    }
  },
  createGratitude: async ({ userId, gratitude, isPublic }) => {
    try {
      const { data, error } = await supabase.from('gratitudes').insert([
        {
          user_id: userId,
          gratitude,
          public: isPublic,
        },
      ]);

      if (error) throw error;

      return data;
    } catch (err) {
      handleServiceError(err);
    }
  },
  deleteGratitudes: async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('gratitudes')
        .delete()
        .eq('user_id', userId);

      if (error) throw error;

      return data;
    } catch (err) {
      handleServiceError(err);
    }
  },
};
