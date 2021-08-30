import React, { useContext, useState, useEffect } from 'react'
import { supabase } from 'Supabase/client'

const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);

  useEffect(() => {
    // Check active sessions and sets the user
    const session = supabase.auth.session();

    setUser(session?.user ?? null);
    setLoading(false);
    setSession(session);

    // Listen for changes on auth state (logged in, signed out, etc.)
    const { data: listener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null);
        setSession(session);
        setLoading(false);
      }
    );

    return () => {
      listener?.unsubscribe();
    }
  }, []);

  const username = user?.user_metadata?.username || '';

  const value = {
    accessToken: session?.access_token,
    deleteGratitudes: () => supabase.from('gratitudes').delete().eq('username', username),
    deleteUser: () => supabase.rpc('delete_user'),
    register: (data) => supabase.auth.signUp(data),
    signIn: (data) => supabase.auth.signIn(data),
    signOut: () => supabase.auth.signOut(),
    updateUser: (data) => supabase.auth.update({ data }),
    user,
    username,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}