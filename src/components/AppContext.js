import React, { createContext, useEffect, useState } from 'react';
import { onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '..';
import { serverTimestamp, getFirestore, collection, addDoc } from 'firebase/firestore';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [outfit, setOutfit] = useState({});
  const [outfitChosen, setOutfitChosen] = useState("")

  const logout = () => signOut(auth);

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  }

  const createChoice = (look) => {
    const newChoice = {
      date: serverTimestamp(),
      outfit: look
    }

    const db = getFirestore();
    const choiceRef = collection(db, "choices");
    addDoc(choiceRef, newChoice);

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
        setOutfitChosen,
        createChoice
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider