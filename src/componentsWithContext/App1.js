import { useQuiz } from "../contexts/QuizContext";
import Header from "./Header";
import Main from "./Main";
import Question from "./Question";
import Progress from "./Progress";
import NextButton from "./NextButton";
import Footer from "./Footer";
import StartScreen from "./StartScreen";
import FinishScreen from "./FinishScreen";
import Timer from "./Timer";
import Loader from "./Loader";
import Error from "./Error";

function App1() {
  const { status } = useQuiz();

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Question />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}
        {status === "finished" && <FinishScreen />}
      </Main>
    </div>
  );
}

export default App1;
