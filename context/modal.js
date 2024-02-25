import React, { useState, useContext } from 'react';

// Context
export const SignModalContext = React.createContext();
export const AddGratitudeContext = React.createContext();

// Hooks
export function useSignModal() {
  return useContext(SignModalContext);
}

export function useAddGratitudeModal() {
  return useContext(AddGratitudeContext);
}

// Provider
export function SignModalProvider({ children }) {
  const [showSignModal, setShowSignModal] = useState(false);

  const value = {
    showSignModal,
    updateSignModal: (show) => setShowSignModal(show),
  };

  return (
    <SignModalContext.Provider value={value}>
      {children}
    </SignModalContext.Provider>
  );
}

export function AddGratitudeModalProvider({ children }) {
  const [showAddGratitudeModal, setShowAddGratitudeModal] = useState(false);
  const [editableGratitude, setEditableGratitude] = useState({});

  const value = {
    showAddGratitudeModal,
    updateAddGratitudeModal: (show) => setShowAddGratitudeModal(show),
    editableGratitude,
    setEditableGratitude: (gratitude) => setEditableGratitude(gratitude),
  };

  return (
    <AddGratitudeContext.Provider value={value}>
      {children}
    </AddGratitudeContext.Provider>
  );
}
