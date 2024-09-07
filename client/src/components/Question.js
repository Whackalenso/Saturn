import { useEffect } from "react";
import AnswerButton from "./AnswerButton.js";

export default function Question({ question, nextQuestion }) {
  useEffect((_) => {
    MathJax.typeset();
  });
  return (
    <>
      <div>
        <p>{question.source}</p>
      </div>
      <div>
        <AnswerButton question={question} nextQuestion={nextQuestion}/>
      </div>
    </>
  );
}
