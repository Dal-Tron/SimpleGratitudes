import React, { useState, useContext } from 'react'

// Context
export const DataRenderContext = React.createContext();

// Hooks
export function useDataRender() {
  return useContext(DataRenderContext);
}

// Provider
export function DataRenderProvider({ children }) {
  const [dataRef, updateDataRef] = useState(0);

  const value = {
    dataRef,
    updateDataRef: () => updateDataRef(ref => ref + 1),
  }

  return (
    <DataRenderContext.Provider value={value}>
      {children}
    </DataRenderContext.Provider>
  )
}

