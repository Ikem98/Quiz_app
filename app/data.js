export const quiz = {
    totalQuestions: 10,
    questions: [
        {
            id: 1,
            question: 'What is the capital of France?',
            answers: ['Madrid', 'Paris', 'Jupiter', 'Saturn'],
            correctAnswer: 'Paris',
        },
        {
            id: 2,
            question: 'What is the largest planet in our solar system?',
            answers: ['Mars', 'Jupiter', 'Venus', 'Saturn'],
            correctAnswer: 'Jupiter',
        },
        {
            id: 3,
            question: 'What is the smallest country in the world?',
            answers: ['Monaco', 'Maldives', 'Vatican City', 'San Marino'],
            correctAnswer: 'Vatican City',
        },
        {
            id: 4,
            question: 'What is the most widely spoken language in the world?',
            answers: ['English', 'Mandarin', 'Spanish', 'Hindi'],
            correctAnswer: 'Mandarin',
        },
        {
            id: 5,
            question: 'Who is the founder of Microsoft?',
            answers: ['Steve Jobs', 'Bill Gates', 'Elon Musk', 'Mark Zuckerberg'],
            correctAnswer: 'Bill Gates',
        },
        {
            id: 6,
            question: 'What year did the Titanic sink?',
            answers: ['1912', '1905', '1898', '1923'],
            correctAnswer: '1912',
        },
        {
            id: 7,
            question: 'Who wrote "Hamlet"?',
            answers: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'Leo Tolstoy'],
            correctAnswer: 'William Shakespeare',
        },
        {
            id: 8,
            question: 'What chemical element has the symbol "O"?',
            answers: ['Oxygen', 'Gold', 'Silver', 'Iron'],
            correctAnswer: 'Oxygen',
        },
        {
            id: 9,
            question: 'What is the longest river in the world?',
            answers: ['Amazon', 'Nile', 'Yangtze', 'Mississippi'],
            correctAnswer: 'Nile',
        },
        {
            id: 10,
            question: 'What is the currency of Japan?',
            answers: ['Yuan', 'Ringgit', 'Yen', 'Rupee'],
            correctAnswer: 'Yen',
        }
    ]
};

// Function to shuffle the questions
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Shuffle the questions
shuffleArray(quiz.questions);
