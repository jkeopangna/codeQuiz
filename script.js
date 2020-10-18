var section = document.getElementById('section')

var startBtn = document.getElementById('startBtn')

var questionContainer = document.getElementById('question-container')

var showQuestion = document.getElementById('question')

var showAnswers = document.getElementById('btn')

var answers = ["5", "Michael Myers", "Wayan Bros", "The upside down", "3"]

var questions = ["How many Scream movies have been made?", "Who is the man behind the mask in the Halloween movies?", "Which pair of brothers directed Scary Movie?", "Where did the Mind Flayer come from?", "How many times must you say Beetlejuice?"]



startBtn.addEventListener('click', startGame)
showAnswers.addEventListener('click', function (){
    questions++
    question()
})

function startGame() {
    console.log('Start');
    section.classList.add('hide');
    questionContainer.classList.remove('hide')
    Question()
}

function nextQuestion(){
    
}

function Question(){
    showQuestion.innerText = questions[1]
    for (var i = 0; i < answers1; i++) {
        showAnswers.innerText = answers1.Math.floor(Math.random())
    }
    }


