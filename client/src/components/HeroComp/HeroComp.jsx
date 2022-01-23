import React from "react";
import './HeroComp.css';
import {useNavigate} from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();
    return(
        <>
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-md-6 hero-tagline">
                            <h1>let's show your talent for game </h1>
                            <button className="btn-lg-primary" onClick={() => navigate('/login')}>Get Started</button>
                        </div>
                    </div>
                </div>
            
        </>
    )
}

export default Hero;