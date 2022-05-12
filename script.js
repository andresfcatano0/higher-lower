let guess = document.getElementById("guess");
let button = document.getElementById("button");
let message = document.getElementById("message");
let userInput = document.getElementById("userInput");
let valid = false;
let random;
let maxNum;
let userGuess = [];

while (valid === false) {
	maxNum = Math.round(Number(prompt("Choose a maximum number")));
	userInput.innerHTML = (maxNum);
	if (maxNum !== NaN && maxNum > 0){
		valid = true;
		random = Math.floor(Math.random() * maxNum) + 1;
	}
}

function inRange(){
	if (guess.value < 1){
		alert("That number is not in range, try again. (The guess you entered is less than 1)");
	} else if (guess.value > maxNum){
		alert("That number is not in range, try again. (The guess you entered is greater than the maximum number)");
	} else if (guess.value >= 1 && guess.value <= maxNum){
		// pass
	} else {
		alert("That is not a number!");
		message.innerHTML = ("No, try a valid number");
	}
}

function check(){
	if (userGuess.includes(guess.value) == false ){
		if (guess.value >= 1 && guess.value <= maxNum){
			userGuess.push(guess.value)
		}
	} else {
		alert("You have already guessed that number and it will not be counted as one of your guesses!")
	}
}

button.addEventListener("click", function(){
	inRange();
	let num = guess.value;
	if (num == random){
		check();
		message.innerHTML = ("You got it! it took you " + userGuess.length + " tries and your guesses were " + userGuess.join(", "));
	} else if (num < random){
		message.innerHTML = ("No, try a higher number");
		check();
	} else if (num > random){
		message.innerHTML = ("No, try a lower number");
		check();
	}
})

