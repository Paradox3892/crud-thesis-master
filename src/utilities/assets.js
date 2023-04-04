import victory from '../assets/victory.png';
import thumbs_up from '../assets/thumbsup.png';
import thumbs_down from '../assets/thumbsdown.png';
import open_palm from '../assets/openpalm.png';
import okay from '../assets/okay.png';
import i_love_you from '../assets/iloveyou.png';
import rock_and_roll from '../assets/rockandroll.png';
import telephone from '../assets/telephone.png';

export const images = {
  thumbs_up: thumbs_up,
  victory: victory,
  thumbs_down: thumbs_down,
  open_palm: open_palm,
  okay: okay,
  i_love_you: i_love_you,
  rock_and_roll: rock_and_roll,
  telephone: telephone,
  // GestureDescription name
};

export const questions = [
  {
    questionText: 'Who is the first man to walk on the Moon?',
    answerOptions: [
      { symbol: '✋', answerText: 'Neil Armstrong', isCorrect: true },
      { symbol: '👍', answerText: 'Albert Einstein', isCorrect: false },
      { symbol: '👌', answerText: 'Neil Young', isCorrect: false },
      { symbol: '🤘', answerText: 'Stephen Hawking', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the fastest land animal?',
    answerOptions: [
      { symbol: '✋', answerText: 'Turtle', isCorrect: false },
      { symbol: '👍', answerText: 'Cheetah', isCorrect: true },
      { symbol: '👌', answerText: 'Giraffe', isCorrect: false },
      { symbol: '🤘', answerText: 'Lion', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the sweet food made by bees?',
    answerOptions: [
      { symbol: '✋', answerText: 'Donut', isCorrect: false },
      { symbol: '👍', answerText: 'Candy', isCorrect: false },
      { symbol: '👌', answerText: 'Sugar', isCorrect: false },
      { symbol: '🤘', answerText: 'Honey', isCorrect: true },
    ],
  },
  {
    questionText: 'Which planet is closest to the Sun?',
    answerOptions: [
      { symbol: '✋', answerText: 'Mercury', isCorrect: true },
      { symbol: '👍', answerText: 'Mars', isCorrect: false },
      { symbol: '👌', answerText: 'Venus', isCorrect: false },
      { symbol: '🤘', answerText: 'Neptune', isCorrect: false },
    ],
  },
  {
    questionText: 'Who lives in a pineaple under the sea?',
    answerOptions: [
      { symbol: '✋', answerText: 'Tinkerbell', isCorrect: false },
      { symbol: '👍', answerText: 'Spongebob Squarepants', isCorrect: true },
      { symbol: '👌', answerText: 'Woody', isCorrect: false },
      { symbol: '🤘', answerText: 'Nemo', isCorrect: false },
    ],
  },
  {
    questionText: 'What color is at the top of the rainbow?',
    answerOptions: [
      { symbol: '✋', answerText: 'Yellow', isCorrect: false },
      { symbol: '👍', answerText: 'Orange', isCorrect: false },
      { symbol: '👌', answerText: 'Red', isCorrect: true },
      { symbol: '🤘', answerText: 'Green', isCorrect: false },
    ],
  },
  {
    questionText: 'Which of the below option is an odd number?',
    answerOptions: [
      { symbol: '✋', answerText: '4', isCorrect: false },
      { symbol: '👍', answerText: '12', isCorrect: false },
      { symbol: '👌', answerText: '22', isCorrect: false },
      { symbol: '🤘', answerText: '1', isCorrect: true },
    ],
  },
  {
    questionText: 'How many continents are there?',
    answerOptions: [
      { symbol: '✋', answerText: 'Five', isCorrect: false },
      { symbol: '👍', answerText: 'Six', isCorrect: false },
      { symbol: '👌', answerText: 'Seven', isCorrect: true },
      { symbol: '🤘', answerText: 'Eight', isCorrect: false },
    ],
  },
  {
    questionText: 'What is a "legislator" make?',
    answerOptions: [
      { symbol: '✋', answerText: 'Airplanes', isCorrect: false },
      { symbol: '👍', answerText: 'Guns', isCorrect: false },
      { symbol: '👌', answerText: 'Newspaper', isCorrect: false },
      { symbol: '🤘', answerText: 'Laws', isCorrect: true },
    ],
  },
  {
    questionText: 'The earth has a crust, a mantle, and what else??',
    answerOptions: [
      { symbol: '✋', answerText: 'A core', isCorrect: true },
      { symbol: '👍', answerText: 'A basin', isCorrect: false },
      { symbol: '👌', answerText: 'A range', isCorrect: false },
      { symbol: '🤘', answerText: 'A sink', isCorrect: false },
    ],
  },
];
