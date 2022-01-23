import React from "react";
import Card from "react-bootstrap/Card";
import "./detailProfile.css";

const Foto = (props) => {
  return (
    <div className="foto-profil">
      <Card className="mx-5 mb-4">
        <Card.Body style={{ width: "200px" }}>
          <img src="/assets/img/kelinci.jpg" alt="" className="mx-3 w-75" />
        </Card.Body>
      </Card>
      <div className="data">
        <p className="data-diri">Data Profile</p>
        <p className="username">Username : {props.username}</p>
        <p className="username">Full Name : {props.name}</p>
        <p className="email">Bio : {props.bio}</p>
      </div>
    </div>
  );
};

export default Foto;