import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import './Person/Person.css';
import Person from './Person/Person';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
// import { Button } from './react-bootstrap';

class App extends Component {
  state = {
    person:[
      {
        name:"Amitesh",age:"23"
      },
      {
        name:"Sudhir",age:"30"
      }
    ],
    paraContent1:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    paraContent2:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    username:"Sudhir Parmar"
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

  nameChangeHandler = (event) => {
    //console.log('button clicked!!');

    this.setState({
      person:[
        {
          name:"sudhir",age:"23"
        },
        {
          name:event.target.value,age:"31"
        }
      ]
    })
  }

  changeUsenameHandler = (event) =>{
    this.setState({
      username:event.target.value
    });
  }


  render() {
    const style = {
      backgroundColor: 'light-gray',
      border: '2px solid gray',
      padding:'10px',
      cursor: 'pointer',
      width:'50%',
      margin: '10px auto'
    }

    return (
      <div className="App"> 
        <div className="UserInput" style={style}>
          <h3>UserInput Component</h3>
          <UserInput changeName={this.changeUsenameHandler} username={this.state.username}/>
        </div>
        <div>
        <h3>UserOutput Component</h3>
          <UserOutput content={this.state.paraContent1} username={this.state.username} styleCode={style}/>
          <UserOutput content={this.state.paraContent2} username={this.state.username} styleCode={style}/>
        </div>      
      </div>      

    );
  }
}

export default App;
