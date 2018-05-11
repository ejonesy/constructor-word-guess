var Word = require("./Word.js");
var inquirer = require("inquirer");

var getWord = new Word;

inquirer.prompt([

    {
        type: "input",
        name: "userGuess",
        message: "Guess a letter.",
    }

]).then(function(validate){
    
    Word.getWord.newLetterGuess();
    Word.getWord.newCheck();
})