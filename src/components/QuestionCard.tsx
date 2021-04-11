import React from 'react'
import {AnswerObject} from "../App";
import {Wrapper, ButtonWrapper} from "./QuestionCard.styles";

type Props = {
    question: string,
    answers: string[],
    userAnswer: AnswerObject | undefined,
    questionNr: number,
    totalQuestions: number,
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void,
}

const QuestionCard: React.FC<Props> = ({
   question,
   answers,
   userAnswer,
   questionNr,
   totalQuestions,
   callback
}) => {

    return (
        <Wrapper>
            <p className='number'>
                Question: {questionNr} / {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{__html: question}}/>
            <div>
                {answers.map(answer => (
                    <ButtonWrapper
                        key={answer}
                        correct={userAnswer?.correctAnswer === answer}
                        userClicked={userAnswer?.answer === answer}
                    >
                        <button disabled={!!userAnswer} value={answer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{__html: answer}}/>
                        </button>
                    </ButtonWrapper>
                ))}
            </div>
        </Wrapper>
    )
}

export default QuestionCard
