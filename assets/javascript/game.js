"use strict";

// Array for the random psychic letters chosen 
const alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Array to catch wrong letters that the player guesses
let wrongLetterArray = [];

// Variables
let wins = 0;
let losses = 0;
let guessLeft = 10;
let guessSoFar = 0;

//capture the player's selected letter they press on their keyboard
document.addEventListener('keypress', (event) => {
    let playerKeyCode = event.keyCode;
    let playerKeyCodeConverted = String.fromCharCode(playerKeyCode);

    //This variable generates a random number which is used for the psychic's letter
    let randomNumber = Math.floor(Math.random() * alphabetArray.length);
  
    //This assigns a random array letter to the psychicLetter variable
    let psychicLetter = alphabetArray[randomNumber];

    if(playerKeyCodeConverted == psychicLetter) {
        alert("You Win!");
        wins++;
        guessLeft = 10;
        wrongLetterArray = [];
    } else {
        // add the incorrect letter to the wrongLetterArray and decrease the amount of guesses left
        wrongLetterArray.push(playerKeyCodeConverted);
        guessLeft--;
        guessSoFar++;
    }
    
    // if there are 10 consecutive incorrect guesses the player loses
    if(guessLeft === 0) {
        alert("You Lose! Try again.");
        guessSoFar = 0;
        guessLeft = 10;
        losses++;
        wrongLetterArray = [];
    }
    // code to manipulate the Document Object Model (DOM)
    document.getElementById("idGuessLeft").innerHTML = (guessLeft);
    document.getElementById("idWins").innerHTML = (wins);
    document.getElementById("idLosses").innerHTML = (losses);
    document.getElementById("idGuessSoFar").innerHTML = (wrongLetterArray);
});




//old code section

//console.log(playerKeyCodeConverted);
    //console.log(psychicLetter);


   // if (playerKeyCodeConverted == psychicLetter) {
//        console.log("it's true");
//};

//console.log(playerKeyCodeConverted);

//return playerKeyCodeConverted;  
//console.log(psychicLetter);

//document.onkeypress = function(keyPress) {
   // let guess = keyPress.key;

   // if (guess === psychicLetter) {
    //    wins++;
  //  }

//}

//document.getElementById('idWins').innerHTML = "Wins:";
//document.getElementById("idLosses").innerHTML = "Losses:";
//document.getElementById("idGuessLeft").innerHTML = "Guesses Left:";
//document.getElementById("idGuessSoFar").innerHTML = "Guesses so far: " + guess;

/*
<p class="p-wins" id="idWins">Wins:</p>
            <br>
            <p class="p-losses" id="idLosses">Losses:</p>
            <br>
            <p class="p-guesses-left" id="idGuessLeft">Guesses Left:</p>
            <br>
            <p class="p-guess-sofar" id="idGuessSoFar">Your Guesses so Far:</p>

*/

//console.log(guess);
//console.log(computerLetter);
//console.log(typeof Math);

/*
function setElements() {
    wins = 5;
    console.log(wins);
    document.getElementById
}

setElements();
*/

//console.log(document.getElementById("idWins"));
//document.getElementById("idWins").innerHTML = 5 + 6;

/*
const alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const choicesArray = ["javascript", "jquery", "node"];
*/

//let psychicLetter = alphabetArray[Math.floor(Math.random() * alphabetArray.length)];