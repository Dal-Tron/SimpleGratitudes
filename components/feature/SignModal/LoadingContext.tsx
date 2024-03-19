import { createContext, useContext, useState } from 'react';

const LoadingContext = createContext({
  isLoading: false,
  setLoading: (_loading: boolean) => {},
});

export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
