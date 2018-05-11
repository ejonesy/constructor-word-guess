var Letter = function(guess, word) {

    //whether letter has been guessed yet
    this.guess = true;

    //letter that the user guesses
    this.letter = ""; //process.argv[3]?
    //this.hasBeenGuessed; //= process.argv[3]

    this.getInput = function() {

        //if user guesses incorrect letter, maintain underscore
        if (!this.guess) {
            //display _
            console.log("_");
    
        //if user guesses correct letter, display letter
        } else if (this.guess) {
        //display guessed letter
        console.log(this.guess)
        }

    }

    //takes userinput of letter
    //take in user guess as argument, check against stored boolean value
    //what is the significance of changing the boolean value?
    //the value is checked in Word.js
    this.check = function(letter) {

        if (this.guess === this.letter) {
            this.guess = true;
        } else {
        this.guess = false;
        }

    }

}

module.exports = Letter