import { create } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

import { ProfileService } from 'Services/profile';

interface User {
  id: string;
  // Add other user properties as needed
}

interface Profile {
  username: string;
  username_updated: boolean;
}

const sessionStorageWrapper = {
  getItem: (name: string): unknown => {
    const item = sessionStorage.getItem(name);
    return item ? JSON.parse(item) : null;
  },
  setItem: (name: string, value: unknown): void => {
    sessionStorage.setItem(name, JSON.stringify(value));
  },
  removeItem: (name: string): void => {
    sessionStorage.removeItem(name);
  },
};

interface StoreState {
  user: User | null;
  profile: Profile | null;
  setUser: (user: User | null) => void;
  setProfile: (profile: Profile | null) => void;
  fetchAndSetProfile: () => void;
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      user: null,
      profile: null,
      setUser: (user: User | null) => {
        set({ user });
        if (user && !get().profile) {
          get().fetchAndSetProfile();
        }
      },
      setProfile: (profile: Profile | null) => {
        set({ profile });
      },
      fetchAndSetProfile: async () => {
        const user = get().user;
        if (user) {
          try {
            const profile = await ProfileService.getProfile(user.id);
            set({ profile });
          } catch (error) {
            console.error('Failed to fetch profile', error);
            // Optionally set profile to null or handle the error as needed
            set({ profile: null });
          }
        }
      },
    }),
    {
      name: 'user-profile-store',
      storage: sessionStorageWrapper,
    } as PersistOptions<StoreState>,
  ),
);
