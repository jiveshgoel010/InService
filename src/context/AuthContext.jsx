
/* eslint-disable react/prop-types */
import  { createContext, useState, useContext } from 'react';
import { useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState('Client');

  useEffect(() => {
    // Retrieve the login state from local storage
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const storedUserType = localStorage.getItem('userType') || 'Client';
    setIsLoggedIn(storedIsLoggedIn);
    setUserType(storedUserType);
  }, []);

  const login = (type) => {
    setIsLoggedIn(true);
    setUserType(type);
    // Store the login state in local storage
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userType', type);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserType('Client');
    // Remove the login state from local storage
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userType');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout ,userType}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

