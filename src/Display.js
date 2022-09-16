const Display = ({ formattedCurrentTime }) => {
  return (
    <div id="display">
      <div id="time-left">
        <p id="timer-label">Session (timer-label)</p>
        <p id="countdown">{formattedCurrentTime}</p>
      </div>
    </div>
  );
};

export default Display;
