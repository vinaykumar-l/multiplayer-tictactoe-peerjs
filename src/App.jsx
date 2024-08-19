import React, { useSyncExternalStore } from "react";
import { useState, useEffect } from 'react'
import Peer from "peerjs";
import './index.css'

export default function App() {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [status, setStatus] = useState('');
  const [peerid ,setPeerid] = useState('');
  const [inputPeerId, setInputPeerId] = useState('');
  const [peer, setPeer] = useState(null);
  const [message,setMessage] = useState('')

  useEffect(() => {
    const newPeer = new Peer();
    newPeer.on('open',(id)=>{
      setPeerid(id);
    })

    setPeer(newPeer);


    newPeer.on('connection',(connection)=>{
      connection.on('data',(data)=>{
        setMessage(data)
      })
    })

  }, [])


  function connectToPeer(peerId){


    const conn = peer.connect(peerId);
    conn.on('open',() => {
      console.log("connected\n");
      conn.send(`hi is message from the peer id ${peer.id}`)
    })
    
  }

  function handleClick(i) {
    const newSquares = squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    newSquares[i] = isXNext ? 'X' : 'O';
    setSquares(newSquares);
    setIsXNext(!isXNext);

    const winner = calculateWinner(newSquares);
    if (winner) {
      setStatus(`Winner: ${winner}`);
    } else {
      setStatus(`Next player: ${isXNext ? 'O' : 'X'}`);
    }
  }

  return (
    <>
      <h1 className="heading">Welcome to Multiplayer Tic-Tac-Toe</h1>
      <hr className='line' />

      <div className='space' />

      <div className="input-wrapper">
        <div className="status">{status}</div>
      </div>

      <div className='space' />
      <div className="input-wrapper">
        <div className="input-container">
          <input
            type="text"
            id="peer-id-input"
            className="input-field"
            placeholder="Enter peer id"
            value={inputPeerId}
            onChange={(e) => setInputPeerId(e.target.value)}
          />
          <button
            className="input-button"
            onClick={() => connectToPeer(inputPeerId)}
          >
            Connect
          </button>
        </div>
      </div>

      <div className="container">
        <Square value={squares[0]} onSquareClicked={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClicked={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClicked={() => handleClick(2)} />
      </div>
      <div className="container">
        <Square value={squares[3]} onSquareClicked={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClicked={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClicked={() => handleClick(5)} />
      </div>
      <div className="container">
        <Square value={squares[6]} onSquareClicked={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClicked={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClicked={() => handleClick(8)} />
      </div>

      <div className='space' />
      <div className="input-wrapper">
        <div className="status">{`Your peer id : ${peerid}`}</div>
      </div>

      <div className='space' />
      <div className="input-wrapper">
        <div className="status">{`${message}`}</div>
      </div>
    </>
  )
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
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}



function Square({ value, onSquareClicked }) {
  return (
    <div className="box" onClick={onSquareClicked}>{value}</div>
  )
}