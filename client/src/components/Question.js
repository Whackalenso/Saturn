import { useEffect } from "react";
import AnswerButton from "./AnswerButton.js";

export default function Question({ question, nextQuestion }) {
  useEffect((_) => {
    MathJax.typeset();
  });
  return (
    <div className="mx-3">
      <div className="inline-block">
        <p>{question.source}</p>
      </div>
      <div>
        <AnswerButton question={question} nextQuestion={nextQuestion}/>
      </div>
    </div>
  );
}
