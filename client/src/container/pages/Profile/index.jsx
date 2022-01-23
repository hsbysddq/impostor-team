import React, { useState, useEffect } from "react";
import axios from 'axios'
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import Foto from '../../../components/DetailProfile';
import CardUser from '../../../components/ListUser';
import './profile.css';

const Profil = () => {
    const [users, setUsers] = useState('')
    const [username, setUsername] = useState('')
    const [name, setName] = useState('-')
    const [bio, setBio] = useState('-')

    useEffect(() => {
        axios.get(`http://localhost:${process.env.REACT_APP_PORT}/api/users`)
        .then((result) => {
            setUsers(result.data.user)
            console.log('result:', result.data);
        })
    }, [])
    
    // const token = JSON.parse(localStorage.getItem('token'))
    const token = localStorage.getItem('token')
    console.log('token:', token);

    const handleDetailUser = (user) => {
        setUsername(user.username)
        setName(user.name)
        setBio(user.bio)
        console.log('user:', user);
    }

    const navigate = useNavigate();

    return(
        <div className="main row align-items-center bg vh-100">
            <div className="container col-auto offset-1">
                <Navbar.Brand href="/" className="navbar-brand d-flex">
                    <FontAwesomeIcon icon={faUser} className="mt-3" />
                    <h3 className="mt-3 mx-3">My Account</h3>
                </Navbar.Brand>
                <div className="wrapper d-flex flex-row">
                    <div className="me-4">
                        <div className="card p-4">
                            <Foto 
                                username={username}
                                name={name}
                                bio={bio}
                            />
                        </div>
                        <Button onClick={()=> navigate(`/homepage/edit-profil/${username}`)}>Update Data</Button>
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
                        <CardUser 
                            users={users}
                            handleDetailUser={handleDetailUser}
                        />
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Profil;