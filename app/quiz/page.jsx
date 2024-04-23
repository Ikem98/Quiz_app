"use client";
import React, { useState } from 'react';
import { quiz } from '../data.js';

const Page = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(false);
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswers, setNewAnswers] = useState(['', '', '', '']);
  const [correctIndex, setCorrectIndex] = useState(0);

  const { questions } = quiz;

  const onAnswerSelected = (answer, idx) => {
    setChecked(true);
    setSelectedAnswerIndex(idx);
    setSelectedAnswer(answer === questions[activeQuestion].correctAnswer);
  };

  const nextQuestion = () => {
    setResult(prev => selectedAnswer
        ? { ...prev, score: prev.score + 5, correctAnswers: prev.correctAnswers + 1 }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 });
    const nextIndex = activeQuestion !== questions.length - 1 ? activeQuestion + 1 : 0;
    setActiveQuestion(nextIndex);
    setShowResult(nextIndex === 0);
    setSelectedAnswerIndex(null);
    setChecked(false);
  };

  const handleAddQuestion = () => {
    if (newQuestion && newAnswers.every(answer => answer.trim() !== '') && newAnswers.length === 4) {
      const updatedQuestions = [
        ...questions,
        {
          id: questions.length + 1,
          question: newQuestion,
          answers: newAnswers,
          correctAnswer: newAnswers[correctIndex]
        }
      ];
      quiz.questions = updatedQuestions;  // Update the global quiz object
      setNewQuestion('');
      setNewAnswers(['', '', '', '']);
      setCorrectIndex(0);
    } else {
      alert('Please fill in all fields correctly.');
    }
  };

  return (
    <div className='container'>
      <h1>Quiz Page</h1>
      {!showResult ? (
        <div className='quiz-container'>
          <h2 className='question-header'>Question {activeQuestion + 1}/{questions.length}</h2>
          <h3>{questions[activeQuestion].question}</h3>
          <ul>
            {questions[activeQuestion].answers.map((answer, idx) => (
              <li key={idx} onClick={() => onAnswerSelected(answer, idx)}
                  className={selectedAnswerIndex === idx ? 'li-selected' : 'li-hover'}>
                {answer}
              </li>
            ))}
          </ul>
          <button onClick={nextQuestion} disabled={!checked} className={!checked ? 'btn-disabled' : 'btn'}>
            {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
          </button>
        </div>
      ) : (
        <div className='quiz-container'>
          <h2>Results</h2>
          <p>Overall Score: {((result.score / (questions.length * 5)) * 100).toFixed(2)}%</p>
          <p>Total Questions: {questions.length}</p>
          <p>Total Score: {result.score}</p>
          <p>Correct Answers: {result.correctAnswers}</p>
          <p>Wrong Answers: {result.wrongAnswers}</p>
          <button onClick={() => window.location.reload()}>Restart</button>
        </div>
      )}
      <div className='add-question-container'>
        <h2>Add a New Question</h2>
        <input type="text" placeholder="Enter the question" value={newQuestion} onChange={e => setNewQuestion(e.target.value)} />
        {newAnswers.map((answer, idx) => (
          <input key={idx} type="text" placeholder={`Answer ${idx + 1}`} value={answer}
                 onChange={e => {
                   const updatedAnswers = newAnswers.slice();
                   updatedAnswers[idx] = e.target.value;
                   setNewAnswers(updatedAnswers);
                 }} />
        ))}
        <select value={correctIndex} onChange={e => setCorrectIndex(parseInt(e.target.value, 10))}>
          {newAnswers.map((_, idx) => (
            <option key={idx} value={idx}>{`Answer ${idx + 1}`}</option>
          ))}
        </select>
        <button onClick={handleAddQuestion}>Add Question</button>
      </div>
    </div>
  );
};

export default Page;