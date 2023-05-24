// Assignment code here 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// we declare variable with their values to manipulate them
var options = {
  characterUppercase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  numeric: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
  characterLowercase: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"],
  specialCharacter: ["{", "}", "<", ">", ")", "*", "&", "^", "$", "%", "#", "@", "!"],
}

function generatePassword() {
  var password = ''
  var tempCharacters = ''
  var passwordLength = prompt("choose a password length from 8 to 128 characters.Enter number")
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert('password must be a valid number between 8 and 128')
    passwordLength = prompt("choose a password length from 8 to 128 characters.Enter number")
  }

  var wantsUpper = confirm('would you like uppercase letters?')
  if (wantsUpper) {
    tempCharacters += options.characterUppercase.toString().split(",").join("")
  }
  console.log(tempCharacters)

  var wantsLower = confirm('would you like lowercase letters?')
  if (wantsLower) {
    tempCharacters += options.characterLowercase.toString().split(",").join("")
  }
  console.log(tempCharacters)

  var wantsNumbers = confirm('would you like number?')
  if (wantsNumbers) {
    tempCharacters += options.numeric.toString().split(",").join("")
  }
  console.log(tempCharacters)

  var wantsSpecial = confirm('would you like special character?')
  if (wantsSpecial) {
    tempCharacters += options.specialCharacter.toString().split(",").join("")
  }
  console.log(tempCharacters)

  while (!wantsUpper && !wantsLower && !wantsNumbers && !wantsSpecial) {
    alert('you must choose at least one character type')
    wantsUpper = confirm('would you like uppercase letters?')
    if (wantsUpper) {
      tempCharacters += options.characterUppercase.toString().split(",").join("")
    }
    console.log(tempCharacters)

    wantsLower = confirm('would you like lowercase letters?')
    if (wantsLower) {
      tempCharacters += options.characterLowercase.toString().split(",").join("")
    }
    console.log(tempCharacters)

    wantsNumbers = confirm('would you like number?')
    if (wantsNumbers) {
      tempCharacters += options.numeric.toString().split(",").join("")
    }
    console.log(tempCharacters)

    wantsSpecial = confirm('would you like special character?')
    if (wantsSpecial) {
      tempCharacters += options.specialCharacter.toString().split(",").join("")
    }
    console.log(tempCharacters)
  }

  for (var i = 0; i < passwordLength; i++) {
    password += tempCharacters.charAt(Math.floor(Math.random() * tempCharacters.length))
  }

  return password
}