const upBtn = document.querySelector('.slider-second__button--up')
const downBtn = document.querySelector('.slider-second__button--down')
const sidebar = document.querySelector('.slider-second__sidebar')
const mainSlide  = document.querySelector('.slider-second__main')
const slidesCount = mainSlide.querySelectorAll('div').length
const container = document.querySelector('.slider-second__container')

let activeSlideIndex = 0

sidebar.style.top = `-${(slidesCount - 1) * 90}vh`

upBtn.addEventListener('click', () => {
  changeSlide('up')
})
downBtn.addEventListener('click', () => {
  changeSlide('down')
})

document.addEventListener('keydown', event => {
  if (event.key === 'ArrowUp') {
    changeSlide('up')
  } else if (event.key === 'ArrowDown') {
    changeSlide('down')
  }
})

function changeSlide(direction) {
  if (direction === 'up') {
    activeSlideIndex++
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0
    }
  } else if (direction === 'down') {
    activeSlideIndex--
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1
    }
  }

  const height = container.clientHeight

  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`

  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}