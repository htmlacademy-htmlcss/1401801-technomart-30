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
let sliderChboxFirst = document.getElementById('button-1')
let sliderChboxSecond = document.getElementById('button-2')
let sliderChboxThird = document.getElementById('button-3')
let slideFirst = document.querySelector('.slide-first');
let slideSecond = document.querySelector('.slide-second');
let slideThird = document.querySelector('.slide-third');
sliderChboxFirst && sliderChboxFirst.addEventListener('click', function(){
  slideFirst.classList.add('current-slide-js');
  slideSecond.classList.remove('current-slide-js');
  slideThird.classList.remove('current-slide-js');
})
sliderChboxSecond && sliderChboxSecond.addEventListener('click', function(){
  slideThird.classList.remove('current-slide-js');
  slideFirst.classList.remove('current-slide-js');
  slideSecond.classList.add('current-slide-js');
})
sliderChboxThird && sliderChboxThird.addEventListener('click', function() {
  slideSecond.classList.remove('current-slide-js');
  slideFirst.classList.remove('current-slide-js');
  slideThird.classList.add('current-slide-js');
})
// Лютый слайдер
let righrArrow = document.querySelector('.arrow-right');
let leftArrow = document.querySelector('.arrow-left')
let puncherSlide = document.querySelector('.first-slider-container');
let drillSlide = document.querySelector('.second-slider-container');
let firstRadio = document.getElementById('b1');
let secondRadio = document.getElementById('b2');
righrArrow && righrArrow.addEventListener('click', function(evt) {
  if (puncherSlide.classList.contains('current-js')){
    puncherSlide.classList.remove('current-js');
    drillSlide.classList.add('current-js');
    secondRadio.checked = true;
  }
  else {
    drillSlide.classList.remove('current-js');
    puncherSlide.classList.add('current-js');
    firstRadio.checked = true;
  }
})
leftArrow && leftArrow.addEventListener('click', function(){
  if (puncherSlide.classList.contains('current-js')){
    puncherSlide.classList.remove('current-js');
    drillSlide.classList.add('current-js');
    secondRadio.checked = true;
  }
  else {
    drillSlide.classList.remove('current-js');
    puncherSlide.classList.add('current-js');
    firstRadio.checked = true;
  }
})

// Добавление в корзину
let buyLink = document.querySelectorAll('.hover-buy-btn');
let buyPopup = document.querySelector('.catalog-card-pop-up');
let buyClose = buyPopup.querySelector('.modal-close');
let counters = [];
for (i=0; i<buyLink.length; i++) {
  buyLink[i].addEventListener('click', function(evt) {
    evt.preventDefault();
    buyPopup.classList.add('include-success-show-js');
  })
}
buyClose.addEventListener('click', function(evt) {
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
