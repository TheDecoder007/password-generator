// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var generatePassword = function() {
  var passLength = window.prompt("Enter the length of your password between 8-128 characters.");
    if (passLength < 8 || passLength > 128) {
      window.alert("Please pick a number between 8 - 128");
      return generatePassword();
    }
  if (passLength >= 8 || passLength <= 128) {
      var upperLetters = window.confirm("Would you like upper case letters?");
      if (upperLetters) {
        var lowerLetters = window.confirm("Would you like lower case letters?");
        if (lowerLetters) {
          var passNumbers = window.confirm("Would you like numbers?");
        }
      }
    }
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
