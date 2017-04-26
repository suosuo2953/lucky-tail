import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Chat } from './modules/Chat';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  (<Router>
    <Route path="/chat" component={Chat} />
  </Router>), document.getElementById("content"));