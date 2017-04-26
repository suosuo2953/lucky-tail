import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Avatar  from 'material-ui/Avatar';
import './index.scss';

export class Chat extends Component {

  render () {
    return (
      <AppBar title="Welcome" iconClassNameRight="muidocs-icon-navigation-expand-more"></AppBar>
    );
  }
}