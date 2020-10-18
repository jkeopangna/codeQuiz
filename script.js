var section = document.getElementById('section')

var startBtn = document.getElementById('startBtn')

var questionContainer = document.getElementById('question-container')

var timer = 1;
let time = timer * 60;
var countdown = document.getElementById('timer');

var showQuestion = document.getElementById('question')

var showAnswers = document.getElementById('btn')

var answers = ["5", "Michael Myers", "Wayan Bros", "The upside down", "3"]

var questions = ["How many Scream movies have been made?", "Who is the man behind the mask in the Halloween movies?", "Which pair of brothers directed Scary Movie?", "Where did the Mind Flayer come from?", "How many times must you say Beetlejuice?"]



startBtn.addEventListener('click', startGame)
setInterval(startTimer, 1000);
showAnswers.addEventListener('click', function (){
    questions++
    question()
})

function startGame() {
    console.log('Start');
    section.classList.add('hide');
    questionContainer.classList.remove('hide')
    Question()
    startTimer()
}

function startTimer() {
    var minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    countdown.innerHTML = minutes + seconds
    time--;
    time = time < 0 ? 0 : time;
    if (time === 0 ) {
        alert("Time is up!")
        startGame()
    }
}

function Question(){
    showQuestion.innerText = questions[1]
    for (var i = 0; i < answers1; i++) {
        showAnswers.innerText = answers1.Math.floor(Math.random())
    }
    }

    
function nextQuestion(){
    
}


