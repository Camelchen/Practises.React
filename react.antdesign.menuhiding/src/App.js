import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyMenu from './MyMenu'

function App() {
  return (
    <div className="App">
      <MyMenu menuItems = {["mail","apple","android","app"]}/>
      <MyMenu menuItems = {["mail","android","app"]}/>
    </div>
  );
}

export default App;
