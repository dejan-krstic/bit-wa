import React, { Component } from 'react';

import Header from '../partials/Header';
import Footer from '../partials/Footer';
import UsersList from '../users/UsersList';
import userService from '../../services/UserService';
import Search from '../partials/Search';
import {Route, Link, Redirect, Switch} from 'react-router-dom';
import LoadingAnimation from '../partials/LoadingAnimation';
import Message from '../partials/Message';
// import User from '../entities/User.js';    //recreating User objects after JSON.stringify/parse so they could have methods - abandoned solution


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userArr: [],
      userGrid: false,
      view: "view_module",
      searchText : 'Search users here',
      loading: false
    }
    this.freshView = this.freshView.bind(this)
    this.changeView = this.changeView.bind(this)
    this.searchHandler = this.searchHandler.bind(this)
    this.componentMount = this.componentMount.bind(this)
  }

  freshView = () => {
    this.setState({loading : true})
    userService.getData().then((res) => {
      this.setState((prevState, props) => {
        localStorage.setItem('userArr', JSON.stringify(res));
        return { userArr: res,
                loading: false
        }
      });
    })
  }
  componentMount(){
    if (localStorage.getItem('userArr')) {
      const userTemp = JSON.parse(localStorage.getItem('userArr'))
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
      const etv = event.target.value.toLowerCase();
      this.componentMount();
      if (event.target.value){
      this.setState((prevState, props)=> {
          return {userArr: prevState.userArr.filter(e=>e.fullName.toLowerCase().includes(etv))}
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

  noResults() {
    if (!this.state.userArr.length){
      return <Message/>
    }
  }

  waitingToLoad() {
    if (this.state.loading) {
      return <LoadingAnimation/>
    }
    return (
      <React.Fragment>
        <Search grid={this.state.userGrid} changeHandler={this.searchHandler}/>
        {this.noResults()}
        <UsersList grid={this.state.userGrid} userArray={this.state.userArr} />
      </React.Fragment>
    )
  }

  render() {
    return (
      <React.Fragment>
        <Header action={this.changeView} view={this.state.view} grid={this.state.userGrid} fresh={this.freshView}/>
        {this.waitingToLoad()}
        <Footer/>
      </React.Fragment>
    );
  }
}

export default Home;