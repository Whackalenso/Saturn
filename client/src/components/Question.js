import { useEffect } from "react";

export default function Question({ question, nextQuestion }) {
  useEffect((_) => {
    MathJax.typeset();
  });
  return (
    <div>
      <p>{question.source}</p>
    </div>
  );
}
