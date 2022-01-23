import React, { Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './listUser.css'

const CardUser = (props) => {
    return(
        <div className="px-4 py-3">
            {
                props.users.length > 0 ? (
                    <Fragment>
                        {
                            props.users.map(user => {
                                return (
                                    <div key={user.id} onClick={() => props.handleDetailUser(user)} className="card d-flex flex-row align-items-center p-3 text-center" style={{ borderRadius: '10px' }}>
                                        <FontAwesomeIcon icon={faUser} />
                                        <div className="ps-5">{user.username}</div>
                                    </div>
                                )
                            })
                        }
                    </Fragment>
                ) : null
            }
        </div>
    )
}

export default CardUser;