# Multiplayer Tic-Tac-Toe

Welcome to the **Multiplayer Tic-Tac-Toe** game, where you can challenge your friends and prove who's the ultimate Tic-Tac-Toe champion. This project is built using [PeerJS](https://peerjs.com/) for peer-to-peer communication, ensuring a seamless and real-time multiplayer experience.

## Background

I stumbled upon the PeerJS package while exploring the internet and decided to experiment with it. At that time, I wasn't familiar with React, so I dove into the [React documentation](https://reactjs.org/docs/getting-started.html) and found the Tic-Tac-Toe tutorial. After implementing the UI from the tutorial, I wanted to take it to the next level by adding a multiplayer feature. That's when I decided to use PeerJS to enable real-time gameplay between two players.

## Features

- **Real-time Multiplayer**: Challenge your friends in real-time and show them who's boss.
- **Peer-to-Peer Communication**: Uses PeerJS to establish a direct connection between players.
- **Responsive Design**: Works flawlessly on both desktop and mobile devices.
- **Simple UI**: Clean, intuitive, and ready for action.

## Technologies Used

- **React**: For building the user interface.
- **PeerJS**: For peer-to-peer communication.
- **CSS**: For styling the application.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

   ```sh
   git clone git@github.com:vinaykumar-l/multiplayer-tictactoe-peerjs.git
   cd multiplayer-tictactoe-peerjs
   ```

2. Install the dependencies:

   ```
   npm install
   ```

3. Start the development server:

   ```
   npm run dev
   ```

4. Open your browser and navigate to the URL provided by Vite (usually `http://localhost:5174/`).

## How to Play

1. Open the application in your browser.
2. Share your peer ID with your friend.
3. Enter your friend's peer ID in the input field and click "Connect".
4. Start playing Tic-Tac-Toe and show them who's the real Tic-Tac-Toe master!

## Project Structure

```
multiplayer-tic-tac-toe/
├── node_modules/
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── ...
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## Future features list

- [x] Optimization
- [x] single player implementation
- [x] restricting for same player to player after his turn
- [ ] real-time chat box interface for communication between the players
- [ ] authentication implementation and profile management

### @thanks for visiting
