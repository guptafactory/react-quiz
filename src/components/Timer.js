import React from "react";

function Timer({ secondsRemaining, dispatch }) {
  if (secondsRemaining === 0) {
    dispatch({ type: "endQuiz" });
    return null;
  }
  return <div className="timer">{secondsRemaining}</div>;
}

export default Timer;
