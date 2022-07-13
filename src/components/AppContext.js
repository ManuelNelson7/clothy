import React, { createContext, useEffect, useState } from 'react';
import { onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '..';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [outfit, setOutfit] = useState({});
  const [outfitChosen, setOutfitChosen] = useState([])

  useEffect(() => {
    console.log(outfitChosen);
  }, [outfitChosen]);

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
        setOutfit,
        outfitChosen,
        setOutfitChosen
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider