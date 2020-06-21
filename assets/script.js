// Assignment code here
function passQuestions () {
  window.alert("Pick one or all of the following conditions.")
  var upper = window.confirm("Would you like to include uppercase letters?")
  var numbers = window.confirm("Would you like to include numbers?")
  var lower = window.confirm("Would you like to include lowercase letters?")
  var special = window.confirm("Would you like to include special characters?")

}


function generatePassword () {
  debugger
  var passLength = window.prompt("How many characters would you like? (8 to 128)")
  if (passLength > 7 ### ) {
    passQuestions ()
  }
   else {
     window.alert("Please select a number between 8 and 128")
      generatePassword (); 
   }

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  debugger
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);