// arrays
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "[", "]", "<", ">", ",", "."];
var totalArray = [];
var passwordArray = [];

// shuffle the items in the arrays
function shuffle(array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    var convertElement = array[randomIndex];
    console.log("shuffled");
    return convertElement;
}

// User input
function userInput() {
    console.log("userInput")
        // user sets length
        var passwordLength = window.prompt("How many characters in your password (8 - 128 )");
        if (passwordLength < 8) {
            alert("Password must be at least 8 characters!");
            return;
        }
        if (passwordLength >128) {
            alert("Password must be less than 128 characters!");
            return;
        }

        // window prompts for boolean "OK" or "CANCEL" for each char type
        var confirmUpperCase = confirm("Would you like Upper Case characters?")
        var confirmLowerCase = confirm("Would you like Lower Case characters?")
        var confirmNumber = confirm("Would you like Numbers?")
        var confirmSpecial = confirm("Would you like Special characters?")

        var userChoices = {
            passwordLength: passwordLength,
            confirmUpperCase: confirmUpperCase,
            confirmLowerCase: confirmLowerCase,
            confirmNumber: confirmNumber,
            confirmSpecial: confirmSpecial
        }

        if (confirmUpperCase + confirmLowerCase + confirmNumber + confirmSpecial === 0 ) {
            alert("You must choose at least one character type!");
            console.log("no char type!")
            return;
        }

        console.log(userChoices);
        return userChoices;
}

// randomize password using arrays based on user's input 
function randomPassword() {
    var userChoices = userInput();
    console.log("function randomPassword, userInput");
    var newPassword = [];
    var anyArray = [];

    if (userChoices.confirmUpperCase) {
        anyArray = anyArray.concat(upperCase);
        anyArray.push(shuffle(upperCase));
    } 
    else {
        console.log("No upper case.");
    }
    if (userChoices.confirmLowerCase) {
        anyArray = anyArray.concat(lowerCase);
        anyArray.push(shuffle(lowerCase));
    } else {
        console.log("No lower case.")
    }
    if (userChoices.confirmNumber) {
        anyArray = anyArray.concat(number);
        anyArray.push(shuffle(number));
    } else {
        console.log("No numbers.")
    }
    if (userChoices.confirmSpecial) {
        anyArray = anyArray.concat(special);
        anyArray.push(shuffle(special));
    } else {
        console.log("No special characters.")
    }
    
    // for loop that creates the password using user's choices
    for (var i= 0; i < userChoices.passwordLength; i++) {
        var maybeArray = shuffle(anyArray);
        newPassword.push(maybeArray);
    }
    // *still needs logic for each type if false
    console.log(newPassword);
    return newPassword.join("");
}

var generateBtn = document.querySelector("#generate")

// takes randomized password and writes in textarea
function writePassword() {
  var password = randomPassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
console.log("write password")
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log("click button ready")