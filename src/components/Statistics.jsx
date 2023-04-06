import { Component } from 'react';
import { Notification } from './Notification';

export class Statistics extends Component {
  render() {
    if (this.props.total() === 0) {
      return <Notification message="There is no feedback" />;
    }
    return (
      <div className="statistics">
        <span className="statistic">Good: {this.props.good}</span>
        <span className="statistic">Neutral: {this.props.neutral}</span>
        <span className="statistic">Bad: {this.props.bad}</span>
        <span className="statistic">Total: {this.props.total()}</span>
        <span className="statistic">
          Positive feedback: {this.props.positivePercentage()}%
        </span>
      </div>
    );
  }
}
