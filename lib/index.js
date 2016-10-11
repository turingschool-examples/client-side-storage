var scoreButton = document.getElementById('score-button');
var highScoreList = document.getElementById('high-scores');
var highScore = 0;
// addHighScoreToPage(highScore);

scoreButton.addEventListener('click', function(){
  var score = generateScore();
  highScore = calculateHighScore(score);
  if(score === highScore)
    addHighScoreToPage(highScore);
}, false);

function calculateHighScore(score){
  return Math.max(score, highScore);
}

function addHighScoreToPage(score){
  var scoreItem = document.createElement('li');
  scoreItem.innerText = score;
  highScoreList.appendChild(scoreItem);
}

function generateScore(){
  return getRandomInt(1, 1000);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
