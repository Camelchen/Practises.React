import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Expenses from './expenses/expenses'
import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Expenses />
      </div>
    );
  }
}

export default App;
