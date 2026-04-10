import { useState } from "react";


export default function Game() {

  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [isAsc, setIsAsc] = useState(true);
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  function sortMove() {
    setIsAsc(preIsAsc => !preIsAsc);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      const index = squares.findIndex((val, i) => val != history[move - 1][i]);
      if (move === currentMove) {
        description = `You are at move #${move} (${Math.floor(index / 3)}, ${index % 3})`;
      } else {
        description = `Go to move #${move} (${Math.floor(index / 3)}, ${index % 3})`;
      }
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        {move === currentMove ? description : <button onClick={() => { jumpTo(move) }}>{description}</button>}
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{isAsc ? moves : moves.reverse()}</ol>
      </div>
      <div><button type="button" onClick={sortMove}>Sort Move</button></div>
    </div>
  );
}

function Board({ xIsNext, squares, onPlay }) {


  const [winner, threeSquares] = calculateWinner(squares);
  console.log(squares, winner, threeSquares);

  let status;

  if (winner === 'Draw') {
    status = 'No winner!';
  } else if (winner != null) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  function handleClick(i) {
    if (squares[i] || winner) return;

    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }


  function Square({ winSquare, value, onSquareClick }) {
    return (
      <button
        className={`square ${winSquare ? 'highlight' : ''}`}
        onClick={onSquareClick}
      >{value}</button>
    )
  }

  const board = [];

  for (let i = 0; i < 3; i++) {
    const boardRow = [];
    for (let j = 0; j < 3; j++) {
      (threeSquares.length != 0 && threeSquares.includes(i * 3 + j)) ?
        boardRow.push(<Square key={i * 3 + j} winSquare={true} value={squares[i * 3 + j]} onSquareClick={() => { handleClick(i * 3 + j) }} />) :
        boardRow.push(<Square key={i * 3 + j} winSquare={false} value={squares[i * 3 + j]} onSquareClick={() => { handleClick(i * 3 + j) }} />)
    }
    board.push(<div className="board-row" key={i}>{boardRow}</div>);
  }

  return (
    <>
      <div className="status">{status}</div>
      {board}
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [squares[a], [a, b, c]];
    }
  }

  if (!squares.includes(null)) {
    return ['Draw', []]
  }

  return [null, []];
}
