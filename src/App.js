import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  
  const [turn, setTurn] = useState(true)

  const [currentPlayer, setCurrentPlayer] = useState("x") 


  const handleGamePlay = (clickedSquare) => {
    let updateSquare = [...squares]

    updateSquare[clickedSquare]= currentPlayer
    setSquares(updateSquare)
    // setTurn(false)
    console.log(clickedSquare)
  }
  const switchPlayer = () => {
    
  }
  
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="board">
      {
        squares.map((value, index) => {
          return <Square 
            value={value}
            index={index}
            key={index}
            handleGamePlay={handleGamePlay}
            />
        }
        )
      }
      </div>
    </>
  )
}

export default App