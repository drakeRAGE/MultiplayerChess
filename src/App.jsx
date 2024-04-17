import { useState, useEffect, useRef } from 'react'
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
  const [fen, setFen] = useState('start')

  let game = useRef(null);

  // const chess = new Chess()

  useEffect(()=>{
    game.current = new Chess()
  }, [])
  // chess.move("e4")
  // console.log(chess)
  console.log(game)

  const onDrop = ({sourceSquare, targetSquare}) => {
    let move = game.current.move({
      from : sourceSquare,
      to : targetSquare,
    })

    console.log(move)
}
  
  return (
    <div style={style}>
      <ChessBoard position={fen} 
      onDrop={ onDrop }
      />
      

    </div>
  )
}

export default App
