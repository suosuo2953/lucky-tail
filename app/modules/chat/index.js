import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Avatar  from 'material-ui/Avatar';
import { bindActionCreators } from 'redux';
import { createBook } from '../../actions/bookAction';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import './index.scss';

const actionCreators = {
  createBook,
};

@connect(state => ({
  books: state.books
}), dispatch => bindActionCreators(actionCreators, dispatch))

export class Chat extends Component {

  onTouchTap = () => {
    const a = this.props.createBook({ key: 'value' });
    console.log(a);
  }

  render () {
    const avatar = require("./images/avatar.jpg");
    return (
      <div>
        <AppBar title="title"
          iconElementRight={<Avatar src={avatar} />}></AppBar>
         <FlatButton label="Default" onTouchTap={this.onTouchTap} />
      </div>
    );
  }

}