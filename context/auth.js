import { useEffect } from 'react';

import { AuthService } from '@/services/auth';
import { useStore } from '@/store/store';
import { createClient } from '@/utils/supabase/component';

export const AuthProvider = ({ children }) => {
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
        (event, newSession) => {
          if (event === 'SIGNED_OUT') {
            setUser(null);
            setProfile(null);
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
