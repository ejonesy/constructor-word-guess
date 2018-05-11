var Letter = require ("./Letter.js");

var Word = function(guess) {
    //a function calling on the first Letter function that concatenates the results
    //need to push the user's guesses into the letter variable from Letter.js and concatenate them
    this.newLetterGuess = function(guess, letter) {
        var newLetterGuess = new Letter(guess, letter);
        newLetterGuess = ["b", "a", "n", "a", "n", "a", "s"];
        for (var i = 0; i < newLetterGuess.length; i++) {
            newLetterGuess.join("");
        }
        newLetterGuess.getInput(letter);
    }

    //runs the second function in Letter.js somehow
    this.newCheck = function(){
        newCheck.check(guess);
    }
        
}

module.exports = Word