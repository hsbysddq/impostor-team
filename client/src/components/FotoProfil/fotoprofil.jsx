import React from "react";
import Card from 'react-bootstrap/Card';
import './fotoprofil.css'

const Foto = () => {
    return(

        <div className="foto-profil">
            <p>Halo Hasby</p>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <img src="/assets/img/kelinci.jpg" alt="" />
                    </Card.Body>
                </Card>
            <div className="biodata">
                <p className="data-diri">Data diri</p>
                <p className="username">Username : inidatauser <a href="">Ubah</a></p>
                <p className="email">Email : inidataemail <a href="">Ubah</a></p>
            </div>
        </div>

    )
}

export default Foto;