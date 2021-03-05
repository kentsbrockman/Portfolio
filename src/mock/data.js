import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Quentin | Portfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "",
  name: "Quentin",
  subtitle: "I'm a Full Stack Web Developer",
  cta: "",
};

// ABOUT DATA
export const aboutData = {
  img: "profile_fb.jpg",
  paragraphOne: "First and foremost, I am an education enthusiast with a taste for adventure 🚀",
  paragraphTwo: "After a career journey filled with diversity, inspiring encounters and passions, I made the strategic choice of heading straight towards web development, an impenetrable yet intriguing world that I had the occasion to gaze at back when I was working in startups 💻",
  paragraphThree: "Fortunately, this decision has been for the best, as I happen to absolutely love coding. And yes, that includes when I spend intimate hours with my laptop to debugging, cleaning my code, debugging again and finally reaching that moment when the magic happens ✨",
  //resume: "https://www.resumemaker.online/es.php", // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: "cover_pulpoludo.jpg",
    title: "Pulpo Ludo",
    info: "This application aims to be the future Netflix of the board games. The first version of this site has been realized during the final project of the Fullstack Web training of The Hacking Project. During 2 weeks, the project team worked to deliver a complete web application, robust on the Backend and clean on the Frontend.",
    info2: "",
    url: "https://dev-pulpoludo-thp.herokuapp.com/",
    repo: "https://github.com/kentsbrockman/Pulpo-Ludo", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "cover_reactsocial.jpg",
    title: "A Social Network in React",
    info: "Here is short project done in 3 days, as part of my React training: a functional social network, allowing you to register, sign up, post contents and observe those of other users of the platform.",
    info2: "It is very minimalistic to be honest. I am fully aware that there is a million more exciting things to implement here. But at the same time, this project symbolically reminds me when I really started to understand the key principles of React, its power and speed.",
    url: "https://my-social-network-qplaud.vercel.app/",
    repo: "https://github.com/kentsbrockman/Social-Network-in-React", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "project.jpg",
    title: "WIP - Final Project THP Next",
    info: "",
    info2: "",
    url: "https://github.com/kentsbrockman/",
    repo: "https://github.com/kentsbrockman/", // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  url: 'https://www.linkedin.com/in/quentin-plaud-5416b814b/',
};

// FOOTER DATA
// export const footerData = {
//   networks: [
//     {
//       id: nanoid(),
//       name: 'twitter',
//       url: '',
//     },
//     {
//       id: nanoid(),
//       name: 'codepen',
//       url: '',
//     },
//     {
//       id: nanoid(),
//       name: 'linkedin',
//       url: '',
//     },
//     {
//       id: nanoid(),
//       name: 'github',
//       url: '',
//     },
//   ],
// };

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
