
let capitalLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let smallLetter = "abcdefghijklmnopqrstuvwxyz";
let num = "0123456789";
let symbol = "!@#$%^&*-/|";

// Write a function called generatePassword that takes three parameters: length, includeNumbers, and includeSpecialChars. The function should generate a random password of the given length. If the user doesn't specify whether to include numbers or special characters, the function should default to including them.

// includeNumbers is a boolean that indicates whether to include numbers in the password. Default to true.
// includeSpecialChars is a boolean that indicates whether to include special characters. Default to false.


function generatePassword(length, includeNumbers, includeSpecialChars) {
  let password = "";
  let str = capitalLetter + smallLetter;

  if (includeNumbers) {
    str += num;
  }

  if (includeSpecialChars) {
    str += symbol;
  }

  for (let i = 1; i <= length; i++) {
    let current_index = parseInt(Math.random() * str.length);
    password += str[current_index];
  }
  return password;
}

let password = generatePassword(8, true, true);
console.log(password)