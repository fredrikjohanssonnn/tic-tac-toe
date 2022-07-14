import React from 'react'
import Square from './Square'

const Board = ({ board }) => {
  console.log(board)
  return (
    <div className="grid grid-cols-3 gap-4">
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </div>
  )
}

export default Board