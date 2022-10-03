const Display = ({ formattedCurrentTime, timerLabel }) => {
  return (
    <div id="display">
      <div id="timer-label">{timerLabel}</div>
      <div id="time-left">{formattedCurrentTime}</div>
    </div>
  );
};

export default Display;
