import {useState, useEffect} from 'react';
import Papa from 'papaparse';

export default function QuestionPage() {

    const [question, setQuestion] = useState();

    useEffect(() => {
        fetch( './questionData.csv' )
        .then( response => response.text())
        .then( response => {
            Papa.parse(response, {
                complete: function(results) {
                    console.log("Finished:", results.data);
                    setQuestion(results.data);
                }}
            );
        })
    });

    return (
        <div>
            <h1>Question Page</h1>
            <p>{question}</p>
        </div>
    );
}