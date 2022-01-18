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
                    <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Username" onChange={props.onInputUsername} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" onChange={props.onInputEmail} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={props.onInputPassword} />
                    </Form.Group>
                    <Button variant="primary" onClick={props.handleSubmit} className="mb-3">
                        {props.textButton}
                    </Button>
                </Form>
                <div className="row align-items-baseline">
                    <h3 className="col-6">{props.textNotes}</h3>
                    <Link to={props.urlLink} className="col-6">{props.textLink}</Link>
                </div>
            </div>
        </div>
    )
}

export default FormRegister