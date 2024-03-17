import { useEffect } from "react";
import { useQuiz } from "../contexts/QuizContext";

function Timer() {
  const { secondsRemaining, dispatch } = useQuiz();

  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining - mins * 60;

  useEffect(
    function () {
      const timer_id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(timer_id);
    },
    [dispatch, secondsRemaining]
  );

  return (
    <div className="timer">
      {mins.toString().padStart(2, "0")} : {seconds.toString().padStart(2, "0")}
    </div>
  );
}

export default Timer;
