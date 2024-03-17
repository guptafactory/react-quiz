function NextButton({ dispatch, answer, index, numQuestions }) {
  if (answer === null) return null;
  if (index + 1 < numQuestions)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  else if (index + 1 === numQuestions)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "endQuiz" })}
      >
        Finish
      </button>
    );
}

export default NextButton;
