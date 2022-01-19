import axios from 'axios'
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import FormRegister from '../../../components/FormRegister'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)

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

        axios.post(`http://localhost:7000/api/login`, data, config)
        .then((res) => {
            console.log('res login: ', res);
            if(res.data.status === "success"){
                localStorage.setItem('token', res.data.token)
                setRedirect(true)
            }
        })
        .catch((err) => {
            console.log('error: ', err);
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
                onInputEmail={(e) => setEmail(e.target.value)}
                onInputPassword={(e) => setPassword(e.target.value)}
                handleSubmit={handleSubmit}
                textNotes="Lupa password?"
                textLink="Klik di sini"
                urlLink="/forgot-password"
            />
        </div>
    )
}

export default Login
