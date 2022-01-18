import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl'
import './NavbarComp.css';

const Navmenu = () => {
    return(
        <>
        <Navbar className="position-fixed top-0 w-100 pt-5 mb-5" bg="transparent" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                <img
                    src="/assets/img/logo.png"
                    // width="30"
                    // height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto nav">
                    <Nav.Link style={{color:'#fff'}} href="#home">Home</Nav.Link>
                    <Nav.Link style={{color:'#fff'}} href="#link">About</Nav.Link>
                </Nav>
                </Navbar.Collapse>
                
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-4 rounded-pill"
                    aria-label="Search"
                    />
                    <button className="btn-login me-4">Login</button>
                    <button className="btn-register">Register</button>
                </Form>
                
            </Container>
        </Navbar>
        </>
    )
}

export default Navmenu;