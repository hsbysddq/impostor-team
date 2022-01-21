import React from "react";
import { Row, Col } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import './profil.css';

const Profil = () => {
    return(
        <div className="main">
            <div className="container">
                <Navbar.Brand href="/" className="navbar-brand">
                    <img
                        src="/assets/img/logo-black.png"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <div className="wrapper">
                    <Row>
                        <Col xs lg="3" className="kanan">
                            <img
                            src="/assets/img/home.png"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                            />
                            <Button className="logout" type="submit">Log out</Button>
                        </Col>
                        <Col xs lg="5" className="tengah">
                            <Card>
                                <Card.Body>
                                    <Card.Title>
                                        <img src="/assets/img/profil.png" alt="" />
                                    </Card.Title>
                                    <Card.Text>
                                    With supporting text below a a natural lead-in to additional content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                            <Col xs xs lg="4" className="kiri">
                                <Form className="d-flex">
                                    <FormControl
                                    type="search"
                                    placeholder="Search Username"
                                    className="me-4 rounded-pill"
                                    aria-label="Search"
                                    />
                                </Form>

                                
                            </Col>
                    </Row>
                </div>
            </div>
        </div>
        
    )
}

export default Profil;