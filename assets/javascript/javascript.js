//create an array of words
var words = ["r2d2", "skywalker", "vader", "endor",];
//chose a word randomly
var randChoice = Math.floor(Math.random() * words.length);
var chosenWord = words[randChoice];
var underScore = [];
var pGuess = [];
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

//if correct push answer to correct and choose new word

//if wrong take away a guess left

//keep track of letters being guessed

//if you run out of guesses you lose