import { useEffect } from 'react';

import { AuthService } from '@/services/auth';
import { useStore } from '@/store/store';
import { supabase } from 'Supabase/client';

export const AuthProvider = ({ children }) => {
  const setUser = useStore((state) => state.setUser);

  useEffect(() => {
    const init = async () => {
      const {
        data: { session },
      } = await AuthService.getUser();
      setUser(session?.user || null);

      const authListener = supabase.auth.onAuthStateChange(
        (_event, session) => {
          setUser(session?.user || null);
        },
      );

      return () => {
        authListener.unsubscribe();
      };
    };

    init();
  }, [setUser]);

  return <>{children}</>;
};
