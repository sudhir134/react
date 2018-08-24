import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import Radium from 'radium';
import './Person/Person.css';
import Person from './Person/Person';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
// import { Button } from './react-bootstrap';

class App extends Component {

  //every component must have an unique id associated, to update the dom by react and identified properly
  state = {
    Persons:[
      {
        id:'pid1',name:"Amitesh",age:"23"
      },
      {
        id:'pid2',name:"Sudhir",age:"30"
      },
      {
        id:'pid3',name:"Shambhu",age:"25"
      }
    ],
    paraContent1:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    paraContent2:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    username:"Sudhir Parmar",
    isShowUserOutput : true
  }
  
  switchNameHandler = (pname) => {
    //console.log('button clicked!!');

    this.setState({
      person:[
        {
          name:pname,age:"23"
        },
        {
          name:"Ashish",age:"30"
        }
      ]
    })
  }

  nameChangeHandler = (event,pId) => {
    const personIndex = this.state.Persons.findIndex(p => {
     return pId == p.id;
    })
    //this is the element we have find index for  
    //const person = this.state.Persons[personIndex];

    //we should not directly mutate the states, so to prevent this we will copy the person object by spread operator
    const person = {
      ...this.state.Persons[personIndex] 
    }

    //another approach to create a new object is, we can use the assign method of javascript
    //const person = Object.assign({},this.state.Persons[personIndex]);

    //now change the value of the name property by handler function

    person.name = event.target.value;
    const newPersons = [...this.state.Persons];
    newPersons[personIndex] = person;

    //console.log(newPersons[personIndex]);

    this.setState({Persons:newPersons});
  }

  changeUsenameHandler = (event) =>{
    this.setState({
      username:event.target.value
    });
  }
  
  deletePersonHandler = (personIndex) => {
    //below syntax just provide a pointer to the original array, we have to use other option to copy the array
    //const Persons = this.state.Persons;
    //we can use slice method without parameters to copy the array as below
    //const Persons = this.state.Persons.slice;
    // or we can user spread operator to copy the array like below
    const Persons = [...this.state.Persons];


    Persons.splice(personIndex,1);
    this.setState({Persons:Persons});
  }

  toggleUserOutput = () => {
    const doesShow = this.state.isShowUserOutput;
    this.setState({isShowUserOutput:!doesShow});
  }


  render() {
    const style = {
      backgroundColor: 'light-gray',
      border: '2px solid gray',
      padding:'10px',
      cursor: 'pointer',
      width:'50%',
      margin: '10px auto'
    };

    const btnStyle = {
      backgroundColor: 'green',
      border: '2px solid gray',
      padding:'10px',
      color:'white'
    }
    //add condition to toggle the useroutput

    let UserOutputVar = null;
    let Persons = this.state.Persons;
    const classes  = [];

    if(this.state.Persons.length<=2){
      classes.push('red');
    }

    if(this.state.Persons.length<=1){
      classes.push('bold');
    }

    //this is the standard way to add conditional statements
    if (this.state.isShowUserOutput) {
      UserOutputVar = (
        <div>
          {this.state.Persons.map((person, index) => {
            return <Person changed={(event) => this.nameChangeHandler(event,person.id)} name={person.name} age={person.age} click={()=>this.deletePersonHandler(index)} key={person.id}/>
          })}
        </div>
      );
      btnStyle.backgroundColor = 'red';
      
    }

    return (
      <div className="App"> 
        <div className="UserInput" style={style}>
          <h3>UserInput Component</h3>
          <p className={classes.join(' ')}>Its really working!!</p>
          <UserInput changeName={this.changeUsenameHandler} username={this.state.username}/>
        </div>
        <button style= {btnStyle} onClick={this.toggleUserOutput}>Toggle UserOutput</button>
          {UserOutputVar}
      </div>      
    );
  }
}

export default App;
