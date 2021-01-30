import React from "react";
import ReactDOM from "react-dom";

import data from './data.json'
import "./App.css";
import Board from "react-trello";

function App() {
  return (
    <div className="App">
      <h1>react-trello demo</h1>
      <Board data={data} draggable />
    </div>
  );
}

export default App;