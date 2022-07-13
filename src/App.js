import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import AppContextProvider from './components/AppContext';
import Home from './pages/Home';
import Login from './pages/Login';
import AddOutfit from './pages/AddOutfit';
import ChooseOutfit from './pages/ChooseOutfit';

const App = () => {

  return (
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-outfit" element={<AddOutfit />} />
          <Route path="/choose-outfit" element={<ChooseOutfit />} />
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
