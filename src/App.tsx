import React, {useState} from 'react';
import './App.css';
import QuestionCard from "./components/QuestionCard";
import {Difficulty, fetchQuestions, QuestionState} from "./API";

const TOTAL_QUESTIONS = 10

type AnswerObject = {
    question: string,
    answer: string,
    correct: boolean,
    correctAnswer: string
}

const App = () => {

    const [loading, setLoading] = useState(false)
    const [questions, setQuestions] = useState<QuestionState[]>([])
    const [number, setNumber] = useState(0)
    const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
    const [score, setScore] = useState(0)
    const [gameOver, setGameOver] = useState(true)

    console.log(questions)

    const startTrivia = async () => {

        setLoading(true)
        setGameOver(false)

        const newQuestions = await fetchQuestions(TOTAL_QUESTIONS, Difficulty.MEDIUM)

        setQuestions(newQuestions)
        setScore(0)
        setUserAnswers([])
        setNumber(0)
        setLoading(false)
    }

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

    }

    const nextQuestion = () => {

    }

    return (
        <div className="App">
            <h1>QUIZ</h1>
            {
                gameOver || userAnswers.length === TOTAL_QUESTIONS
                    ? <button className='start' onClick={startTrivia}>Start</button>
                    : null
            }
            {!gameOver && <p className='score'>Score:</p>}
            {loading && <p>Loading questions...</p>}
            {!loading && !gameOver && (
                <QuestionCard
                    questionNr={number + 1}
                    totalQuestions={TOTAL_QUESTIONS}
                    question={questions[number].question}
                    answers={questions[number].answers}
                    callback={checkAnswer}
                    userAnswer={userAnswers ? userAnswers[number] : undefined}
                />
            )}
            {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 &&
            (
                <button className='next' onClick={nextQuestion}>Next question</button>
            )}
        </div>
    );
}

export default App;
