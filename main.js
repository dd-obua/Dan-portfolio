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

// generate multi stories section using JavaScript
const stories = [
  {
    empty: '',
    storyTitle: 'Multi-Post Stories Gain+Glory',
    languages: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    storyDetails: {
      name: 'Keeping track of hundreds of components',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      featuredImage: './images/desktop-featrured-image.svg',
      technologies: [
        'CodeKit',
        'GitHub',
        'JavaScript',
        'Bootstrap',
        'Terminal',
        'CodePen',
      ],
      liveVersionLink: 'https://dd-obua.github.io/Dan-portfolio/',
      sourceLink: 'https://github.com/dd-obua/Dan-portfolio',
    },
  },
];

const modalContainer = document.getElementById('modal-desktop');
const closePopup = () => {
  const closeModalIcon = document.querySelector('.close-modal-icon');
  closeModalIcon.addEventListener('click', (e) => {
    e.preventDefault();
    if (!modalContainer.classList.contains('hide-modal')) {
      modalContainer.classList.add('hide-modal');
    }
  });
};
