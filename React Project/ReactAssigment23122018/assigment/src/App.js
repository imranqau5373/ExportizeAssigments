import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const DEFAULT_QUERY = 'https://jsonplaceholder.typicode.com/posts';
const userQuery = 'https://jsonplaceholder.typicode.com/users';
class App extends Component {
  
  constructor(props){
    super(props);
    // console.log('Parent class this.....',this);
    // this.name = "Kashif";
    this.state = {
      result: null, 
      userResult : null    }
      this.setSearchTopStories = this.setSearchTopStories.bind(this); 
      this.setSearchTopUsers = this.setSearchTopUsers.bind(this); 

    // this.setSearchTopStories = this.setSearchTopStories.bind(this);
    // this.onSearchChange = this.onSearchChange.bind(this); 
    // this.onDismiss = this.onDismiss.bind(this);
  }
  setSearchTopStories(result) { this.setState({ result }); }
  setSearchTopUsers(userResult) { this.setState({ userResult }); }

  componentDidMount() 
  { 
    fetch(userQuery) 
    .then(response => response.json()) 
    .then(result => {
        fetch(DEFAULT_QUERY) 
        .then(response => response.json()) 
        .then(userResult => this.setSearchTopUsers(userResult)) 
        .catch(error => error);
      this.setSearchTopStories(result)
    }) 
    .catch(error => error);
  }


  
  render() {
    const name = "Hello World";
    const obj = { name: "Hello World Object" };
    const data = ['We', 'are', 'United'];
    const list = [{ name: "Hello World 1" }, { name: "Hello World 2" }, { name: "Hello World 3" }];
    const complex = [{ company: 'XYZ', jobs: ['Javascript', 'React'] }, { company: 'ABC', jobs: ['AngularJs', 'Ionic'] }];
    const result= this.state.result;
    const userResult = this.state.userResult;
    console.log(this.state.result);

    if (!result) { return null; }

    if (!userResult) { return null; }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Name of Variable is :{name} <br></br>
            Name of Object is :{obj.name}
          </p>
          <ul style={{ "list-style-type": "none" }} >
            {
              data.map(function (item) {
                return (<li>{item}</li>);
              })
            }
          </ul>
          <p>
            List of Companies.
          </p>
          <ul style={{ "list-style-type": "none" }} >
            {
              list.map(function (newData) {
                return (<li>{newData.name}</li>);
              })
            }
          </ul>
          <p>
            List of Complex.
          </p>
          <ul style={{ "list-style-type": "none" }} >
            {
              complex.map(function (newData) {
                return (<li>
                  {newData.company} Avaliable Jobs: {newData.jobs.map(function (job) { return (<li>{job}</li>); })}
                </li>);
              })
            }
          </ul>
          <p>List of Post Data</p>
          <ul style={{ "list-style-type": "none" }} >
          {
            this.state.result.map(function (obj) {
              return (<li>
                {obj.id} , {obj.email}
              </li>);
            })
          }
          </ul>
          <p>List of Users Data</p>
          <ul style={{ "list-style-type": "none" }} >
          {
            this.state.userResult.map(function (user) {
              return (<li>
                {user.userId} , {user.title}
              </li>);
            })
          }
          </ul>
        </header>
      </div>
    );
  
  }
}

export default App;
