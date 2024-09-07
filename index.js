const quizData = [
  {
    id: 1,
    // question: "Is this sentence an exclamation or a question? 'How many times have you been to the swimming pool this week'",
    options: ["wrighting", "writing"],
    correct: 1,
    questionRef: "english",
  },
  {
    id: 2,
    // question: "Is this sentence an exclamation or a question? 'How many times have you been to the swimming pool this week'",
    options: ["punctuation", "puctuation"],
    correct: 0,
    questionRef: "english",
  },
];

const answerElement = document.querySelectorAll(".answer");
const [option_1, option_2] = document.querySelectorAll(
  ".option_1, .option_2"
);
const submitBtn = document.querySelector("#submit");

const currentQuiz = 0;
const score = 0;

const loadQuiz = () => {
  const { question, options } = quizData[currentQuiz];
  console.log(options);
  // questionElement.innerText = question;
  options.forEach(
    (curOption, index) => (window[`option_${index + 1}`].innerText = curOption)
  );
};

loadQuiz();
