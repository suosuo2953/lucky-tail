import React, { Component } from 'react';

export class App extends Component {
  render() {
    return (
      <div className="my-demo">
        {this.props.children}
      </div>
    );
  }
}