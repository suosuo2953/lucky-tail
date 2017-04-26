import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Chat } from './modules/Chat';
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ReactDOM from 'react-dom';

ReactDOM.render(
  (<Router>
    <MuiThemeProvider>
      <Route path="/chat" component={Chat} />
    </MuiThemeProvider>
  </Router>), document.getElementById("content"));