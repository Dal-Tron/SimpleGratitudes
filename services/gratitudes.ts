import { notification } from 'antd';

import { supabase } from 'Supabase/client';

const handleServiceError = (err: Error, message: string) => {
  if (err.message === 'JWT expired') {
    return notification.open({
      type: 'info',
      message: 'Your secure session has expired. Please sign in again.',
      duration: 0,
    });
  }

  notification.open({
    type: 'error',
    message,
  });
  console.log(err);
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
      handleServiceError(err, 'Error fetching gratitudes');
      return [];
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
      handleServiceError(err, 'Error fetching gratitudes');
      return [];
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
      handleServiceError(err, 'Error fetching gratitudes');
      return [];
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

      notification.open({
        type: 'success',
        message: 'Successfully created gratitude!',
      });

      return data;
    } catch (err) {
      handleServiceError(err, 'Error creating gratitude');
      return [];
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
      handleServiceError(err, 'Error deleting gratitude');
      return [];
    }
  },
};
