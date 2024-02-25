import { createContext, useContext, useState } from 'react';

// Context
export const DataRenderContext = createContext();

// Hooks
export function useDataRender() {
  const context = useContext(DataRenderContext);

  if (context === undefined) {
    throw new Error('useDataRender must be used within a DataRenderProvider');
  }

  return context;
}

// Provider
export function DataRenderProvider({ children }) {
  const [dataRef, updateDataRef] = useState(0);

  const value = {
    dataRef,
    updateDataRef: () => updateDataRef((ref) => ref + 1),
  };

  return (
    <DataRenderContext.Provider value={value}>
      {children}
    </DataRenderContext.Provider>
  );
}
