import React, { useState } from "react";
import Square from "./components/Square";
import "./App.css";

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const [turn, setTurn] = useState(true);

  const [playerOne, setPlayerOne] = useState(true);

  const handleGamePlay = (clickedSquare) => {
    let updateSquare = [...squares];

    // updateSquare[clickedSquare]= currentPlayer
    if (playerOne && clickedSquare === null) {
      clickedSquare = "X";
    } else {
      !playerOne;
    }
    setSquares(updateSquare);
    // setTurn(false)
    console.log(clickedSquare);
  };
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="board">
        {squares.map((value, index) => {
          return (
            <Square
              value={value}
              index={index}
              key={index}
              handleGamePlay={handleGamePlay}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
