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
      featuredImage: './images/modal-image.svg',
      technologies: [
        'CodeKit',
        'GitHub',
        'JavaScript',
        'Bootstrap',
        'Terminal',
        'CodePen',
      ],
      liveVersionLink: '',
      sourceLink: '',
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
      featuredImage: './images/modal-image.svg',
      technologies: [
        'CodeKit',
        'GitHub',
        'JavaScript',
        'Bootstrap',
        'Terminal',
        'CodePen',
      ],
      liveVersionLink: '',
      sourceLink: '',
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
      featuredImage: './images/modal-image.svg',
      technologies: [
        'CodeKit',
        'GitHub',
        'JavaScript',
        'Bootstrap',
        'Terminal',
        'CodePen',
      ],
      liveVersionLink: '',
      sourceLink: '',
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
      featuredImage: './images/modal-image.svg',
      technologies: [
        'CodeKit',
        'GitHub',
        'JavaScript',
        'Bootstrap',
        'Terminal',
        'CodePen',
      ],
      liveVersionLink: '',
      sourceLink: '',
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
      featuredImage: './images/modal-image.svg',
      technologies: [
        'CodeKit',
        'GitHub',
        'JavaScript',
        'Bootstrap',
        'Terminal',
        'CodePen',
      ],
      liveVersionLink: '',
      sourceLink: '',
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
      featuredImage: './images/modal-image.svg',
      technologies: [
        'CodeKit',
        'GitHub',
        'JavaScript',
        'Bootstrap',
        'Terminal',
        'CodePen',
      ],
      liveVersionLink: '',
      sourceLink: '',
    },
  },
];

const modalContainer = document.getElementById('modalDesktop');

const multiStories = document.querySelector('.multi-stories');
stories.forEach((stry, index) => {
  let storyItems = '';
  stry.languages.map((storyItem) => {
    storyItems += ` <li>${storyItem}</li>`;
    return null;
  });

  const story = `
<div class="story">
          <div class="content">
          <img src="${stry.storyImage}" class="story-image" alt="">
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
				<div class="story-modal">
				Hi I am a modal
				<br>
				<ul>${technologies}</ul>
				</div>
			`;
        if (modalContainer.classList.contains('hide-modal')) {
          modalContainer.classList.remove('hide-modal');
          modalContainer.innerHTML = modalTemplate;
        }
      }
    });
  });
}

displayModal();
