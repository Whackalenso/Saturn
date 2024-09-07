import { useState, useEffect } from "react";
import Papa from "papaparse";

export default function QuestionPage() {
  const [questionData, setQuestionData] = useState([]);
  const [question, setQuestion] = useState({});

  function randomQuestion() {
    var obj = {};
    var questionNum = Math.floor(Math.random() * questionData.length - 1) + 1;
    questionData[0].forEach((key, i) => {
      obj[key] = questionData[questionNum][i];
    });
    console.log(obj);
  }

  useEffect(() => {
    fetch("./questionData.csv")
      .then((response) => response.text())
      .then((response) => {
        setQuestionData(Papa.parse(response).data);
        randomQuestion();
      });
  });

  return (
    <div>
      <h1>Question Page</h1>
      {/* <p>{question}</p> */}
    </div>
  );
}
