import React from "react";
import { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
const [questions, setQuestions] = useState([])
async function fetchQuestions(){
  const res = await fetch("http://localhost:5000/questions")
  const data = await res.json()
  console.log(data)
  setQuestions(data)
}
useEffect(()=>{
  fetchQuestions()
},[])
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((question)=><QuestionItem question={question}/>)}</ul>
    </section>
  );
}

export default QuestionList;
