import React, { useState, useEffect } from 'react'

import './index.css'

// assets
import logo1 from '../../../assets/images/logo1.png'
import logo2 from '../../../assets/images/logo2.png'
import batu from '../../../assets/images/batu.png'
import kertas from '../../../assets/images/kertas.png'
import gunting from '../../../assets/images/gunting.png'
import refresh from '../../../assets/images/refresh.png'

function PlayGame(props) {
    const [myChoice, setMyChoice] = useState('')
    const [comChoice, setComChoice] = useState('')
    const [result, setResult] = useState('')
    const [score, setScore] = useState(0)

    const newComPick = () => {
        const choices = ["batu", "kertas", "gunting"];
        // setComChoice(choices[Math.floor(Math.random() * 3)]);
        const randomNum = Math.floor(Math.random() * choices.length)
        setComChoice(choices[randomNum])
    }

    useEffect(() => {
        newComPick();
    }, [myChoice]);

    const getResult = (myChoice, comChoice) => {
        if (myChoice === "batu" && comChoice === "gunting") {
            setResult("PLAYER WIN");
            // console.log('win');
            // // setScore(score + 1);
        } else if (myChoice === "batu" && comChoice === "kertas") {
            setResult("COM WIN");
            // console.log('lose');
            // setScore(score - 1);
        } else if (myChoice === "gunting" && comChoice === "kertas") {
            setResult("PLAYER WIN");
            // console.log('win');
            // // setScore(score + 1);
        } else if (myChoice === "gunting" && comChoice === "batu") {
            setResult("COM WIN");
            // console.log('lose');
            // setScore(score - 1);
        } else if (myChoice === "kertas" && comChoice === "batu") {
            setResult("PLAYER WIN");
            // console.log('win');
            // // setScore(score + 1);
        } else if (myChoice === "kertas" && comChoice === "gunting") {
            setResult("COM WIN");
            // console.log('lose');
            // setScore(score - 1);
        } else {
            setResult("draw");
            // console.log('draw');
        }
    }

    useEffect(() => {
        getResult(myChoice, comChoice)
    }, [myChoice, comChoice])

    const handleChoice = (e) => {
        setMyChoice(e.target.alt)
        console.log('my choice: ', myChoice);
        console.log('com choice: ', comChoice);
        console.log('hasil:', result);
    }

    return (
        <div className="container mt-4">
            <div className="row align-items-center justify-content-center judul mb-4">
                <div className="col-auto pe-4">
                    <img src={logo1} alt="logo1" />
                </div>
                <div className="col-auto pe-4">
                    <img src={logo2} alt="logo2" />
                </div>
                <div className="col-auto">
                    <h1>ROCK PAPER SCISSORS</h1>
                </div>
            </div>
            
            <div className="area-bermain justify-content-center align-items-center">
                <div className="player">
                    <ul>
                        <li>
                            <h1>PLAYER 1</h1>
                        </li>
                        <li>
                            <img src={batu} alt="batu" onClick={handleChoice} />
                        </li>
                        <li>
                            <img src={kertas} alt="kertas" onClick={handleChoice} />
                        </li>
                        <li>
                            <img src={gunting} alt="gunting" onClick={handleChoice} />
                        </li>
                    </ul>
                </div>
                <div id="info">
                    <h1 className="mt-5">VS</h1>
                </div>
                <div className="com">
                    <ul>
                        <li>
                            <h1>COM</h1>
                        </li>
                        <li>
                            <img src={batu} alt="batu" />
                        </li>
                        <li>
                            <img src={kertas} alt="kertas" />
                        </li>
                        <li>
                            <img src={gunting} alt="gunting" />
                        </li>
                    </ul>
                </div>
            </div>
            <div className="text-center mb-5">
                <img src={refresh} alt="refresh" width="70" height="70" className="refresh" />
            </div>
        </div>
    )
}

export default PlayGame
