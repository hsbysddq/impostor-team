import axios from 'axios'
import React, { useState } from 'react'
import FormRegister from '../../../components/FormRegister'

function NewLogin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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
            // if(res.data.message === "successfully login user"){
            //     dispatch({
            //         type: "LOGIN",
            //         payload: res.data
            //     })
            // }
            // else {
            //     setData({
            //         ...data,
            //         isSubmitting: false,
            //         errorMessage: res.data.Message
            //     })
            // }

            // throw res;
        })
        .catch((err) => {
            console.log('error: ', err);
        })
    }

    return (
        <div>
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

export default NewLogin
