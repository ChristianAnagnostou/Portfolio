import { Project } from "../types";

export const ProjectState: Project[] = [
  {
    title: "Electriq Dashboard",
    desktopImgs: [
      "/img/projects/electriq-app/dashboard-composed.webp",
      "/img/projects/electriq-app/gantt-chart.png",
      "/img/projects/electriq-app/kanban-chart.webp",
    ],
    mobileImgs: ["/img/projects/electriq-app/calendar.png"],
    externalLink: "https://electriq.app/",
    slug: "electriq-app",
    summary:
      "Visualize and manage Linear projects with timelines, kanbans, calendars, and much more",
    details: [
      {
        title: "Purpose",
        description:
          "A project management app that provides insights into Linear projects through data visualization.",
      },
      {
        title: "Reason",
        description:
          "Linear doesn't have timelines for projects and doesn't plan to add them. This does that and more.",
      },

      {
        title: "Features",
        description:
          "The ability to send live feedback to the teams in charge is built in and incredibly intuitive.",
      },
    ],
  },
  {
    title: "Electriq's Website",
    desktopImgs: [
      "/img/projects/electriq-home/homepage-composed.webp",
      "/img/projects/electriq-home/hero-main.png",
    ],
    mobileImgs: [],
    externalLink: "https://www.electriqmarketing.com/",
    slug: "electriq-home",
    summary:
      "Collaborated with the agency's in-house design team to craft the rebranding of Electriq",
    details: [
      {
        title: "Purpose",
        description:
          "React web application to give PM's and clients the ability to visualize the progress and make changes to the web department's projects.",
      },
    ],
  },
  {
    title: "Lift Club",
    desktopImgs: [
      "/img/projects/liftclub/liftclub-main.jpeg",
      "/img/projects/liftclub/liftclub-purpose.png",
    ],
    mobileImgs: [
      "/img/projects/liftclub/user-profile.png",
      "/img/projects/liftclub/workout-log-2.png",
    ],
    externalLink: "https://liftclub.app/",
    github: "https://github.com/ChristianAnagnostou/liftclub",
    slug: "liftclub",
    summary: "Track your workout progress with little effort and gain big insights",
    details: [
      {
        title: "Purpose",
        description:
          "Lift club is a social fitness app that gives you the power to find well structured workouts and track your progress as you improve.",
      },
      {
        title: "Join",
        description:
          "Best experienced as a lightweght PWA, meaning that there is no download required. By adding the web page to your home screen, users can access Lift Club and have a native-like app experience.",
      },
      {
        title: "Features",
        description:
          "Build workouts from an extensive list of default exercises, create your own exercises, organize workouts on a calendar to create a schedule to follow, and assemble teams where others can follow your routine, and more.",
      },
      {
        title: "Documantation",
        description:
          "Check out the README.md file in the Github repository for up-to-date documentation on how to install and use the app.",
      },
    ],
  },
  {
    title: "Photo Shop",
    desktopImgs: [
      "/img/projects/awildchristian/main.jpeg",
      "/img/projects/awildchristian/desktop1.jpg",
      "/img/projects/awildchristian/desktop2.jpg",
      "/img/projects/awildchristian/desktop3.jpg",
    ],
    mobileImgs: [
      "/img/projects/awildchristian/mobile1.jpg",
      "/img/projects/awildchristian/mobile2.jpg",
    ],
    externalLink: "https://awildchristian.com/",
    github: "https://github.com/ChristianAnagnostou/anagnostou-photography-frontend",
    slug: "awildchristian",
    summary:
      "See the photos on my art page? I'll print them out, sign them, and send them to you if you send me a few shekels",
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
    desktopImgs: [
      "/img/projects/neologos/neologos-main.jpeg",
      "/img/projects/neologos/neologos-desktop1.jpg",
      "/img/projects/neologos/neologos-desktop2.jpg",
      "/img/projects/neologos/neologos-desktop3.jpg",
    ],
    mobileImgs: [
      "/img/projects/neologos/neologos-mobile1.jpg",
      "/img/projects/neologos/neologos-mobile2.jpg",
    ],
    // externalLink: "https://neologos.herokuapp.com/",
    github: "https://github.com/ChristianAnagnostou/NeoLogos",
    slug: "neologos",
    summary: "Ever made of a word for something? Well now you know where to put it.",
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
    title: "Music Player",
    desktopImgs: [
      "/img/projects/lofiwaves/lofiwaves-main.jpeg",
      "/img/projects/lofiwaves/lofiwaves-desktop.jpg",
    ],
    mobileImgs: ["/img/projects/lofiwaves/lofiwaves-mobile.jpg"],
    externalLink: "http://lofiwaves.surge.sh/",
    github: "https://github.com/ChristianAnagnostou/LofiWaves",
    slug: "lofiwaves",
    summary: "Like lofi? So do I, so why not checkout out some of my faves here",
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
