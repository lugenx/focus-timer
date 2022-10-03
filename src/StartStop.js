const StartStop = ({ startStop, reset, timeIsOn }) => {
  return (
    <div id="start-stop-reset-buttons">
      <button id="start_stop" onClick={startStop}>
        {timeIsOn ? "Pause" : "Start"}
      </button>
      <button id="reset" onClick={reset}>
        Reset
      </button>
    </div>
  );
};
export default StartStop;
