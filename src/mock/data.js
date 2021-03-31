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
  paragraphThree: "Fortunately, this decision was for the best, as I happen to absolutely love coding. And yes, that includes when I spend intimate hours with my laptop debugging, cleaning my code, debugging again and finally reaching that moment when the magic happens ✨",
  //resume: "https://www.resumemaker.online/es.php", // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: "cover_learningstuff.jpg",
    title: "Learning Stuff",
    info: "This team project was done during the very last part of The Hacking Project bootcamp. This web application lets you register and pay for e-learning individual courses or wider learning paths.",
    info2: "In fact, the project was built on two separate applications: an API managed on Ruby on Rails for the data management, and a React app for the Frontend display. On my side, I largely worked on the implementation of two external APIs into the website: AWS S3 for the avatar management, and Stripe for the payments and invoices modules.",
    url: "https://learning-stuff-thp.herokuapp.com/",
    repo: "https://github.com/kentsbrockman/front_learningstuff", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "cover_pulpoludo.jpg",
    title: "Pulpo Ludo",
    info: "This application aims to be the future Netflix of board games. The first version of this website was realized during the final project of the Fullstack Web training of The Hacking Project.",
    info2: "During two weeks the project team worked to deliver a complete web application, robust on the Backend and clean on the Frontend.",
    url: "https://dev-pulpoludo-thp.herokuapp.com/",
    repo: "https://github.com/kentsbrockman/Pulpo-Ludo", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "cover_reactsocial.jpg",
    title: "A Social Network in React",
    info: "Here is a short project done in three days, as part of my React training path: a functional social network, allowing you to log in, post content and interact with other users on the platform.",
    info2: "Although there's a million more exciting things to implement here, this project reminds me of when I really started to understand the key principles of React, its power and its speed.",
    url: "https://my-social-network-qplaud.vercel.app/",
    repo: "https://github.com/kentsbrockman/Social-Network-in-React", // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "",
  btn: "",
  url: "https://www.linkedin.com/in/quentin-plaud/",
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: "linkedin",
      url: "https://www.linkedin.com/in/quentin-plaud/",
    },
    {
      id: nanoid(),
      name: "github",
      url: "https://github.com/kentsbrockman",
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
