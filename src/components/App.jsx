import { Section } from './Section';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';

import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNautral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return bad + neutral + good;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    if (totalFeedback === 0) {
      return 0;
    }

    return Math.floor((good / totalFeedback) * 100);
  };

  const updateState = value => {
    switch (value) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNautral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        console.log(`Update State eroor: ${value}`);
    }
  };

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
        <FeedbackOptions updateState={updateState} />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      </Section>
    </div>
  );
};
