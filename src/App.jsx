import React, { useState, useEffect, useRef } from 'react'
import './App.css'
import ChessBoard from 'chessboardjsx'
import {Chess} from 'chess.js'

const style = {
  marginTop: '2rem',
  display: 'flex',
  justifyContent : 'space-around',
  alignItem: 'center',
}

function App() {
  const [fen, setFen] = useState("start")

  let game = useRef(null);

  // const chess = new Chess()

  useEffect(()=>{
    game.current = new Chess()
  }, [])
  // chess.move("e4")
  // console.log(chess)
  console.log(game)

  const Dropping = ({sourceSquare, targetSquare}) => {
    let move = game.current.move({
      from : sourceSquare,
      to : targetSquare,
    })

    // console.log(move)
    if (move === null) return;

    setFen(game.current.fen())
  }

  const resetGame = () => {
    game.current.clear();
    game.current.reset();
    setFen("start")
  }
  
  return (
    <div style={style}>
      {
        game.current && game.current.isGameOver() ?
        <div style={{textAlign: 'center'}}>
          <h1>Game Over</h1>
          <button onClick={resetGame}>Play Again</button>
        </div>
        : <span></span>
      }
      <ChessBoard position={fen} 
      onDrop={ Dropping }
      />
      

    </div>
  )
}

export default App
