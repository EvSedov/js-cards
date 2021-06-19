const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71', '#00b4d8', '#9b2226'];
let time = 0;
let score = 0;

startBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const firstScreen = screens[0];
  firstScreen.classList.add('up');
});

timeList.addEventListener('click', (event) => {
  event.target.classList.contains('time-btn') && 
    (time = parseInt(event.target.dataset.time));
  const secondScreen = screens[1];
  secondScreen.classList.add('up');
  startGame();
});

board.addEventListener('click', (event) => {
  if (event.target.classList.contains('circle')) {
    score += 1;
    event.target.remove();
    createRandomCircle();
  }
})

function startGame() {
  setInterval(decreaseTime, 1000);
  createRandomCircle();
  setTimeout(time);
};

function decreaseTime() {
  if (time === 0) {
    finishGame()
  } else {
    let current = --time
    current = (current < 10) ? `0${current}` : current;
    setTimeout(current);
  }
};

function setTimeout(value) {
  timeEl.innerHTML = `00:${value}`;
};

function finishGame() {
  timeEl.parentNode.classList.add('hide');
  board.innerHTML = `<h1>Счет: <span class="primary">${score}</span></h1>`; 
};

function createRandomCircle() {
  const circle = document.createElement('div');
  const size = getRandomNumber(10, 60);
  const color = getRandomColor(colors);
  const {width: boardWidth, height: boardHeight} = board.getBoundingClientRect();
  circle.classList.add('circle');
  circle.style.backgroundColor = color;
  circle.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  const positionX = getRandomNumber(0, boardWidth - size);
  const positionY = getRandomNumber(0, boardHeight - size);
  circle.style.top = `${positionY}px`;
  circle.style.left = `${positionX}px`;

  board.append(circle);
};

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
};

function getRandomColor(setColors) {
  const index = Math.floor(Math.random() * setColors.length);
  return setColors[index];
};
