import { supabase } from '@/supabase/client';
import { createClient } from '@/utils/supabase/component';
import { notification } from 'antd';

const handleAuthError = (err: Error) => {
  notification.open({
    type: 'error',
    message: err.message,
  });
};

export const AuthService = {
  deleteUser: async () => {
    try {
      const res = await supabase.rpc('delete_user');
      if (res) return res;
    } catch (error) {
      console.error('Error in deleteUser:', error);
    }
  },
  register: async (cred: { email: string; password: string }) => {
    const client = createClient();

    try {
      const { error } = await client.auth.signUp(cred);

      if (error) throw error;

      notification.open({
        message: 'Successfully registered!',
        type: 'success',
        duration: 2,
      });
    } catch (err) {
      if (err?.message?.indexOf('rate limit exceeded') >= 0) {
        return notification.open({
          message: 'Unable to register email.',
          type: 'error',
          duration: 2,
        });
      }

      if (err?.message?.indexOf('For') >= 0) {
        return notification.open({
          message: 'Please check for email confirmation.',
          type: 'error',
          duration: 2,
        });
      }

      notification.open({
        message: 'Unable to register at this time',
        type: 'error',
        duration: 2,
      });
    }
  },
  signIn: async (cred: { email: string; password: string }) => {
    const client = createClient();

    try {
      const { error, data } = await client.auth.signInWithPassword(cred);

      if (error) throw error;

      return data;
    } catch (err) {
      if (err?.message?.indexOf('login credentials') >= 0) {
        return notification.open({
          message: 'Invalid Sign In credentials.',
          type: 'error',
          duration: 2,
        });
      }

      if (err.message?.indexOf('For') >= 0) {
        return notification.open({
          message: 'Please check for email confirmation.',
          type: 'error',
          duration: 2,
        });
      }

      notification.open({
        message: 'Unable to sign in at this time',
        type: 'error',
        duration: 2,
      });
    }
  },
  signOut: async () => {
    const client = createClient();

    try {
      const { error } = await client.auth.signOut();

      if (error) throw error;
    } catch (err) {
      handleAuthError(err);
    }
  },
  getUser: async () => {
    const client = createClient();

    try {
      const res = await client.auth.getUser();
      if (res) return res;
    } catch (error) {
      console.error('Error in getUser:', error);
    }
  },
  updateUserPassword: async (password: string) => {
    const client = createClient();

    try {
      const { data, error } = await client.auth.updateUser({ password });

      if (error) throw error;

      return data;
    } catch (err) {
      handleAuthError(err);
    }
  },
  resetEmail: async (email: string) => {
    try {
      const { error, data } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${process.env.BASE_DOMAIN}/settings`,
      });

      if (error) throw error;

      if (data) return data;
    } catch (err) {
      handleAuthError(err);
    }
  },
};
