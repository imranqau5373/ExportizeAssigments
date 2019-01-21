import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewApp from './newApp'
const list = [ { title: 'React', url: 'https://facebook.github.io/react/', author: 'Jordan Walke', num_comments: 3, points: 4, objectID: 0, }, { title: 'Redux', url: 'https://github.com/reactjs/redux', author: 'Dan Abramov, Andrew Clark', num_comments: 2, points: 5, objectID: 1, }, ];
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          {list.map(function (item) 
            { return <div>{item.title}</div>; 
            })}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <NewApp></NewApp>
        </header>
      </div>
    );
  }
}

export default App;
