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

const stories = [
  {
    storyImage: './images/story-image.svg',
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
    mobileStoryDetails: {
      name: 'Keeping track of hundreds of components',
      description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      featuredImage: './images/mobile-featured-image.svg',
      technologies: ['Ruby on rails', 'css', 'JavaScript'],
      liveVersionLink: 'https://dd-obua.github.io/Dan-portfolio/',
      sourceLink: 'https://github.com/dd-obua/Dan-portfolio',
    },
  },
  {
    storyImage: './images/story-image.svg',
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
    mobileStoryDetails: {
      name: 'Keeping track of hundreds of components',
      description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      featuredImage: './images/mobile-featured-image.svg',
      technologies: ['Ruby on rails', 'css', 'JavaScript'],
      liveVersionLink: 'https://dd-obua.github.io/Dan-portfolio/',
      sourceLink: 'https://github.com/dd-obua/Dan-portfolio',
    },
  },
  {
    storyImage: './images/story-image.svg',
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
    mobileStoryDetails: {
      name: 'Keeping track of hundreds of components',
      description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      featuredImage: './images/mobile-featured-image.svg',
      technologies: ['Ruby on rails', 'css', 'JavaScript'],
      liveVersionLink: 'https://dd-obua.github.io/Dan-portfolio/',
      sourceLink: 'https://github.com/dd-obua/Dan-portfolio',
    },
  },
  {
    storyImage: './images/story-image.svg',
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
    mobileStoryDetails: {
      name: 'Keeping track of hundreds of components',
      description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      featuredImage: './images/mobile-featured-image.svg',
      technologies: ['Ruby on rails', 'css', 'JavaScript'],
      liveVersionLink: 'https://dd-obua.github.io/Dan-portfolio/',
      sourceLink: 'https://github.com/dd-obua/Dan-portfolio',
    },
  },
  {
    storyImage: './images/story-image.svg',
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
    mobileStoryDetails: {
      name: 'Keeping track of hundreds of components',
      description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      featuredImage: './images/mobile-featured-image.svg',
      technologies: ['Ruby on rails', 'css', 'JavaScript'],
      liveVersionLink: 'https://dd-obua.github.io/Dan-portfolio/',
      sourceLink: 'https://github.com/dd-obua/Dan-portfolio',
    },
  },
  {
    storyImage: './images/story-image.svg',
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
    mobileStoryDetails: {
      name: 'Keeping track of hundreds of components',
      description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      featuredImage: './images/mobile-featured-image.svg',
      technologies: ['Ruby on rails', 'css', 'JavaScript'],
      liveVersionLink: 'https://dd-obua.github.io/Dan-portfolio/',
      sourceLink: 'https://github.com/dd-obua/Dan-portfolio',
    },
  },
];

const modalContainer = document.getElementById('modal-desktop');
const mobileModalContainer = document.getElementById('modal-mobile');
const closePopup = () => {
  const closeModalIcon = document.querySelector('.close-modal-icon');
  closeModalIcon.addEventListener('click', (e) => {
    e.preventDefault();
    if (!modalContainer.classList.contains('hide-modal')) {
      modalContainer.classList.add('hide-modal');
    }
  });
};

const closeMobilePopup = () => {
  const closeMobileModalIcon = document.querySelector('.close-mobile-modal-icon');
  closeMobileModalIcon.addEventListener('click', (e) => {
    e.preventDefault();
    if (!mobileModalContainer.classList.contains('hide-modal')) {
      mobileModalContainer.classList.add('hide-modal');
    }
  });
};

const multiStories = document.querySelector('.multi-stories');
stories.forEach((stry, index) => {
  let storyItems = '';
  stry.languages.map((storyItem) => {
    storyItems += ` <li>${storyItem}</li>`;
    return null;
  });

  const story = `
  <div class="story">
  <div class="empty"></div>
            <div class="content">
              <h2> ${stry.storyTitle} </h2>
              <ul> ${storyItems} </ul>
              <button class="btn" id="${index}" type="button" name="story-button" aria-label="See project button" >See Project</button>
            </div>
          </div>
  `;

  multiStories.innerHTML += story;
});

function displayModal() {
  const storyBtns = document.querySelectorAll('.btn');
  storyBtns.forEach((storyBtn) => {
    storyBtn.addEventListener('click', () => {
      const btnId = storyBtn.getAttribute('id');
      const storyInfo = stories[btnId];
      if (window.innerWidth >= 768) {
        let technologies = '';
        storyInfo.storyDetails.technologies.map((technology) => {
          technologies += `<li>${technology}</li>`;
          return null;
        });
        const modalTemplate = `
            <div class="modal">
              <div class="desktop-modal-content">
                <i class="close-modal-icon fa-solid fa-xmark fa-xl"></i>
                <img src="${storyInfo.storyDetails.featuredImage}" class="img" alt="" />
                <div class="below">
                  <h3> ${storyInfo.storyDetails.name} </h3>
                    <a href="${storyInfo.storyDetails.liveVersionLink}">See Live <img src="./images/live.svg" alt="" /></a>
                    <a href="${storyInfo.storyDetails.sourceLink}">See Source <img src="./images/source.svg" alt="" /></a>
                </div>
                <ul> ${technologies} </ul>
                <p> ${storyInfo.storyDetails.description} </p>
              </div>
            </div>
          `;
        if (modalContainer.classList.contains('hide-modal')) {
          modalContainer.classList.remove('hide-modal');
          modalContainer.innerHTML = modalTemplate;
        }
        closePopup();
      } else {
        // logic for mobile version
        let technologies = '';
        storyInfo.mobileStoryDetails.technologies.map((technology) => {
          technologies += `<li>${technology}</li>`;
          return null;
        });
        const mobileModalTemplate = `
            <div class="mobile-modal">
              <div class="mobile-modal-content">
                <i class="close-mobile-modal-icon fa-solid fa-xmark fa-xl"></i>
                <img src="${storyInfo.mobileStoryDetails.featuredImage}" class="img" alt="" />
                  <div class="below">
                    <h3> ${storyInfo.mobileStoryDetails.name} </h3>
                    <ul> ${technologies} </ul>
                    <p> ${storyInfo.mobileStoryDetails.description} </p>
                    <div class="links">
                      <a href="${storyInfo.mobileStoryDetails.liveVersionLink}">See Live <img src="./images/live.svg" alt="" /></a>
                      <a href="${storyInfo.mobileStoryDetails.sourceLink}">See Source <img src="./images/source.svg" alt="" /></a>
                    </div>
                  </div>
              </div>
            </div>
          `;
        if (mobileModalContainer.classList.contains('hide-modal')) {
          mobileModalContainer.classList.remove('hide-modal');
          mobileModalContainer.innerHTML = mobileModalTemplate;
        }
        closeMobilePopup();
      }
    });
  });
}

displayModal();

const contactForm = document.forms.contactForm
const input = contactForm.email;
const error = document.querySelector('.form-error');

