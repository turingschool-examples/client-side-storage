var scoreButton = document.getElementById('score-button');
var highScoreSpan = document.getElementById('high-score');
var highScore = 0;
addHighScoreToPage(highScore);

scoreButton.addEventListener('click', function(){
  var score = generateScore();
  highScore = calculateHighScore(score);
  addHighScoreToPage(highScore);
}, false);

function calculateHighScore(score){
  return Math.max(score, highScore);
}

function addHighScoreToPage(score){
  highScoreSpan.innerText = score;
}

function generateScore(){
  return getRandomInt(1, 100);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
