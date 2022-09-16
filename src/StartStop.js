const StartStop = ({ startStop, reset }) => {
  return (
    <div>
      <button id="start_stop" onClick={startStop}>
        Start/Stop
      </button>
      <button id="reset" onClick={reset}>
        Reset
      </button>
    </div>
  );
};
export default StartStop;
