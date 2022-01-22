import React from "react";
import Card from 'react-bootstrap/Card';
import './cardUser.css'

const CardUser = () => {
    return(

        <div className="cardUser">
            <Card className="userProfil" style={{ width: '14rem', height: '5rem' }}>
                <Card.Body>
                    <p>Arman</p>
                </Card.Body>
            </Card>
        </div>

    )
}

export default CardUser;