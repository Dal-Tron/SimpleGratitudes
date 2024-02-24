import { ProfileService } from "Services/profile";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const sessionStorageWrapper = {
  getItem: (name) => {
    const item = sessionStorage.getItem(name);
    return item ? JSON.parse(item) : null;
  },
  setItem: (name, value) => {
    sessionStorage.setItem(name, JSON.stringify(value));
  },
  removeItem: (name) => {
    sessionStorage.removeItem(name);
  },
};

export const useStore = create(
  persist(
    (set, get) => ({
      user: null,
      profile: null,
      setUser: async (newUser) => {
        const currentUser = get().user;

        if (newUser && (!currentUser || currentUser.id !== newUser.id)) {
          try {
            const profile = await ProfileService.getProfile(newUser.id);
            set({ user: newUser, profile });
          } catch (err) {
            set({ user: newUser, profile: null });
          }
        } else {
          set({ user: newUser });
        }
      },
    }),
    {
      name: "user-profile-store",
      storage: sessionStorageWrapper,
    },
  ),
);
