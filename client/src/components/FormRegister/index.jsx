import React from 'react'
import { Form , Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './index.css'

function FormRegister(props) {
    return (
        <div className="bg row vh-100 align-items-center">
            <div className="container col-auto offset-1">
                <h1 className="text-center">{props.title}</h1>
                <Form>
                    {
                        props.error && (
                            <div className="alert alert-danger">
                                <p>{props.error}</p>
                            </div>
                        )
                    }
                    {
                        props.isRegister && (
                            <Form.Group className="mb-3" controlId="formBasicUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" value={props.username} placeholder="Username" onChange={props.onInputUsername} />
                            </Form.Group>
                        )
                    }

                    
                    {
                        props.isAuth && (
                            <div>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" value={props.email} placeholder="Email" onChange={props.onInputEmail} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" value={props.password} placeholder="Password" onChange={props.onInputPassword} />
                                </Form.Group>
                            </div>
                        )
                    }
                    {
                        props.isEdit && (
                            <div>
                                <Form.Group className="mb-3" controlId="formBasicFullName">
                                    <Form.Label>FullName</Form.Label>
                                    <Form.Control type="text" value={props.fullName} placeholder="FullName" onChange={props.onInputFullName} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicBio">
                                    <Form.Label>Bio</Form.Label>
                                    <Form.Control type="text" value={props.bio} placeholder="Bio" onChange={props.onInputBio} />
                                </Form.Group>
                            </div>
                        )
                    }
                    <Button variant="primary" onClick={props.handleSubmit} className="mb-3">
                        {props.textButton}
                    </Button>
                </Form>
                <div className="row align-items-baseline">
                    <h3 className="col-5">{props.textNotes}</h3>
                    <Link to={props.urlLink} className="col-7">{props.textLink}</Link>
                </div>
            </div>
        </div>
    )
}

export default FormRegister