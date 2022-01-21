import axios from 'axios'
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import FormRegister from '../../../components/FormRegister'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)
    const [error, setError] = useState('')

    const onInputEmail = (e) => {
        setEmail(e.target.value)
        setError('')
    }

    const onInputPassword = (e) => {
        setPassword(e.target.value)
        setError('')
    }

    const handleSubmit = () => {
        const data = {
            email,
            password
        }
        
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        axios.post(`http://localhost:${process.env.REACT_APP_PORT}/api/login`, data, config)
        .then((res) => {
            console.log('res login: ', res);
            if(res.data.status === "success"){
                localStorage.setItem('token', res.data.token)
                setRedirect(true)
            }
        })
        .catch((err) => {
            setError(err.response.data.message)
            console.log('error: ', err.response.data.message);
        })
    }

    return (
        <div>
            {
                redirect && (
                    <Navigate to="/" />
                )
            }
            <FormRegister 
                title="Login"
                textButton="Login"
                isRegister={false}
                error={error}
                onInputEmail={onInputEmail}
                onInputPassword={onInputPassword}
                handleSubmit={handleSubmit}
                textNotes="Lupa password?"
                textLink="Klik di sini"
                urlLink="/forgot-password"
            />
        </div>
    )
}

export default Login
