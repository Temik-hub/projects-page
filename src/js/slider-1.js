function slidesPlagin(activeSlide = 0) {
  const slides = document.querySelectorAll('.slider__item')
  
  slides[activeSlide].classList.add('slider__item--active')

  for (const slide of slides) {
    slide.addEventListener('click', () => {
      clearActiveClasses()
      slide.classList.add('slider__item--active')
    })
  }
  
  function clearActiveClasses() {
    slides.forEach((slide) => {
      slide.classList.remove('slider__item--active')
    })
  }
}
slidesPlagin(1)