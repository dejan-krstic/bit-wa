import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import postsData from './shared/post.js'

ReactDOM.render(<App blogList = {postsData}/>, document.getElementById('root'));
registerServiceWorker();
