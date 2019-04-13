import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Rows from "./rows.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Rows/>
      </div>
    );
  }
}

export default App;
