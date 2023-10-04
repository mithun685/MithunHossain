import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faUser,
  faGraduationCap,
  faBriefcase, // for projects
  faWrench, // for services
  faBrain, // for skills
  faEnvelope, // for contact
} from '@fortawesome/free-solid-svg-icons';

import img from "../assets/profile.png";


export const userInformation = {
  name: "Md. Mithun Hossain",
  role: "Python | Machine Learning Enthusiast",
  image: img,
  resumeLink: "#", // add your link to the resume here
};

export const navigationItems = [
  { icon: faHome, label: "Home", link: "/" },
  { icon: faUser, label: "About", link: "/about" },
  { icon: faGraduationCap, label: "Education", link: "/education" },
  { icon: faBriefcase, label: "Projects", link: "/projects" },
  { icon: faWrench, label: "Services", link: "/services" },
  { icon: faBrain, label: "Skills", link: "/skills" },
  { icon: faEnvelope, label: "Contact", link: "/contact" },
];

export const socialData = [
  { platform: "Facebook", url: "https://www.facebook.com/mithun751", icon: faFacebook },
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/mithun751/", icon: faLinkedin },
  { platform: "GitHub", url: "https://github.com/MIthun667", icon: faGithub },
];
