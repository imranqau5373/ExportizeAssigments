import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './calculator.css';
import './calFunction.js';

import {TextBox} from './textbox.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
          </p>
          <TextBox></TextBox>
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </header>
      </div>
    );
  }
}

export default App;