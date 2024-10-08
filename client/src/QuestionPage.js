import { useState, useEffect } from "react";
import Question from "./components/Question.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Papa from "papaparse";

export default function QuestionPage() {
    // const [questionData, setQuestionData] = useState([]);
  const [question, setQuestion] = useState({});

  const [socialCreditScore, setSocialCreditScore] = useState(1200);

  function nextQuestion() {
    fetch("./questionData.csv")
      .then((response) => response.text())
      .then((response) => {
        var data = Papa.parse(response).data;
        var obj = {};
        var questionNum = Math.floor(Math.random() * (data.length - 1)) + 1;
        data[0].forEach((key, i) => {
          obj[key] = data[questionNum][i];
        });
        console.log(obj);
        setQuestion(obj);
      });
  }

  useEffect(nextQuestion, []);

  return (
    <div className="h-screen w-screen flex flex-col justify-between">
      <Header className=""/>
        <Question question={question} nextQuestion={nextQuestion} setSocialCreditScore={setSocialCreditScore}/>
      <Footer className="" socialCreditScore={socialCreditScore}/>
    </div>
  );
}
