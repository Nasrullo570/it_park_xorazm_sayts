const delay = 3000; //ms

const slides = document.querySelector(".slides");
const slidesCount = slides.childElementCount;
const maxLeft = (slidesCount - 1) * 100 * -1;

let current = 0;

function changeSlide(next = true) {
  if (next) {
    current += current > maxLeft ? -100 : current * -1;
  } else {
    current = current < 0 ? current + 100 : maxLeft;
  }

  slides.style.left = current + "%";
}

let autoChange = setInterval(changeSlide, delay);
const restart = function() {
  clearInterval(autoChange);
  autoChange = setInterval(changeSlide, delay);
};

// Controls
document.querySelector(".next-slide").addEventListener("click", function() {
  changeSlide();
  restart();
});

document.querySelector(".prev-slide").addEventListener("click", function() {
  changeSlide(false);
  restart();
});

/* ----------- */
let navMenu = document.querySelector('.nav__menu');
let headerList = document.querySelector('.header__list');
let closeBtn = document.querySelector('#close');


navMenu.addEventListener('click', () => {
  navMenu.classList.toggle('active')
  headerList.classList.toggle('active')
})

closeBtn.addEventListener('click', () => {
  headerList.classList.toggle('active')
  navMenu.classList.remove('active')
})
