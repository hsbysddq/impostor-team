import React from "react";
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './cardUser.css'

const CardUser = () => {
    return(
        // <div className="cardUser">
        //     <Card className="userProfil" style={{ width: '14rem', height: '5rem' }}>
        //         <Card.Body>
        //             <p>Arman</p>
        //         </Card.Body>
        //     </Card>
        // </div>

        <div className="px-4 py-3">
            <div className="card d-flex flex-row align-items-center p-3 text-center" style={{ borderRadius: '10px' }}>
                <FontAwesomeIcon icon={faUser} />
                <div className="ps-5">Name User</div>
            </div>
        </div>
    )
}

export default CardUser;