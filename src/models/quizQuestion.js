import { ScreenTransitionManager } from '../ui/screenTransitionManager.js';

export class QuizQuestion {
  _question = '';
  _options = {};
  _answer = '';
  _btnSubmit = null;
  _optionElements = {};
  _noAnswerWarningLabel = null;
  _currentQuestionAnswered = false;
  _section = null;
  _sectionPosition = null;
  _finalQuestion = false;

  constructor(
    question,
    options,
    answer,
    moveAllSectionsFunction,
    addToScore,
    section,
    handleEndScreen
  ) {
    this.question = question;
    this.options = options;
    this.answer = answer;
    this.moveAllSections = moveAllSectionsFunction;
    this.addToScore = addToScore;
    this.section = section;
    this.handleEndScreen = handleEndScreen;

    this.btnSubmit = this.section.querySelector('.quiz-submit-question');

    this.optionElements = this.section.querySelectorAll(
      '.btn-quiz-question-option'
    );

    this.noAnswerWarningLabel = this.section.querySelector(
      '.no-answer-selected-label-container'
    );

    this.btnSubmit.addEventListener('click', this.handleSubmit.bind(this));
  }

  get question() {
    return this._question;
  }

  set question(value) {
    this._question = value;
  }

  get options() {
    return this._options;
  }

  set options(value) {
    this._options = value;
  }

  get answer() {
    return this._answer;
  }

  set answer(value) {
    this._answer = value;
  }

  get btnSubmit() {
    return this._btnSubmit;
  }

  set btnSubmit(value) {
    this._btnSubmit = value;
  }

  get optionElements() {
    return this._optionElements;
  }

  set optionElements(value) {
    this._optionElements = value;
  }

  get noAnswerWarningLabel() {
    return this._noAnswerWarningLabel;
  }

  set noAnswerWarningLabel(value) {
    this._noAnswerWarningLabel = value;
  }

  get currentQuestionAnswered() {
    return this._currentQuestionAnswered;
  }

  set currentQuestionAnswered(value) {
    this._currentQuestionAnswered = value;
  }

  get section() {
    return this._section;
  }

  set section(value) {
    this._section = value;
  }

  get sectionPosition() {
    return this._sectionPosition;
  }

  set sectionPosition(value) {
    this._sectionPosition = value;
  }

  get finalQuestion() {
    return this._finalQuestion;
  }

  set finalQuestion(value) {
    this._finalQuestion = value;
  }

  handleSubmit = () => {
    if (!this.currentQuestionAnswered) {
      this.checkCorrectAnswer();
    } else {
      if (!this.finalQuestion) {
        this.moveAllSections();
      } else {
        this.handleEndScreen();
        ScreenTransitionManager.endSlideMainScreens();
        this.resetQuestion();
      }
    }
  };

  checkCorrectAnswer = () => {
    const options = Array.from(this.optionElements).filter(
      (node) => node instanceof Element
    );

    const correctButton = this.getCorrectQuestionButton();

    let optionsChecked = 0;

    options.forEach((option) => {
      const optionInput = option.querySelector('input');
      const optionLabel = option;
      if (optionInput.checked) {
        this.noAnswerWarningLabel.style.visibility = 'hidden';
        optionsChecked++;
        if (optionInput.value === this.answer) {
          // CORRECT
          this.currentQuestionAnswered = true;
          optionLabel.dataset.correct = 'true';
          optionLabel.dataset.userPicked = 'true';
          this.disableRadioButtons();
          this.addToScore();
        } else {
          // WRONG
          this.currentQuestionAnswered = true;
          optionLabel.dataset.correct = 'false';
          optionLabel.dataset.userPicked = 'true';
          correctButton.dataset.correct = 'true';
          this.disableRadioButtons();
        }
        if (!this.finalQuestion) {
          this.btnSubmit.innerText = 'Next Question';
        } else {
          this.btnSubmit.innerText = 'Finish Quiz';
        }
      }
    });

    if (optionsChecked <= 0) {
      this.currentQuestionAnswered = false;
      this.noAnswerWarningLabel.style.visibility = 'visible';
    }
  };

  disableRadioButtons() {
    const elements = Array.from(this.optionElements).filter(
      (node) => node instanceof Element
    );

    elements.forEach((element) => {
      const elInput = element.querySelector('input');
      elInput.disabled = true;
    });
  }

  enableRadioButtons() {
    const elements = Array.from(this.optionElements).filter(
      (node) => node instanceof Element
    );

    elements.forEach((element) => {
      const elInput = element.querySelector('input');
      elInput.disabled = false;
    });
  }

  getCorrectQuestionButton() {
    const elements = Array.from(this.optionElements).filter(
      (node) => node instanceof Element
    );

    for (let i = 0; i < elements.length; i++) {
      const elInput = elements[i].querySelector('input');
      if (elInput.value === this.answer) {
        return elements[i];
      }
    }
    return null;
  }

  resetQuestion() {
    console.log('Resetting question!');
    const options = Array.from(this.optionElements).filter(
      (node) => node instanceof Element
    );

    const correctButton = this.getCorrectQuestionButton();

    options.forEach((option) => {
      const optionInput = option.querySelector('input');
      const optionLabel = option;
      this.noAnswerWarningLabel.style.visibility = 'hidden';
      this.currentQuestionAnswered = false;
      optionLabel.dataset.correct = 'hidden';
      optionLabel.dataset.userPicked = 'false';
      correctButton.dataset.correct = 'hidden';
      this.enableRadioButtons();
      this.btnSubmit.innerText = 'Submit Answer';
    });
  }
}
