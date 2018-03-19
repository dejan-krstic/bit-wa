import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './partials/Header';
import Footer from './partials/Footer';
import UsersList from './users/UsersList';
import userService from '../services/UserService';


class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      userArr : []
    }
  }
  componentDidMount(){
    userService.getData().then((res)=>{
      this.setState((prevState, props) => {
          console.log(res);
          return {userArr : res}    
      });
       }
    )
  }
  
  render() {
    return (
      <div className="App">
          <Header />
          <UsersList userArray = {this.state.userArr}/>
          <Footer />
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
