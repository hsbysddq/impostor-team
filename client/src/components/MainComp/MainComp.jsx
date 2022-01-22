import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button'
import './MainComp.css';
import { Link, NavLink } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import Hero from "../HeroComp/HeroComp";

const Main = (props) => {

    const navigate = useNavigate();
    
    return(
        <div className="main-landing">
            <>
                <Hero />
            </>
        </div>
        
        
    )
}

export default Main;