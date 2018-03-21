import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './partials/Header';
import Footer from './partials/Footer';
import UsersList from './users/UsersList';
import userService from '../services/UserService';
import User from '../entities/User.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userArr: [],
      userGrid: false,
      view: "view_module",
      searchText : ''
    }
<<<<<<< HEAD
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
=======
    this.changeView = this.changeView.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.freshView = this.freshView.bind(this)
    this.searchHandler = this.searchHandler.bind(this)
  }

  freshView() {
    userService.getData().then((res) => {
      this.setState((prevState, props) => {
        localStorage.setItem('userArr', JSON.stringify(res));
        console.log(JSON.parse(localStorage.getItem('userArr')));
        console.log(res);
        return { userArr: res }
      });
    })
>>>>>>> c239227b286e75a7b48f89c056ddff2f63b1b832
  }
  componentDidMount(){
    if (localStorage.getItem('userArr')) {
      let userTemp = JSON.parse(localStorage.getItem('userArr'))
      userTemp = userTemp.map( (e) => new User(e.name, e.email, e.dob, e.imageURL, e.gender))
      this.setState((prevState, props) => {
        return { userArr : userTemp }
      })
    } else {
      this.freshView()
    }
  }
  
  searchHandler (event) {
      let etv = event.target.value;
      this.componentDidMount();
      if (event.target.value){
      this.setState((prevState, props)=> {
          return {userArr: prevState.userArr.filter(e=>e.name.includes(etv))}
     })
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
<<<<<<< HEAD
        <Header action={this.changeView} view={this.state.view} grid={this.state.userGrid} refresh={this.refreshUsers} />
=======
        <Header action={this.changeView} view={this.state.view} grid={this.state.userGrid} fresh={this.freshView} changeHandler={this.searchHandler}/>
>>>>>>> c239227b286e75a7b48f89c056ddff2f63b1b832
        <UsersList grid={this.state.userGrid} userArray={this.state.userArr} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;