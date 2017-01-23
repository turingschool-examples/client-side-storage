var scoreButton = document.getElementById('score-button');
var highScoreList = document.getElementById('high-scores');
var nameInput = document.getElementById('name-field');
var submitButton = document.getElementById('score-submit');
var allTimeHighScores = document.getElementById('all-time-scores-table')
var highScore = 0;

scoreButton.addEventListener('click', function(){
  var score = generateScore();
  highScore = calculateHighScore(score);
  if(score === highScore)
    addHighScoreToPage(highScore);
}, false);

submitButton.addEventListener('click', function(){
  var score = getHighestScore();
  var name = nameInput.value;
  submitHighScore(name,score);
})

function calculateHighScore(score){
  return Math.max(score, highScore);
}

function addHighScoreToPage(score){
  var scoreItem = document.createElement('li');
  scoreItem.innerText = score;
  highScoreList.appendChild(scoreItem);
}

function submitHighScore(name, score){
  var newRow = document.createElement('tr');
  var nameCell = document.createElement('td');
  nameCell.innerText = name;
  var scoreCell = document.createElement('td');
  scoreCell.innerText = score;
  newRow.appendChild(nameCell);
  newRow.appendChild(scoreCell);
  allTimeHighScores.appendChild(newRow);
}

function generateScore(){
  return getRandomInt(1, 1000);
}

function getHighestScore(){
  return highScoreList.lastChild.innerText;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
