import React, { Component } from 'react';

import Header from '../partials/Header';
import Footer from '../partials/Footer';
import UsersList from '../users/UsersList';
import userService from '../../services/UserService';
import Search from '../partials/Search';
import { Route, Link, Redirect, Switch } from 'react-router-dom';
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
      searchText: 'Search users here',
      loading: false,
      lastUpdateTime: Number(localStorage.getItem('lastUpdateTime')) || Date.now(),
      updateDuration: localStorage.getItem('updateDuration') || 'Last update: just now',


    }
    this.freshView = this.freshView.bind(this)
    this.changeView = this.changeView.bind(this)
    this.searchHandler = this.searchHandler.bind(this)
    this.componentMount = this.componentMount.bind(this)
    this.calculateUpdateDuration = this.calculateUpdateDuration.bind(this)
  }

  calculateUpdateDuration() {
    this.setState((prevState, props) => {
      const diff = Date.now() - this.state.lastUpdateTime;
      console.log(diff);
      console.log(this.state.lastUpdateTime);
      let updateDurationString = 'Last update: just now';    
      if (diff < 60000) {
      return { updateDuration: updateDurationString }
    } else if (diff < 36000000) {
      updateDurationString = `Last update: ${Math.floor(diff / 60000)} minute${diff<120000?"":"s"} ago`;
      return { updateDuration: updateDurationString }
    } else if (diff < 24 * 60 * 60 * 1000) {
      updateDurationString = `Last update: ${Math.floor(diff / 60 / 60 / 1000)} hours ago`;
      return { updateDuration: updateDurationString }
    } else if (diff < 7 * 24 * 60 * 60 * 1000) {
      updateDurationString = `Last update: ${Math.floor(diff / 24 / 60 / 60 / 1000)} days ago`;
      return { updateDuration: updateDurationString }
    } else if (diff < 30 * 24 * 60 * 60 * 1000) {
      updateDurationString = `Last update: ${Math.floor(diff / 7 / 24 / 60 / 60 / 1000)} weeks ago`;
      return { updateDuration: updateDurationString }
    } else if (diff < 30 * 24 * 60 * 60 * 1000) {
      updateDurationString = `Last update: ${Math.floor(diff / 7 / 24 / 60 / 60 / 1000)} months ago`;
      return { updateDuration: updateDurationString }
    }
  }
    )}

    freshView = () => {
      this.setState({ loading: true })
      userService.getData().then((res) => {
        this.setState((prevState, props) => {
          localStorage.setItem('userArr', JSON.stringify(res));
          let currentTime = Date.now();
          localStorage.setItem('lastUpdateTime', currentTime);
          return {
            userArr: res,
            loading: false,
            lastUpdateTime: currentTime,
            updateDuration: 'Last update: just now'
          }
        });
      })
    }

    componentMount(){
      setInterval(() => { this.calculateUpdateDuration() }, 1000);
      if (localStorage.getItem('userArr')) {
        const userTemp = JSON.parse(localStorage.getItem('userArr'))
        this.setState((prevState, props) => {
          return { userArr: userTemp }
        })
      } else {
        this.freshView()
      }
    }
    componentDidMount() {
      this.componentMount();
    }

    searchHandler(event) {
      const etv = event.target.value.toLowerCase();
      this.componentMount();
      if (event.target.value) {
        this.setState((prevState, props) => {
          return { userArr: prevState.userArr.filter(e => e.fullName.toLowerCase().includes(etv)) }
        })
      }
    }

    changeView() {
      this.setState((prevState, props) => {
        return {
          userGrid: !(prevState.userGrid),
          view: (prevState.userGrid) ? "view_module" : "view_list"
        }
      })
    }


    noResults() {
      if (!this.state.userArr.length) {
        return <Message />
      }
    }

    waitingToLoad() {
      if (this.state.loading) {
        return <LoadingAnimation />
      }
      return (
        <React.Fragment>
          <Search grid={this.state.userGrid} changeHandler={this.searchHandler} />
          {this.noResults()}
          <UsersList grid={this.state.userGrid} userArray={this.state.userArr} />
        </React.Fragment>
      )
    }

    render() {
      return (
        <React.Fragment>
          <Header action={this.changeView} view={this.state.view} grid={this.state.userGrid} fresh={this.freshView} />
          {this.waitingToLoad()}
          <Footer updateDuration={this.state.updateDuration} />
        </React.Fragment>
      );
    }
  }

  export default Home;