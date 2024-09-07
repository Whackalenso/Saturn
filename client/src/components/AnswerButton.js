export default function AnswerButton({ question, nextQuestion }) {

    return (
        <div className="flex flex-col gap-1">
            <button className="bg-blue-100 p-5 rounded-lg">{question.correct}</button>
            <button className="bg-blue-100 p-5 rounded-lg">{question.false_1}</button>
            <button className="bg-blue-100 p-5 rounded-lg">{question.false_2}</button>
            <button className="bg-blue-100 p-5 rounded-lg">{question.false_3}</button>
        </div>
    );
}