import React from "react";
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import GameItem from "./GameItem/GameItem";
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
                {/* <Card style={{ width: '18rem' }} className="mx-2 my-4">
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
                </Card> */}
                <GameItem img='./assets/img/game3.png' title='Game 1' />
                <GameItem img='./assets/img/game1.png' title='Game 2'/>
                <GameItem img='./assets/img/game2.png' title='Game 3'/>
                <GameItem img='./assets/img/game4.png' title='Game 4'/>
                <GameItem img='./assets/img/game4.png' title='Game 5'/>
                <GameItem img='./assets/img/game3.png' title='Game 6'/>
                <GameItem img='./assets/img/game4.png' title='Game 7'/>
                <GameItem img='./assets/img/game2.png' title='Game 8'/>
            </Row>
            
        </div>
        {/* <img src="./assets/img/wave2.png" alt="" className="img-wave" /> */}
        </section>
        </>
    )
}

export default ListGame;