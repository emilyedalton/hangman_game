
//declaire variables
var wins = 0; 
var losses = 0;
var words = ["pink", "yellow", "orange", "blue", "red", "green", "purple"];
var attempts = 10;


//Math.random returns a random number between 1 and 0. Because Math.random will always produce a result larger than 1. To get a bigger number you have to multiply it by a larger number. In this case, the legnth of the words array. However, this would produce non-whole numbers so you have to multiply the result of Math.random()*words.legnth by Math.floor, which rounds numbers down to the nearest whole number. 
var word = words[Math.floor(Math.random() * words.length)];
console.log("the word chosen is " + word);

//set up the answer array by iterating through the word picked randomly and replacing the number of it's characters with "_"
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
console.log("answerArry " + answerArray)

var remainingLetters = word.length;
console.log("remainingLetter " + remainingLetters);


while (remainingLetters > 0) {


    //show the player the number of letters
    alert("You have this many missing letters: " + answerArray.join(" "));
    document.getElementById("chosenWord").textContent = answerArray.join(" ");


    // get a guess from the player
    console.log("you guessed" + " " + guess);
    var guess = prompt("Guess a letter or hit cancel to stop playing.");

    //if user cancels, exit the game 
    if (guess === null) {

        //exit the game breaks the loop 
        break;
        // if the user does not exit the game and enters a character that is more than one letter long, or not a letter (This does not address the number. Use an OR statement ||)
    } else if (guess.length !== 1) {

        alert("please enter a letter");
        // if the entry type is acceptable  
    }else{
        
        // update the game state with the guess

        for (var j = 0; j < word.length; j++) {
    //game decrements correct guess from remaining letters of picked words
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
                wins++; 
                attempts--;
                losses++;
                console.log("you have this many wins" + " " + wins);
                console.log("you have this many attempts" + " " + attempts);

            
            }
    
          

            }
        }
    } 



    alert(answerArray.join(" "));
    alert("Good Job! The answer was " + word);

