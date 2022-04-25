function init() {
    document.getElementById('allQuestions').innerHTML = questions.length;
    //Hier zeige ich die anzhal der Fragen an mit questions.length
    showQuestion();
}


function showQuestion() {
    if (currentQuestion >= questions.length) {
        document.getElementById('endScreen').style = '';
        document.getElementById('quizBody').style = 'display: none;';
        document.getElementById('questionMarkPicture').style = 'display: none;';
        document.getElementById('progressEndScreen').style = 'display: none;';
        document.getElementById('amountOfQuestions').innerHTML = questions.length;
        document.getElementById('amountOfRightQuestions').innerHTML = rightQuestions;
    } else {
        let percent = (currentQuestion + 1) / questions.length; //Ausrechnen der Progress-Bar
        percent = Math.round(percent * 100); //Erst wird das ganze ausgerechnet und dann wird das ganze mit Math.round gerundet
        document.getElementById('progressBar').innerHTML = `${percent}%`
        document.getElementById('progressBar').style = `width: ${percent}%;`

        let question = questions[currentQuestion];
        document.getElementById('questionNumber').innerHTML = currentQuestion + 1;
        //Hier zeige ich die Aktuelle Frage an als z.B 2 von 7
        document.getElementById('questionText').innerHTML = question['question'];
        document.getElementById('answer1').innerHTML = question['answer1'];
        document.getElementById('answer2').innerHTML = question['answer2'];
        document.getElementById('answer3').innerHTML = question['answer3'];
        document.getElementById('answer4').innerHTML = question['answer4'];
    }
}


function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    // mit .slice(-1) hole ich mir das letze Zeichen von einem String
    let idOfRightAnswer = `answer${question['rightAnswer']}`;

    if (selectedQuestionNumber == question['rightAnswer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        // mit .parentNode hole ich mir das Übergeordnete HTML Element
        rightQuestions++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('nextButton').disabled = false;
}


function nextQuestion() {
    currentQuestion++; // Wird von 0 auf z.B 1 erhöht 
    showQuestion();
    document.getElementById('nextButton').disabled = true;
    resetAnswers();
}


function resetAnswers() {
    document.getElementById('answer1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer1').parentNode.classList.remove('bg-success');
    document.getElementById('answer2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer2').parentNode.classList.remove('bg-success');
    document.getElementById('answer3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer3').parentNode.classList.remove('bg-success');
    document.getElementById('answer4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer4').parentNode.classList.remove('bg-success');
}

function restartGame() {
    //document.getElementById('headerImg').src = 'img/fragezeichen.png';
    document.getElementById('quizBody').style = ''; // Question-Container Einblenden 
    document.getElementById('endScreen').style = 'display: none;'; //Endscreen Ausblenden 
    currentQuestion = 0;
    rightQuestions = 0;
    init();
}