import React, {useState} from 'react';
import './App.css';
import QuestionCard from "./components/QuestionCard";
import {Difficulty, fetchQuestions, QuestionState} from "./API";
import {GlobalStyle, Wrapper} from "./App.styles";

const TOTAL_QUESTIONS = 10

export type AnswerObject = {
    question: string,
    answer: string,
    correct: boolean,
    correctAnswer: string
}

const App = () => {

    const [loading, setLoading] = useState(false)
    const [questions, setQuestions] = useState<QuestionState[]>([])
    const [questionNumber, setQuestionNumber] = useState(0)
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
        setQuestionNumber(0)
        setLoading(false)
    }

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!gameOver) {
            //odpowiedź usera
            const answer = e.currentTarget.value
            //sprawdź czy odpowiedź jest poprawna
            const correct = questions[questionNumber].correct_answer === answer
            //dopisz punktjeżeli tak jest
            if (correct) {
                setScore(prevState => prevState + 1)
            }
            //zapisz odpowiedź w tablicy
            const answersObject = {
                question: questions[questionNumber].question,
                answer,
                correct,
                correctAnswer: questions[questionNumber].correct_answer
            }
            setUserAnswers(prevState => [...prevState, answersObject])
        }
    }

    const nextQuestion = () => {
        const nextQuestion = questionNumber + 1
        if (nextQuestion === TOTAL_QUESTIONS) {
            setGameOver(true)
        } else {
            setQuestionNumber(nextQuestion)
        }

    }

    return (
        <>
            <GlobalStyle/>
            <Wrapper>
                <h1>QUIZ</h1>
                {
                    gameOver || userAnswers.length === TOTAL_QUESTIONS
                        ? <button className='start' onClick={startTrivia}>Start</button>
                        : null
                }
                {!gameOver && <p className='score'>Score: {score}</p>}
                {loading && <p>Loading questions...</p>}
                {!loading && !gameOver && (
                    <QuestionCard
                        questionNr={questionNumber + 1}
                        totalQuestions={TOTAL_QUESTIONS}
                        question={questions[questionNumber].question}
                        answers={questions[questionNumber].answers}
                        callback={checkAnswer}
                        userAnswer={userAnswers ? userAnswers[questionNumber] : undefined}
                    />
                )}
                {!gameOver && !loading && userAnswers.length === questionNumber + 1 && questionNumber !== TOTAL_QUESTIONS - 1 &&
                (
                    <button className='next' onClick={nextQuestion}>Next question</button>
                )}
            </Wrapper>
        </>
    );
}

export default App;
