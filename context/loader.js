import React, { useContext, useReducer, createContext } from 'react'

const loaderKey = {
  profile: 'profile'
};

export const initialState = {
  loaders: [],
}

export const LoaderStateContext = createContext(initialState);
const LoaderDispatchContext = createContext(() => { });

export const loaderReducer = (
  state,
  action,
) => {
  switch (action.type) {
    case 'add-loader': {
      return {
        ...state,
        loaders: [
          ...state.loaders,
          action.loader
        ]
      }
    }
    case 'remove-loader': {
      return {
        ...state,
        loaders: state.loaders.filter(loader => loader !== action.loader),
      }
    }
    case 'set-loaders': {
      return {
        ...state,
        loaders: action.loaders,
      }
    }
    default: return state;
  }
}

const LoaderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(loaderReducer, initialState);

  return (
    <LoaderStateContext.Provider value={state}>
      <LoaderDispatchContext.Provider value={dispatch}>
        {children}
      </LoaderDispatchContext.Provider>
    </LoaderStateContext.Provider>
  )
}

const useLoaderState = () => {
  const context = useContext(LoaderStateContext);

  if (context === undefined) {
    throw new Error('useLoaderState must be used within a LoaderProvider');
  }

  return context;
}

const useLoaderDispatch = () => {
  const context = useContext(LoaderDispatchContext);

  if (context === undefined) {
    throw new Error('useLoaderDispatch must be used within a LoaderProvider');
  }

  return context;
}

export { useLoaderState, useLoaderDispatch, loaderKey };

export default LoaderProvider;









