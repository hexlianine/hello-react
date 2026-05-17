import { useState, useEffect } from 'react';
import { Player } from './data.js';

export default function Game() {
  const [currentPlayer, setCurrentPlayer] = useState();

  const alice = new Player('Alice');
  const bob = new Player('Bob');

  useEffect(() => {
    setCurrentPlayer(alice);
  }, []);

  return (
    <div className="game">
      <div className="game-info">
        <div>{currentPlayer?.name}</div>
        <button onClick={() => setCurrentPlayer(alice)}>Alice</button>
        <button onClick={() => setCurrentPlayer(bob)}>Bob</button>
      </div>
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

function Board() {
  return (
    <div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}

function Square() {
  return <button className="square">X</button>;
}
