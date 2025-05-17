import { nanoid } from "nanoid";
import {
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaNode,
  FaAtlas,
  FaDatabase,
  FaPython,
  FaJava,
  FaRust,
} from "react-icons/fa";

import agrosavant from "./assets/AgrosavantHomePage.png";
import cocktailMixer from "./assets/CocktailMixer.png";
import TourFinder from "./assets/TourFinder.png";
export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
  { id: nanoid(), href: "#certifications", text: "certifications" },
  { id: nanoid(), href: "#qualifications", text: "qualifications" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Most loved front-end framework for developing the responsive and interactive pages.",
  },
  {
    id: nanoid(),
    title: "NodeJs",
    icon: <FaNodeJs className="h-16 w-16 text-emerald-500" />,
    text: "Proficiency in NodeJs for developing strong and secure backend systems.",
  },
  {
    id: nanoid(),
    title: "MongoDB",
    icon: <FaDatabase className="h-16 w-16 text-emerald-500" />,
    text: "Efficient in MonogDB(Atlas), My Primary NO-SQL database tool for full stack software development.",
  },
  {
    id: nanoid(),
    title: "Django",
    icon: <FaPython className="h-16 w-16 text-emerald-500" />,
    text: "Basic foundational knowlegde on Django for developing full stack applications.",
  },
  {
    id: nanoid(),
    title: "Python",
    icon: <FaPython className="h-16 w-16 text-emerald-500" />,
    text: "Efficiency in python for data science application tools like numpy and pandas.",
  },
  {
    id: nanoid(),
    title: "Java",
    icon: <FaJava className="h-16 w-16 text-emerald-500" />,
    text: "Efficiency in java for data sturctures and algorithms and normal coding practices.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: agrosavant,
    url: "#",
    github: "https://github.com/kulamani6370",
    title: "AgroSavant",
    text: "AI powered crop recommendation and disease detection system. (In development phase)",
  },
  {
    id: nanoid(),
    img: cocktailMixer,
    url: "https://cocktailsmixer.netlify.app/",
    github: "https://github.com/Kulamani6370/CocktailMixer",
    title: "CocktailMixer",
    text: "It gives you the all types of Cocktails present in the world and gives you all the details about that cocktail",
  },
  {
    id: nanoid(),
    img: TourFinder,
    url: "https://tourfinder.netlify.app/",
    github: "https://github.com/Kulamani6370/TourFinder",
    title: "Tour Finder App",
    text: "A Tour finder app that finds you the amazing tours inside INDIA",
  },
];
