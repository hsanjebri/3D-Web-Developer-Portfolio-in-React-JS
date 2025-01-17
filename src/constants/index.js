import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  dari,
  ibm,
  learn,
  google,
  accompanyConsulting,
  esprit,
  Freelancer,
  shopify,
  carrent,
  clinivia,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: " Full-Stack Developer",
    icon: web,
  },
  {
    title: "Flutter Enthusiast",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Visionary Tech Architect",
    icon: creator,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineering Student",
    company_name: "ESPRIT",
    icon: esprit,
    iconBg: "#383E56",
    date: "2022 - 2025",
    points: [
    "Building a strong foundation in software engineering through rigorous academic coursework.",
      "Engaged in various projects, enhancing problem-solving, teamwork, and leadership skills.",
      "Specializing in web and mobile application development, with a focus on real-world solutions.",
      "Collaborating with peers and mentors to drive innovative approaches to technology.",
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "Accompany Consulting",
    icon: accompanyConsulting, 
    iconBg: "#383E56",
    date: "June 2023 - August 2023",
    points: [
      "Contributed to the migration of a legacy banking application, MRO BH, to a microservices architecture.",
      "Developed, tested, and deployed scalable microservices to enhance application performance and modularity.",
      "Collaborated with cross-functional teams to ensure a smooth transition and minimal downtime.",
      "Gained expertise in modern software engineering practices, including CI/CD and API integration.",
    ],
  },
  {
    title: "Mobile App Development Intern",
    company_name: "AccompanyConsulting",
    icon: accompanyConsulting,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developed and optimized mobile applications to improve user engagement and functionality.",
      "Collaborated with cross-disciplinary teams to deliver projects within defined timelines.",
      "Performed code debugging and ensured application performance met user expectations.",
      "Participated in the end-to-end lifecycle of app development, from ideation to deployment.",
    ],
  },
  {
    title: "Full Stack Developer (Personal Projects)",
    company_name: "Freelance",
    icon: Freelancer,
    iconBg: "#E6DEDD",
    date: "Ongoing",
    points: [
      "Designed and developed full-stack applications addressing real-world challenges.",
      "Demonstrated adaptability by utilizing diverse tools and frameworks to achieve project goals.",
      "Created user-centric, scalable, and efficient solutions for personal and community use.",
      "Continuously enhanced technical expertise through independent learning and innovation.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Comprehensive training in front-end, back-end, and cloud-native development.",
    name: "IBM Full Stack Software Developer",
    designation: "IBM via Coursera",
    company: "Certification",
    image: ibm, // Add the image for the certificate, or leave empty if not available
    link: "https://coursera.org/share/89312d27543ea3e34644a8570da7ca39", // Certificate URL
  },
  {
    testimonial:
      "Professional certification in Agile and project management methodologies.",
    name: "Google Project Management Certificate",
    designation: "Google via Coursera",
    company: "Certification",
    image: google, // Add an image URL or keep it empty
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/ZWXZ4DELLPPN", // Certificate URL
  },
  {
    testimonial:
      "Learn the fundamentals of Agile Scrum, including team roles, Sprint events, and artifacts, to build incrementally and deliver value effectively",
    name: "Introduction to Scrum Master Training",
    designation: "LearnQuest",
    company: "LearnQuest",
    image: learn, // Add an image URL or keep it empty
    link: "https://www.coursera.org/account/accomplishments/verify/EDZ5K5T2M4E2", // Certificate URL
  },
];



const projects = [
  {
    name: "Clinvia",
    description:
    "A healthcare management platform designed to streamline patient bookings, doctor schedules, and medical records. This platform bridges the gap between patients and healthcare providers by offering an intuitive and efficient solution for managing healthcare services.",
    tags: [
      {
        name: "Spring Boot",
        color: "blue-text-gradient",
      },
      {
        name: "Angular",
        color: "red-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "orange-text-gradient",
      },
      {
        name: "AI Integration",
        color: "green-text-gradient",
      },
      {
        name: "NLP",
        color: "purple-text-gradient",
      },
      {
        name: "Healthcare Analytics",
        color: "teal-text-gradient",
      },
    ]
    ,
    image: clinivia,
    source_code_link: "https://github.com/hsanjebri/clinivia-angular.git",
  },
  {
    name: "Dari Real Estate Platform",
    description:
      "A feature-rich real estate application that empowers users to buy, sell, rent, and estimate property value with ease. Dari integrates advanced functionalities such as credit simulation, subscription management, and online furniture sales by navigating the real estate market.",
      tags: [
        {
          name: "Spring Boot",
          color: "blue-text-gradient",
        },
        {
          name: "Angular",
          color: "red-text-gradient",
        },
        {
          name: "Keycloak",
          color: "green-text-gradient",
        },
        {
          name: "Power BI",
          color: "purple-text-gradient",
        },
        {
          name: "Docker",
          color: "teal-text-gradient",
        },
        {
          name: "Jenkins",
          color: "yellow-text-gradient",
        },
      ],
      
    image: dari,
    source_code_link: "https://github.com/hsanjebri/Dari.git",
  },
  {
    name: "EduTrack LMS",
    description:
    "A comprehensive Learning Management System designed to enhance the educational experience for both students and educators. EduTrack offers tools for course management, progress tracking, and interactive learning, making education more accessible and efficient.",
    tags: [
      {
        name: "Spring Boot",
        color: "blue-text-gradient",
      },
      {
        name: "Angular",
        color: "red-text-gradient",
      },
      {
        name: "Keycloak",
        color: "green-text-gradient",
      },
      {
        name: "Power BI",
        color: "purple-text-gradient",
      },
      {
        name: "Docker",
        color: "teal-text-gradient",
      },
      {
        name: "Jenkins",
        color: "yellow-text-gradient",
      },
    ]
    ,
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
