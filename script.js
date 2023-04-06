// Assignment Code
// document.getElementById("password").value = newPassword;
var generateBtn = document.querySelector("#generate");
  var chars = '';
  var passwordLength = 0;
  var newPassword = '';
  var lowercaseString = 'abcdefghijklmnopqrstuvwxyz'
  var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var numeric = '0123456789'
  var specialCharacters = '!@#$%^&*()'

  
//Confirm Chars to include each selection from the user
  function generatePassword() {
    let passwordLength = prompt('Please enter a password length 8-128 characters');
    var lowercaseConfirm = confirm('include lowercase')
    if (lowercaseConfirm) {
      chars += lowercaseString
    }
    var uppercaseConfirm = confirm('uppercase')
    if (uppercaseConfirm) {
      chars += uppercase
    }
    var numericConfirm = confirm('numeric')
    if (numericConfirm) {
      chars += numeric
    }
    var specialCharactersConfirm = confirm('specialCharacters')
    if (specialCharactersConfirm) {
      chars += specialCharacters
    }
    console.log(chars)
    newPassword = "";
    for (var i = 0; i < passwordLength; i++) {
  var randomNumber = Math.floor(Math.random() *chars.length);
  newPassword += chars[randomNumber];
}
  return newPassword
  }

// Write password to the #password input, empty string at the end to
//reset the results for the next URLSearchParams.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
console.log(password)
  passwordText.textContent = password;
  chars = ''
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

let text;
if (confirm("Press Generate Password") == true) {
  text = "You pressed OK!";
} else {
  text = "You canceled!";
}

