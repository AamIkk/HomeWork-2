const input = document.querySelector('input');
const btn = document.querySelector('button'); 
const p = document.querySelector('#result')

function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^а-яa-z]/g, ''); 
  return str === str.split('').reverse().join('');
}

function checkPalindrome() {
  var userInput = input.value; 
  var resultDisplay = p; 
    
  if (isPalindrome(userInput)) {
    resultDisplay.textContent = 'True: это палиндром!';
  } else {
    resultDisplay.textContent = 'False: это не палиндром.';
  }
}

btn.addEventListener('click', checkPalindrome);