import React from "react";
import './MainComp.css';
import {useNavigate} from 'react-router-dom';
import Hero from "../HeroComp/HeroComp";
import Navmenu from "../NavbarComp/NavbarComp";

const Main = (props) => {

    const navigate = useNavigate();
    
    return(
        <div className="landing">
            <div className="main-landing">
                <>
                    <Navmenu />
                    <Hero />
                </>
            </div>
            <div className="svg-putih">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#FFFFFF" fillOpacity="1" d="M0,160L48,160C96,160,192,160,288,181.3C384,203,480,245,576,266.7C672,288,768,288,864,261.3C960,235,1056,181,1152,149.3C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>       
            </div>
        </div>
        
        
        
    )
}

export default Main;