import { useState } from 'react'
import Board from './components/Board';

function App() {

  const [board, setBoard] = useState(Array(9).fill(''))
  const [winner, setWinner] = useState(null)
  
  return (
    <div className="bg-primary-200 min-h-screen min-w-full">
      <div className='flex min-h-screen justify-center items-center'>
        <Board setBoard={setBoard} board={board} />
      </div>
    </div>
  );
}

export default App;
