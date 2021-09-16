import React, { useContext, useState, useEffect } from 'react'

import { supabase } from 'Supabase/client'

export const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const session = supabase.auth.session();
  const [user, setUser] = useState();
  const [stateSession, setSession] = useState(undefined);
  const [stateUsernameData, setUsernameData] = useState({});

  useEffect(() => {
    if (session && session.user && !stateSession) {
      setSession(session);
      setUser(session.user);

      if (!stateUsernameData.username) {
        supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id).then((res) => {
            if (res.data.length > 0) {
              const usernameData = res.data[0];
              setUsernameData(usernameData);
            }
          });
      }
    }
  }, [session]);

  const value = {
    updateSession: (session) => setSession(session),
    updateUsername: (username) => setUsernameData(prevState => ({
      ...prevState,
      username,
    })),
    updateUsernameUpdated: () => setUsernameData(prevState => ({
      ...prevState,
      updated_username: true,
    })),
    user,
    session: stateSession || {},
    username: stateUsernameData.username || '',
    updated_username: stateUsernameData.updated_username || false,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}