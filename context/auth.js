import React, { useContext, useState, useEffect } from 'react'

import { supabase } from 'Supabase/client'

export const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const session = supabase.auth.session();
  const [user, setUser] = useState();
  const [stateSession, setSession] = useState(undefined);
  const [stateUsername, setUsername] = useState('');

  useEffect(() => {
    if (session && session.user && !stateSession) {
      setSession(session);
      setUser(session.user);

      if (!stateUsername) {
        supabase
          .from('profiles')
          .select('username')
          .eq('id', session.user.id).then((res) => {
            if (res.data.length > 0) {
              const username = res.data[0].username;
              setUsername(username);
            }
          });
      }
    }
  }, [session]);

  const value = {
    updateUsername: (username) => setUsername(username),
    user,
    session: stateSession || {},
    username: stateUsername || '',
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