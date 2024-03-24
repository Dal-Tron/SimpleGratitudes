import { create } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

import { ProfileService } from '@/services/profile';
import { TGratitude } from '@/types/gratitude';
import { TProfile } from '@/types/profile';

interface User {
  id: string;
  // Add other user properties as needed
}

interface StoreState {
  user: User | null;
  profile: TProfile | null;
  gratitudes: TGratitude[];
  setUser: (user: User | null) => void;
  setProfile: (profile: TProfile | null) => void;
  setGratitudes: (gratitudes: TGratitude[]) => void;
  fetchAndSetProfile: () => void;
  addGratitude: (gratitude: TGratitude) => void;
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

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      user: null,
      profile: null,
      gratitudes: [],

      setUser: (user: User | null) => {
        set({ user });
        if (user && !get().profile) {
          get().fetchAndSetProfile();
        }
      },
      setProfile: (profile: TProfile | null) => {
        set({ profile });
      },
      setGratitudes: (gratitudes: TGratitude[]) => {
        set({ gratitudes });
      },
      fetchAndSetProfile: async () => {
        const user = get().user;
        if (user) {
          try {
            const profile = await ProfileService.getProfile(user.id);
            set({ profile });
          } catch (error) {
            console.error('Failed to fetch profile', error);
            set({ profile: null });
          }
        }
      },
      addGratitude: (gratitude: TGratitude) => {
        const currentGratitudes = get().gratitudes;
        set({ gratitudes: [...currentGratitudes, gratitude] });
      },
    }),
    {
      name: 'user-profile-store',
      storage: sessionStorageWrapper,
      skipHydration: true,
    } as PersistOptions<StoreState>,
  ),
);
