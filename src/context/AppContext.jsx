import React, { createContext, useState, useContext, useCallback } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [credits, setCredits] = useState(0);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateCredits = useCallback((amount) => {
    setCredits(prev => Math.max(0, prev + amount));
  }, []);

  const setUserData = useCallback((userData) => {
    setUser(userData);
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const setAppError = useCallback((errorMessage) => {
    setError(errorMessage);
  }, []);

  const value = {
    credits,
    setCredits,
    updateCredits,
    user,
    setUserData,
    loading,
    setLoading,
    error,
    setAppError,
    clearError,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
}
