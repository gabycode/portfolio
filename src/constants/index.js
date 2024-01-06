import {
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  figma,
  meta,
  starbucks,
  tesla,
  shopify,
  watchlist,
  quizzical,
  tenzies,
  wordpress,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "works",
    title: "Works",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Wordpress",
    icon: wordpress,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const projects = [
  {
    name: "Movie Watchlist",
    description:
      "The web-based platform harnesses the capabilities of the OMDb API, enabling users to effortlessly search for and compile a curated list of their beloved movies, creating a personalized watchlist for convenient access and future enjoyment.",
    tags: [
      {
        name: "html",
        color: "red-text-gradient",
      },
      {
        name: "css",
        color: "lightblue-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
    ],
    image: watchlist,
    source_code_link: "https://github.com/gabycode/movie-watchlist-api",
  },
  {
    name: "Quizzical Trivia",
    description:
      "The single-page app, which fetches data from the Open Trivia DB, empowers users to select their preferred category and seamlessly engage in the quiz, offering an interactive and personalized trivia experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "lightblue-text-gradient",
      },
    ],
    image: quizzical,
    source_code_link: "https://github.com/gabycode/quizzicalTrivia",
  },
  {
    name: "Tenzies Game",
    description:
      "Tenzies, an exhilarating dice game, invites players to rapidly match dice faces, fostering an engaging and competitive atmosphere perfect for group entertainment and thrilling gameplay.",
    tags: [
      {
        name: "html",
        color: "red-text-gradient",
      },
      {
        name: "css",
        color: "lightblue-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
    ],
    image: tenzies,
  },
];

export { technologies, projects };
