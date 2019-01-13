import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Publisher from './Components/Publisher'
import Subscriber from './Components/Subscriber'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Publisher />
          <Subscriber index={1}/>
          <Subscriber index={2}/>
          <Subscriber index={3}/>
          <Subscriber index={4}/>     
          <Subscriber index={5}/>
          <Subscriber index={6}/>
          <Subscriber index={7}/>
          <Subscriber index={8}/>                  
      </div>
    );
  }
}

export default App;
