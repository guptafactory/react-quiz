import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./components/App";
import App1 from "./componentsWithContext/App1";
import { QuizProvider } from "./contexts/QuizContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App/> */}
    <QuizProvider>
      <App1 />
    </QuizProvider>
  </React.StrictMode>
);
