"use client";
import React, {useState} from 'react'
import { quiz } from '../data';

const page = () => {
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [ checked, setChecked] = useState(false);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [result, setResult] = useState ({
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
    });

    const {questions} = quiz;
    const { question, answers, correctAnswer } = questions[activeQuestion];

  return (
    <div className='container'>
        <h1>Quiz Page</h1>

        <div>
            <h2>
                Question: {activeQuestion + 1}
                <span> /{questions.length}</span>
            </h2>
        </div>
        
        </div>
  )
}

export default page