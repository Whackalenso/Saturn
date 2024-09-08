export default function AnswerButton({
  question,
  nextQuestion,
  submittedAnswer,
  setSubmittedAnswer,
}) {
  return (
    <div className="grid grid-cols-2 gap-1">
      {[question.correct, question.false_1, question.false_2, question.false_3]
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
        .map((answer) => {
          var color = "bg-blue-200";
          if (submittedAnswer === answer) {
            if ((answer = question.correct)) {
              color = "bg-green-200";
            } else {
              color = "bg-red-200";
            }
          }
          return (
            <button
              className={`${color} p-5 rounded-lg text-left inline-block`}
              onClick={(e) => {
                setSubmittedAnswer(answer);
              }}
            >
              {answer}
            </button>
          );
        })}
    </div>
  );
}
