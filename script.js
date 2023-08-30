const questionElement = document.getElementById('question');
const optionElements = document.querySelectorAll('.option');
const nextButton = document.getElementById('next-button');

const quizData = [
    {
        question: 'What is the capital of France?',
        options: ['Paris', 'Madrid', 'Berlin', 'Rome'],
        answer: 'Paris'
    },
    {
        question: 'Which planet is known as the Red Planet?',
        options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
        answer: 'Mars'
    },
    // Add more questions here
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    optionElements.forEach((option, index) => {
        option.textContent = currentQuestion.options[index];
        option.addEventListener('click', checkAnswer);
    });
}

function checkAnswer(event) {
    const selectedOption = event.target;
    const currentQuestion = quizData[currentQuestionIndex];

    if (selectedOption.textContent === currentQuestion.answer) {
        selectedOption.style.backgroundColor = 'green';
    } else {
        selectedOption.style.backgroundColor = 'red';
    }

    optionElements.forEach(option => {
        option.removeEventListener('click', checkAnswer);
    });

    nextButton.style.display = 'block';
}

function nextQuestion() {
    nextButton.style.display = 'none';
    optionElements.forEach(option => {
        option.style.backgroundColor = '#f0f0f0';
    });

    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        questionElement.textContent = 'Quiz completed!';
        optionElements.forEach(option => {
            option.style.display = 'none';
        });
    }
}

nextButton.addEventListener('click', nextQuestion);

loadQuestion();
