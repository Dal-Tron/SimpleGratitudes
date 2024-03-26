import { useEffect } from 'react';

import { AuthService } from '@/services/auth';
import { useStore } from '@/store/store';
import { createClient } from '@/utils/supabase/component';
import { useRouter } from 'next/router';

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const client = createClient();

  const setUser = useStore((state) => state.setUser);
  const setProfile = useStore((state) => state.setProfile);

  useEffect(() => {
    const init = async () => {
      const {
        data: { session },
      } = await AuthService.getUser();
      setUser(session?.user || null);

      const authListener = client.auth.onAuthStateChange(
        async (event, newSession) => {
          if (event === 'SIGNED_OUT') {
            // Navigate to a different page before resetting the store
            await router.push('/');

            useStore.getState().resetStore();
          } else {
            setUser(newSession?.user || null);
          }
        },
      );

      return () => {
        authListener.unsubscribe();
      };
    };

    init();
  }, [setUser, setProfile]);

  return <>{children}</>;
};
