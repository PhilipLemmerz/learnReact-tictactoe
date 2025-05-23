import { useState } from "react";

const initialGameBoard = [
    [[null], [null], [null]],
    [[null], [null], [null]],
    [[null], [null], [null]],
];


export default function GameBoard({onSelectSquare, turns,  activePlayerSymbol}) {
   
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSelectSquare(rowIndex, colIndex) {
    //     setGameBoard((prevGameBoard) => {
    //         console.log(prevGameBoard)
    //         const updatedGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedGameBoard;
    //     });

    //     onSelectSquare();
        
    // }

    let gameBoard = initialGameBoard;

    for(let turn of turns) {
        gameBoard[turn.square.row][turn.square.col] = turn.player
    }

    return (
        <ol id="game-board">
            {
                gameBoard.map((row, rowIndex) => (
                    <li key={rowIndex}>
                        <ol>
                            {row.map((playerSymbol, colIndex) => (
                                <li key={colIndex}>
                                    <button onClick={() => onSelectSquare(rowIndex, colIndex)}> {playerSymbol}</button>
                                </li>
                            ))}
                        </ol>
                    </li>
                ))}
        </ol>

    );
}