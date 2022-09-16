const BreakControl = ({ increaseBreak, decreaseBreak, breakLength }) => {
  return (
    <div id="break-control">
      <p id="break-label">Break Length</p>
      <div id="break-length">{breakLength / 60000}</div>
      <button id="break-decrement" onClick={decreaseBreak}>
        Decrease Break
      </button>
      <button id="break-increment" onClick={increaseBreak}>
        Increase Break
      </button>
    </div>
  );
};
export default BreakControl;
