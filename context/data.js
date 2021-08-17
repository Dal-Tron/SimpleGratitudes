import React, { useState, useContext } from 'react'

// Context
export const DataContext = React.createContext();

// Hooks
export function useData() {
  return useContext(DataContext);
}

// Provider
export function DataProvider({ children }) {
  const [dataRef, updateDataRef] = useState(0);

  const value = {
    dataRef,
    updateDataRef: () => updateDataRef(ref => ref + 1),
  }

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  )
}

