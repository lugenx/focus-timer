const SessionControl = ({
  increaseSession,
  decreaseSession,
  session,
  increaseBreak,
  decreaseBreak,
  breakLength,
}) => {
  return (
    <div id="session-control">
      <div id="session">
        <p id="session-label">Session</p>

        <button id="session-increment" onClick={increaseSession}>
          +
        </button>
        <div id="session-length">{session / 60000}</div>
        <button id="session-decrement" onClick={decreaseSession}>
          -
        </button>
      </div>
      <div id="break">
        <p id="break-label">Break</p>
        <button id="break-increment" onClick={increaseBreak}>
          +
        </button>
        <div id="break-length">{breakLength / 60000}</div>
        <button id="break-decrement" onClick={decreaseBreak}>
          -
        </button>
      </div>
    </div>
  );
};
export default SessionControl;
