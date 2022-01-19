import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Footer = () => {
    return(
        <>
        <section className="footer bg-white">
            <div className="container">
                <div className="row pt-5 pb-5">
                    <div className="col-md-4 my-auto pe-5">
                        <img src="./assets/img/logo-black.png" alt="" />
                        <p className="pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iste harum totam at hic maiores eveniet pariatur officia dolor et.</p>
                    </div>
                    <div className="col-md-4">
                        <h4>CONTRIBUTOR</h4>
                        <ListGroup className="bg-transparent pe-5" variant="flush">
                            <ListGroup.Item action href="#" className="">Bogiant</ListGroup.Item>
                            <ListGroup.Item action href="#">Fikri</ListGroup.Item>
                            <ListGroup.Item action href="#">Hasby</ListGroup.Item>
                            <ListGroup.Item action href="#">Oja</ListGroup.Item>
                            <ListGroup.Item action href="#">Ulfa</ListGroup.Item>
                        </ListGroup>
                    </div>
                    <div className="col-md-4">
                        <h4>Newsletter</h4>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control size="lg" type="email" placeholder="name@example.com" />
                                <Form.Label>Enter email address</Form.Label>
                            </Form.Group>
                            <Button className="px-5 py-3" type="submit">SUBSCRIBE</Button>
                            <p>We never spam you!</p>
                        </Form>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col">
                        <p>&copy;2022 Impostor Team. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Footer;