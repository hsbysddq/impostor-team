import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router";

const GameItem = (props) => {
    const navigate = useNavigate();
    return(
        <>
        <Card style={{ width: '18rem' }} className="mx-2 my-4">
            <Card.Img variant="top" src={props.img} onClick={() => navigate('/login')} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
            </Card.Body>
        </Card>
        </>
    )
}

export default GameItem;