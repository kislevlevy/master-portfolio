'use strict';

////////////////////////////////////////////////////////////////
// Query selectors:
// Modal:
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

// Tabs contiener:
const tabsContainer = document.querySelector('.operations__tab-container');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContent = document.querySelectorAll('.operations__content');

// Menu:
const nav = document.querySelector('.nav');
const allSections = document.querySelectorAll('.section');
const section1 = document.querySelector('#section--1');
const header = document.querySelector('.header');

// Images:
const imgTargets = document.querySelectorAll('img[data-src]');

// Slider:
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const btnSliderL = document.querySelector('.slider__btn--left');
const btnSliderR = document.querySelector('.slider__btn--right');
const dotsContainer = document.querySelector('.dots');

////////////////////////////////////////////////////////////////
// Modal window:
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

////////////////////////////////////////////////////////////////
// Smooth scrolling:
document
  .querySelector('.btn--scroll-to')
  .addEventListener('click', () => section1.scrollIntoView({ behavior: 'smooth' }));

// Page navigation:
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

////////////////////////////////////////////////////////////////
// Tabs Component:
tabsContainer.addEventListener('click', function (e) {
  e.preventDefault();
  // Guard:
  const clickd = e.target.closest('.operations__tab');
  if (!clickd) return;

  // Remove Clases:
  tabs.forEach((tab) => tab.classList.remove('operations__tab--active'));
  tabsContent.forEach((tab) => tab.classList.remove('operations__content--active'));

  // Add closes to the selected tab:
  clickd.classList.add('operations__tab--active');
  document
    .querySelector(`.operations__content--${clickd.dataset.tab}`)
    .classList.add('operations__content--active');
});

////////////////////////////////////////////////////////////////
// Menu links fade animation:
const hoverFade = function (e, opacity) {
  // Guard:
  if (!e.target.classList.contains('nav__link')) return;

  // Query selector with e.target:
  const link = e.target;
  const closest = link.closest('.nav');
  const siblings = closest.querySelectorAll('.nav__link');

  // Opacity change:
  siblings.forEach(function (element) {
    if (element !== link) element.style.opacity = opacity;
  });
  closest.querySelector('img').style.opacity = opacity;
};

nav.addEventListener('mouseover', (e) => hoverFade(e, 0.5));
nav.addEventListener('mouseout', (e) => hoverFade(e, 1));

////////////////////////////////////////////////////////////////
// Sticky navigation:
const navHight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHight + 10}px`,
}).observe(header);

////////////////////////////////////////////////////////////////
// Sections reveal:
window.scrollTo({ top: 0, behavior: 'smooth' });

const revealSection = function (entries, observer) {
  // Guard:
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  // Clase change:
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

// Observer:
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

// Run loop:
allSections.forEach(function (section) {
  section.classList.add('section--hidden');
  sectionObserver.observe(section);
});

////////////////////////////////////////////////////////////////
// Lazy loading images:
const loadImg = function (entries, observer) {
  // Guard:
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  // Replace lazy image:
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', () =>
    entry.target.classList.remove('lazy-img')
  );
  observer.unobserve(entry.target);
};

// Observer:
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

// Run loop:
imgTargets.forEach((img) => imgObserver.observe(img));

////////////////////////////////////////////////////////////////
// Slider component:
// Must veriables:
let currntSlide = 0;
const maxSlide = slides.length;

// Dots logic:
slides.forEach(function (_, i) {
  const html = `<button class="dots__dot" data-slide="${i}"></button>`;
  dotsContainer.insertAdjacentHTML('beforeend', html);
});

const activateDot = function () {
  document.querySelectorAll('.dots__dot').forEach(function (dot) {
    dot.classList.remove('dots__dot--active');

    if (Number(dot.dataset.slide) === currntSlide)
      dot.classList.add('dots__dot--active');
  });
};

// Go to slide (calculating current slide logic)
const goToSlide = function () {
  slides.forEach(
    (slide, i) => (slide.style.transform = `translateX(${100 * (i - currntSlide)}%)`)
  );
  activateDot();
};
goToSlide();

// Next and Previus slide functions:
const nextSlide = function () {
  if (currntSlide === maxSlide - 1) currntSlide = 0;
  else currntSlide++;
  goToSlide();
};
const prevSlide = function () {
  if (currntSlide === 0) currntSlide = maxSlide - 1;
  else currntSlide--;
  goToSlide();
};

// Event listener:
btnSliderR.addEventListener('click', nextSlide);
btnSliderL.addEventListener('click', prevSlide);
document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowRight') nextSlide();
  if (e.key === 'ArrowLeft') prevSlide();
});
dotsContainer.addEventListener('click', function (e) {
  if (!e.target.classList.contains('dots__dot')) return;
  currntSlide = Number(e.target.dataset.slide);
  goToSlide();
});
