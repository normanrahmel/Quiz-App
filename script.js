function init() {
  document.getElementById("allQuestions").innerHTML = questions.length;
  //Hier zeige ich die anzhal der Fragen an mit questions.length
  showQuestion();
}

function showQuestion() {
  if (gameIsOver()) {
    showEndScreen();
  } else {
    updateProgressBar();
    shownextQuestion();
  }
}

function gameIsOver() {
  return currentQuestion >= questions.length;
  //Wenn currentQuestion 7 ist kommt aus dieser function true raus und der End-Screen wird angezeigt.
}

function showEndScreen() {
  //Zeigt mir den Endscreen an
  document.getElementById("endScreen").style = "";
  document.getElementById("quizBody").style = "display: none;";
  document.getElementById("questionMarkPicture").style = "display: none;";
  document.getElementById("progressEndScreen").style = "display: none;";
  document.getElementById("amountOfQuestions").innerHTML = questions.length;
  document.getElementById("amountOfRightQuestions").innerHTML = rightQuestions;
}

function shownextQuestion() {
  //Zeigt mir immer die nächste Frage an
  let question = questions[currentQuestion];
  document.getElementById("questionNumber").innerHTML = currentQuestion + 1;
  //Hier zeige ich die Aktuelle Frage an als z.B 2 von 7
  document.getElementById("questionText").innerHTML = question["question"];
  document.getElementById("answer1").innerHTML = question["answer1"];
  document.getElementById("answer2").innerHTML = question["answer2"];
  document.getElementById("answer3").innerHTML = question["answer3"];
  document.getElementById("answer4").innerHTML = question["answer4"];
}

function updateProgressBar() {
  //Berechnet mir immer meinen Fortschritt
  let percent = (currentQuestion + 1) / questions.length; //Ausrechnen der Progress-Bar
  percent = Math.round(percent * 100); //Erst wird das ganze ausgerechnet und dann wird das ganze mit Math.round gerundet

  document.getElementById("progressBar").innerHTML = `${percent}%`;
  document.getElementById("progressBar").style = `width: ${percent}%;`;
}

function answer(selection) {
  let question = questions[currentQuestion];
  let selectedQuestionNumber = selection.slice(-1);
  // mit .slice(-1) hole ich mir das letze Zeichen von einem String
  let idOfRightAnswer = `answer${question["rightAnswer"]}`;

  if (rightAnswerSelected(selectedQuestionNumber, question)) {
    document.getElementById(selection).parentNode.classList.add("bg-success");
    // mit .parentNode hole ich mir das Übergeordnete HTML Element
    document.getElementById("containerAnswer").classList.add("disabledbutton");
    audioSuccess.play();
    rightQuestions++;
  } else {
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document
      .getElementById(idOfRightAnswer)
      .parentNode.classList.add("bg-success");
    document.getElementById("containerAnswer").classList.add("disabledbutton");
    audioWrong.play();
  }
  document.getElementById("nextButton").disabled = false;
}

function rightAnswerSelected(selectedQuestionNumber, question) {
  return selectedQuestionNumber == question["rightAnswer"];
}

function nextQuestion() {
  currentQuestion++; // Wird von 0 auf z.B 1 erhöht
  showQuestion();
  document.getElementById("nextButton").disabled = true;
  resetAnswers();
}

function resetAnswers() {
  document.getElementById("answer1").parentNode.classList.remove("bg-danger");
  document.getElementById("answer1").parentNode.classList.remove("bg-success");
  document.getElementById("answer2").parentNode.classList.remove("bg-danger");
  document.getElementById("answer2").parentNode.classList.remove("bg-success");
  document.getElementById("answer3").parentNode.classList.remove("bg-danger");
  document.getElementById("answer3").parentNode.classList.remove("bg-success");
  document.getElementById("answer4").parentNode.classList.remove("bg-danger");
  document.getElementById("answer4").parentNode.classList.remove("bg-success");
  document.getElementById("containerAnswer").classList.remove("disabledbutton");
}

function restartGame() {
  window.location.reload();
  /*
    //Zweite möglichkeit das Spiel neu zu Laden

    document.getElementById('headerImg').src = 'img/fragezeichen.png';
    document.getElementById('quizBody').style = ''; // Question-Container Einblenden 
    document.getElementById('endScreen').style = 'display: none;'; //Endscreen Ausblenden 
    currentQuestion = 0;
    rightQuestions = 0;
    init();
    */
}

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "Gast" && password === "Test123") {
      window.location.href = "index.html";
    } else {
      alert("Falscher Benutzername oder Passwort.");
    }
  });
});
