// Assignment Code
// document.getElementById("password").value = newPassword;
var generateBtn = document.querySelector("#generate");
  var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = 0;
  var newPassword = "";

  

  function generatePassword() {
    let passwordLength = prompt("Please enter a password length 8-128 characters");
    confirm("include lowercase, uppercase, numeric, and/or special values")
    newPassword = "";
    for (var i = 0; i < passwordLength; i++) {
  var randomNumber = Math.floor(Math.random() *chars.length);
  newPassword += chars[randomNumber];
}
  return newPassword
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
console.log(password)
  passwordText.textContent = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

let text;
if (confirm("Press Generate Password") == true) {
  text = "You pressed OK!";
} else {
  text = "You canceled!";
}

