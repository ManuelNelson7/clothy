import React, { useEffect, useContext } from 'react'
import { AppContext } from '../components/AppContext'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar';
import OutfitHome from '../components/OutfitHome';
import Ayer from '../components/Ayer';

const Home = () => {
  const { user } = useContext(AppContext);
  const navigate = useNavigate();

  const localUser = JSON.parse(localStorage.getItem('localUser'));

  useEffect(() => {
    if (!localUser) {
      navigate('/login');
      console.log('no user')
    }
  }, []);

  return (
    <>
      {user && (
        <div className='bg-gray-900 w-screen h-screen'>
          <OutfitHome />
          <Ayer />
          <Navbar />
        </div>
      )}

    </>
  )
}

export default Home