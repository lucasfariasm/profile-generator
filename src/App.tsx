import React from 'react';

import { CreateProfile } from './pages/CreateProfile';
import { Footer } from './pages/Footer';
import { Home } from './pages/Home';

import './styles/global.css'



function App(){
  return (
    <>
      <Home/>
      <CreateProfile/>
      <Footer/>
    </>
  );
}

export default App;
