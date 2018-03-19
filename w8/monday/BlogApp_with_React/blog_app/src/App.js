import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import PropTypes from 'prop-types';

class App extends Component {
  // constructor(props) {
  //   super(props)
  // }
  static propTypes = {
      title : PropTypes.string.isRequired
  }
  static defaultProps = {
    title : "[Default App Title]",
    blogList : [
      {
          id: 1,
          title: "[Default Blog Title]",
          body: "[Default Blog Body Text Content]"
      }
    ]
  }
  render() {
    return (
      <div>
        <Header  title = {this.props.title}/>
        <Content list = {this.props.blogList}/>
      </div>
    );
  }
}

export default App;
