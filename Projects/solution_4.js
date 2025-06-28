let randnum = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userinput = document.querySelector('#guessField');
const guessslot = document.querySelector('.guesses');
const remain = document.querySelector('.lastResult');
const lowhi = document.querySelector('.lowOrHi');
const startov = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevguess = [];
let numguees = 1;
let playgame = true;

if (playgame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userinput.value);
    console.log(guess);
    validateguess(guess);
  });
}

function validateguess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a valid number bcz it is less than 1');
  } else if (guess > 100) {
    alert('Please enter a valid number bcz it is greater than 100');
  } else {
    prevguess.push(guess);
    if (numguees === 11) {
      displayguess(guess);
      displaymsg(`Game over. Random number was ${randnum}`);
      endGame();
    } else {
      displayguess(guess);
      checkguess(guess);
    }
  }
}
function checkguess(guess) {
  if (guess == randnum) {
    displaymsg(`You guessed it right`);
    endGame();
  } else if (guess < randnum) {
    displaymsg(`Number is too low`);
  } else if (guess > randnum) {
    displaymsg(`Number is too high`);
  }
}

function displaymsg(message) {
  lowhi.innerHTML = `<h2>${message}</h2>`;
}
function displayguess(guess) {
  userinput.value = '';
  guessslot.innerHTML += `${guess} `;
  numguees++;
  remain.innerHTML = `${11 - numguees}`;
}

function newgame() {
  const newbt = document.querySelector('#newgame');
  newbt.addEventListener('click', function (e) {
    randnum = parseInt(Math.random() * 100 + 1);
    prevguess = [];
    numguees = 1;
    guessslot.innerHTML = '';
    remain.innerHTML = `${11 - numguees}`;
    userinput.removeAttribute('disabled', '');
    startov.remove(P);
    playgame = true;
  });
}
function endGame() {
  userinput.value = '';
  userinput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id ="newgame"> Start a new game</h2>`;
  startov.appendChild(p);
  playgame = false;
  newgame();
}
