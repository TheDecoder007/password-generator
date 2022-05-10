// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"     
var lowerLetters =  "abcdefghijklmnopqrstuvwxyz"  
var passNumbers = []

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generatePassword = function() {
   var passLength =  
     window.prompt("Enter the length of your password between 8-128 characters.");
    if (passLength < 8 || passLength > 128) {
      window.alert("Please pick a number between 8 - 128");
      return generatePassword();
    }
  
    else  { 
      
      var chooseCaps = window.confirm("Would you like upper case letters?");
    
      if(chooseCaps) {
         return upperLetters[Math.floor(Math.random() * upperLetters.length)]  
      }
      else {
      var chooseLow = window.confirm("Would you like lower case letters?");

      if (chooseLow) {
        return lowerLetters[Math.floor(Math.random() * lowerLetters.length)]
      }
    }
    }
  
};

// passNumbers = window.confirm("Would you like numbers?");       
// lowerLetters = window.confirm("Would you like lower case letters?");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

