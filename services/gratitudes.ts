import { notification } from 'antd';

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
  createGratitude: async ({ userId, gratitude, isPublic }) => {
    const client = createClient();

    try {
      const { data, error } = await client
        .from('gratitudes')
        .insert([
          {
            user_id: userId,
            gratitude,
            public: isPublic,
          },
        ])
        .select('*');

      if (error) throw error;

      notification.open({
        type: 'success',
        message: 'Successfully shared gratitude!',
        duration: 0,
      });

      return data[0];
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
        //@ts-ignore we need to ignore here because it thinks profiles is any[]
        profiles: { username: gratitude?.profiles?.username }, // let's just disable ts for this line
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
      const { error, data } = await client
        .from('profiles')
        .select('id')
        .eq('username', username)
        .single();

      if (error || !data) throw new Error('Profile not found!');

      const profileId = data.id;

      // Fetch gratitudes based on profile ID
      const { error: gratitudesError, data: gratitudesData } = await client
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

      if (gratitudesError) throw new Error('Unable to access gratitudes!');

      const formattedData = gratitudesData.map((gratitude) => ({
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
