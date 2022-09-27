const Display = ({ formattedCurrentTime }) => {
  return (
    <div id="display">
      <p id="timer-label">Session (timer-label)</p>
      <p id="time-left">{formattedCurrentTime}</p>
    </div>
  );
};

export default Display;
