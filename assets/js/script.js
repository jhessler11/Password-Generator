// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//password character sets
var lowCharSet = "abcdefghijklmnopqrstuvwxyz"
var upCharSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numSet = "0123456789"
var specialSet = "!@#$%^&*?/,.()<>"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
}
// Generate password function
function generatePassword () {
  var password = "";
  var actualPassword = "";
  
  var character = prompt("How many characters do you want?")

  //check if password length is between 8 and 128
  while (character < 8 || character > 128) {
    character = prompt("Your password must be between 8 and 128 characters")
  }
  //confirm character types in password
  var confirmLower = confirm("Do you want the password to contain lowercase letters?");
  
  var confirmUpper = confirm("Do you want the password to contain uppercase letters?");
  
  var confirmNum = confirm("Do you want the password to contain numbers?");
  
  var confirmSpecial  = confirm("Do you want the password to contain special characters?")

  //determine which characters are added to the password based on the confirm inputs
  if (confirmLower) {
    password = password + lowCharSet
  }
  
  if (confirmUpper) {
    password = password + upCharSet
  }
  
  if (confirmNum) {
    password = password + numSet
  }
  
  if (confirmSpecial)  {
    password = password + specialSet
  }

  if (password == "") {
      password = alert("You must select one character type, Try again!")
  }

  else {
    // generates password text by looping through
  for (let index = 0; index < character; index++) {
    var randomIndex = [Math.floor(Math.random() *  password.length)]
    actualPassword += password.charAt(randomIndex)
      
  }
  }
// generates password in box
return actualPassword;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

