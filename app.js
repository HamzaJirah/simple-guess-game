//Create secrete number
const secreteNumber = 2342;

//Ask user to guess
var guessString = prompt("Enter the Secrete Number");

//convert guessString to number
var guess = Number(guessString);

//check if guess is right
if(guess === secreteNumber){
  //statement
  document.write("your guess is right!")
}

//check if guess is higher
else if (guess > secreteNumber){
  //statement
  document.write("your guess is higher!")
}

//check if guess is lower
else {
  //statement
  document.write("your guess is lower!")
}