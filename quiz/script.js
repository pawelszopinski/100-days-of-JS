// Create a class
class Quiz {
  constructor(questions){
    this.score = 0
    this.questions = questions
    this.questionIndex = 0
  }

getQuestionIndex() {
  return this.questions[this.questionIndex];
}

guess(answer) {
  if (this.getQuestionIndex().isCorrectAnswer(answer)) {
    this.score++;
  }
  this.questionIndex++;
}

isEnded() {
  return this.questionIndex ===this.questions.length;
}

}

// Questions class

class Question {
  constructor(text,choice,answer) {
    this.text = text
    this.choice = choice
    this.answer = answer
  }

  isCorrectAnswer(choice) {
    return this.answer === choice
  }
}

// Display question
function displayQuestion() {
  if (quiz.isEnded()) {
    showScore()
  } else {
    // show question
    let questionEl = document.getElementById('question')
    questionEl.innerHTML = quiz.getQuestionIndex().text

    // show options
    let choices = quiz.getQuestionIndex().choice;
    for (let i = 0; i < choices.length; i++) {
      let choiceEl = document.getElementById("choice" + i);
      choiceEl.innerHTML = choices[i];
      guess("btn" + i, choices[i])
      
    }

    showProgress();
  }
};

// Guess function

function guess(id, guess) {
  let button = document.getElementById(id);
  button.onclick = function() {
    quiz.guess(guess);
    displayQuestion();
  }
}

// Show progress

function showProgress() {
  let currentQuestionNumber = quiz.questionIndex + 1;
  let progressEl = document.getElementById("progress")
  progressEl.innerHTML = `Question ${currentQuestionNumber} of ${quiz.questions.length}`
}

// Show score

function showScore() {
  let quizEndHTML = `<h1>Quiz completed</h1>
  <h2 id="score">You scored: ${quiz.score} of ${quiz.questions.length}</h2>
  <div class='quiz-repeat'>
  <a href="index.html">Try Again?</a></div>`

  let quizEl = document.getElementById("quiz")
  quizEl.innerHTML = quizEndHTML;
}

// Create quiz questions

let questions = [
  new Question("Hyper Text Markup Stands For", ["JQuery", "XHTML", "CSS", "HTML"], "HTML"),
  new Question("Cascading Style Sheet stands for?", ["JQuery", "XHTML", "CSS", "HTML"], "CSS"),
  new Question("Which framework is linked to JS language", ["React", "Laravel", "Django", "Sass"], "React"),
  new Question("Which language is backend one?", ["PHP", "React", "React", "HTML"], "PHP"),
  new Question("Which language is the best for AI?", ["PHP", "React", "Python", "HTML"], "Python")
]

let quiz = new Quiz(questions)

// display questions
displayQuestion();

// Add a countdown
 let time  = 0.5
 let quizTimeInMinutes = time * 60 *60;
let quizTime = quizTimeInMinutes/60


let counting =document.getElementById('count-down');

function startCountDown() {
  let quizTimer = setInterval(function() {
    if(quizTime<=0){
      clearInterval(quizTimer);
      showScore()
    }
    else {
      quizTime--;
      let sec = Math.floor(quizTime % 60)
      let min = Math.floor(quizTime/60) % 60;
      counting.innerHTML = `TIME: ${min}: ${sec}`
      
    }
  },1000)
}
startCountDown();