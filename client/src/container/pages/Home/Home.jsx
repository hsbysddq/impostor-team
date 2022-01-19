import React from "react";
import AboutCompnent from "../../../components/AboutComp/AboutComp";
import Footer from "../../../components/FooterComp/FooterComp";
import Hero from "../../../components/HeroComp/HeroComp";
import ListGame from "../../../components/ListGameComp/ListGameComp";
import Navmenu from '../../../components/NavbarComp/NavbarComp';

const Home = () => {
    return(
        <>
            <Navmenu 
            urlLogin='/login'
            textLogin='Login' />
            <Hero />
            <ListGame />
            <AboutCompnent />
            <Footer />
        </>
    )
}

export default Home;