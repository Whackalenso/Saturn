import { useState, useEffect } from "react";

export default function AnswerButton({
  question,
  nextQuestion,
  submittedAnswer,
  setSubmittedAnswer,
  setSocialCreditScore,
}) {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    console.log(question);
    let tmp = [
      question.correct,
      question.false_1,
      question.false_2,
      question.false_3,
    ]
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    setAnswers(tmp);
    window.MathJax.typeset();

    console.log(tmp);
  }, [question]);

  setInterval(() => {
    window.MathJax.typeset();
  }, 10);

  return (
    <div className="grid grid-cols-2 gap-1">
      {answers.map((answer) => {
        var color = "bg-blue-200";
        if (submittedAnswer === answer) {
          if (answer == question.correct) {
            color = "bg-green-200";
          } else {
            color = "bg-red-200";
          }
        }
        return (
          <button
            className={`${color} bg-blue-200 p-5 rounded-lg text-left inline-block transition-all active:scale-95`}
            onClick={(e) => {
              // nextQuestion();
              if (answer == question.correct && submittedAnswer != question.correct) {
                setSocialCreditScore((score) => score + 100);
                setTimeout(() => {
                  // alert(1);
                  nextQuestion();
                }, 1000);
              } else if (answer != question.correct && submittedAnswer != question.correct) {
                setSocialCreditScore((score) => score - 100);
              }
              
              if (submittedAnswer != question.correct) {
                setSubmittedAnswer(answer);
              }
            }}
          >
            {answer}
          </button>
        );
      })}
    </div>
  );
}
