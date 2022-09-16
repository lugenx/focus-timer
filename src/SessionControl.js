const SessionControl = ({ increaseSession, decreaseSession, session }) => {
  return (
    <div id="session-control">
      <p id="session-label">Session Length</p>
      <div id="session-length">{session / 60000}</div>
      <button id="session-decrement" onClick={decreaseSession}>
        Decrease Sesssion
      </button>
      <button id="session-increment" onClick={increaseSession}>
        Increase Sesssion
      </button>
    </div>
  );
};
export default SessionControl;
