import React from "react";
import './AboutComp.css';

const AboutCompnent = () => {
    return(
        <>
        {/* <img src="./assets/img/wave2.png" alt="" className="img-wave" /> */}
        <section className="about">
            <div className="svg-kedua">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#FFFFFF" fillOpacity="1" d="M0,256L60,229.3C120,203,240,149,360,138.7C480,128,600,160,720,181.3C840,203,960,213,1080,213.3C1200,213,1320,203,1380,197.3L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
                </svg>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="text-center pb-5">What's on the impostor website</h2>
                        <div>
                            <h4>ABOUT US</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam officia nobis, sapiente quaerat optio atque similique laborum iusto impedit ducimus minus aliquam consectetur dolor eligendi sunt quia natus architecto dicta.</p>
                        </div>
                        <br />
                        <div>
                            <h4>FREE ONLINE GAMES</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam officia nobis, sapiente quaerat optio atque similique laborum iusto impedit ducimus minus aliquam consectetur dolor eligendi sunt quia natus architecto dicta.</p>
                        </div>
                        <br />
                        <div>
                            <h4>HOW TO PLAY</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam officia nobis, sapiente quaerat optio atque similique laborum iusto impedit ducimus minus aliquam consectetur dolor eligendi sunt quia natus architecto dicta.</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default AboutCompnent;