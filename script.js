/////////VARIABLES/////////

// var section = document.getElementById('section')

// Start button to start quiz

var startBtn = document.getElementById
('startBtn')

// Container element that holds quiz questions

var questionContainer = document.getElementById('question-container')

// Variables set for timer function

var timer = 1;
let time = timer * 60;
var countdown = document.getElementById('timer');

// Variable to document questions on quiz

var showQuestion = document.getElementById('question')

// Variable to document answers on answer buttons to the HTML

var showAnswers = document.getElementById('btn')

var answers = ["5", "Michael Myers", "Wayan Bros", "The upside down", "3"]

// Variable with an array that holds the quiz questions

var questions = ["How many Scream movies have been made?", "Who is the man behind the mask in the Halloween movies?", "How many times must you shouldn't say Beetlejuice?"]

var answers1 = [5, 3, 8, 2]

/////////Event Listeners//////////

// Event listener that starts quiz on click
startBtn.addEventListener('click', startQuiz)

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
    var minutes = 0;
    let seconds = time % 1000;
    // seconds = seconds < 10 ? '0' + seconds : seconds;
    countdown.innerHTML = minutes + seconds
    time--;
    time = time < 0 ? 0 : time;
    if (sountdown == 0 * 1000) {
        startQuiz()
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
    showQuestion.innerHTML = questions[0]
    // for (var i = 0; i < questions.length; i++) {
    //    showQuestion.innerHTML = Math.floor(Math.random() * questions.length)
    // }
    // for (var i = 0; i < answers1.length; i++) {
    //     showAnswers.innerText = answers1
    // }
    Question()
    }

    
function nextQuestion(){
    showQuestion.innerHTML = questions[1]
}


