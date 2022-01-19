import React, { useState } from 'react'
import { Form , Button } from 'react-bootstrap'

import '../../../components/FormRegister/index.css'

function ResetPassword() {
    const [password, setPassword] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('')

    const handleNewPassword = (e) => {
        const value = e.target.value
        setPassword(value)
        if(!value){
            setErrorPassword('password tidak boleh kosong')
        } else {
            setErrorPassword('')
        }
    }

    const handleConfirmPassword = (e) => {
        const value = e.target.value
        setConfirmPassword(value)
        if(!value){
            setErrorConfirmPassword('password tidak boleh kosong')
        } else if (password !== value) {
            setErrorConfirmPassword('password tidak sama')
        } else {
            setErrorConfirmPassword('')
        }
    }

    const handleSubmit = () => {
        console.log('klik');
    }

    return (
        <div className="bg row vh-100 align-items-center">
            <div className="container col-auto offset-1">
                <h1 className="text-center">Reset Password</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>New Password</Form.Label>
                        <Form.Control type="password" placeholder="Masukkan Password" value={password} onChange={handleNewPassword} />
                    </Form.Group>
                    {
                        errorPassword && (
                            <p className="text-danger">{errorPassword}</p>
                        )
                    }
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={confirmPassword} onChange={handleConfirmPassword} />
                    </Form.Group>
                    {
                        errorConfirmPassword && (
                            <p className="text-danger">{errorConfirmPassword}</p>
                        )
                    }
                    <Button variant="primary" onClick={handleSubmit} className="mb-3">
                        Simpan
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default ResetPassword
