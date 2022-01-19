import React from "react";
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import './ListGameComp.css';

const ListGame = () => {
    return(
        <>
        <section className="list-game">
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2 className="text-center title-game">List Game</h2>  
                </div>
            </div>
            <Row className="justify-content-md-center">
                <Card style={{ width: '18rem' }} className="mx-2 my-4">
                    <Card.Img variant="top" src="./assets/img/game1.png" />
                </Card>
                <Card style={{ width: '18rem' }} className="mx-2 my-4">
                    <Card.Img variant="top" src="./assets/img/game2.png" />
                </Card>
                <Card style={{ width: '18rem' }} className="mx-2 my-4">
                    <Card.Img variant="top" src="./assets/img/game3.png" />
                </Card>
                <Card style={{ width: '18rem' }} className="mx-2 my-4">
                    <Card.Img variant="top" src="./assets/img/game4.png" />
                </Card>
                <Card style={{ width: '18rem' }} className="mx-2 my-4">
                    <Card.Img variant="top" src="./assets/img/game4.png" />
                </Card>
                <Card style={{ width: '18rem' }} className="mx-2 my-4">
                    <Card.Img variant="top" src="./assets/img/game3.png" />
                </Card>
                <Card style={{ width: '18rem' }} className="mx-2 my-4">
                    <Card.Img variant="top" src="./assets/img/game2.png" />
                </Card>
                <Card style={{ width: '18rem' }} className="mx-2 my-4">
                    <Card.Img variant="top" src="./assets/img/game3.png" />
                </Card>
            </Row>
            
        </div>
        {/* <img src="./assets/img/wave2.png" alt="" className="img-wave" /> */}
        </section>
        </>
    )
}

export default ListGame;