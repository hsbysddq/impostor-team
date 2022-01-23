import React, { useState, useEffect } from "react";
import axios from 'axios'
import { Navbar, Form, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import Foto from '../../../components/FotoProfil/fotoprofil';
import CardUser from '../../../components/CardUser/cardUser';
import './profil.css';

const Profil = () => {
    const [users, setUsers] = useState('')

    useEffect(() => {
        axios.get(`http://localhost:${process.env.REACT_APP_PORT}/api/register`)
        .then((result) => {
            setUsers(result.data)
        })
    }, [])

    return(
        <div className="main row align-items-center bg vh-100">
            <div className="container col-auto offset-1">
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
                        <CardUser users={users} />
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Profil;