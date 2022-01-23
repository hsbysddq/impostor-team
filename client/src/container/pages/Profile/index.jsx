import React, { useState, useEffect } from "react";
import axios from 'axios'
import { Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { useNavigate} from 'react-router';
import Foto from '../../../components/DetailProfile';
import CardUser from '../../../components/ListUser';
import './profile.css';

const Profil = () => {
    const [users, setUsers] = useState('')
    const [username, setUsername] = useState('-')
    const [name, setName] = useState('-')
    const [bio, setBio] = useState('-')
    const [myProfile, setMyProfile] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:${process.env.REACT_APP_PORT}/api/users`)
        .then((result) => {
            setUsers(result.data.user)
            console.log('result:', result.data);
        })
    }, [])

    const handleDetailUser = (user) => {
        const myProfile = JSON.parse(localStorage.getItem('data'))
        const username = user.username
        console.log(myProfile.data.user.username);
        console.log(username);
        if(myProfile.data.user.username === username){
            setMyProfile(true)
        } else {
            setMyProfile(false)
        }
        setUsername(user.username)
        setName(user.name)
        setBio(user.bio)
    }

    const handleProfile = () => {
        const myProfile = JSON.parse(localStorage.getItem('data'))
        if(myProfile) {
            console.log('myProfile:', myProfile);
            setUsername(myProfile.data.user.username)
            setName(myProfile.data.user.name)
            setBio(myProfile.data.user.bio)
            setMyProfile(true)
        }
    }

    const navigate = useNavigate();

    const handleUpdateProfile = () => {
        navigate('/edit-profile')
    }

    return(
        <div className="main row align-items-center bg vh-100">
            <div className="container col-auto offset-1">
                <Button onClick={handleProfile} className="navbar-brand d-flex w-auto">
                    <FontAwesomeIcon icon={faUser} className="mt-2" />
                    <h3 className="mt-2 mx-3">My Profile</h3>
                </Button>
                <div className="wrapper d-flex flex-row">
                    <div className="me-4">
                        <div className="card p-4">
                            <Foto 
                                username={username}
                                name={name}
                                bio={bio}
                                myProfile={myProfile}
                                onClick={handleUpdateProfile}
                            />
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