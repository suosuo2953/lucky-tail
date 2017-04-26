import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Avatar  from 'material-ui/Avatar';
import './index.scss';

export class Chat extends Component {

  render () {
    const avatar = require("./images/avatar.jpg");
    return (
      <div>
        <AppBar title="title"
          iconElementRight={<Avatar src={avatar} />}></AppBar>
      </div>
    );
  }

}