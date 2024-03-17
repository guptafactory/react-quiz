import React from "react";
import { useQuiz } from "../contexts/QuizContext";

function FinishScreen() {
  const { points, maxmPossiblePoints, highscore, dispatch } = useQuiz();

  if (!maxmPossiblePoints) throw new Error("Max score not provided");

  const percentage = Math.ceil((points / maxmPossiblePoints) * 100);
  const emoji =
    percentage === 100
      ? "🥇"
      : percentage >= 80
      ? "🎉"
      : percentage >= 50
      ? "🙃"
      : percentage > 0
      ? "🤔"
      : "🤦‍♂️";

  return (
    <>
      <p className="result">
        {emoji} You scored <strong>{points} </strong> out of
        <strong> {maxmPossiblePoints}</strong> ({percentage}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Reset Quiz
      </button>
    </>
  );
}

export default FinishScreen;
