export const FeedbackOptions = ({ updateState }) => {
  return (
    <div className="buttons">
      <button
        onClick={event => updateState(event.target.id)}
        className="button"
        id="good"
      >
        Good
      </button>
      <button
        onClick={event => updateState(event.target.id)}
        className="button"
        id="neutral"
      >
        Neutral
      </button>
      <button
        onClick={event => updateState(event.target.id)}
        className="button"
        id="bad"
      >
        Bad
      </button>
    </div>
  );
};
