// Program needs to pick a random word
// While the word has not been guessed { show the player their current progress and get their guess also show the letters they have guessed {
//

// If the player wants to quit the game quit the game. Else if the guess is not a letter in the word, tell them to pick a letter 
// Else if the guess is a letter in the word, update the progress  
// keep track of the lettes that the player has guessed 
// finish when the word has been guessed correctly 

//declaire variables
var wordsToGuess = ["brown", "purple", "pink", "red", "yellow", "orange"];
//Math.random returns a random number between 1 and 0. Because Math.random will always produce a result larger than 1. To get a bigger number you have to multiply it by a larger number. In this case, the legnth of the words array. However, this would produce non-whole numbers so you have to multiply the result of Math.random()*words.legnth by Math.floor, which rounds numbers down to the nearest whole number. 
var word = wordsToGuess[Math.floor(Math.random()* wordsToGuess.length)]

var wordAnswerArray = [];
for (var i = 0; i < word.length; i++);{
//above loop picks out a random word from the wordsToGuess array
wordAnswerArray[i] = "_";
}
//above inserts "_" for each letter

var lettersLeft = word.length; 
//console.log(lettersLeft);

while (lettersLeft > 0){
alert(wordAnswerArray.join(" "));

var playerGuess = prompt ("Guess a letter. Click Cancel to stop playing.");
if (playerGuess === null){
    //leave game
break;
}
else if (playerGuess.length !== 1) {
alert ("Please enter a letter");

}else {
for (var j = 0; j < word.legnth; j++)
{
if (word[j]===playerGuess){
wordAnswerArray[j] = playerGuess; 
lettersLeft--;
        }
    }
}

alert (wordAnswer.join (" "));
alert ("Good job! The answer was " + word);
}
