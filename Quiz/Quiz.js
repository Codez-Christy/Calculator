const questions=[
    {
        question: 'What is the capital of Kenya?',
        options: ['Nakuru', 'Kisumu', 'Nairobi', 'Mombasa'],
        correctAnswer: 'Nairobi'
    },
    {
        question: 'Which Planet is known as the Red Planet?',
        options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
        correctAnswer:'Mars'
    },
    {
        question: 'What is the largest Mammal?',
        options: ['Elephant', 'BlueWhale', 'Giraffe', 'Hippopotamus'],
        correctAnswer: 'Blue Whale'
    }
];

let currentQuestionIndex = 0;

const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const nextButton = documment.getElementById('next-button');

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    optionsContainer.innerHTML = '';
    currentQuestion.options.forEach((option,index) => {
        const button = document.createElement('button');
        button.textcontent = option;
        button.addEventListener('click', () => checkAnswer(index));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(optionIndex) {
    const selectedOption = questions[currentQuestionIndex].options[optionIndex];
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;

    if (selectedOption === correctAnswer) {
        alert('Correct!');
    } else {
        alert('Incorrect! The correct answer is ${correctAnswer}.');
    
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();    
    } else {
        alert('Quiz completed!');
        resetQuiz();
    }
}
function resetQuiz() {
    currentQuestionIndex = 0;
    showQuestion();
}

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        alert('quiz completed!');
        resetQuiz();
    }
});

//Initial Question Display
showQuestion();