const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.game__screen')
const timeList = document.querySelector('#timelist')
const timeEl = document.querySelector('#game__time')
const board = document.querySelector('.game__board')
const boardDefault = document.querySelector('.game__board')
const colors = ['#FFA985', '#FFDE70', '#D6F910', '#23FACB', '#F588FF', '#8DFF87']
const circle = document.createElement('div')
const sizeBallMax = 50
let sizeBallInc = 0

let timerId 
let timerSizeId 

let time = 0
let score = 0

startBtn.addEventListener('click', (event) => {
  event.preventDefault()
  screens[0].classList.add('game__screen--up')
})

timeList.addEventListener('click', event => {
  if (event.target.classList.contains('game__time-btn')) {
    time = parseInt(event.target.getAttribute('data-time'))
    screens[1].classList.add('game__screen--up')
    startGame()
  }
})

board.addEventListener('click', event => {
  if (event.target.classList.contains('circle')) {
    score++
    event.target.remove()
    createRandomCircle()
    sizeBallInc = 0
  }
})

function startGame() {
  timerId = setInterval(decreaseTime, 1000)
  createRandomCircle()
  setTime(time)
  sizeBallInc = 0
  setTimeout('', 5000)
  timerSizeId = setInterval(sizeCircleIncrement, 100)
  score = 0
}

function decreaseTime() {
  if (time === 0) {
  finishGame()
  } else {
  let current = --time
  if (current < 10) {
    current = `0${current}`
  }
  setTime(current)
  }
}

function setTime(value) {
  timeEl.innerHTML = `00:${value}`
}

function finishGame() {
  timeEl.parentNode.classList.add('hide')
  board.innerHTML = `<h2>Счет: <span class="primary">${score}</span></h2><a href="#" class="game__start" id="restart">Начать заново</a>`

  const restartBtn = document.querySelector('#restart')
  restartBtn.addEventListener('click', (event) => {
    event.preventDefault()
    sizeBallInc = 0
    board.innerHTML = ``
    timeEl.parentNode.classList.remove('hide')
    screens[1].classList.remove('game__screen--up')
    clearInterval(timerId)
    clearInterval(timerSizeId)
  })
}

function createRandomCircle() {
  const {width, height} = board.getBoundingClientRect()
  const size = sizeBallMax
  const x = getRandomNumber(0, width - size)
  const y = getRandomNumber(0, height - size)
  const color = getRandomColor()

  circle.classList.add('circle')
  circle.style.width = `${sizeBallMax}px`
  circle.style.height = `${sizeBallMax}px`
  circle.style.top = `${y}px`
  circle.style.left = `${x}px`
  circle.style.background = color
  board.append(circle)
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}

function getRandomColor() { 
  return colors[Math.floor(Math.random() * colors.length)]
}

function sizeCircleIncrement() {
  sizeBallInc--
  circle.style.width = `${sizeBallMax + sizeBallInc}px`
  circle.style.height = `${sizeBallMax + sizeBallInc}px`
  if (sizeBallMax + sizeBallInc === 0) {
    finishGame()
  }
}