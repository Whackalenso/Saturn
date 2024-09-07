import { useEffect } from "react";
import AnswerButton from "./AnswerButton.js";

export default function Question({ question, nextQuestion }) {
  useEffect((_) => {
    MathJax.typeset();
  });
  return (
    <div className="mx-3 font-serif h-full flex flex-col justify-between">
      <div className="mt-8 inline-block bg-blue-50 p-3 rounded-lg">
        <p>{question.source}</p>
      </div>
      <div className="mb-8">
        <AnswerButton question={question} nextQuestion={nextQuestion}/>
      </div>
    </div>
  );
}
