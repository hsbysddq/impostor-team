import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import { ScoreContext } from "../../container/pages/Game/Game";

const ScoreStyled = styled.div`
  background: white;
  text-align: center;
  padding: 10px;
  border-radius: 8px;
  width: 80px;
  small {
    color: #2a45c2;
    text-transform: uppercase;
    font-size: 10px;
    font-weight: bold;
    letter-spacing: 1px;
  }
  p {
    color: #565468;
    font-size: 40px;
    margin: 0;
    font-weight: 700;
    position: relative;
  }
  @media screen and (min-width: 768px) {
    padding: 10px 20px;
    small {
      font-size: 16px;
    }
    p {
      font-size: 60px;
    }
  }
`;

function Score() {
  const { score } = useContext(ScoreContext);
  const myProfile = JSON.parse(localStorage.getItem('data'))
  const data  = myProfile.data.data

  useEffect(() => {
    const newData = {
      score: score,
      id: data.id
    };
    console.log('newData score:', newData);
    axios
      .put(`http://localhost:${process.env.REACT_APP_PORT}/api/users/score/${newData.id}`, newData)
      .then((res) => {
        localStorage.setItem('data', JSON.stringify(res))
        console.log('res score:', res);
      })
      .catch((err) => {
        console.log("error: ", err);
      });
  }, [data.id, score])
  return (
    <ScoreStyled>
      <small>Score</small>
      <p>{score}</p>
    </ScoreStyled>
  );
}

export default Score;
