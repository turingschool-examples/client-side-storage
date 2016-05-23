var scoreButton = document.getElementById('score-button');
var highScoreSpan = document.getElementById('high-score');

if(!findScore('highScore')){
  createScore('highScore', 0);
};

var highScore = findScore('highScore');
addHighScoreToPage(highScore);

scoreButton.addEventListener('click', function(){
  var nameInput = document.getElementById('username').value
  var score = generateScore();
  var userHighScore = calculateUserHighScore(score, nameInput);
  createScore(nameInput, userHighScore);
  highScore = calculateHighScore(score);
  addHighScoreToPage(highScore);
  createScore('highScore', highScore);
}, false);

function calculateUserHighScore(score, username){
  var userHighScore = findScore(username) || 0;
  return Math.max(score, userHighScore);
}

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

//------ ORM

function findScore(k){
  return localStorage.getItem(k);
}

function createScore(k, v){
  localStorage.setItem(k, v);
}

function deleteScore(k, v){
  localStorage.removeItem(k);
}

function rakeDBDrop(){
  localStorage.clear();
}

//----------
