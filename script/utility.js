// to hide the element
function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add('hidden');
};

// to show the element
function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove('hidden');
}


// get random alphabet
function getrandomAlphabet() {
  // get or crate random alphabet array
  const randomString = 'abcdefghijklmnopqrstuvwxyz';
  const alphabets = randomString.split('');

  // get random index number from 0-25
  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);

  const alphabet = alphabets[index];
  return alphabet;
}


// set background color by id 
function setBackgroundColorById (elementId) {
  const element = document.getElementById(elementId);
  element.classList.add('bg-orange-400');
}