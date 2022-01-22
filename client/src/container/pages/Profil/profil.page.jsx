// import React from "react";
// import { Row, Col, Navbar, Card, Form, FormControl } from 'react-bootstrap';
// import Foto from '../../../components/FotoProfil/fotoprofil';
// import CardUser from '../../../components/CardUser/cardUser';
// import './profil.css';

// const Profil = () => {
//     return(
//         <div className="main">
//             <div className="container">
//                 <Navbar.Brand href="/" className="navbar-brand">
//                     <img
//                         src="/assets/img/logo-black.png"
//                         className="d-inline-block align-top"
//                         alt="React Bootstrap logo"
//                     />
//                 </Navbar.Brand>
//                 <div className="wrapper">
//                     <Row>
//                         <Col xs lg="3" className="kanan">
//                             <img
//                             src="/assets/img/home.png"
//                             className="d-inline-block align-top"
//                             alt="React Bootstrap logo"
//                             />
//                             {/* <Button className="logout" type="submit">Log Out</Button> */}
//                         </Col>
//                         <Col xs lg="5" className="tengah">
//                             <Card>
//                                 <Card.Body>
//                                     <Card.Title>
//                                         <>
//                                             <Foto />
//                                         </>
//                                     </Card.Title>
//                                 </Card.Body>
//                             </Card>
//                         </Col>
//                             <Col xs lg="4" className="kiri">
//                                 <Form className="d-flex">
//                                     <FormControl
//                                     type="search"
//                                     placeholder="Search Username"
//                                     className="me-4 rounded-pill"
//                                     aria-label="Search"
//                                     />
//                                 </Form>
//                                 <>
//                                     <CardUser />
//                                 </>
//                             </Col>
//                     </Row>
//                 </div>
//             </div>
//         </div>
        
//     )
// }

// export default Profil;

import React from "react";
import { Row, Col, Navbar, Card, Form, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import Foto from '../../../components/FotoProfil/fotoprofil';
import CardUser from '../../../components/CardUser/cardUser';
import './profil.css';

const Profil = () => {
    return(
        <div className="main bg vh-100">
            <div className="container">
                <Navbar.Brand href="/" className="navbar-brand d-flex">
                    {/* <img
                        src="/assets/img/logo-black.png"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    /> */}
                    <FontAwesomeIcon icon={faUser} className="mt-3" />
                    <h3 className="mt-3 mx-3">My Account</h3>
                </Navbar.Brand>
                <div className="wrapper d-flex flex-row">
                    <div className="me-4">
                        <div className="card p-4">
                            <Foto />
                        </div>
                    </div>
                    <div>
                        <Form className="d-flex" style={{ width: '320px' }}>
                            <FormControl
                                type="search"
                                placeholder="Search Username"
                                className="rounded-pill"
                                aria-label="Search"
                            />
                        </Form>
                        <CardUser />
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Profil;