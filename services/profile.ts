import { supabase } from "Supabase/client";

import { validUsername } from "Helpers/validation";
import { notification } from "antd";

export const ProfileService = {
  deleteProfile: async (id: string) => {
    const res = await supabase.from("profiles").delete().eq("id", id);
    if (res) return res;
  },
  getProfile: async (userId: string) => {
    try {
      const res = await supabase.from("profiles").select("*").eq("id", userId);
      return res.data?.[0] || null;
    } catch (err) {
      notification.open({
        type: "error",
        message: "Unable to get profile data",
      });
    }
  },
  updateProfileUsername: async (id: string, username: string) => {
    if (!validUsername(username)) return;

    const res = await supabase
      .from("profiles")
      .update({ username, updated_username: true })
      .eq("id", id);
    if (res) return res;
  },
};
