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

function initQuizButtons() {
  btnHTMLQuiz.addEventListener('click', () => {
    setCurrentQuizImage(quizzes['HTML'].icon);
    setAppHeaderCategoryIconBg('orange');
    currentQuizLabel.innerText = 'HTML';
    endScreenCategory.innerText = 'HTML';
    appendQuiz(quizzes['HTML']);
  });

  btnCSSQuiz.addEventListener('click', () => {
    setCurrentQuizImage(quizzes['CSS'].icon);
    setAppHeaderCategoryIconBg('green');
    currentQuizLabel.innerText = 'CSS';
    endScreenCategory.innerText = 'CSS';
    appendQuiz(quizzes['CSS']);
  });

  btnJSQuiz.addEventListener('click', () => {
    setCurrentQuizImage(quizzes['JavaScript'].icon);
    setAppHeaderCategoryIconBg('blue');
    currentQuizLabel.innerText = 'JavaScript';
    endScreenCategory.innerText = 'JavaScript';
    appendQuiz(quizzes['JavaScript']);
  });

  btnAccessibilityQuiz.addEventListener('click', () => {
    setCurrentQuizImage(quizzes['Accessibility'].icon);
    setAppHeaderCategoryIconBg('purple');
    currentQuizLabel.innerText = 'Accessibility';
    endScreenCategory.innerText = 'Accessibility';
    appendQuiz(quizzes['Accessibility']);
  });
}

initLightToggle();
ScreenTransitionManager.initQuizChoiceButtons();
initQuizButtons();
