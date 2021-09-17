import React, { useContext, useReducer, useEffect, createContext } from 'react'
import { notification } from 'antd';

import { supabase } from 'Supabase/client'

export const initialState = {
  session: {},
  user: {},
  profile: {
    username: '',
  },
}

export const AuthStateContext = createContext(initialState);
const AuthDispatchContext = createContext(() => { });

export const authReducer = (
  state,
  action,
) => {
  switch (action.type) {
    case 'set-session': {
      return {
        ...state,
        session: action.session,
      }
    }
    case 'set-user': {
      return {
        ...state,
        user: action.user,
      }
    }
    case 'remove-session': {
      return {
        ...state,
        session: {},
      }
    }
    case 'remove-user': {
      return {
        ...state,
        user: {},
      }
    }
    case 'set-profile': {
      return {
        ...state,
        profile: action.profile,
      }
    }
    case 'remove-profile': {
      return {
        ...state,
        profile: {},
      }
    }
    case 'set-username': {
      return {
        ...state,
        profile: {
          ...state.profile,
          username: action.username,
        }
      }
    }
    case 'set-updated-username': {
      return {
        ...state,
        profile: {
          ...state.profile,
          updated_username: action.updated_username
        }
      }
    }
    default: return state;
  }
}

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const session = supabase.auth.session();

  useEffect(() => {
    if (session && session.user && !state.session.access_token) {
      dispatch({
        type: 'set-session',
        session,
      });

      dispatch({
        type: 'set-user',
        user: session.user
      });

      if (!state.profile.username) updateProfile();
    }
  }, [session]);

  const updateProfile = async () => {
    const { data, error } = await supabase.from('profiles').select('*').eq('id', session.user.id);

    if (error) {
      //TODO: handle error api side
      return notification.open({
        type: 'error',
        duration: 2,
        message: 'Unable to retrieve username.',
      });
    }

    if (data.length > 0) {
      dispatch({
        type: 'set-profile',
        profile: data[0],
      });
    }
  }

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  )
}

const useAuthState = () => {
  const context = useContext(AuthStateContext);

  if (context === undefined) {
    throw new Error('useAuthState must be used within a AuthProvider');
  }

  return context;
}

const useAuthDispatch = () => {
  const context = useContext(AuthDispatchContext);

  if (context === undefined) {
    throw new Error('useAuthDispatch must be used within a AuthProvider');
  }

  return context;
}

export { useAuthState, useAuthDispatch };

export default AuthProvider;









