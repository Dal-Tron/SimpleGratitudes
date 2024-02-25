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
  getItem: (name: string): any => {
    const item = sessionStorage.getItem(name);
    return item ? JSON.parse(item) : null;
  },
  setItem: (name: string, value: any): void => {
    sessionStorage.setItem(name, JSON.stringify(value));
  },
  removeItem: (name: string): void => {
    sessionStorage.removeItem(name);
  },
};

interface StoreState {
  user: User | null;
  profile: Profile | null;
  setUser: (user: User | null) => Promise<void>;
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      user: null,
      profile: null,
      setUser: async (user: User | null) => {
        const currentUser = get().user;

        if (user && (!currentUser || currentUser.id !== user.id)) {
          try {
            const profile = await ProfileService.getProfile(user.id);
            set({ user, profile });
          } catch (err) {
            set({ user: null, profile: null });
          }
        }
      },
    }),
    {
      name: 'user-profile-store',
      storage: sessionStorageWrapper,
    } as PersistOptions<StoreState>
  )
);
