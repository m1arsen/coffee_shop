let menuBtn = document.querySelector('.menuBtn'),
    navBtn = document.querySelector('.navBtn'),
    navList = document.querySelector('.navList'),
    overlay = document.querySelector('.overlay');

menuBtn.addEventListener('click', () => {
  navBtn.classList.toggle('open');
  navList.classList.toggle('open');
  overlay.classList.toggle('show');
});