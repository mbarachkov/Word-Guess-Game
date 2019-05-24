//create an array of words
var words = ["r2d2", "skywalker", "vader", "endor",];
//chose a word randomly
var randChoice = Math.floor(Math.random() * words.length);
var chosenWord = words[randChoice];
var underScore = []
console.log(chosenWord)
//create underscores for size of word
var makeUnderscore = () => {
    for(let i = 0; i < chosenWord.length; i++) {
        underScore.push('_');
        console.log(makeUnderscore);
    }
    return underScore;
    
}
//get users guess
//onkey

//check if guess is right

//if correct push answer to correct and choose new word

//if wrong take away a guess left

//keep track of letters being guessed

//if you run out of guesses you lose