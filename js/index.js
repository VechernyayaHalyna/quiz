const questions = [
  {
    question: "Как называется традиционное новогоднее блюдо в Японии?",
    answers: ["Суши", "Тамаготи", "О-сечи", "Рамен"],
    correctAnswerIndex: 2,
  },
  {
    question: "Какой символ года 2024 по китайскому календарю?",
    answers: ["Дракон", "Тигр", "Кролик", "Змея"],
    correctAnswerIndex: 0,
  },
  {
    question: "Какое блюдо обязательно должно быть на новогоднем столе в Израиле?",
    answers: ["Индейка", "Селедка под шубой", "Яблоко в меду", "Фалафель"],
    correctAnswerIndex: 2,
    },
  {
    question: "В каком костюме приходит Дед Мороз под Новый год в Монголии?",
    answers: ["Пастух", "Охотник", "Скотовод", "Олень"],
    correctAnswerIndex: 2,
    },
  {
    question: "В какой стране в новогодний пирог кладут различные «сюрпризы» в виде монет, безделушек?",
    answers: ["Белорусь", "Румыния", "Турция", "Франция"],
    correctAnswerIndex: 1,
    },
  {
    question: "В какой стране под Новый год для пожелания счастья обливают друг друга водой?",
    answers: ["Новая Зеландия", "Китай", "Таиланд", "Монголия"],
    correctAnswerIndex: 2,
    },
];

let currentQuestionIndex = 0;
let score = 0;

const quizContainer = document.getElementById('quiz-container');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const resultContainer = document.getElementById('result-container');

// Функция для отображения вопроса
function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;
  answerButtons.innerHTML = '';
  
  // Создаём кнопки с вариантами ответа
  currentQuestion.answers.forEach((answer, index) => {
    const button = document.createElement('button');
    button.innerText = answer;
    button.classList.add('answer-btn');
    button.addEventListener('click', () => handleAnswer(index));
    answerButtons.appendChild(button);
  });
  
  nextButton.style.display = 'none'; // Скрыть кнопку "Далее" до ответа
}

// Обработчик выбора ответа
function handleAnswer(selectedIndex) {
  const currentQuestion = questions[currentQuestionIndex];
  if (selectedIndex === currentQuestion.correctAnswerIndex) {
    score++;
  }
  
  // Показываем кнопку "Далее"
  nextButton.style.display = 'block';
  nextButton.disabled = false; // Включаем кнопку "Далее" после ответа
}

// Переход к следующему вопросу
function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
    nextButton.style.display = 'none'; // Скрыть кнопку до ответа на новый вопрос
  } else {
    showResults();
  }
}

// Показать результаты
function showResults() {
  quizContainer.style.display = 'none'; // Скрыть блок с вопросами
  resultContainer.style.display = 'block'; // Показать результаты
  
  const resultText = `Вы набрали ${score} из ${questions.length} правильных ответов.`;
  document.getElementById('result-text').innerText = resultText;
}

// Инициализация викторины
nextButton.addEventListener('click', nextQuestion);

// Начало викторины
showQuestion();
