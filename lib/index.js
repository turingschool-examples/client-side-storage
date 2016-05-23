var scoreButton = document.getElementById('score-button');
var highScoreSpan = document.getElementById('high-score');

if(!localStorage.getItem('highScore')){
  localStorage.setItem('highScore', 0);
};

var highScore = localStorage.getItem('highScore');
addHighScoreToPage(highScore);

scoreButton.addEventListener('click', function(){
  var score = generateScore();
  highScore = calculateHighScore(score);
  addHighScoreToPage(highScore);
  localStorage.setItem('highScore', highScore);
}, false);

function calculateHighScore(score){
  return Math.max(score, highScore);
}

function addHighScoreToPage(score){
  highScoreSpan.innerText = score;
}

function generateScore(){
  return getRandomInt(1, 1000);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
