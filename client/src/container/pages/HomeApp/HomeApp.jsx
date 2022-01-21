import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Footer from '../../../components/FooterComp/FooterComp';
import Navmenu from '../../../components/NavbarComp/NavbarComp';
import About from '../About/About';
import Home from '../Home/Home';

const HomeApp = () => {
  return (
      <>
      <Navmenu />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
      </>
  );
};

export default HomeApp;
