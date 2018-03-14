var words = ["drfrink", "selmabouvier", "lardlad", "cowabunga", "kampkrusty", "duffbeer", "sideshowbob", "kwikemart", "leftorium"];
var alphabet= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var j = 0;
var guessed = [];
var tries = 5;
var wins = 0;
var losses = 0;

var word = words[Math.floor(Math.random() * words.length)];
console.log(word);
var gameOn = true;

var answerArray = [];
var pushAnswer = function () {
  for (var i = 0; i < word.length; i++) {
    answerArray.push(word[i]);
  }
}
pushAnswer();
var displayed = []
var pushArray = function (array, char) {
  for (var i = 0; i < word.length; i++) {
    array.push(char);
  }
}

pushArray(displayed, "_");


var checkAnswer = function (letter) {

  var index = answerArray.indexOf(letter);
  if (index === -1 ) {
    tries--;
  }

  for (var i = 0; i < answerArray.length; i++) {
    var index = answerArray.indexOf(letter);
    if (index !== -1) {
      displayed[index] = answerArray[index];
      answerArray[index] = "-";
    }
  }
}
var reset = function () {
  guessed = [];
  tries = 5;
  word = words[Math.floor(Math.random() * words.length)];
  gameOn = false;
  answerArray = [];
  pushAnswer();
  displayed = [];
  pushArray(displayed, '_');

}
var guessedLetters = function (letter) {
  for (var i = 0; i < guessed.length + 1; i++) {
    var index = guessed.indexOf(letter);
    if (index == -1) {
      guessed.push(letter);
    }
  }
}
// Game Over function
var gameOver = function () {
  //  lose case
  if (tries == 0) {
    loseaudio.play();
    // document.getElementById('thumbnail').src = answer.image;
    losses++;
    // resetGame();
    gameOn = false;
  }
  // win case
  else if (tries >= 0 && (displayed.indexOf('_') == -1)) {
    // playAudio(answer.win);
    winaudio.play();
    // document.getElementById('thumbnail').src = answer.image;
    wins++;

    gameOn = false;

  }
}


var game = function (key) {
  if (gameOn) {
    checkAnswer(key);
    guessedLetters(key);
    gameOver();
  }
  else {
    reset();
    gameOn = true;
    checkAnswer(key);
    guessedLetters(key);
    gameOver();
  }
}

