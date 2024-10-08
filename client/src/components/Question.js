import { useState, useEffect } from "react";
import AnswerButton from "./AnswerButton.js";

export default function Question({ question, nextQuestion, setSocialCreditScore }) {
  const [submittedAnswer, setSubmittedAnswer] = useState();

  useEffect((_) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    window.MathJax.typeset();
  });
  return (
    <div className="mx-5 font-serif h-full flex flex-col justify-between">
      <div className="h-full flex flex-col justify-center">
        <p className="bg-blue-50 p-3 rounded-lg text-xl">{question.source}</p>
      </div>
      <div className="mb-8">
        <AnswerButton
          question={question}
          nextQuestion={nextQuestion}
          submittedAnswer={submittedAnswer}
          setSubmittedAnswer={setSubmittedAnswer}
          setSocialCreditScore={setSocialCreditScore}
        />
      </div>
    </div>
  );
}
