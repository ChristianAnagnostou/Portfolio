//Import Images
import wildchristianDesktop1 from "./img/projects/awildchristian-desktop1.png";
import wildchristianDesktop2 from "./img/projects/awildchristian-desktop2.png";
import wildchristianDesktop3 from "./img/projects/awildchristian-desktop3.png";
import wildchristianMobile1 from "./img/projects/awildchristian-mobile1.png";
import wildchristianMobile2 from "./img/projects/awildchristian-mobile2.png";

import neologosDesktop1 from "./img/projects/neologos-desktop1.png";
import neologosDesktop2 from "./img/projects/neologos-desktop2.png";
import neologosDesktop3 from "./img/projects/neologos-desktop3.png";
import neologosMobile1 from "./img/projects/neologos-mobile1.png";
import neologosMobile2 from "./img/projects/neologos-mobile2.png";

import lofiMobile from "./img/projects/lofiwaves-mobile.png";
import lofiDesktop from "./img/projects/lofiwaves-desktop.png";

import vibetribeMobile from "./img/projects/vibetribe-mobile.png";
import vibetribeDesktop from "./img/projects/vibetribe-desktop.png";

export const projectState = [
  {
    title: "Photo e-commerce",
    desktopImgs: [wildchristianDesktop1, wildchristianDesktop2, wildchristianDesktop3],
    mobileImgs: [wildchristianMobile1, wildchristianMobile2],
    externalLink: "https://awildchristian.com/",
    github: "https://github.com/ChristianAnagnostou/anagnostou-photography-frontend",
    url: "/work/awildchristian",
    details: [
      {
        title: "Front-end",
        description:
          "Utlizes NextJS for fast page loading times, improved SEO, and control over server-side vs client-side rendering.",
      },
      {
        title: "Back-end",
        description:
          "Backend controlled by the headless CMS, Strapi, for seamless management of product, order, and customer data.",
      },
      {
        title: "Features",
        description:
          "Password-less authentication with Magic.link and payment processing with Stripe.",
      },
    ],
  },
  {
    title: "NeoLogos",
    desktopImgs: [neologosDesktop1, neologosDesktop2, neologosDesktop3],
    mobileImgs: [neologosMobile1, neologosMobile2],
    externalLink: "https://neologos.herokuapp.com/",
    github: "https://github.com/ChristianAnagnostou/NeoLogos",
    url: "/work/neologos",
    details: [
      {
        title: "Front-end",
        description:
          "I used React and Redux as the building blocks for creating the front-end and managing the state of the site. Also, the site features a night mode and is completely mobile friendly.",
      },
      {
        title: "Back-end",
        description:
          "For the back-end, I used a combination of Express and Mongoose create my server and schemas for my database.",
      },
      {
        title: "Deployment",
        description:
          "For this project, I choose to use Heroku as my hosting service as they have a great system for deploying right when you commit to github",
      },
    ],
  },
  {
    title: "Spotify Playlist Creator",
    desktopImgs: [vibetribeDesktop],
    mobileImgs: [vibetribeMobile],
    externalLink: "http://vibetribe.surge.sh/",
    github: "https://github.com/ChristianAnagnostou/VibeTribe",
    url: "/work/vibetribe",
    details: [
      {
        title: "Front-end",
        description:
          "Initially made with React classes. Revisited an refactored to use functional components and redux.",
      },
      {
        title: "Spotify",
        description: "Features Spotify authentication and full playlist customization",
      },
      {
        title: "Documentation",
        description: "Fully documented git repository with a complete step-by-step build process",
      },
    ],
  },
  {
    title: "Music Player",
    desktopImgs: [lofiDesktop],
    mobileImgs: [lofiMobile],
    externalLink: "http://lofiwaves.surge.sh/",
    github: "https://github.com/ChristianAnagnostou/LofiWaves",
    url: "/work/lofiwaves",
    details: [
      {
        title: "Front-end",
        description:
          "This project was written entirely in React using tools such as: React Router and SCSS.",
      },
      {
        title: "Lofi library",
        description:
          "The library consists of lofi beats that I like to listen to while I code. Sit up, zone-in, and code away!",
      },
      {
        title: "Custom controls",
        description:
          "The app features autoplay and easy-to-use controls for the music player as well as a fully optimized mobile site.",
      },
    ],
  },
];
