import { QuizSection } from '../utils/elementMaker.js';
import { QuizQuestion } from './quizQuestion.js';

export class Quiz {
  _title = '';
  _icon = '';
  _questions = {};
  _score = 0;

  constructor(title, icon, questions) {
    this.title = title;
    this.icon = icon;
    this.moveAllSections = this.moveAllSections.bind(this);
    this.addToScore = this.addToScore.bind(this);

    let questionCounter = 0;

    for (let element of questions) {
      const quizSection = new QuizSection(
        questionCounter + 1,
        Object.keys(questions).length,
        element.question,
        element.options,
        element.answer
      );

      const newQuestion = new QuizQuestion(
        element.question,
        element.options,
        element.answer,
        this.moveAllSections,
        this.addToScore,
        quizSection
      );
      this.questions[questionCounter] = newQuestion;

      questionCounter++;

      this.initMoveSections();
    }

    const lastQuestion = this.getLastQuestion();
    const lastQuestionSubmitBtn = lastQuestion.btnSubmit;

    lastQuestionSubmitBtn.addEventListener('click', () => {
      if (this.lastQuestion.currentQuestionAnswered) {
        console.log('Last section question HAS BEEN answered!');
      } else if (!this.lastQuestion.currentQuestionAnswered) {
        console.log('Last section question NOT answered!');
      }
    });
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }

  get icon() {
    return this._icon;
  }

  set icon(value) {
    this._icon = value;
  }

  get questions() {
    return this._questions;
  }

  set questions(value) {
    this._questions = value;
  }
  get score() {
    return this._score;
  }

  set score(value) {
    this._score = value;
  }

  getLastQuestion() {
    const lastKey = Object.keys(this.questions).length - 1;
    return this.questions[lastKey];
  }

  resetScore() {
    this.score = 0;
  }

  addToScore() {
    console.log('Score added!');
    this.score = this.score + 1;
    console.log(this.score);
  }

  addQuestion(value) {
    const newQuestion = new QuizQuestion(
      value.question,
      value.options,
      value.answer
    );
    this.questions[value.question] = newQuestion;
  }

  moveAllSections() {
    Object.entries(this.questions).forEach(([index, question]) => {
      const currentPosition = question.sectionPosition;
      const newPosition = currentPosition - 100;
      question.sectionPosition = newPosition;
      question.section.style.transform = `translateX(${newPosition}%)`;
    });
  }

  initMoveSections() {
    Object.values(this.questions).forEach((question, index) => {
      const newPosition = 100 * index;
      question.sectionPosition = newPosition;
      question.section.style.transform = `translateX(${newPosition}%)`;
    });
  }
}
