import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './partials/Header';
import Footer from './partials/Footer';
import UsersList from './users/UsersList';
import userService from '../services/UserService';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userArr: [],
      userGrid: false,
      view: "view_module"
    }
    this.changeView = this.changeView.bind(this);
    this.refreshUsers = this.refreshUsers.bind(this);
  }

  componentDidMount() {
    if (localStorage.data) {
      this.setState({
        userArr: JSON.parse(localStorage.data)
      })
    } else {
      this.refreshUsers()
    }
  }

  changeView() {
    this.setState((prevState, props) => {
      return {userGrid: !(prevState.userGrid),
              view: (prevState.userGrid) ? "view_module" : "view_list"}
    })
  }

  refreshUsers() {
    userService.getData().then((res) => {
      this.setState((prevState, props) => {
        console.log(res);
        return { userArr: res }
      });
    })
  }

  render() {
    return (
      <React.Fragment>
        <Header action={this.changeView} view={this.state.view} grid={this.state.userGrid} refresh={this.refreshUsers} />
        <UsersList grid={this.state.userGrid} userArray={this.state.userArr} />
        <Footer />
      </React.Fragment>
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
