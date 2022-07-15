import { useState } from 'react'
import Square from './Square'
import { patterns } from '../patterns'

const Board = ({ board, setBoard }) => {

  const [player, setPlayer] = useState('X')

  const handleSquare = (square) => {
    setBoard(
      board.map((value, index) => {
        if (index === square){
          return player
        }
  
        return value
      })
    )

    if (player === 'X'){
      setPlayer('O')
    } else {
      setPlayer('X')
    }
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {/* Should be able to use index as a key. Since the index never change (no unmounting). */}
      {board.map((_, index) => (
        <Square value={board[index]} handleSquare={() => handleSquare(index)} key={index} />
      ))}
    </div>
  )
}

export default Board