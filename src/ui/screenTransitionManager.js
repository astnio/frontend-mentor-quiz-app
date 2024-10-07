export class ScreenTransitionManager {
  static quizIntro = document.getElementById('quiz-intro-container');
  static quizContainer = document.getElementById('quiz-container');
  static quizEndScreen = document.getElementById('quiz-end-screen');
  static quizChoiceButtons = document.querySelectorAll(
    '.btn-quiz-category-choice'
  );

  static endSlideMainScreens() {
    this.quizIntro.style.transform = 'translateX(-200%)';
    this.quizContainer.style.transform = 'translateX(-100%)';
    this.quizEndScreen.style.transform = 'translateX(0)';
    this.quizContainer.style.visibility = 'visible';
  }

  static initSlideMainScreens() {
    this.quizIntro.style.transform = 'translateX(-100%)';
    this.quizContainer.style.transform = 'translateX(0)';
    this.quizEndScreen.style.transform = 'translateX(100%)';
    this.quizContainer.style.visibility = 'visible';
  }

  static initQuizChoiceButtons() {
    this.quizChoiceButtons.forEach((btn) => {
      btn.addEventListener('click', () => this.initSlideMainScreens());
    });
  }
}
