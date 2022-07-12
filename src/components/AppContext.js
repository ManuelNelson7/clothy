import React, { createContext, useEffect, useState } from 'react';
import { onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '..';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [outfit, setOutfit] = useState([]);

  useEffect(() => {
    console.log(user);
  }, [user]);

  const logout = () => signOut(auth);

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  }

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      localStorage.setItem('localUser', JSON.stringify(currentUser));
    });
    return () => unsuscribe();
  }, [])


  return (
    <AppContext.Provider
      value={{
        user,
        logout,
        loginWithGoogle,
        outfit,
        setOutfit
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider