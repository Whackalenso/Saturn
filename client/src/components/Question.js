import { useState, useEffect } from "react";
import AnswerButton from "./AnswerButton.js";

export default function Question({ question, nextQuestion }) {
  const [submittedAnswer, setSubmittedAnswer] = useState();

  useEffect((_) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    window.MathJax.typeset();
  });
  return (
    <div className="mx-3">
      <div className="inline-block">
        <p>{question.source}</p>
      </div>
      <div>
        <AnswerButton
          question={question}
          nextQuestion={nextQuestion}
          submittedAnswer={submittedAnswer}
          setSubmittedAnswer={setSubmittedAnswer}
        />
      </div>
    </div>
  );
}
