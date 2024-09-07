export default function AnswerButton({ question, nextQuestion }) {

    return (
        <div className="flex flex-col gap-1">
            {[question.correct, question.false_1, question.false_2, question.false_3].sort().map((answer) => {
                return (
                    <button className="bg-blue-100 p-5 rounded-lg" onClick={nextQuestion}>{answer}</button>
                );
            })}
        </div>
    );
}