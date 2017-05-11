import React  from 'react';
import {Route, IndexRoute} from 'react-router';
import { App } from './modules/app/';
import { Home } from './modules/home/';
import { Chat } from './modules/chat/';

export default (
  <div>
    <Route path="/home" component={Home} />
    <Route path="/chat" component={Chat} />
  </div>
);