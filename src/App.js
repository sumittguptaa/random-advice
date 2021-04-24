import axios from 'axios';
import React from 'react';
import { Component } from 'react';
import './App.css';


class App extends Component {
  state = {
    advice: ""
  }
  componentDidMount(){
  
    this.fetchAdvice();
  }
  fetchAdvice = () =>{
    axios.get("https://api.adviceslip.com/advice")
    .then((response) =>{
      // console.log(response.data.slip.advice);
      const advicee = response.data.slip.advice;
      this.setState({advice : advicee})
      // console.log(advicee);
    })
    .catch((err)=>{
      console.log(err)
    })
  }
 render(){
  return (
    <div className="app">
      <div className="card">
    <h1 className="heading">{this.state.advice}</h1>
    <button className="button" onClick={this.fetchAdvice} >
        <span>New Advice</span>
    </button>
    </div>
    </div>
  );
 }
}

export default App;



