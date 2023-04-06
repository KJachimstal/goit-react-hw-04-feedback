import { Component } from 'react';

export class Notification extends Component {
  render() {
    return <h4>{this.props.message}</h4>;
  }
}
