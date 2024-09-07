export default function AnswerButton({ question, nextQuestion }) {

    return (
        <div className="flex flex-col">
            {[question.correct, question.false_1, question.false_2, question.false_3].map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value).map((answer) => {
                return (
                    <button className="bg-blue-100 p-5 rounded-lg text-left" onClick={nextQuestion}>{answer}</button>
                );
            })}
        </div>
    );
}