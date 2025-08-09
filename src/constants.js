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
import Render from './assets/tech_logo/Render.png';
import ODF from './assets/tech_logo/ODF.ico';
import Synkr from "./assets/work_logo/Synkr.png";

// Education Section Logo's
import bitmesra1 from './assets/education_logo/bitmesra1.png';
import gossner from './assets/education_logo/gossner.jpg';
import agrasen from './assets/education_logo/agrasen.png';

// Project Section Logo's
import roomioLogo from './assets/work_logo/roomio.png';
import oldPortfolioLogo from './assets/work_logo/oldPortfolio.png';
import BiTKiTLogo from './assets/work_logo/BITKIT.png';
import Weatherlogo from './assets/work_logo/WeatherApp.png';

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

  // export const experiences = [
  //   {
  //     id: 0,
  //     img: "",
  //     role: "sde",
  //     company: "",
  //     date: "",
  //     desc: ".",
  //     skills: [
  //       "HTML",
  //     ],
  //     id: 1,
  //     img: "",
  //     role: "sde-1",
  //     company: "",
  //     date: "",
  //     desc: ".",
  //     skills: [
  //       "HTML","Css"
  //     ],
  //   },
    
  // ];
  
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
      title: "BiTKiT (Group Project)",
      description: 
        "BiTKiT is a comprehensive student portal for BIT Mesra, built using the MERN stack. It provides a unified platform to explore official clubs, view sports achievements, access academic resources, and connect with campus activities — all through a modern, responsive, and user-friendly interface.",
      image: BiTKiTLogo,
      tags: ["React", "JavaScript", "TailwindCSS", "Daisy UI", "Node.js", "Express.js", "MongoDB", "Cloudinary", "Botpress", "react-slick", "Vite", "nodemailer"],
      github: "https://github.com/DeepkumarSingh/Group-Project",
      webapp: "https://bitkit-green.vercel.app/",
    },
    {
      id: 1,
      title: "Synkr (Realtime-Code-Collaborator)",
      description:
        "Built Synkr, a real-time code collaboration platform enabling multiple users to write, edit, and debug code simultaneously, with live syntax highlighting and seamless multi-user synchronization.",
      image: Synkr,
      tags: [ "React.js", "Node.js", "Express.js","Socket.io","Piston API","vite","HTML5","CSS3"],
      github: "https://github.com/DeepkumarSingh/synkr",
      webapp: "https://synkr-j0o6.onrender.com/",
    },
    {
      id: 2,
      title: "Roomio(Flatmate Finder)",
      description:
        "Roomio is a full-stack web application designed to help users find compatible roommates and shared accommodations. It simplifies the process of connecting individuals looking to share living spaces based on preferences, budget, and location.",
      image: roomioLogo,
      tags: ["HTML", "CSS", "JavaScript", "EJS", "Bootstrap", "Node.js", "Express", "MongoDB","Passport.js","APIs"],
      github: "https://github.com/DeepkumarSingh/Roomio",
      webapp: "https://roomio-5e5h.onrender.com/",
    },
    {
      id: 3,
      title: "Weather App",
      description:
        "A weather application that provides real-time weather updates and forecasts using a weather API.",
      image: Weatherlogo,
      tags: ["HTML", "CSS", "JavaScript", "React", "Open Weather APIs"],
      github: "https://github.com/DeepkumarSingh/Weather-application",
      webapp: "https://weather-application-ax70qctco-deeps-projects-17b585f9.vercel.app/",
    },
    {
      id: 4,
      title: "Old Portfolio",
      description:
        "Developed an earlier version of my portfolio website using HTML, CSS, JavaScript, and Bootstrap to showcase projects, skills, and contact information.",
      image: oldPortfolioLogo,
      tags: [ "HTML", "CSS", "JavaScript","Bootstrap"],
      github: "https://github.com/DeepkumarSingh/My-Portfolio",
      webapp: "https://deepkumarsingh.github.io/My-Portfolio/",
    },
    
    
  ];  
