import { Notification } from './Notification';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  if (total() === 0) {
    return <Notification message="There is no feedback" />;
  }
  return (
    <div className="statistics">
      <span className="statistic">Good: {good}</span>
      <span className="statistic">Neutral: {neutral}</span>
      <span className="statistic">Bad: {bad}</span>
      <span className="statistic">Total: {total()}</span>
      <span className="statistic">
        Positive feedback: {positivePercentage()}%
      </span>
    </div>
  );
};
