import { useState } from 'react'
import Board from './components/Board';

function App() {

  const [board, setBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ])
  const [winner, setWinner] = useState(null)
  
  return (
    <div className="bg-cyan-900 min-h-screen min-w-full">
      <div className='flex min-h-screen justify-center items-center'>
        <Board board={board} />
      </div>
    </div>
  );
}

export default App;
