export default function AnswerButton({ question, nextQuestion }) {
  return (
    <div className="flex flex-col gap-5 mt-20">
      {[question.correct, question.false_1, question.false_2, question.false_3]
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
        .map((answer, key) => {
          return (
            <button
              className="bg-blue-100 p-5 h-20 rounded-lg text-left w-full"
              onClick={nextQuestion}
              key={key}
            >
              {answer}
            </button>
          );
        })}
    </div>
  );
}
