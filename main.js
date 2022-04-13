const nav = document.querySelector('nav');
const mobileIcons = document.querySelector('.mobile-icons');
const logo = document.querySelector('.logo');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.close');
const options = document.querySelector('.options');
const portfolio = document.querySelector('#portfolio-link');
const about = document.querySelector('#about-link');
const contact = document.querySelector('#contact-link');

closeIcon.style.display = 'none';
options.style.display = 'none';

const toggleMenuOptions = () => {
  if (nav.classList.contains('click-mobile-icon')) {
    nav.classList.remove('click-mobile-icon');
    closeIcon.style.display = 'none';
    hamburger.style.display = 'block';
    logo.style.display = 'block';
    options.style.display = 'none';
  } else {
    nav.classList.add('click-mobile-icon');
    closeIcon.style.display = 'block';
    hamburger.style.display = 'none';
    logo.style.display = 'none';
    options.style.display = 'block';
  }
};

mobileIcons.addEventListener('click', toggleMenuOptions);
portfolio.addEventListener('click', toggleMenuOptions);
about.addEventListener('click', toggleMenuOptions);
contact.addEventListener('click', toggleMenuOptions);
