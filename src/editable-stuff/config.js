// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
// "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1"
const mainBody = {
  gradientColors: "#8696a7, #9ca8b8, #c1cbd7", 
  firstName: "Mingxuan",
  middleName: "",
  lastName: "Liu",
  message: " Passionate about AI for healthcare. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/Michellemingxuan",
    },
    // {
    //   image: "fa-facebook",
    //   url: "https://www.facebook.com/hashirshoaeb",
    // },
    {
      image: "fa-researchgate",
      url: "https://www.researchgate.net/profile/Mingxuan-Liu-15",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/mingxuan-liu-michelle/",
    },
    {
      image: "fa-twitter",
      url: "https://twitter.com/Mingxuan_Miche",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/mingxuanliu.jpg"),
  imageSize: 300,
  message:
    "This is Mingxuan (Michelle), currently a PhD student at Digital Medicine Lab (supervised by Prof. Nan Liu). Oriented at AI for healthcare, I'm passionate about intepretable machine learning, trust AI, federated learning, etc.",
  resume: require("../editable-stuff/resume.pdf"),
};

const publication = {
  show: false,
  heading: "Research Works",
  imageLink: require("../editable-stuff/research.jpg"),
  imageSize: 300,
  message:
    "Liu N, Liu M, Chen X, et al. Development and validation of an interpretable prehospital return of spontaneous circulation (P-ROSC) score for patients with out-of-hospital cardiac arrest using machine learning: A retrospective study[J]. eClinicalMedicine, 2022, 48: 101422.<br /> Liu M, Yuan H, Liu N. Explain deep learning with SHAP towards imbalance: an empirical study on effects of background data and explanation data. In progress.<br /> Liu M, Li S, Yuan H, Liu N. Deep Learning for missing value imputation healthcare data: A systematic review of methodology. In progress.",
  more: "https://scholar.google.com/citations?hl=zh-CN&user=CZpuMC8AAAAJ",
};
// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
  heading: "Recent Projects",
  gitHubUsername: "hashirshoaeb", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/mingxuanliu.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/mingxuanliu.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: false,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for internship related to machine learning with applications in healthcare. If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "m.liu@u.nus.edu",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences, publication};
