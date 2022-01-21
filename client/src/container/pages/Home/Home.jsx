import React from "react";
import AboutCompnent from "../../../components/AboutComp/AboutComp";
import Hero from "../../../components/HeroComp/HeroComp";
import ListGame from "../../../components/ListGameComp/ListGameComp";

const Home = () => {
    return(
        <>
            {/* <Navmenu /> */}
            <Hero />
            <ListGame />
            <AboutCompnent />
            {/* <Footer /> */}
        </>
    )
}

export default Home;