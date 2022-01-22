import React, { createContext, useState } from "react";
import styled from "styled-components";
import "./App.css";
import Header from "../../../components/Game/Header";
import Wrapper from "../../../components/Game/Wrapper";
import Table from "../../../components/Game/Table";
import Rules from "../../../components/Game/Rules";

export const ScoreContext = createContext();

const AppStyled = styled.main`
  background-image: radial-gradient(circle at top, #1f3757 20%, #131537 100%);
  color: white;
  font-family: "Barlow Semi Condensed", sans-serif;
  .app-content {
    padding: 2em;
    min-height: 100vh;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: space-between;
  }
`;

function Game() {
  const [score, setScore] = useState(0);
  return (
    <ScoreContext.Provider
      value={{
        score,
        setScore,
      }}
    >
      <AppStyled>
        <Wrapper>
          <div className="app-content">
            <Header />
            <Table />
            <Rules />
          </div>
        </Wrapper>
      </AppStyled>
    </ScoreContext.Provider>
  );
}

export default Game;
