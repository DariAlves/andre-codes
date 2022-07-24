import './style.css';

const links = document.querySelectorAll('.nav__link');
const linksMobile = document.querySelectorAll('.nav__link--mobile');
const hamburger = document.querySelector('.menu__hamburger');
const navMobile = document.querySelector('.nav__mobile');
const lines = document.querySelectorAll('.line');

function activeLinks(element, className) {
  element.forEach(link => {
    link.addEventListener('click', () => {
      element.forEach(link => {
        link.classList.remove(`${className}--active`);
      });
      link.classList.add(`${className}--active`);
    });
  });
}

activeLinks(links, 'nav__link');
activeLinks(linksMobile, 'nav__link--mobile');

function addEvent(method) {
  navMobile.classList[`${method}`]('menu__mobile--active');
  lines.forEach((line, index) => {
    line.classList[`${method}`](`line-${index + 1}--active`);
  });
}

hamburger.addEventListener('click', () => {
  addEvent('toggle');
});

window.addEventListener('resize', e => {
  if (e.target.innerWidth > 768) {
    addEvent('remove');
  }
});
