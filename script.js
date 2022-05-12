
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];     
var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];   
var passNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0,];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};


  var passConfirm = (passLength) => {
    let charArray = [];
  
    var chooseCaps = window.confirm("Would you like to use upper case letters?");
    var chooseLow = window.confirm("Would you like use lower case letters?");
    var chooseNum = window.confirm("Would you like to use numbers?");

      let randomPass = [];

          if(chooseCaps === true && chooseLow === true && chooseNum === true) {
            randomPass = randomPass.concat(upperLetters, lowerLetters, passNumbers);
            }    
        else if(chooseCaps === false && chooseLow === true && chooseNum === true) {
          randomPass = randomPass.concat(lowerLetters, passNumbers);        
            }
        else if(chooseCaps === true && chooseLow === false && chooseNum == true) {
          randomPass = randomPass.concat(upperLetters, passNumbers);
        }
        else if(chooseCaps === true && chooseLow === true && chooseNum == false) {
          randomPass = randomPass.concat(upperLetters, lowerLetters);
        }
        else if(chooseCaps === false && chooseLow === false && chooseNum == true) {
          randomPass = randomPass.concat(passNumbers);
        }
        else if(chooseCaps === false && chooseLow === true && chooseNum == false) {
          randomPass = randomPass.concat(lowerLetters);          
        }
        else if(chooseCaps === true && chooseLow === false && chooseNum == false) {
          randomPass = randomPass.concat(upperLetters);
        }
        else if (chooseCaps === false && chooseLow === false && chooseNum === false) {
              window.alert("You need to choose at lease 1 criteria")
              return generatePassword();
            }
        for (var i = 0; i <passLength; i++) {
          let randomCharacter = Math.floor(Math.random() * randomPass.length);
              charArray.push(randomPass[randomCharacter])
        }  
        return charArray.join("");
       
}

var generatePassword = () => {
  var passLength = window.prompt("Please choose your password length, between 8 and 20 characters.")
    if (LengthChoice(passLength)) {
      return (passConfirm(passLength))
    } else {}
}

var LengthChoice = (userChoice) => {
  if (userChoice === null){
    window.alert("Please choose a length between 8 and 20")
    return false
  } else if (userChoice < 8 || userChoice > 20) {
    window.alert("Please choose a length between 8 and 20")
    return false
  }
    return true
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






// generatePassword = function() {
//   var passLength =  window.prompt("Enter the length of your password between 8-12 characters.");
//       if (passLength < 8 || passLength > 12) {
//       window.alert("Please pick a number between 8 - 12");
//       return generatePassword();
//   }
//       if (passLength >= 8 || passLength <= 12)  {
//         console.log(passLength);
//       var chooseCaps = window.confirm("Would you like to use upper case letters?");
//       var chooseLow = window.confirm("Would you like use lower case letters?");
//       var chooseNum = window.confirm("Would you like to use numbers?");

// if(chooseCaps === true && chooseLow === true && chooseNum === true) {
//   return upperLetters[Math.floor(Math.random() * upperLetters.length)] +
//    lowerLetters[Math.floor(Math.random() * lowerLetters.length)] + 
//    passNumbers[Math.floor(Math.random() * passNumbers.length)]
// }    
// else if(chooseCaps === false && chooseLow === true && chooseNum === true) {
//  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)] +
//  passNumbers[Math.floor(Math.random() * passNumbers.length)] 
// }
// else if(chooseCaps === true && chooseLow === false && chooseNum == true) {
//  return upperLetters[Math.floor(Math.random() * upperLetters.length)] +
//  passNumbers[Math.floor(Math.random() * passNumbers.length)] 
// }
// else if(chooseCaps === true && chooseLow === true && chooseNum == false) {
//  return upperLetters[Math.floor(Math.random() * upperLetters.length)] +
//  lowerLetters[Math.floor(Math.random() * lowerLetters.length)] 
// }
// else if(chooseCaps === false && chooseLow === false && chooseNum == true) {
//  return passNumbers[Math.floor(Math.random() * passNumbers.length)] 
// } 
// else if(chooseCaps === false && chooseLow === true && chooseNum == false) {
//  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)] 
// }
// else if(chooseCaps === true && chooseLow === false && chooseNum == false) {
// return upperLetters[Math.floor(Math.random() * upperLetters.length)] 
// }
// else if (chooseCaps === false && chooseLow === false && chooseNum === false) {
//  window.alert("You need to choose at lease 1 criteria")
//  return generatePassword();
// }

// }