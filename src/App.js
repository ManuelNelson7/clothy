import React, { useEffect } from 'react';

import { Routes, Route, useNavigate, BrowserRouter } from 'react-router-dom';
import AppContextProvider from './components/AppContext';
import { fetchUser } from './utils/fetchUser';
import Home from './pages/Home';
import Login from './pages/Login';

const App = () => {

  return (
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />

        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
