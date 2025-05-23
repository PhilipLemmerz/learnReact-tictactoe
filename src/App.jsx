import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log";
import { useState } from "react"

function App() {

  const [activePlayer, setActivePlayer] = useState('X');
  const [turns, setTurns] = useState([]);

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((activePlayer) => activePlayer === 'X' ? 'O' : 'X');

    setTurns((turns) => {

      const updatedTurns = [
        {
          square: {
            row: rowIndex,
            col: colIndex
          },
          player: activePlayer
        }, ...turns
      ]

      return updatedTurns
    })
  }

  return (
    <>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" isActive={activePlayer === "X"} symbol="X" />
          <Player initialName="Player 2" is isActive={activePlayer === "O"} symbol="O" />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={turns} activePlayerSymbol={activePlayer} />
        <Log turns={turns} />
      </div>

    </>

  )
}

export default App
