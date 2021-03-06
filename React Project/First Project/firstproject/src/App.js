import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Home,Dashboard} from './home';
import AnotherHome from './AnotherHome';

const list = [ { title: 'React', url: 'https://facebook.github.io/react/', author: 'Jordan Walke', num_comments: 3, points: 4, objectID: 0, }, { title: 'Redux', url: 'https://github.com/reactjs/redux', author: 'Dan Abramov, Andrew Clark', num_comments: 2, points: 5, objectID: 1, }, ];

class App extends Component {
  render() {
    var helloWorld = 'Welcome to the Road to learn React'; 
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          {helloWorld}
          </p>
          <Home></Home>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
          <Dashboard></Dashboard>
          <AnotherHome></AnotherHome>
        </header>
      </div>
    );
  }
}

export default App;
