import React, { useState, useContext } from 'react';

// Context
export const UserMenuContext = React.createContext({
  showUserMenu: false,
  setShowUserMenu: (_show: boolean) => {},
});

// Hooks
export function useUserMenu() {
  return useContext(UserMenuContext);
}

// Provider
export function UserMenuProvider({ children }) {
  const [showUserMenu, setShowUserMenu] = useState(false);

  const value = {
    showUserMenu,
    setShowUserMenu: (show: boolean) => setShowUserMenu(show),
  };

  return (
    <UserMenuContext.Provider value={value}>
      {children}
    </UserMenuContext.Provider>
  );
}
