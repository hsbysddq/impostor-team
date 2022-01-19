import React, { useState } from 'react'
import axios from 'axios'

import FormRegister from '../../../components/FormRegister'

function Register(props) {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        const data = {
            username,
            email,
            password
        }
        console.log('data: ', data);
        axios.post(`http://localhost:7000/api/register`, data)
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
                isRegister={true}
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