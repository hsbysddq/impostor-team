import React from "react";
import './HeroComp.css';
import {useNavigate} from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();
    return(
        <>
            <section className="hero">
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-md-6 hero-tagline my-auto">
                            <h1>let's show your talent for game </h1>
                            <button className="btn-lg-primary" onClick={() => navigate('/login')}>Get Started</button>
                        </div>
                    </div>
                    <img src="/assets/img/acsent1.png" alt="" className="acsent1-img h-100 position-absolute top-0 start-0" />
                    <img src="/assets/img/acsent2.png" alt="" className="acsent1-img h-100 position-absolute end-0 bottom-0" />
                </div>
            </section>
            {/* <img src="./assets/img/wave.png" alt="" className="img-wave2 w-100 position-absolute bottom-0" /> */}
            
        </>
    )
}

export default Hero;