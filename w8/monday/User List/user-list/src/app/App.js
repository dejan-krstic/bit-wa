import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header';
import UsersList from './users/UsersList';
import userService from '../services/UserService';


class App extends Component {
  constructor (props) {
    super(props);

  }



  render() {
    
    return (
      <div className="App">
          <UsersList />
      </div>
    );
  }
}

export default App;


// <div className="App">
// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <h1 className="App-title">Welcome to React</h1>
// </header>
// <p className="App-intro">
//   To get started, edit <code>src/App.js</code> and save to reload.
// </p>
// </div>
