import React from 'react';
import { Navigate, Outlet } from 'react-router';
import Footer from '../../../components/FooterComp/FooterComp';
import ListGameHomePage from './listGameHomePage/ListGameHomePage';
import NavHomePage from './Nav/Nav';

const HomePage = () => {
    const token  = sessionStorage.getItem("token");

    if (!token) {
        return <Navigate to='/' ></Navigate>
    }

  return (
      <>
      <div>
        <div>
            <NavHomePage />
        </div>

        <Outlet />

        <div>
            <ListGameHomePage />
        </div>
        <div>
            <Footer />
        </div>
      </div>

      </>
  );
};

export default HomePage;
