const Display = ({ formattedCurrentTime, timerLabel }) => {
  return (
    <div id="display">
      <p id="timer-label">{timerLabel}</p>
      <p id="time-left">{formattedCurrentTime}</p>
    </div>
  );
};

export default Display;
