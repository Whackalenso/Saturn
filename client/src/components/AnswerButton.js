export default function AnswerButton({ question, nextQuestion }) {

    return (
        <div className="grid grid-cols-2 gap-1">
            {[question.correct, question.false_1, question.false_2, question.false_3].map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value).map((answer) => {
                return (
                    <button className="bg-blue-200 p-5 rounded-lg text-left inline-block" onClick={nextQuestion}>{answer}</button>
                );
            })}
        </div>
    );
}