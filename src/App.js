import { useState, useEffect } from 'react';

export default function Game({ data }) {
  const [currentPlayer, setCurrentPlayer] = useState();

  const p1 = new Player(data.players[0].name, data.players[0].score, 'O');
  const p2 = new Player(data.players[1].name, data.players[1].score, 'X');
  const cp = p1;

  const boards = [
    ['X', null, null, null, null, null, null, null, null],
    ['X', null, null, null, null, null, null, null, 'O'],
    ['X', null, null, null, null, null, 'X', null, 'O'],
  ];

  const moves = boards.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button>{description}</button>
      </li>
    );
  });

  useEffect(() => {
    setCurrentPlayer(p1);
  }, []);

  return (
    <div className="game">
      <div className="game-info">
        <h2>Tic-Tac-Toe</h2>
        <div>Current Player: {currentPlayer?.name}</div>
        <div>
          {p1.name} 🆚 {p2.name}
        </div>
      </div>
      <div className="game-board">
        <Board squares={boards[1]} />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function Board({ squares }) {
  return (
    <div>
      <div className="board-row">
        <Square value={squares[0]} />
        <Square value={squares[1]} />
        <Square value={squares[2]} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} />
        <Square value={squares[4]} />
        <Square value={squares[5]} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} />
        <Square value={squares[7]} />
        <Square value={squares[8]} />
      </div>
    </div>
  );
}

function Square({ value }) {
  return (
    <button
      className="square"
      onClick={(e) => {
        console.log(e);
        e.target.textContent = 'A';
      }}
    >
      {value}
    </button>
  );
}

class Player {
  constructor(name, score = 0, mark) {
    this.name = name;
    this.score = score;
    this.mark = mark;
  }

  win() {
    this.score++;
  }

  lose() {
    this.score--;
  }
}
