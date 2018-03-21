import React, { Component } from 'react';
import './App.css';
import Header from './partials/Header';
import Footer from './partials/Footer';
import UsersList from './users/UsersList';
import userService from '../services/UserService';
import Search from './partials/Search';
import {Route, Link, Redirect, Switch} from 'react-router-dom';
// import User from '../entities/User.js';    //recreating User objects after JSON.stringify/parse so they could have methods - abandoned solution


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userArr: [],
      userGrid: false,
      view: "view_module",
      searchText : 'Search users here'
    }
    this.freshView = this.freshView.bind(this)
    this.changeView = this.changeView.bind(this)
    this.searchHandler = this.searchHandler.bind(this)
    this.componentMount = this.componentMount.bind(this)
  }

  freshView() {
    userService.getData().then((res) => {
      this.setState((prevState, props) => {
        localStorage.setItem('userArr', JSON.stringify(res));
        return { userArr: res }
      });
    })
  }
  componentMount(){
    if (localStorage.getItem('userArr')) {
      const userTemp = JSON.parse(localStorage.getItem('userArr'))
      // userTemp = userTemp.map( (e) => new User(e.name, e.email, e.dob, e.imageURL, e.gender)) // recreating User objects after JSON.stringify/parse so they could have methods - abandoned solution
      this.setState((prevState, props) => {
        return { userArr : userTemp }
      })
    } else {
      this.freshView()
    }
  }
  componentDidMount() {
    this.componentMount();
  }
  
  searchHandler (event) {
      const etv = event.target.value;
      this.componentMount();
      if (event.target.value){
      this.setState((prevState, props)=> {
          return {userArr: prevState.userArr.filter(e=>e.fullName.includes(etv))}
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
        <Header action={this.changeView} view={this.state.view} grid={this.state.userGrid} fresh={this.freshView}/>
        <Search changeHandler={this.searchHandler}/>
        <UsersList grid={this.state.userGrid} userArray={this.state.userArr} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;