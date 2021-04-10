import React from 'react'

type Props = {
    question: string,
    answers: string[],
    userAnswer: any,
    questionNr: number,
    totalQuestions: number,
    callback: any,
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
        <div>
            <p className='number'>
                Question: {questionNr} / {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{__html: question}}/>
            <div>
                {answers.map(answer => (
                    <div>
                        <button disabled={userAnswer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{__html: answer}}/>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default QuestionCard
