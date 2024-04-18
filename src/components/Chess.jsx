import { useState, useEffect, useRef } from 'react'
import '../App.css'
import ChessBoard from 'chessboardjsx'
import {Chess} from 'chess.js'

const style = {
  marginTop: '2rem',
  display: 'flex',
  justifyContent : 'space-around',
  alignItem: 'center',
}

function Chess_game() {
  const [fen, setFen] = useState("start")

  let game = useRef(null);

  useEffect(()=>{
    game.current = new Chess()
  }, [])

  // console.log(game)

  const onDrop = ({sourceSquare, targetSquare}) => {

    //Warning : agar try catch ko hatay toh invalid move back nahi hoga aur error aa jayega
    try {
      let move = game.current.move({
      from : sourceSquare,
      to : targetSquare,
      })

    if (move === null) return;
    } catch (error) {
      // let move = 'undefined'
      console.log('wrong move')
    }

    // console.log(move)

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
      onDrop={ onDrop }
      />
    </div>
  )
}

export default Chess_game
