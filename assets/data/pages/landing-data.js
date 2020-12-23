import React from "react";

import {fullName} from "../global";

/*Logos*/
const JavaScriptLogo = "/logos/JavaScript.png"
const CloudLogo = "/logos/Cloud.jpg"
const ToolsLogo = "/logos/Tools.jpg"
const JavaLogo = "/logos/Java.png"

/*Hobbies*/
const Snowboard = "/hobbies/Snowboard.png"
const Yoga = "/hobbies/Yoga.png"
const Bicycle = "/hobbies/Bicycle.png"



const LandingData = {
    core: {
        header: fullName,
        body: "Full-Stack Developer and Hardware Engineer",
    },
    aboutMe: {
        header: "About Me",
        subHeader: "A snapshot of myself",
        about: {
            header: fullName,
            subHeader: "I am a full-stack developer and hardware engineer from Melbourne, Australia.",
            para: [
                "I am a RMIT University student of computer science and hardware engineering with a strong focus on full-stack web and mobile development and cloud based ecosystems.",
                "I have experience across a wide variety of technology stacks and frameworks, including ReactJS & NextJS, Java & Android and Google Cloud & AWS.",
                "I have a passion for clean and elegant object-oriented code implemented via an agile scrum workflow.",
            ]
        }
    },
    projects: {
        header: "Product and Projects",
        subHeader: "Work Portfolio",
        cards: [
            {
                title: "MoveWell Physiotherapy",
                subTitle: "NextJS, MaterialUI",
                para: "A static SPA built in NextJS using MaterialUI for a Physiotherapy Practice based in Melbourne, Australia. Continuous integration is provided by GitHub and Vercel, hosting is provided by Vercel.",
                date: "2020",
                text1: "Visit Webpage",
                href1: "https://move-well-physio.vercel.app/",
                text2: "Source Code",
                href2: "https://github.com/s3539822/MoveWellPhysio",
            },
            {
                title: "PICD Software Managment Tool",
                subTitle: "ReactJS, ExpressJS, SQL, Docker",
                para: "A static SPA built in ReactJS using an ExpressJS backend to communicate with a SQL database. The project was containerized using docker and is hosted via GitHub packages.",
                date: "2020",
                text1: "App Demo",
                href1: "",
                text2: "Source Code",
                href2: "",
            },
        ]
    },
    skills: {
        header: "Skills and Tools",
        subHeader: "My preferred languages and dev tools",
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
        subHeader: "My previous work history and education",
        cards: [
            {
                title: "M. Brodribb Pty Ltd",
                subTitle: "Office Manager",
                para: "Data entry specialist, Book keeping, Office manager",
                date: "2018-present",
                icon: "work",
                color: 6,
            },
            {
                title: "Synergo Teknologi",
                subTitle: "Software Developer",
                para: "Software Development Intern",
                para2: "Based in Jakarta, Indonesia.",
                date: "2018-2019",
                icon: "work",
                color: 12,
            },
            {
                title: "Bachelor of Engineering (Computer Systems and Networking) with Honours/Bachelor of Computer Science",
                subTitle: "Double Bachelor Degree",
                date: "2016-present",
                icon: "school",
                color: 10,
            },
            {
                title: "The King David School",
                subTitle: "Melbourne, Australia",
                date: "2014",
                icon: "school",
                color: 4,
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
      ]
    },
}

export default LandingData
