//VARIABLES
//Connects the elements from the index.html elements with the new variables created in the script.js
const startButton = document.getElementById("start-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonElement =document.getElementById("answer-buttons");

//Can't be a constant as it is changing
let currentQuestionIndex;

//Event listener
startButton.addEventListener("click", startGame);

//Starts the game when start button is clicked
function startGame() {
    //to hide the start button
    startButton.classList.add("hide")
    //starts the question with first position from quizQuestion Arrqy
    currentQuestionIndex = 0
    //after clicking on start button question and answers shall be appear so we need to remove the hide class
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
}

function setNextQuestion() {
    showQuestion(quizQuestions[currentQuestionIndex])
}

//
function showQuestion(questions) {
    questionElement.innerText =questions.question
    //loop thru the answers
    questions.answers.forEach(answer => {
        //creating a button for each answer
        const button = document.createElement("button")
        //adding answers text to the button
        button.innerText = quizQuestions[0].answers[answer.text]

        //the way to access the answers but how do I integrate this into the button??
        //console.log(quizQuestions[0].answers[1])
        //gives each button the same answer
        //button.innerText = quizQuestions[0].answers[1]
        //not working
        //button.innerText = quizQuestions[0].answers[text]
        //undefined
        //button.innerText = quizQuestions[0].answers.text

        //add btn class to button
        button.classList.add("btn")
        //check if answers are correct
        if(answer.correct) {
            //adds data correct to the button
            button.dataset.correct = answer.correct
        }
        //adds event click event to the button when answer is selected, second pararmeter is from function selectAnswer
        button.addEventListener("click", selectAnswer)
        //adds created buttons to the html
        answerButtonElement.appendChild(button)

    })
}


function selectAnswer(e) {

}

//Array with questions
const quizQuestions = [

    {question: "How was the Dellendistrict created?",
        answers: ["Meteor", "Volcano", "Big Bang", "Earthquake"],               
        correct: 0
    },

    {question: "What is the stone called that only can be found in the Dellendistrict?",
        answers: ["Dellennit", "Dellenkilt", "Dellenstone", "Dellenquartz"],               
        correct: 0
    },

    {question: "When were the Dellenlakes formed?",
        answers: ["Stone Age", "Bronce Age", "Ice Age", "Iron Age"],               
        correct: 2
    },

    {question: "Which is the biggest place in the Dellendistrict?",
        answers: ["Bjuråker", "Norbo", "Delsbo", "Moviken"],               
        correct: 2
    },

    {question: "Which place is not lying at the Dellenlakes?",
    answers: ["Delsbo", "Moviken", "Friggesund", "Eckelsbo"],               
        correct: 3
    }
];

