/////////VARIABLES/////////


// Start button to start quiz

var startBtn = document.getElementById
('startBtn')

// Play again button to return to home screen

var playAgain = document.getElementById('playAgain')

// Container element that holds quiz questions

var questionContainer = document.getElementById('question-container')

// Container element that holds score submittions

var scoreContainer = document.getElementById('score-container')

// Variables set for timer function

var startTime = 1
let time = 60;
var endTime = 0;
var countdown = document.getElementById('startTime');

// Variables to store & track scores

var username = document.getElementById('username')
var saveScore = document.getElementById('saveScore')
var finalScore = document.getElementById('finalScore')
var highScores = localStorage.getItem('highScores')

// Variable to document questions on quiz

var showQuestion = document.getElementById('question')

// Variable to document answers on answer buttons to the HTML

var showAnswers = document.getElementById('choiceBtn')

// Variable with an array that holds the quiz questions

var questions = [
    { quizQuestions: "How many Scream movies have been made?",
      choices: [
          {text: "5", correct: true}, 
          {text: "3", correct: false},
          {text: "8", correct: false},
          {text: "2", correct: false},
        ]
    
},
    { quizQuestions: "Who is the man behind the mask in the Halloween movies?",
    choices: ["Freddie, Michael Myers, Ben Macchok, Jeff"],
    answer: "Michael Myers"
},
    { quizQuestions: "How many times must you shouldn't say Beetlejuice?",
      choices: ["7", "1", "50", "3"],
      answer: "3"
}    
]

// Local storage element to track scores

localStorage.setItem('highScores', [])
console.log(localStorage.getItem('highScores'))

// username.addEventListener('keyup', () => )

/////////Event Listeners//////////

// Event listener that starts quiz on click
startBtn.addEventListener('click', startQuiz)

// playAgain.addEventListener('click')

// Timer interval by seconds starting at 1min
setInterval(startTimer, 1000);

// Event listener that shows next question once answer is picked
showAnswers.addEventListener('click', function (){
    questions++
    Question()
})


/////////FUNCTIONS//////////

// Timer function
function startTimer() {
  
    var seconds = time % 1000;
    seconds = seconds < 1 ? '0' + seconds : seconds;
    countdown.innerHTML = seconds
    time--;
    time = time < 0 ? 0 : time;
    if (time === 00) {
        questionContainer.classList.add('hide')
        scoreContainer.classList.remove('hide')
    }
}

// Start quiz function
function startQuiz() {
    console.log('Start');
    section.classList.add('hide');
    questionContainer.classList.remove('hide')
    Question()
    startTimer()
}
    

function Question(){

    var test1 = questions[0]

    var test = document.getElementById('question')

    test.innerHTML = test1.quizQuestions

    questions.choices.forEach(choices => {
        var button = document.getElementById('button')
        button.innerHTML = choices
    })
    }

    
function playAgain(){
    questionContainer.classList.add('hide');
    score-container.classList.remove('hide');
}
