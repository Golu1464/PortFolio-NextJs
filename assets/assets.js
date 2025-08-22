// ===== ICONS & UI IMAGES (in /assets) =====
import user_image from './user-image.jpg';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import pytorch from './pytorch.png';
import tensorflow from './tensorflow.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

// ===== PROJECT IMAGES (in /public) — use string paths =====
const work1 = '/work-1.png';
const work2 = '/work-2.png';
const work3 = '/work-3.png';
const work4 = '/work-4.jpg';
const work5 = '/work-5.jpg';
const work6 = '/work-6.png';
const work7 = '/work-7.png';
const work8 = '/work-8.png';
const footer = '/footer-bg-color.png'; // lives in /public

export const assets = {
  // keep only what you actually need globally
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  tensorflow,
  pytorch,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,

  // expose public paths if you reference via assets.*
  work1,
  work2,
  work3,
  work4,
  work5,
  work6,
  work7,
  work8,
  footer,
};

export const workData = [
  {
    title: 'Outfit color suggestor',
    description: 'skin tone based outfit suggestor',
    bgImage: work1,
    link: 'https://fashionai.streamlit.app/',
  },
  {
    title: 'selfattesed Docucraft',
    description: 'documents editor',
    bgImage: work2,
    link: 'https://selfattestdocucraft.streamlit.app/',
  },
  {
    title: 'Covid Report',
    description: 'Covid-19 statistics and information dashboard',
    bgImage: work3,
    link: 'https://covidreport.streamlit.app/',
  },
  {
    title: 'Chat Bot',
    description: 'AI-powered chatbot for customer support',
    bgImage: work4,
    link: 'https://chat-bot-14.streamlit.app/',
  },
  {
    title: 'Parking Lot App',
    description: 'Java Based Application for Parking lot management',
    bgImage: work5,
    link: 'https://github.com/Golu1464/PakingLot_App',
  },
  {
    title: 'Resume Analyzer',
    description: 'An app to analyze and improve resumes using AI',
    bgImage: work6,
    link: 'https://resumeanalyser1406.streamlit.app/',
  },
  {
    title: 'Beauty Score Checker',
    description: 'AI-based beauty score checker',
    bgImage: work7,
    link: 'https://checkbeautyscore.streamlit.app/',
  },
  {
    title: 'AI Image Enhancer',
    description: 'A web app to enhance and edit images using AI',
    bgImage: work8,
    link: 'https://ai-image-editor14.streamlit.app/',
  },
];

export const serviceData = [
  {
    icon: web_icon,
    title: 'Web Development',
    description: 'Modern, responsive websites that deliver speed, security, and seamless user experiences.',
    link: 'https://golu1464.github.io/My_Portfolio/',
  },
  {
    icon: mobile_icon,
    title: 'Data Science',
    description: 'Transform raw data into actionable insights with advanced analytics and visualization.',
    link: 'https://covidreport.streamlit.app/',
  },
  {
    icon: ui_icon,
    title: 'AI Solutions',
    description: 'Intelligent systems powered by machine learning to automate and optimize workflows.',
    link: 'https://resumeanalyser1406.streamlit.app/',
  },
  {
    icon: graphics_icon,
    title: 'Digital Innovation',
    description: 'Cutting-edge, AI-driven solutions that redefine efficiency and customer engagement.',
    link: 'https://chat-bot-14.streamlit.app/',
  },
];

export const infoList = [
  { icon: code_icon, iconDark: code_icon_dark, title: 'Languages', description: 'Python, C++, JavaScript, Next Js' },
  { icon: edu_icon, iconDark: edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science' },
  { icon: project_icon, iconDark: project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' },
];

export const toolsData = [vscode, tensorflow, mongodb, pytorch, git];
