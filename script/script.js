// function play() {
//   // step:1 = hide the home screen adding hidden class
//   const homeScreen = document.getElementById('home-screen');
//   homeScreen.classList.add('hidden');

//   // step:2 = show the play ground screen removing hidden class
//   const playGroundScreen = document.getElementById('play-ground');
//   playGroundScreen.classList.remove('hidden');
// }

function continueGame() {
  const alphabet = getrandomAlphabet();

  const displayAlphabet = document.getElementById('current-alphabet');
  displayAlphabet.innerText = alphabet;

  // set background color
  setBackgroundColorById(alphabet);
}


function play() {
  hideElementById('home-screen');
  showElementById('play-ground');
  continueGame();
}