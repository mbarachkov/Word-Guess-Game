//create an array of words
var words = ["r2d2", "skywalker", "vader", "endor",];
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//chose a word randomly
var randChoice = Math.floor(Math.random() * words.length);
var chosenWord = words[randChoice];
var underScore = [];
var pGuess = [];
var wins = 0;

console.log(chosenWord)
//create underscores for size of word
var makeUnderscore = () => {
    for (var i = 0; i < chosenWord.length; i++) {
        underScore.push("_");
        // console.log(underScore);
    }
    return underScore;

}
console.log(makeUnderscore());

//get users guess
//onkey
document.onkeyup = function(event) {
	var pGuess = event.key;
	underScore.push(pGuess);
	console.log(pGuess[0]);
}
//check if guess is right
if ((pGuess === chosenWord[0]) && (gLeft > 0)) {
    wins++;
    alert("Good Job!");
    // var randChoice = words[Math.floor(Math.random() * words.length)];
    cGuess.push(compGuess);
    console.log(cGuess[0]);
}

//if correct push answer to correct and choose new word

//if wrong take away a guess left

//keep track of letters being guessed

//if you run out of guesses you lose