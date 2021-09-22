import React, { useContext, useReducer, useEffect, createContext } from 'react'
import { notification } from 'antd';

import { supabase } from 'Supabase/client'

export const initialState = {
  session: {},
  user: {},
  profile: {
    username: '',
    updated_username: false,
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
        session: action.session || {},
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
          updated_username: true
        }
      }
    }
    default: return state;
  }
}

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    dispatch({
      type: 'set-session',
      session: supabase.auth.session(),
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      dispatch({
        type: 'set-session',
        session,
      });
    })
  }, []);

  useEffect(() => {
    if (state.session && state.session.user) {
      dispatch({
        type: 'set-user',
        user: state.session.user
      });

      return updateProfile(state.session.user.id);
    }
  }, [state.session]);

  const updateProfile = async (id) => {
    if (id) {
      const { data: profile, error } = await supabase.from('profiles').select('username, updated_username').eq('id', id).single();

      if (error) {
        //TODO: handle error api side
        return notification.open({
          type: 'error',
          duration: 2,
          message: 'Unable to retrieve username.',
        });
      }

      if (profile) {
        dispatch({
          type: 'set-profile',
          profile,
        });
      }
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









