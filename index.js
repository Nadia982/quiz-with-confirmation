const quizData = [
    {
        id: 1,
        question: "Is this sentence an exclamation or a question? 'How disappointing it was that it rained on sports day.'",
        options: ["Exclamation", "Question"],
        correct: 0,
        questionRef: "paper1-2023-2a",
      },
      {
        id: 2,
        question: "Is this sentence an exclamation or a question? 'How many times have you been to the swimming pool this week'",
        options: ["Exclamation", "Question"],
        correct: 1,
        questionRef: "paper1-2023-2b",
      },
]

const answerElement = document.querySelectorAll('.answer');
const [questionElement, option_1, option_2, option_3, option_4] = document.querySelectorAll('#question,  .option_1, .option_2, .option_3, .option_4'); 
const submitBtn = document.querySelector('#submit');

const currentQuiz = 0; 
const score = 0; 

const loadQuiz = () => {
const {question, options } = quizData[currentQuiz];
console.log(options)
questionElement.innerText = question;
// options.forEach((curOption, index) => (option_1.innerText = curOption)); 
options.forEach((curOption, index) => window[`option_${index+1}`].innerText = curOption) 
}

loadQuiz();
