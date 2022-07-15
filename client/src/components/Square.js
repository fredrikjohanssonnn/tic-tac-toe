import Cross from "./Cross"
import Circle from './Circle'

const Square = ({ value, handleSquare }) => {
  return (
    <button onClick={handleSquare} className="flex justify-center text-quaternary-100 items-center bg-primary-100 w-24 h-24 rounded-md drop-shadow-md">
      {value === 'X' ? <Cross /> : null}
      {value === 'O' ? <Circle /> : null}
    </button>
  )
}

export default Square