import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Chat } from './modules/Chat';
import React from 'react';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import routes from './routes';
import { Home } from './modules/home/';
import configureStore from './store/configureStore';

const store = configureStore();

injectTapEventPlugin();
ReactDOM.render(
  (<Provider store={store}>
    <Router>
      <MuiThemeProvider>
        {routes}
      </MuiThemeProvider>
    </Router>
  </Provider>), document.getElementById("content"));