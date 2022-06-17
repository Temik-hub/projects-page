const buttonLeft = document.querySelector('.slider__btn-left')
const buttonRight = document.querySelector('.slider__btn-right')
const slider = document.querySelector('.slider__container')
const width = slider.clientWidth
let activeSlide = 0
let i = 0
const slides = document.querySelectorAll('.slider__item')

function clearActiveClasses() {

  slides.forEach((slide) => {
    slide.classList.remove('slider__item--active')
  })
}
function slidesPlagin(activeSlide = 0) {
  
  slides[activeSlide].classList.add('slider__item--active')

  for (const slide of slides) {
    slide.addEventListener('click', () => {
      clearActiveClasses()
      slide.classList.add('slider__item--active')
    })
  } 
}

buttonRight.addEventListener('click', () => {
  i++
  clearActiveClasses()
  if (i > 5) {
    i = 0
  }
  slidesPlagin(i)
  console.log(i);
})
buttonLeft.addEventListener('click', () => {
  i--
  clearActiveClasses()
  if (i < 0) {
    i = 5
  }
  slidesPlagin(i)
  console.log(i);
})

slidesPlagin(0)
