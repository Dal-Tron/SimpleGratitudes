import { supabase } from "Supabase/client";

export const AuthService = {
  deleteUser: async () => {
    try {
      const res = await supabase.rpc("delete_user");
      if (res) return res;
    } catch (error) {
      // Handle or log the error
      console.error("Error in deleteUser:", error);
      throw error; // or handle it as needed
    }
  },
  register: async (data) => {
    try {
      const res = await supabase.auth.signUp(data);
      if (res) return res;
    } catch (error) {
      console.error("Error in register:", error);
      throw error;
    }
  },
  signIn: async (data) => {
    try {
      const res = await supabase.auth.signInWithPassword(data);
      if (res) return res;
    } catch (error) {
      console.error("Error in signIn:", error);
      throw error;
    }
  },
  signOut: async () => {
    try {
      const res = await supabase.auth.signOut();
      if (res) return res;
    } catch (error) {
      console.error("Error in signOut:", error);
      throw error;
    }
  },
  getUser: async () => {
    try {
      const res = await supabase.auth.getUser();
      if (res) return res;
    } catch (error) {
      console.error("Error in getUser:", error);
      throw error;
    }
  },
  updateUser: async (data) => {
    try {
      const res = await supabase.auth.updateUser(data);
      if (res) return res;
    } catch (error) {
      console.error("Error in updateUser:", error);
      throw error;
    }
  },
  resetEmail: async (email) => {
    try {
      const res = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${process.env.BASE_DOMAIN}/settings`,
      });
      if (res) return res;
    } catch (error) {
      console.error("Error in resetEmail:", error);
      throw error;
    }
  },
};
