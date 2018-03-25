import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import SinglePostPage from './pages/SinglePostPage'
import NewPostPage from './pages/NewPostPage'
import SingleAuthorPage from './pages/SingleAuthorPage'
import AboutPage from './pages/AboutPage'
import AuthorsPage from './pages/AuthorsPage'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './partials/Header.js'
import Footer from './partials/Footer.js'

const App = (props) => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/posts/new' component={NewPostPage} />
        <Route path='/posts/:id' component={SinglePostPage} />
        <Route path='/authors/:id' component={SingleAuthorPage}/>
        <Route path='/authors' component={AuthorsPage} />
        <Route path='/about' component={AboutPage} />
      </ Switch>
      <Footer />
    </React.Fragment>
  );
}


export default App;
