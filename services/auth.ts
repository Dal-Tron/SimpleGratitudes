import { supabase } from '@/supabase/client';
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
    try {
      const { data, error } = await supabase.auth.signUp(cred);

      if (error) throw error;

      if (data) return data;
    } catch (err) {
      handleAuthError(err);
    }
  },
  signIn: async (cred: { email: string; password: string }) => {
    try {
      const { error, data } = await supabase.auth.signInWithPassword(cred);

      if (error) throw error;

      if (data) return data;
    } catch (err) {
      handleAuthError(err);
    }
  },
  signOut: async () => {
    try {
      const res = await supabase.auth.signOut();
      if (res) return res;
    } catch (error) {
      console.error('Error in signOut:', error);
    }
  },
  getUser: async () => {
    try {
      const res = await supabase.auth.getUser();
      if (res) return res;
    } catch (error) {
      console.error('Error in getUser:', error);
    }
  },
  updateUserPassword: async (password: string) => {
    try {
      const { data, error } = await supabase.auth.updateUser({ password });

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
