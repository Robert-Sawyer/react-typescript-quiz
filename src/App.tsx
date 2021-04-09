import React, {useState} from 'react';
import './App.css';
import QuestionCard from "./components/QuestionCard";
import {Difficulty, fetchQuestions} from "./API";

const TOTAL_QUESTIONS = 10

const App = () => {

    const [loading, setLoading] = useState(false)
    const [questions, setQuestions] = useState([])
    const [number, setNumber] = useState(0)
    const [userAnswers, setUserAnswers] = useState([])
    const [score, setScore] = useState(0)
    const [gameOver, setGameOver] = useState(true)

    console.log(fetchQuestions(TOTAL_QUESTIONS, Difficulty.EASY))

    const startTrivia = async () => {

    }

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

    }

    const nextQuestion = () => {

    }

  return (
    <div className="App">
      <h1>QUIZ</h1>
        <button className='start' onClick={startTrivia}>Start</button>
        <p className='score'>Score:</p>
        <p>Loading questions...</p>
        {/*<QuestionCard*/}
        {/*    questionNr={number + 1}*/}
        {/*    totalQuestions={TOTAL_QUESTIONS}*/}
        {/*    question={questions[number].question}*/}
        {/*    answers={questions[number].answer}*/}
        {/*    callback={checkAnswer}*/}
        {/*    userAnswer={userAnswers ? userAnswers[number] : undefined}*/}
        {/*/>*/}
        <button className='next' onClick={nextQuestion}>Next question</button>
    </div>
  );
}

export default App;
