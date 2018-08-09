import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    person:[
      {
        name:"Amitesh",age:"23"
      },
      {
        name:"Sudhir",age:"30"
      }
    ]
  }
  
  switchNameHandler = () => {
    //console.log('button clicked!!');

    this.setState({
      person:[
        {
          name:"Gourav",age:"23"
        },
        {
          name:"Ashish",age:"30"
        }
      ]
    })
  }


  render() {
    return (
      <div className="App"> 
        <h1> Hi we are in app component</h1>
        <button onClick={this.switchNameHandler}>Click me</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age}></Person>
        <Person name={this.state.person[1].name} age={this.state.person[1].age}></Person>
      </div>

      //React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hi we are in app component!!!!!'))
    );
  }
}

export default App;
