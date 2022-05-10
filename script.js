// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";     
var lowerLetters = "abcdefghijklmnopqrstuvwxyz";  
var passNumbers = "1234567890";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generatePassword = function() {
  var passLength =  window.prompt("Enter the length of your password between 8-12 characters.");
      if (passLength < 8 || passLength > 12) {
      window.alert("Please pick a number between 8 - 12");
      return generatePassword();
  }
      if (passLength >= 8 || passLength <= 12)  {
      var chooseCaps = window.confirm("Would you like to use upper case letters?");
      var chooseLow = window.confirm("Would you like use lower case letters?");
      var chooseNum = window.confirm("Would you like to use numbers?");

            if(chooseCaps === true && chooseLow === true && chooseNum === true) {
               return upperLetters[Math.floor(Math.random() * upperLetters.length)] +
                lowerLetters[Math.floor(Math.random() * lowerLetters.length)] + 
                passNumbers[Math.floor(Math.random() * passNumbers.length)] 
            }    
        else if(chooseCaps === false && chooseLow === true && chooseNum === true) {
              return lowerLetters[Math.floor(Math.random() * lowerLetters.length)] +
              passNumbers[Math.floor(Math.random() * passNumbers.length)] 
            }
        else if(chooseCaps === true && chooseLow === false && chooseNum == true) {
              return upperLetters[Math.floor(Math.random() * upperLetters.length)] +
              passNumbers[Math.floor(Math.random() * passNumbers.length)] 
            }
        else if(chooseCaps === true && chooseLow === true && chooseNum == false) {
              return upperLetters[Math.floor(Math.random() * upperLetters.length)] +
              lowerLetters[Math.floor(Math.random() * lowerLetters.length)] 
            }
        else if(chooseCaps === false && chooseLow === false && chooseNum == true) {
              return passNumbers[Math.floor(Math.random() * passNumbers.length)] 
            } 
        else if(chooseCaps === false && chooseLow === true && chooseNum == false) {
              return lowerLetters[Math.floor(Math.random() * lowerLetters.length)] 
            }
        else if(chooseCaps === true && chooseLow === false && chooseNum == false) {
            return upperLetters[Math.floor(Math.random() * upperLetters.length)] 
            }
        else if (chooseCaps === false && chooseLow === false && chooseNum === false) {
              window.alert("You need to choose at lease 1 criteria")
              return generatePassword();
            }
    }  
};



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// var setPassword = function() {

//     var chooseCaps = window.confirm("Would you like upper case letters?");
//     if (chooseCaps){
//     return upperLetters[Math.floor(Math.random() * upperLetters.length)]
//     }
//     else {
//       var chooseLow = window.confirm("Would you like lower case letters?");
//       if (chooseLow) {
//     return lowerLetters[Math.floor(Math.random() * lowerLetters.length)]
//   }
// }
// }
// passNumbers = window.confirm("Would you like numbers?");       
// lowerLetters = window.confirm("Would you like lower case letters?");
