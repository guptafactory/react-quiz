import React from "react";

function Progress({ index, numQuestions, points, maxmPossiblePoints, answer }) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxmPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
