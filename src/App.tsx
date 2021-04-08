import React, {useState} from 'react';
import './App.css';
import QuestionCard from "./components/QuestionCard";

const App = () => {

    const [loading, setLoading] = useState(false)
    const [questions, setQuestions] = useState([])
    const [number, setNumber] = useState(0)
    const [answers, setAnswers] = useState([])

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
        <QuestionCard/>
        <button className='next' onClick={nextQuestion}>Next question</button>
    </div>
  );
}

export default App;
