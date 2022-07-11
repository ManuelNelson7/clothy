import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {

  apiKey: "AIzaSyDdQMdCxoxPxmo-KM8TGU_PBMsONbgvvHw",
  authDomain: "clothy-1d6cd.firebaseapp.com",
  projectId: "clothy-1d6cd",
  storageBucket: "clothy-1d6cd.appspot.com",
  messagingSenderId: "1055176015068",
  appId: "1:1055176015068:web:958f45152dbfc122f94819",
  measurementId: "G-W175MG6MYW"

};

initializeApp(firebaseConfig);
export const auth = getAuth()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
