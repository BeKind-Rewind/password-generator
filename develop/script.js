// arrays
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "[", "]", "<", ">", ",", "."];
var totalArray = [];
var passwordArray = [];



// Assignment Code
var generateBtn = document.querySelector("#generate");

// setting the length
function getLength() {
    var numCharacters = window.prompt("How many characters in your password (8 - 128 )");
    if (numCharacter < 128 && numCharacters > 8) {
        return numCharacters;
    } else {
        getLength();
    }
}

var numCharacters = getLength();
console.log(numCharacters); //shows as undefined if not within range

// upper case
var selectUpper = window.confirm("Upper Case?");
if (selectUpper) {
    totalArray = totalArray.concat(upperCase);
} 


// lower case
var selectLower = window.confirm("Lower Case?");
if (selectLower) {
    totalArray = totalArray.concat(lowerCase);
} 


// number
var selectNumber = window.confirm("Number Case?");
if (selectNumber) {
    totalArray = totalArray.concat(number);
} 

// special
var selectSpecial = window.confirm("Special?");
if (selectSpecial) {
    totalArray = totalArray.concat(special);
} 


//Random Number Generator
randomNum = totalArray.length;
for (let i = 0; i < numCharacters; i++) {
    passwordArray = passwordArray.concat.totalArray[Math.floor(Math.random()*randomNum)];
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
