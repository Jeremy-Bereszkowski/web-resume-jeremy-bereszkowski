import React from "react";

import {fullName} from "../global";
import Colours from "../../strings/colours";

/*Logos*/
const JavaScriptLogo = "/logos/JavaScript.png"
const CloudLogo = "/logos/Cloud.jpg"
const ToolsLogo = "/logos/Tools.jpg"
const JavaLogo = "/logos/Java.png"

/*Hobbies*/
const Snowboard = "/hobbies/Snowboard.png"
const Yoga = "/hobbies/Yoga.png"
const Bicycle = "/hobbies/Bicycle.png"
const Camping = "/hobbies/Camping.png"

const background = "/background.jpg"
const Avatar = "/avatar.png"

const LandingData = {
    core: {
        header: fullName,
        body: "Full-Stack Developer and Hardware Engineer",
        background: background,
    },
    aboutMe: {
        header: "About Me",
        subHeader: "A snapshot of myself",
        about: {
            header: `My name is ${fullName},`,
            subHeader: "A computer science and engineering " +
                "student at RMIT University from Melbourne, Australia.",
            para: [
                "Highly organized and detail-oriented honours student with a strong focus on consumer-facing design and experiences.",
                "Having experience across a wide range of technologies and frameworks including ReactJS, Android and cloud infrastructures including AWS & Google Cloud.",
                "Studying a double degree in both software and hardware, this has provided me with a unique perspective and approach when problem-solving projects. I look forward to bringing this distinctive viewpoint into all aspects of my work.",
            ]
        },
        avatar: Avatar,
    },
    projects: {
        header: "Work Portfolio",
        subHeader: "Product and Projects",
        cards: [
            {
                title: "MoveWell Physiotherapy",
                subTitle: "NextJS, MaterialUI",
                para: "A static SPA built in NextJS using MaterialUI for a Physiotherapy Practice based in Melbourne, Australia. Continuous integration is provided by GitHub and Vercel, hosting is provided by Vercel.",
                date: "2020-2021",
                text1: "Visit Webpage",
                href1: "https://movewellmelbourne.com.au/",
                text2: "Source Code",
                href2: "https://github.com/s3539822/MoveWellPhysio",
                color: Colours.ternary,
            },
            {
                title: "PICD Software Management Tool",
                subTitle: "ReactJS,  ExpressJS, SQL, Docker",
                para: "A static SPA built in ReactJS using an ExpressJS backend to communicate with a SQL database. The project was containerized using docker and is hosted via GitHub packages.",
                date: "Mar-Nov 2020",
                text2: "Source Code",
                href2: "https://github.com/s3539822/PICD-Capstone",
                color: Colours.ternary,
            },
        ]
    },
    skills: {
        header: "Skills and Tools",
        subHeader: "What I'm working with right now",
        cards: [
            {
                title: "Javascript",
                logo: JavaScriptLogo,
                list: [
                    "ReactJS",
                    "NextJS",
                    "ExpressJS",
                ],
            },
            {
                title: "Java",
                logo: JavaLogo,
                list: [
                    "Java 9",
                    "Android",
                ],
            },
            {
                title: "Cloud",
                logo: CloudLogo,
                list: [
                    "AWS",
                    "Google Cloud",
                    "Vercel",
                ],
            },
            {
                title: "Tools",
                logo: ToolsLogo,
                list: [
                    "Docker",
                    "Github",
                    "Travis CI",
                ],
            },
        ],
    },
    education: {
        header: "Work Experience and Education",
        subHeader: "My previous jobs and qualifications",
        cards: [
            {
                title: "M. Brodribb Pty Ltd",
                subTitle: "Data Entry Specialist",
                location: "Melbourne, Australia",
                para: [
                    "Purchase order processing and receipt",
                    "Creditor accounts management",
                    "Data entry specialist",
                    "Assistant accounting & book keeping",
                ],
                aside: "M. Brodribb is a Melbourne based specialist engineering firm that designs and manufactures high power conversion and cathodic protection systems.",
                date: "2018-present",
                icon: "work",
                color: 6,
            },
            {
                title: "Synergo Teknologi",
                subTitle: "Software Development Internship",
                location: "Jakarta, Indonesia",
                para: [
                    "Self-driven research, design, implementation and testing of web-based admin facing componentry",
                    "Interfacing and collaboration with internationally based engineering team",
                    "Code base review and refactor of string literals"
                ],
                aside: "Based in Jakarta, Indonesia; Synergo Teknologi is a SAAS company that develops and markets business management products and solutions.",
                date: "2018-2019",
                icon: "work",
                color: 12,
            },
            {
                title: "Rafiki Rover Scout Crew",
                subTitle: "Chairman",
                location: "Melbourne, Australia",
                para: [
                    "Chair bi-monthly board meetings",
                    "Oversee day-to-day running and operations",
                    "Legal guardianship over all members at all official events",
                    "Organise and manage weekly meetings",
                ],
                aside: "Rafiki Rover Scout Crew is a member of Scouting Australia, with 20+ current members, Rafiki is an active part of the local community.",
                date: "2020-present",
                icon: "work",
                color: 10,
            },
            {
                title: "RMIT University",
                subTitle: "Bachelor of Engineering (Computer Systems and Networking) with Honours/Bachelor of Computer Science",
                location: "Melbourne, Australia",
                date: "2016-present",
                icon: "school",
                color: 4,
            },
            {
                title: "The King David School",
                subTitle: "Year 12",
                location: "Melbourne, Australia",
                date: "2014",
                icon: "school",
                color: 8,
            }
        ]
    },
    hobbies: {
      header: "Hobbies",
      subHeader: "What I do, when I'm not at a computer",
      data: [
          {
              image: Snowboard,
              text: "Snowboarding",
              flipDirection: "vertical",
          },
          {
              image: Yoga,
              text: "Yoga",
              flipDirection: "horizontal",
          },
          {
              image: Bicycle,
              text: "Cycling",
              flipDirection: "vertical",
          },
          {
              image: Camping,
              text: "Camping",
              flipDirection: "horizontal",
          }
      ]
    },
}

export default LandingData
