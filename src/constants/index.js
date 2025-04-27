import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  sketcher,
  mathwork,
  CompileVortex,
  eduskill,
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

export const services = [
  { title: "C", icon: c },
  { title: "C++", icon: cpp },
  { title: "Python", icon: python },
  { title: "Java", icon: java },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Industrial Training in Web",
    company_name: "Happy Visitors Dot Com | MSBTE",
    icon: eduskill,
    iconBg: "#161329",
    date: "July 2023 - Aug 2023",
    points: [
      "Completed a 6-week full-time industrial training program focused on Advanced trends in web development, gaining practical knowledge in modern web technologies."," Gained in-depth knowledge of web technologies like HTML and CSS, and acquired skills in hosting websites on servers,purchasing domains, and creating business accounts.",
    ],
  },
  // {
  //   title: "Upcoming Technical Intern in Cisco",
  //   company_name: "Technical Intern I | CWIP",
  //   icon: mathwork,
  //   iconBg: "#161329",
  //   date: "June 2025 - Aug 2025",
  //   points: [
  //     // "Completed virtual internship, gaining a strong foundation in MATLAB, including data analysis and processing.",
  //     // "Acquired practical skills in image and signal processing, including segmentation, batch processing, and spectral analysis.",
  //     // "Developed expertise in machine learning models for clustering, classification, and regression, and customized deep learning techniques for image classification.",
  //   ],
  // },
  
];

export const projects = [
  {
    name: "Hostel Allocation",
    description:
      "A smart Android application designed to simplify key hostel operations — including attendance marking via camera and location, mess allocation, room allotment, announcements, complaint management, and an interactive chatbot system.",
    tags: [
      { name: "Firebase", color: "blue-text-gradient" },
      { name: "Java", color: "green-text-gradient" },
      { name: "XML", color: "pink-text-gradient" },
      { name: "OpenCV ", color: "yellow-text-gradient" },
    ],
    image: weatherpedia,
    source_code_link: "https://github.com/Anushka-Gurav/SY_95_Custom_DataStructure",
  },
  {
    name: "JeevanJyot (Health Care App)",
    description:
      " Enables doctor discovery, appointment booking, and emergency remedies within the app. Uses Location-Based Services to suggest nearby hospitals, pharmacies in real time. Users can scan and identify medicines instantly by uploading a photo, receiving detailed name and usage information",
    tags: [
      { name: "Image Recognition", color: "blue-text-gradient" },
      { name: "Google Map API", color: "green-text-gradient" },
      { name: "Gemini API", color: "pink-text-gradient" },
      { name: "Java", color: "pink-text-gradient" },
    ],
    image: termpw,
    source_code_link: "https://github.com/Anushka-Gurav/JeevanJyot",
  },
  {
    name: "Library Management System",
    description:
      " Developed a Java application using AWT and Swing packages to efficiently manage library records.Integrated MySQL server to store and maintain library data securely.Implemented features for inserting, updating, issuing, and returning book records seamlessly.",
    tags: [
      { name: "SQL", color: "blue-text-gradient" },
      { name: "AWT & Swing", color: "blue-text-gradient" },
    ],
    image: payloadmaster,
    source_code_link: "https://github.com/Anushka-Gurav/Library-System",
  },
  {
    name: "Handwriting Machine",
    description:
      "Designed and built a handwriting machine using the Arduino UNO board to write or draw on paper.Converted human-formatted text to G-Code using G-Code Generator and Inkscape for accurate writing on paper.",
    tags: [
      { name: "Java", color: "blue-text-gradient" },
      { name: "Gcode ", color: "green-text-gradient" },
      { name: "Python", color: "pink-text-gradient" },
      { name: "Inkspace Application", color: "pink-text-gradient" },
      { name: "G-Code Generator", color: "pink-text-gradient" },
      { name: "Arduino UNO, Servo motor, Stepper Motor", color: "pink-text-gradient" },
    ],
    image: CompileVortex,
    source_code_link: "",
  },
];