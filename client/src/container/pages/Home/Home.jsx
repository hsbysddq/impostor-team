import React from "react";
import AboutCompnent from "../../../components/AboutComp/AboutComp";
import Footer from "../../../components/FooterComp/FooterComp";
import ListGame from "../../../components/ListGameComp/ListGameComp";
import Main from '../../../components/MainComp/MainComp';
import './home.css';

const Home = () => {
    return(
        <div className="home">
            <>
                <Main />
                <ListGame />
                <AboutCompnent />
                <Footer />
            </>
        </div>
    )
}

export default Home;