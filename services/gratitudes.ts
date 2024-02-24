import { supabase } from "Supabase/client";
import { notification } from "antd";

export const GratitudesService = {
  createGratitude: async ({ userId, gratitude, isPublic }) => {
    try {
      const res = await supabase.from("gratitudes").insert([
        {
          user_id: userId,
          gratitude,
          public: isPublic,
        },
      ]);
      if (res) {
        notification.open({
          type: "success",
          message: "Successfully created gratitude!",
        });

        return res;
      }
    } catch (err) {
      notification.open({
        type: "error",
        message: "Error creating gratitude",
      });
    }
  },
  deleteGratitudes: async (userId: string) => {
    try {
      const res = await supabase
        .from("gratitudes")
        .delete()
        .eq("user_id", userId);
      if (res) return res;
    } catch (err) {
      notification.open({
        type: "error",
        message: "Error deleting gratitudes",
      });
    }
  },
};
