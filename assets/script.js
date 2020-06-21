// Assignment code here
var passlength; 
var newCharacters;
var passString = "";

function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}

function passQuestions () {
  window.alert("Pick one or all of the following conditions.")
  var upperConfirm = window.confirm("Would you like to include uppercase letters?")
  var numbersConfirm = window.confirm("Would you like to include numbers?")
  var lowerConfirm = window.confirm("Would you like to include lowercase letters?")
  var specialConfirm = window.confirm("Would you like to include special characters?")

  var functionArray = []
  if (upperConfirm) {
    functionArray.push(getRandomUpper)
  }
  if (numbersConfirm) {
    functionArray.push(getRandomNumber)
  }
  if (lowerConfirm) {
    functionArray.push(getRandomLower)
  }
  if (specialConfirm) {
    functionArray.push(getRandomSymbol)
  }
  createPassword(functionArray)
}

function createPassword (functionArray) {
    for (i = 0;i < passlength; i++)  {
      var newCharacters = functionArray[Math.floor(Math.random()* functionArray.length)]()
    passString += newCharacters;
    }
    var passwordText = document.querySelector("#password");
  passwordText.value = passString;
}


  function generatePassword () {
  passlength = window.prompt("How many characters would you like? (8 to 128)")
  if (passlength  >7 && passlength <129  ) {
    passQuestions ()
  }
   else {
     window.alert("Please select a number between 8 and 128.")
      generatePassword (); 
   }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  generatePassword();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);