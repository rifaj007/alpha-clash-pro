function handleKeyboardKeyUpEvent(event) {
  const playerPressed = event.key;

  if (playerPressed === 'Escape') {
    gameOver();
  }

  // get the expected press
  const displayAlphabet = document.getElementById('current-alphabet');
  const expectedPress = displayAlphabet.innerText.toLocaleLowerCase();

  // checked match or not
  if (playerPressed === expectedPress) {
    console.log('Yes! you pressed right and you got point');

    // update score 
    // step 1: get the current score
    const currentSore = getElementValueById('current-score');

    // step 2: increase the current score
    const newScore = currentSore + 1;

    // step 3: display the score 
    displayElementById('current-score', newScore);


    // start a new round
    removeBackgroundColorById(playerPressed);
    continueGame();
  } else {
    console.log('Sorry! you pressed wrong and you lost a life');
    // update the current life
    // step 1: get the current life
    const currentLife = getElementValueById('current-life');

    // step 2: reduce the life
    const updatedLife = currentLife - 1;

    // step 3: display the life
    displayElementById('current-life', updatedLife);

    if (updatedLife === 0) {
      gameOver();
    }

  }
  
};

// overall key press event
document.addEventListener('keyup', handleKeyboardKeyUpEvent);


function continueGame() {
  const alphabet = getrandomAlphabet();

  // display the alphabet
  const displayAlphabet = document.getElementById('current-alphabet');
  displayAlphabet.innerText = alphabet;

  // set background color
  setBackgroundColorById(alphabet);
}


function play() {
  // hide all element show only playground
  hideElementById('home-screen');
  hideElementById('final-score');
  showElementById('play-ground');

  // reset score and life
  displayElementById('current-life', 5);
  displayElementById('current-score', 0);

  continueGame();
}

function gameOver () {
  hideElementById('play-ground');
  showElementById('final-score');

  // show the final score
  const lastScore = getElementValueById('current-score');
  displayElementById('show-last-score', lastScore);

  // clear the last selected alphabet
  const currentAlphabet = getElementTextById('current-alphabet');
  console.log(currentAlphabet);

  removeBackgroundColorById(currentAlphabet);
}