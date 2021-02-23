// Password Generator//
var generateBtn = document.querySelector("#generate");

function writePassword() {
  let passwordLength = window.prompt("Enter Password Length between 8 and 128 characters")
  while(passwordLength<8 || passwordLength>128) {passwordLength = window.prompt("Enter Password Length between 8 and 128 characters")}
  // The code above both sets the acceptable input (between 8 and 128 chars) and ensures compliance.
  // If it doesn't comply with those parameters, the prompt is displayed again and again until an acceptible value is input.//
  let includeSpecial = window.confirm("Include special characters?")
  let includeLowerCase = window.confirm("Include lower case characters?")
  let includeUpperCase = window.confirm("Include upper case characters?")
  let includeNumbers = window.confirm("Include numbers?")
  generatePassword (passwordLength, includeSpecial, includeLowerCase, includeUpperCase, includeNumbers)
}

function generatePassword(passwordLength, includeSpecial, includeLowerCase, includeUpperCase, includeNumbers) {
  let characterOptions = []
  let password = ""
  let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  let UpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  let special = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "`", "{", "|", "}", "~"];
  let numbers = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"]
  
  if (includeSpecial === true) {
  characterOptions = characterOptions.concat(special)
  }
  if (includeLowerCase === true) {
    characterOptions = characterOptions.concat(lowerCase)  
    }
  if (includeUpperCase === true) {
    characterOptions = characterOptions.concat(UpperCase)  
  }
  if (includeNumbers === true) {
    characterOptions = characterOptions.concat(numbers)  
  }

  for (i=0; i<passwordLength; i++) {
  let randomIndex = Math.floor(Math.random() * characterOptions.length);
  password += characterOptions[randomIndex]

  }
 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
