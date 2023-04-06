import { Component } from 'react';

export class FeedbackOptions extends Component {
  render() {
    return (
      <div className="buttons">
        <button
          onClick={event => this.props.updateState(event.target.id)}
          className="button"
          id="good"
        >
          Good
        </button>
        <button
          onClick={event => this.props.updateState(event.target.id)}
          className="button"
          id="neutral"
        >
          Neutral
        </button>
        <button
          onClick={event => this.props.updateState(event.target.id)}
          className="button"
          id="bad"
        >
          Bad
        </button>
      </div>
    );
  }
}
