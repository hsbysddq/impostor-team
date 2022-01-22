import React from "react";
import Card from 'react-bootstrap/Card';
import './fotoprofil.css'

const Foto = () => {
    return(

        <div className="foto-profil">
            <Card className="mx-5 mb-4">
                <Card.Body  style={{ width: '200px' }}>
                    <img src="/assets/img/kelinci.jpg" alt="" className="mx-3 w-75" />
                </Card.Body>
            </Card>
            <div className="data">
                <p className="data-diri">Data Profile</p>
                <p className="username">First Name : inidatauser</p>
                <p className="email">Last Name : inidataemail</p>
                <p className="email">Gender : inidataemail</p>
            </div>
        </div>

    )
}

export default Foto;