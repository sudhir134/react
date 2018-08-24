import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import './Person/Person.css';
import ValidationComponent from './ValidationComponent/ValidationComponent.js';
import CharComponent from './CharComponent/CharComponent.js';
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
    isShowUserOutput : true,
    textLength:0,
    text:'',
    textArray:[]
  }

  //get the length of the string

  getTextLengthHandler = (event) => {
    console.log(event.target.value);
    this.setState({
      text:event.target.value,
      textLength:event.target.value.length,
      textArray:event.target.value.split('')
    });
  }

  //delete specific character from the string by its index

  removeCharHandler=(event,charIndex)=>{
    let textArray = [...this.state.textArray];
    textArray.splice(charIndex,1);
    //now change the state
    this.setState({textArray:textArray,text:textArray.join('')});
  }

  render() {
    const charStyle = {
      display:'inline-block',
      padding:'16px',
      textAlign:'center',
      margin:'16px',
      border:'1px solid black',
      cursor:'pointer'
    };

    const boxStyle={
      cursor:'pointer'
    };
    let showCharComponent = null;
    let wholeText = this.state.textArray;

    

    showCharComponent = (
      wholeText.map((char,index)=>{
        //if(char!==' '){
          return <CharComponent boxStyle={boxStyle} char={char} key={index} charStyle={charStyle} removeClick={(event)=>this.removeCharHandler(event,index)}/>  
        //}
      })
    );

    return (
      <div className="App"> 
        Enter text here: <input type="text" onChange={this.getTextLengthHandler} value={this.state.text} />
        <div>
          <p>Length is : {this.state.textLength}</p>
          <ValidationComponent textLength = {this.state.textLength} />
        </div>

        {showCharComponent}
      </div>      
    );
  }
}

export default App;
