import './style.css';

const links = document.querySelectorAll('.nav__link');

links.forEach(link => {
  link.addEventListener('click', () => {
    links.forEach(link => {
      link.classList.remove('nav__link--active');
    });
    link.classList.add('nav__link--active');
  });
});
