console.clear();
const quizData = [
  {
    id: 1,
    options: ["wrighting", "writing"],
    correct: 1,
    questionRef: "english",
  },
  {
    id: 2,
    options: ["punctuation", "puctuation"],
    correct: 0,
    questionRef: "english",
  },
  {
    id: 3,
    options: ["emotions", "emetions"],
    correct: 0,
    questionRef: "english",
  },
  {
    id: 4,
    options: ["He's going to play football", "Hes going to play football"],
    correct: 0,
    questionRef: "english",
  },
  {
    id: 5,
    options: ["corrosive", "corsive"],
    correct: 0,
    questionRef: "science",
  },
  {
    id: 6,
    options: ["cautious", "catious"],
    correct: 0,
    questionRef: "english",
  },
  {
    id: 7,
    options: ["cautiously", "catiously"],
    correct: 0,
    questionRef: "english",
  },
  {
    id: 8,
    options: ["usually", "usally"],
    correct: 0,
    questionRef: "art",
  },
  {
    id: 9,
    options: ["which", "wich"],
    correct: 0,
    questionRef: "english",
  },
  {
    id: 10,
    options: ["urban", "erban"],
    correct: 0,
    questionRef: "english",
  },
  {
    id: 11,
    options: ["mischievous", "mischevious"],
    correct: 0,
    questionRef: "english",
  },
  {
    id: 12,
    options: ["container", "contaner"],
    correct: 0,
    questionRef: "english",
  },
  {
    id: 13,
    options: ["beaker", "beacker"],
    correct: 0,
    questionRef: "science",
  },
  {
    id: 14,
    options: ["wizard", "wizzerd"],
    correct: 0,
    questionRef: "english",
  },
  {
    id: 15,
    options: ["surgeon", "surgen"],
    correct: 0,
    questionRef: "english",
  },
  {
    id: 16,
    options: ["physical", "phisical"],
    correct: 0,
    questionRef: "geography",
  },
  {
    id: 17,
    options: ["measuring", "mesuring"],
    correct: 0,
    questionRef: "science",
  },
  {
    id: 18,
    options: ["really", "realy"],
    correct: 0,
    questionRef: "english",
  },
  {
    id: 19,
    options: ["element", "eliment"],
    correct: 0,
    questionRef: "music",
  },
  {
    id: 20,
    options: ["volumes", "volums"],
    correct: 0,
    questionRef: "music",
  },
  {
    id: 21,
    options: ["instruments", "instrements"],
    correct: 0,
    questionRef: "music",
  },
  {
    id: 22,
    options: ["exploring", "explouring"],
    correct: 0,
    questionRef: "music",
  },
  {
    id: 23,
    options: ["guitar", "gitar"],
    correct: 0,
    questionRef: "music",
  },
  {
    id: 24,
    options: ["Tchaikovsky", "tchaikocesay"],
    correct: 0,
    questionRef: "music",
  },
  {
    id: 25,
    options: ["continuous", "continios"],
    correct: 0,
    questionRef: "art",
  },
  {
    id: 26,
    options: ["usually", "usally"],
    correct: 0,
    questionRef: "art",
  },
  {
    id: 27,
    options: ["biscuit", "bisqet"],
    correct: 0,
    questionRef: "food",
  },

];

const questionNumber = document.querySelector(".question-number"); // the container where the question no is shown (at top)
const questionLimit = quizData.length; // limits the number of questions

let questionCounter = 0; // shows which question we are on at the top
let currentQuestion; // stores a random question from the available questions
let correctAnswers = 0; // notes how many correct answers the user has made
let questionsAskedList = []; //stores a list of questions that have been asked
let radioButtonA = document.querySelector("#a");
let radioButtonB = document.querySelector("#b");

function resetQuiz() {
  questionCounter = 0;
  correctAnswers = 0;
  availableQuestions = [];
  questionsAskedList = [];
}

function tryAgainQuiz() {
  resetQuiz(); //resets Quiz
  startQuiz(); //starts Quiz
}

function goToHome() {
  resetQuiz();
}

const answerElement = document.querySelectorAll(".answer");
const [option_1, option_2] = document.querySelectorAll(".option_1, .option_2");
const submitBtn = document.querySelector("#submit");
const score = 0;
let availableQuestions = [];

function setAvailableQuestions() {
  // Adds all questions to the availableQuestions array
  const totalQuestions = quizData.length;
  for (let i = 0; i < totalQuestions; i++) {
    availableQuestions.push(quizData[i]);
  }
}

function showQuestionNumber() {
  questionNumber.innerHTML = `Question ${
    questionCounter + 1
  } of ${questionLimit}`;
}

function getNewQuestion() {
  radioButtonA.checked = false;
  radioButtonB.checked = false;

  if (questionCounter >= questionLimit) {
    // showResult();
    resetQuiz();
  } else {
    showQuestionNumber();
    if (questionCounter == 0) {
      setAvailableQuestions();
    }
  // EXPLANATION - setAvailableQuestions() pushes all available questions to the availableQuestions array.

      const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    let options = availableQuestions[randomIndex].options;
    options = options.sort((a, b) => 0.5 - Math.random());

    const questionIndex =
      availableQuestions[randomIndex]; ////gets random question
    currentQuestion = questionIndex; // Assigns a random question to the currentQuestion variable.

    questionsAskedList.push(currentQuestion); // Pushes the randomly selected question to the questionsAskedList array.
    const index1 = availableQuestions.indexOf(questionIndex); // gets the posn of "QuestionIndex" in "AvailableQuestions" array
    availableQuestions.splice(index1, 1); // removes questionIndex from the ‘AvailableQuestions’ array
    
    options.forEach(
      (currentOption, index) =>
        (window[`option_${index + 1}`].innerText = currentOption)
    );
    questionCounter++; // increases the questionCounter variable by 1.
  }
}

submitBtn.addEventListener("click", getNewQuestion);

getNewQuestion();
