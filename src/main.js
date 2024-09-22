import { initLightToggle } from './lightswitch.js';
import { quizzes } from './quizManager.js';
import { initQuizChoiceButtons } from './screenTransitionManager.js';

console.log(quizzes);

console.log(quizzes['HTML'].questions[2].answer);
// console.log(quizzes['HTML'].questions[1]);

initLightToggle();
initQuizChoiceButtons();
