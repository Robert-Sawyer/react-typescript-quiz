import {shuffleArray} from "./utils";

export type Question = {
    category: string,
    difficulty: string,
    correct_answer: string,
    incorrect_answers: string[],
    question: string,
    type: string
}

export type QuestionState = Question & { answers: string[] }

export enum Difficulty {
    EASY = 'easy',
    MEDIUM = 'medium',
    HARD = 'hard'
}

//ustawiam dwa parametry - liczbę pytań do pobrania i poziom trudności. Ponieważ to TypeScript muszę zdefinować typy
//a do tego muszę stworzyć enuma z zazwami poziomów trudności.
export const fetchQuestions = async (amount: number, difficulty: Difficulty) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`
    //powodem dla którego wpisuję podwójne await jest to że najpierw czekam na pobranie danych fetchem a potem
    //na przekonwertowanie danych na jsona
    const data = await (await fetch(endpoint)).json()
    console.log(data)
    return data.results.map((question: Question) => (
        {
            ...question,
            answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
        }
        )

    )
}
