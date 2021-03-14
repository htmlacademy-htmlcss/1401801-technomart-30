//Карта
let mapLink = document.querySelector('.map-link');
let mapPopup = document.querySelector('.modal-map');
let mapClose = mapPopup && mapPopup.querySelector('.modal-close');
mapLink && mapLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapPopup.classList.add('modal-show-js');
})
mapClose && mapClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove('modal-show-js');
})
window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains('modal-show-js')) {
      mapPopup.classList.remove('modal-show-js');

    }
  }
})
//Форма
let feedbackLink = document.querySelector('.contact-btn');
let feedbackForm = document.querySelector('.modal-feedback');
let closeFeedbackForm = feedbackForm && feedbackForm.querySelector('.modal-close');
let nameLal = feedbackForm && feedbackForm.querySelector('[name=nameLal]');
let eMail = feedbackForm && feedbackForm.querySelector('[name=email]');
feedbackLink && feedbackLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  feedbackForm.classList.add('modal-show-js');
})
closeFeedbackForm && closeFeedbackForm.addEventListener('click', function (evt) {
  feedbackForm.classList.remove('modal-show-js');
  feedbackForm.classList.remove('modal-error-js');
})
window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackForm.classList.contains('modal-show-js')) {
      feedbackForm.classList.remove('modal-show-js');
      feedbackForm.classList.remove('modal-error-js');
    }
  }
})
feedbackForm && feedbackForm.addEventListener('submit', function (evt) {
  if (!nameLal.value || !eMail.value) {
    evt.preventDefault();
    feedbackForm.classList.remove('modal-error-js');
    feedbackForm.offsetWidth = feedbackForm.offsetWidth;
    feedbackForm.classList.add('modal-error-js');
  }
})
// Service Slider
let sliderTabFirst = document.getElementById('services-tab-1')
let sliderTabSecond = document.getElementById('services-tab-2')
let sliderTabThird = document.getElementById('services-tab-3')
let slideFirst = document.querySelector('.slide-first');
let slideSecond = document.querySelector('.slide-second');
let slideThird = document.querySelector('.slide-third');
sliderTabFirst && sliderTabFirst.addEventListener('click', function () {
  slideFirst.classList.add('current-slide-js');
  slideSecond.classList.remove('current-slide-js');
  slideThird.classList.remove('current-slide-js');
  sliderTabFirst.classList.add('services-slider-btn-active');
  sliderTabSecond.classList.remove('services-slider-btn-active');
  sliderTabThird.classList.remove('services-slider-btn-active');
})
sliderTabSecond && sliderTabSecond.addEventListener('click', function () {
  slideThird.classList.remove('current-slide-js');
  slideFirst.classList.remove('current-slide-js');
  slideSecond.classList.add('current-slide-js');
  sliderTabSecond.classList.add('services-slider-btn-active');
  sliderTabFirst.classList.remove('services-slider-btn-active');
  sliderTabThird.classList.remove('services-slider-btn-active');
})
sliderTabThird && sliderTabThird.addEventListener('click', function () {
  slideSecond.classList.remove('current-slide-js');
  slideFirst.classList.remove('current-slide-js');
  slideThird.classList.add('current-slide-js');
  sliderTabThird.classList.add('services-slider-btn-active');
  sliderTabSecond.classList.remove('services-slider-btn-active');
  sliderTabFirst.classList.remove('services-slider-btn-active');
})
// Carousel
let sliderItems = document.querySelectorAll('.slider');
let arrows = document.querySelectorAll('.arrow');
let righrArrow = document.querySelector('.arrow-right');
let leftArrow = document.querySelector('.arrow-left')
let sliderTab = document.querySelectorAll('.slider-tab');

for (j = 0; j < arrows.length; j++) {
  arrows[j] && arrows[j].addEventListener('click', function () {
    if (arrows[j] && arrows[j].classList.contains('arrow-right')) {
      for (i = 0; i < sliderItems.length; i++) {
        if (sliderItems[i].classList.contains('current-js')) {
          activeSlide = i;
        }
      }
      sliderTab[activeSlide].classList.remove('slider-tab-active-js');
      sliderTab[activeSlide + 1] && sliderTab[activeSlide + 1].classList.add('slider-tab-active-js');
      sliderItems[activeSlide].classList.remove('current-js');
      let nextSlide = sliderItems[activeSlide + 1];
      let nextIndex = [(activeSlide + 1) - sliderItems.length]
      nextSlide && nextSlide.classList.add('current-js');
      sliderItems[nextIndex] && sliderItems[nextIndex].classList.add('current-js');
      sliderTab[nextIndex] && sliderTab[nextIndex].classList.add('slider-tab-active-js');
    } else {
      for (i = 0; i < sliderItems.length; i++) {
        if (sliderItems[i].classList.contains('current-js')) {
          activeSlide = i;
        }
      }
      sliderTab[activeSlide].classList.remove('slider-tab-active-js');
      sliderTab[activeSlide - 1] && sliderTab[activeSlide - 1].classList.add('slider-tab-active-js');
      sliderItems[activeSlide].classList.remove('current-js');
      let previousSlide = sliderItems[activeSlide - 1];
      let previousIndex = [(activeSlide - 1) + sliderItems.length];
      previousSlide && previousSlide.classList.add('current-js');
      sliderItems[previousIndex] && sliderItems[previousIndex].classList.add('current-js');
      sliderTab[previousIndex] && sliderTab[previousIndex].classList.add('slider-tab-active-js')
    }
  })
}
// Добавление в корзину
let buyLink = document.querySelectorAll('.hover-buy-btn');
let buyPopup = document.querySelector('.catalog-card-pop-up');
let buyClose = buyPopup.querySelector('.modal-close');
for (i = 0; i < buyLink.length; i++) {
  buyLink[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    buyPopup.classList.add('include-success-show-js');
  })
}
buyClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  buyPopup.classList.remove('include-success-show-js');
})
window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (buyPopup.classList.contains('include-success-show-js')) {
      buyPopup.classList.remove('include-success-show-js');
    }
  }
})
