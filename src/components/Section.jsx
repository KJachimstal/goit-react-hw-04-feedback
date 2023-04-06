import React, { Component } from 'react';

export class Section extends Component {
  render() {
    return (
      <div className="container">
        <h1> {this.props.title}</h1>
        {this.props.children}
      </div>
    );
  }
}
