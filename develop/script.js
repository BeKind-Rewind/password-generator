// arrays
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "[", "]", "<", ">", ",", "."];
var totalArray = [];
var passwordArray = [];


function shuffle(array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    var convertElement = array[randomIndex];
    return convertElement
}

// User input
function userInput() {
// setting the length
    function getLength() {
        var numCharacters = window.prompt("How many characters in your password (8 - 128 )");
        if (passwordLength < 8) {
            alert("Password must be at least 8 characters!");
            return;
        } 
        if (passwordLength >128) {
            alert("Password must be less than 128 characters!");
            return;
        }
        var confirmUpperCase = window.prompt("Would you like Upper Case characters?")
        var confirmLowerCase = window.prompt("Would you like Lower Case characters?")
        var confirmNumber = window.prompt("Would you like Numbers?")
        var confirmSpecial = window.prompt("Would you like Special characters?")

        var userChoices = {
            passwordLength: passwordLength,
            confirmUpperCase: confirmUpperCase,
            confirmLowerCase: confirmLowerCase,
            confirmNumer: confirmNumber,
            confirmSpecial: confirmSpecial
        }
        console.log(userChoices)
        return(userChoices)
    }
}

function randomPassword() {
    var userChoices = userInput();
    var newPassword = [];
    var anyArray = [];

    if (userChoices.confirmUpperCase) {
        anyArray = anyArray.concat(upperCase);
        anyArray.push(shuffle(upperCase));
    }
    if (userChoices.confirmLowerCase) {
        anyArray = anyArray.concat(lowerCase);
        anyArray.push(shuffle(lowerCase));
    }
    if (userChoices.confirmNumber) {
        anyArray = anyArray.concat(number);
        anyArray.push(shuffle(number));
    }
    if (userChoices.confirmSpecial) {
        anyArray = anyArray.concat(special);
        anyArray.push(shuffle(special));
    }

    for (var i= 0; i < userChoices.passwordLength; i++) {
        var maybeArray = shuffle(anyArray);
        newPassword.push(maybeArray);
    }

    console.log(newPassword);
    return newPassword.join("");
}

var generateBtn = document.querySelector("#generate")

// Write password to the #password input
function writePassword() {
  var password = randomPassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
console.log("this is dumb")
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log("this is awesome")