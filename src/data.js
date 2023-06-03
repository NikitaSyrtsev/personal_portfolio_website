import { FiGithub, FiMail, FiMapPin, FiSettings, FiLayout } from "react-icons/fi";

import { SiLeetcode, SiTelegram } from "react-icons/si";


import SkillImg1 from "./assets/img/skills/html.svg";
import SkillImg2 from "./assets/img/skills/css.svg";
import SkillImg3 from "./assets/img/skills/javascript.svg";
import SkillImg4 from "./assets/img/skills/typescript.svg";
import SkillImg5 from "./assets/img/skills/react.svg";
import SkillImg6 from "./assets/img/skills/tailwind.svg";
import SkillImg7 from "./assets/img/skills/python.svg";
import SkillImg8 from "./assets/img/skills/git.svg";

import park from "./assets/img/portfolio/park.jpg"
import dogs from "./assets/img/portfolio/dogs.jpg"

export const navigation = [
    {
        name: "home",
        href: "home",
    },
    {
        name: "about",
        href: "about",
    },
    {
        name: "services",
        href: "services",
    },
    {
        name: "projects",
        href: "projects",
    },
    {
        name: "contact",
        href: "contact",
    },
];

export const social = [
    {
        icon: <FiMail />,
        href: "https://nik.syrtsev02@gmail.com",
    },
    {
        icon: <FiGithub />,
        href: "https://github.com/NikitaSyrtsev",
    },
    {
        icon: <SiTelegram />,
        href: "https://t.me/yanenikita",
    },
    {
        icon: <SiLeetcode />,
        href: "https://leetcode.com/NikitaSyrtsev/",
    },
];

export const skills = [
    {
        image: SkillImg1,
    },
    {
        image: SkillImg2,
    },
    {
        image: SkillImg3,
    },
    {
        image: SkillImg4,
    },
    {
        image: SkillImg5,
    },
    {
        image: SkillImg6,
    },
    {
        image: SkillImg7,
    },
    {
        image: SkillImg8,
    },
];

export const contact = [
    {
        icon: <FiMail />,
        title: "Have a question?",
        subtitle: "I am here to help you.",
        description: "Email me at nik.syrtsev02@gmail.com",
    },
    {
        icon: <FiMapPin />,
        title: "Current Location",
        subtitle: "Rostov-on-Don, Russia",
        description: "",
    },
];

export const services = [
    {
        icon: <FiLayout />,
        name: 'Web Design',
        description:
            'I offer top-notch web design services that empower businesses with beautifully crafted designs. I enhance user experience and create visually stunning websites that leave a lasting impression on your audience.',
    },
    {
        icon: <FiSettings />,
        name: 'Web Development',
        description:
            'I provide exceptional web programming services that empower businesses with robust and dynamic websites. I create seamless and interactive web applications that elevate user experience and drive meaningful engagement for your online presence.',
    },
];

export const projects = [
    {
        name: "National Park",
        description: "This is a Next.js, TypeScript and Tailwind.css National Park project.",
        image: park,
        link: "https://github.com/NikitaSyrtsev/national_park_next",
    },
    {
        name: "Dog Glossary",
        description: "Dog collection provided by fetching data from an API.",
        image: dogs,
        link: "https://github.com/NikitaSyrtsev/dog-glossary",
    },
];
