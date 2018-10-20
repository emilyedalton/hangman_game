
//declaire variables
var wordsToGuess = ["brown", "purple", "pink", "red", "yellow", "orange"];
//Math.random returns a random number between 1 and 0. Because Math.random will always produce a result larger than 1. To get a bigger number you have to multiply it by a larger number. In this case, the legnth of the words array. However, this would produce non-whole numbers so you have to multiply the result of Math.random()*words.legnth by Math.floor, which rounds numbers down to the nearest whole number. 
var word = wordsToGuess[Math.floor(Math.random()* wordsToGuess.length)]

// loop picks out a random word from the wordsToGuess array
var wordAnswerArray = [];
for (var i = 0; i < word.length; i++);{
wordAnswerArray[i] = "_";
}
//above inserts "_" for each letter

var lettersLeft = word.length; 

// While the word has not been guessed 
//alert the user with the numbers of letters to guess. Letters that make up the word to guess by joining the letters from wordAnswerArray with a space
while (lettersLeft > 0){
alert(wordAnswerArray.join(" "));

// If the player wants to quit the game quit the game. Else if the guess is not a letter in the word, tell them to pick a letter 
var playerGuess = prompt ("Guess a letter. Click Cancel to stop playing.");
if (playerGuess === null){
    //leave game
break;
}
//if the player chooses multiple letters ask them to select a letter

else if (playerGuess.length !== 1) {
alert ("Please enter a letter");


// Else if the guess is a letter in the word, update the progress  
}else {

//loop through the letters of the selected word 
for (var j = 0; j < word.legnth; j++)
{
//if the player guess is right 
if (word[j]===playerGuess){
//update answers in wordAnswerArray with the player guess. Decrement the remmaining letters. 
wordAnswerArray[j] = playerGuess; 
lettersLeft--;
        }
    }
}

//if player gets the correct word, alert them with the final word. 
alert (wordAnswer.join (" "));
alert ("Good job! The answer was " + word);
}
