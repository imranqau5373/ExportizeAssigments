import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todoList : [],
      text : ''
    }    
  }

  storeText(e){
    this.setState({
      text : e.target.value
    })
  }



 
add(){
  //how to get text in add. button click of add
  console.log(this.state);
  const stateValue = this.state;
  // const { toDoText } = this.state.text;
  
  // console.log(this.state)
  const newList = stateValue.todoList;
  newList.push(stateValue.text);
  console.log('new state value')


  this.setState({todoList : newList});
  console.log(this.state);
  this.setState({
    text : ''
  })

  //this.state.todoList.push(this.state.text); 
this.setState({});
}

remove(index){
  const stateValue = this.state;
  const newList = stateValue.todoList;
  newList.splice(index,1);
  this.setState({list : newList});
}

Edit(index){
  const stateValue = this.state;
  if(stateValue.text == ''){
    return;
  }
  const newList = stateValue.todoList;
  let editItem = newList[index];
  newList[index] = stateValue.text;

  console.log(editItem);
    this.setState({list : newList});
    this.setState({
      text : ''
    })
}


  render() {
    const stateRender = this.state;
    let listText = stateRender.todoList;
    let text = stateRender.text;
    // if (!listText) {
    //   console.log('in if condition');
 
    //   listText = [] 
    // }
    console.log(listText);
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
          <input value={text} placeholder="Enter an item from here" onChange={(e) => this.storeText(e)}></input>
          <button onClick={() => this.add()}>Add Item</button>
          <ul>
          {
            listText.map((item,index) => {
                return <li>{item} <button onClick={() => {this.remove(index)}}> Remove </button> 
                <button onClick={() => {this.Edit(index)}}> Edit </button>
                </li>
            })
            
        
          }
          </ul>

           
        </header>
      </div>
    );
  }
}

export default App;
