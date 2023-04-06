import { Section } from './Section';
import { Component } from 'react';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return this.state.bad + this.state.neutral + this.state.good;
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    if (totalFeedback === 0) {
      return 0;
    }

    return Math.floor((this.state.good / totalFeedback) * 100);
  };

  updateState = value => {
    switch (value) {
      case 'good':
        this.setState(state => ({
          good: state.good + 1,
        }));
        break;
      case 'neutral':
        this.setState(state => ({
          neutral: state.neutral + 1,
        }));
        break;
      case 'bad':
        this.setState(state => ({
          bad: state.bad + 1,
        }));
        break;
      default:
        console.log(`Update State eroor: ${value}`);
    }
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          marginLeft: '50px',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions updateState={this.updateState} />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </div>
    );
  }
}
