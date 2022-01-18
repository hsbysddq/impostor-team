import React from "react";
import AboutCompnent from "../../Component/AboutComp/AboutComp";
import Footer from "../../Component/FooterComp/FooterComp";
import Hero from "../../Component/HeroComp/HeroComp";
import ListGame from "../../Component/ListGameComp/ListGameComp";
import Navmenu from '../../Component/NavbarComp/NavbarComp';

const Home = () => {
    return(
        <>
        <Navmenu />
        <Hero />
        <ListGame />
        <AboutCompnent />
        <Footer />
        </>
    )
}

export default Home;