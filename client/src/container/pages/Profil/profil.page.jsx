import React from "react";
import { Row, Col } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Foto from '../../../components/FotoProfil/fotoprofil';
import './profil.css';

const Profil = () => {
    return(
        <div className="main">
            <div className="container pt-5 ">
                <Navbar.Brand href="/" className="navbar-brand">
                    <img
                        src="/assets/img/logo-black.png"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <div className="wrapper pt-5">
                    <Row>
                        <Col xs lg="3" className="kanan">
                            <img
                            src="/assets/img/home.png"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                            />
                            <Button className="logout" type="submit">Log Out</Button>
                        </Col>
                        <Col xs lg="5" className="tengah">
                            <Card>
                                <Card.Body>
                                    <Card.Title>
                                        <>
                                            <Foto />
                                        </>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                            <Col xs xs lg="4" className="kiri">
                                <Form className="d-flex">
                                    <FormControl
                                    type="search"
                                    placeholder="Search Username"
                                    className="ms-5 rounded-pill"
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