import { notification } from 'antd';

import { supabase } from '@/supabase/client';
import { TGratitudeWithProfile } from '@/types/gratitude';
import { createClient } from '@/utils/supabase/component';

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
    const client = createClient();

    try {
      const { data, error } = await client.from('gratitudes').insert([
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
  getPrivateUserGratitudes: async (userId: string) => {
    const client = createClient();

    try {
      const { data, error } = await client
        .from('gratitudes')
        .select(
          `
            id,
            inserted_at,
            gratitude,
            user_id,
            public,
            approved,
            profiles(username)
        `,
        )
        .eq('user_id', userId);

      if (error) throw error;

      const formattedData = data.map((gratitude) => ({
        ...gratitude,
        profiles: gratitude.profiles[0],
      }));

      return formattedData;
    } catch (err) {
      handleServiceError(err);
    }
  },
  getPublicUserGratitudes: async (
    username: string,
  ): Promise<TGratitudeWithProfile[]> => {
    const client = createClient();

    try {
      // Fetch profile ID based on username
      const profileResponse = await client
        .from('profiles')
        .select('id')
        .eq('username', username)
        .single();

      if (profileResponse.error) throw profileResponse.error;
      if (!profileResponse.data) throw new Error('Profile not found');

      const profileId = profileResponse.data.id;

      // Fetch gratitudes based on profile ID
      const gratitudeResponse = await client
        .from('gratitudes')
        .select(
          `
          id,
          inserted_at,
          gratitude,
          user_id,
          public,
          approved
        `,
        )
        .eq('profile_id', profileId)
        .filter('public', 'eq', true);

      if (gratitudeResponse.error) throw gratitudeResponse.error;

      // Transform the response data
      const formattedData = gratitudeResponse.data.map((gratitude) => ({
        ...gratitude,
        profiles: { username }, // Assure this matches the TGratitudeWithProfile type
      }));

      return formattedData;
    } catch (err) {
      handleServiceError(err);
      return []; // Return an empty array in case of error
    }
  },
};
