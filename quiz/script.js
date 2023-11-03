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
  if (this.questionIndex().isCorrectAnswer(answer)) {
    this.score++
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
    showScores()
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
  <h2 id="score">You scored: ${quiz.score} of ${quiz.question.length}</h2>
  <div class='quiz-repeat'>
  <a href="index.html">Try Again?</a></div>`

  let quizEl = document.getElementById("quiz")
  quizEl.innerHTML = quizEndHTML;
}

// Create quiz questions

let questions = [
  new Question("Hyper Text Markup Stands For", ["JQuery", "XHTML", "CSS", "HTML"], "HTML"),
  new Question("Hyper Text Markup Stands For", ["JQuery", "XHTML", "CSS", "HTML"], "HTML"),
  new Question("Hyper Text Markup Stands For", ["JQuery", "XHTML", "CSS", "HTML"], "HTML"),
  new Question("Hyper Text Markup Stands For", ["JQuery", "XHTML", "CSS", "HTML"], "HTML")
]

let quiz = new Quiz(questions)

// display questions
displayQuestion();