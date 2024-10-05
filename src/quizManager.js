import { data } from './fetchQuiz.js';
import { Quiz } from './models/quiz.js';

export const quizzes = {};

data.quizzes.forEach((element) => {
	const quiz = new Quiz(element.title, element.icon, element.questions);
	quizzes[element.title] = quiz;
});
