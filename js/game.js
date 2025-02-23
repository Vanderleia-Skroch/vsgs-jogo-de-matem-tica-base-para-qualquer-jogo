let correctAnswer;
let score = 0;
let gameMode = 'basic';

function startGame(mode) {
    gameMode = mode;
    document.getElementById('game-area').style.display = 'block';
    newQuestion();
}

function newQuestion() {
    let questionData = generateQuestion(gameMode);
    correctAnswer = questionData.answer;
    updateUI(questionData.question);
}

function checkAnswer() {
    let userAnswer = document.getElementById('answer').value;
    if (parseInt(userAnswer) === correctAnswer) {
        document.getElementById('result').innerText = "Correto!";
        score += 10; // Incrementa a pontuação
    } else {
        document.getElementById('result').innerText = "Errado! Tente novamente.";
        score -= 5; // Penaliza erro
    }
    document.getElementById('score').innerText = score;
}
