import ejsLogo from './assets/tech_logo/ejs.png';
import daisy from './assets/tech_logo/daisy.png';
import htmlLogo from './assets/tech_logo/html.png';
import vite from './assets/tech_logo/vite.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import mcLogo from './assets/tech_logo/mc.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import Render from './assets/tech_logo/render.png';
import ODF from './assets/tech_logo/odf.ico';

// Education Section Logo's
import bitmesra1 from './assets/education_logo/bitmesra1.png';
import gossner from './assets/education_logo/gossner.jpg';
import agrasen from './assets/education_logo/agrasen.png';

// Project Section Logo's
import roomioLogo from './assets/work_logo/roomio.png';
import oldPortfolioLogo from './assets/work_logo/oldPortfolio.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React.js', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      { name: 'EJS', logo: ejsLogo },
      { name: 'DaisyUI', logo: daisy },
      { name: 'Vite', logo: vite },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', logo: nodejsLogo },
      { name: 'Express.js', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'Python', logo: pythonLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Render', logo: Render },
      { name: 'Hoppscotch', logo: ODF },
    ],
  },
];

  export const experiences = [
    // {
    //   id: 0,
    //   img: ,
    //   role: "",
    //   company: "",
    //   date: "",
    //   desc: ".",
    //   skills: [
    //     "HTML",
    //   ],
    // },
    
  ];
  
  export const education = [
    {
      id: 0,
      img: bitmesra1,
      school: "BIT Mesra (Main Campus)",
      date: "Oct 2022 - July 2026",
      grade: "7.27 / 10.0 (till 6th sem)",
      desc: "I am currently in the final year of my B.Tech in Computer Science and Engineering at Birla Institute of Technology, Mesra. Throughout my academic journey, I have developed a solid foundation in programming, software development, and core computer science subjects such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participate in hackathons, coding contests, and technical events, which have helped me sharpen my problem-solving skills and gain hands-on experience. My time at BIT Mesra has been crucial in shaping my technical abilities and preparing me for real-world challenges in the tech industry.",
      degree: "Bachelor's of Technology - B.Tech (Computer Science)",
    },
    {
      id: 1,
      img: gossner,
      school: "Gossner College, Ranchi",
      date: "Aug 2018 - July 2020",
      grade: "Top 20% Percentile (JAC Board)",
      desc: "I have completed my class 12th Education from Gossner College, Ranchi, under the JAC board, where I studied Physics, Chemistry, and Mathematics (PCM) with English & Computer Science.",
      degree: "Jharkhand State Board (XII) - PCM with Computer Science",
    },
    {
      id: 2,
      img: agrasen,
      school: "Sri Agrasen School, Ramgarh",
      date: "May 2018",
      grade: "73%",
      desc: "I have completed my class 10th Education from Sri Agrasen School, Ramgarh, under the CBSE board, where I have studied Science, Social Science, Mathematics, Hindi, with Foundation of IT.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Roomio",
      description:
        "Roomio is a full-stack web application designed to help users find compatible roommates and shared accommodations. It simplifies the process of connecting individuals looking to share living spaces based on preferences, budget, and location.",
      image: roomioLogo,
      tags: ["HTML", "CSS", "JavaScript", "EJS", "Bootstrap", "Node.js", "Express", "MongoDB","Passport.js","APIs"],
      github: "https://github.com/DeepkumarSingh/Roomio",
      webapp: "https://roomio-5e5h.onrender.com/",
    },
    {
      id: 1,
      title: "Old Portfolio",
      description:
        "Developed an earlier version of my portfolio website using HTML, CSS, JavaScript, and Bootstrap to showcase projects, skills, and contact information.",
      image: oldPortfolioLogo,
      tags: [ "HTML", "CSS", "JavaScript","Bootstrap"],
      github: "https://github.com/DeepkumarSingh/My-Portfolio",
      webapp: "https://deepkumarsingh.github.io/My-Portfolio/",
    },
    {
      id: 2,
      title: "BiTKiT",
      description:
        "coming soon..",
      image: "",
      tags: ["coming soon.."],
      github: "/",
      webapp: "/",
    },
    {
      id: 3,
      title: "Projects coming soon..",
      description:
        "",
      image: "",
      tags: ["coming soon.."],
      github: "/",
      webapp: "/",
    },
    
  ];  