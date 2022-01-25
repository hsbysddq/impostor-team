import React, { useState } from 'react'
import { Form , Button} from 'react-bootstrap'
// import { useNavigate } from "react-router-dom";
import axios from 'axios'

import './index.css'

const ForgotPassword = (props) => {
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [alert, setAlert] = useState('')

    // const history= useNavigate()

    const handleSubmit = () => {
        if(!email){
            setError('Email wajib diisi!')
        } else {
            console.log(email);
            setAlert('Silakan cek email Anda!')
            axios.put(`https://impostorteam-app.herokuapp.com/api/forgot-password`, { email: email })
            .then((res) => {
                setEmail('')
                setAlert('Silakan cek email Anda!')
                setTimeout(() => {
                    setEmail('')
                }, 3000);
            })
            .catch((err) => {
                console.log(err);
            })
        }
    }

    return (
        <div className="bg row vh-100 align-items-center">
            <div className="container card p-5 col-auto offset-1">
                <Form>
                    {
                        alert && (
                            <div className="alert alert-primary">
                                <p>{alert}</p>
                            </div>
                        )
                    }
                    {
                        error && (
                            <div className="alert alert-danger">
                                <p>{error}</p>
                            </div>
                        )
                    }
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Masukkan email Anda untuk mengirim link reset password.</Form.Label>
                        <Form.Control type="email" placeholder="Email" className="mt-3" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary" onClick={handleSubmit} className="mb-3">
                        Kirim
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default ForgotPassword
