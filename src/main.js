import { initLightToggle } from './ui/lightswitch.js';
import { quizzes } from './quizManager.js';
import { ScreenTransitionManager } from './ui/screenTransitionManager.js';

const mainQuizContainer = document.getElementById('quiz-container');

const appHeaderQuizCategories = document.querySelectorAll(
  '.app-header-quiz-category'
);
const currentQuizLabel = document.getElementById('current-category-label');
const currentQuizImages = document.querySelectorAll(
  '.current-quiz-label-image'
);

const btnHTMLQuiz = document.getElementById('btn-quiz-choice-html');
const btnCSSQuiz = document.getElementById('btn-quiz-choice-css');
const btnJSQuiz = document.getElementById('btn-quiz-choice-js');
const btnAccessibilityQuiz = document.getElementById(
  'btn-quiz-choice-accessibility'
);

const endScreenCategory = document.getElementById('end-screen-category-label');

const playAgainButton = document.getElementById('btn-play-again');

function setAppHeaderCategoryIconBg(color) {
  appHeaderQuizCategories.forEach((el) => {
    el.children[0].dataset.bgColor = color;
  });
}

function setCurrentQuizImage(value) {
  appHeaderQuizCategories.forEach((el) => {
    el.dataset.quizActive = 'true';
  });

  currentQuizImages.forEach((el) => {
    el.src = `${value}`;
  });
}

function appendQuiz(quiz) {
  mainQuizContainer.innerHTML = '';

  Object.values(quiz.questions).forEach((question) => {
    mainQuizContainer.append(question.section);
  });
}

function initQuizCategory(quizCategory, color) {
  setCurrentQuizImage(quizzes[quizCategory].icon);
  setAppHeaderCategoryIconBg(color);
  currentQuizLabel.innerText = quizCategory;
  endScreenCategory.innerText = quizCategory;
  appendQuiz(quizzes[quizCategory]);
}

function initQuizButtons() {
  btnHTMLQuiz.addEventListener('click', () => {
    initQuizCategory('HTML', 'orange');
  });

  btnCSSQuiz.addEventListener('click', () => {
    initQuizCategory('CSS', 'green');
  });

  btnJSQuiz.addEventListener('click', () => {
    initQuizCategory('JavaScript', 'blue');
  });

  btnAccessibilityQuiz.addEventListener('click', () => {
    initQuizCategory('Accessibility', 'purple');
  });
}

initLightToggle();
ScreenTransitionManager.initQuizChoiceButtons();
initQuizButtons();

playAgainButton.addEventListener('click', () => {
  mainQuizContainer.innerHTML = '';

  appHeaderQuizCategories.forEach((el) => {
    el.dataset.quizActive = 'false';
  });

  ScreenTransitionManager.resetScreens();
});
