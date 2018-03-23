import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

const App = (props) => {
    return (
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/posts/:id' component={SinglePostPage} />
        <Route path='/authors/:id' component={SingleAuthorPage} />
        <Route path='/authors' component={AuthorsPage} />
        <Route path='/about' component={AboutPage} />
      </ Switch>
    );
  }


export default App;
