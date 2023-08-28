// Находим и сохраняем в константы нужные нам элементы
let modalBtn = document.querySelector('.delivery-link');
let modal = document.querySelector('.modal-wrapper');
let modalClose = document.querySelector('.button-modal-close');

//  Слушаем событие нажатия по элементу, чтобы проводить действия
modalBtn.addEventListener('click', function(e) {
  // Отменим стандартное поведение
  e.preventDefault();
  // Добавим класс active для модального окна, чтобы оно отобразилось
  modal.classList.add('modal-active');
})

modalClose.addEventListener('click', function(e) {
  // Отменим стандартное поведение
  e.preventDefault();
  // Удалим класс active для модального окна, чтобы оно скрылось
  modal.classList.remove('modal-active');
})

// слушаем нажатие клавиши Esc (она имеет код 27)
document.onkeydown = function(e) {
  if (e.key == "Escape") {
    modal.classList.remove('modal-active');
  }
}


//  Слайдер

let sliders = Array.from(document.querySelectorAll('.slider-item'));
let arrowNext = document.querySelectorAll('.slider-next');
let arrowPrev = document.querySelectorAll('.slider-prev');

let sliderShow = (index) => {
  for (let i = 0; i < sliders.length; i++) {
      sliders[i].classList.remove('active');
  }
  sliders[index].classList.add('active');
}

let prevSlide = () => {
    let currentIndex = sliders.findIndex(slider => slider.classList.contains('active'));
    let newIndex  = currentIndex - 1 ;
    if (newIndex < 0) {
      newIndex = sliders.length - 1;
    }
    sliderShow(newIndex);
}

let nextSlide = () => {
    let currentIndex = sliders.findIndex(slide => slide.classList.contains('active'));
    let newIndex = currentIndex + 1;
    if (newIndex == sliders.length) {
      newIndex = 0;
    }
    sliderShow(newIndex);
}

arrowNext.forEach(elem => elem.addEventListener('click', nextSlide));
arrowPrev.forEach(elem => elem.addEventListener('click', prevSlide));
