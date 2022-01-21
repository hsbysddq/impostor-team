import React from "react";
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import './ListGameComp.css';
import Modal from 'react-bootstrap/Modal';
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        
        <Modal.Body>
          <h4>Coming Soon</h4>
          <p>
          Sorry, this game is not yet available
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

const ListGame = () => {
    const navigate = useNavigate();
    const [modalShow, setModalShow] = React.useState(false);

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
                    <Card.Img variant="top" src="./assets/img/game1.png" onClick={() => navigate('/login')} />
                </Card>
                <Card style={{ width: '18rem' }} className="mx-2 my-4">
                    <Card.Img variant="top" src="./assets/img/game2.png" onClick={() => setModalShow(true)}  />
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </Card>
                <Card style={{ width: '18rem' }} className="mx-2 my-4">
                    <Card.Img variant="top" src="./assets/img/game3.png" onClick={() => setModalShow(true)} />
                    
                </Card>
                <Card style={{ width: '18rem' }} className="mx-2 my-4">
                    <Card.Img variant="top" src="./assets/img/game4.png" onClick={() => setModalShow(true)} />
                    
                </Card>
                <Card style={{ width: '18rem' }} className="mx-2 my-4">
                    <Card.Img variant="top" src="./assets/img/game4.png" onClick={() => setModalShow(true)} />
                    
                </Card>
                <Card style={{ width: '18rem' }} className="mx-2 my-4">
                    <Card.Img variant="top" src="./assets/img/game3.png" onClick={() => setModalShow(true)} />
                    
                </Card>
                <Card style={{ width: '18rem' }} className="mx-2 my-4">
                    <Card.Img variant="top" src="./assets/img/game2.png" onClick={() => setModalShow(true)} />
                    
                </Card>
                <Card style={{ width: '18rem' }} className="mx-2 my-4">
                    <Card.Img variant="top" src="./assets/img/game3.png"onClick={() => setModalShow(true)} />
                    
                </Card>
                {/* <GameItem img='./assets/img/game3.png' title='Game 1' />
                <GameItem img='./assets/img/game1.png' title='Game 2'/>
                <GameItem img='./assets/img/game2.png' title='Game 3'/>
                <GameItem img='./assets/img/game4.png' title='Game 4'/>
                <GameItem img='./assets/img/game4.png' title='Game 5'/>
                <GameItem img='./assets/img/game3.png' title='Game 6'/>
                <GameItem img='./assets/img/game4.png' title='Game 7'/>
                <GameItem img='./assets/img/game2.png' title='Game 8'/> */}
            </Row>

            
        </div>
        {/* <img src="./assets/img/wave2.png" alt="" className="img-wave" /> */}
        </section>
        </>
    )
}

export default ListGame;