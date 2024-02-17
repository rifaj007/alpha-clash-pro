// to hide the element function
function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add('hidden');
};

// to show the element function
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

// remove background color by id 
function removeBackgroundColorById (elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove('bg-orange-400');
}


// get element value by id function (increase score)
function getElementValueById (elementId) {
  const element = document.getElementById(elementId);
  const elementText = element.innerText;
  const value = parseInt(elementText);
  return value;
}

// to display/change the element 
function displayElementById (elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}


// to get element text 
function getElementTextById (elementId) {
  const element = document.getElementById(elementId);
  const text = element.innerText;
  return text;
}