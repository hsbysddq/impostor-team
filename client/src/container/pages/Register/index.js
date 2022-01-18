import React, { useState } from 'react'
import axios from 'axios'

import FormRegister from '../../../components/FormRegister'

// const bcrypt = require('bcrypt')

function Register() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // const passwordHash = bcrypt.hash(password, 12)

    const handleSubmit = () => {
        const data = {
            username,
            email,
            password
        }
        console.log('data: ', data);
        axios.post(`http://localhost:3001/register`, data)
        .then((res) => {
            console.log('success');
        }, (err) => {
            console.log('error: ', err);
        })
    }

    return (
        <div>
            <FormRegister 
                title="Register"
                textButton="Register"
                onInputUsername={(e) => setUsername(e.target.value)}
                onInputEmail={(e) => setEmail(e.target.value)}
                onInputPassword={(e) => setPassword(e.target.value)}
                handleSubmit={handleSubmit}
                textNotes="Sudah Punya Akun?"
                textLink="Login Sekarang"
                urlLink="/login"
            />
        </div>
    )
}

export default Register;