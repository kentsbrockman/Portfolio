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
  subtitle: "I'm a Fullstack Web Developer",
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
    info: "This application aims to be the future Netflix of the board games. The first version of this site has been realized during the final project of the Fullstack Web training of The Hacking Project.",
    info2: "During 2 weeks, the project team worked to deliver a complete web application, robust on the Backend and clean on the Frontend.",
    url: "https://dev-pulpoludo-thp.herokuapp.com/",
    repo: "https://github.com/kentsbrockman/Pulpo-Ludo", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "cover_reactsocial.jpg",
    title: "A Social Network in React",
    info: "Here is a short project done in 3 days, as part of my React training path: a functional social network, allowing you to register, log in, post contents and observe those of other users of the platform.",
    info2: "Let's be real, it is very minimalistic. I am fully aware that there is a million more exciting things to implement here. But at the same time, this project symbolically reminds me when I really started to understand the key principles of React, its power and speed.",
    url: "https://my-social-network-qplaud.vercel.app/",
    repo: "https://github.com/kentsbrockman/Social-Network-in-React", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "cover_formyou.jpg",
    title: "Form You",
    info: "This team project has been done during the very last part of The Hacking Project bootcamp. This web application lets you register to a variety of trainings, materialized as events in a calendar.",
    info2: "In fact, the project has been built on 2 separate applications: an API managed on Ruby on Rails, and a React app for the Frontend display. There is finally a strong management of roles involved: administrator, teacher and student. The web application is fully functional. Though the overall design and ux could be improved, we take pride in the delivery of the package of features in 4 days.",
    url: "https://reactformyou.herokuapp.com/",
    repo: "https://github.com/kentsbrockman/react_formyou", // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "",
  btn: "",
  url: "https://www.linkedin.com/in/quentin-plaud-5416b814b/",
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
