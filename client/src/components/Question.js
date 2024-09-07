import { useEffect } from "react";
import AnswerButton from "./AnswerButton.js";

export default function Question({ question, nextQuestion }) {
  useEffect((_) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    window.MathJax.typeset();
  });
  return (
    <div className="mx-3">
      <div>
        <p>{question.source}</p>
      </div>
      <div>
        <AnswerButton question={question} nextQuestion={nextQuestion} />
      </div>
    </div>
  );
}
