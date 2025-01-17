import { nanoid } from 'nanoid'
import { FaHtml5, FaJs, FaReact, FaDatabase } from 'react-icons/fa'
import { SiExpress, SiPython, SiPytorch, SiMongodb } from 'react-icons/si'

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#projects', text: 'projects' },
]

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className="h-16 w-16 text-cyan-500" />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className="h-16 w-16 text-cyan-500" />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className="h-16 w-16 text-cyan-500" />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'React Native',
    icon: <FaReact className="h-16 w-16 text-cyan-600" />,
    text: 'Proficient in React Native, building robust and cross-platform mobile applications with smooth user experiences.',
  },
  {
    id: nanoid(),
    title: 'MongoDB',
    icon: <SiMongodb className="h-16 w-16 text-cyan-600" />,
    text: 'Experienced in MongoDB, designing efficient schemas and managing NoSQL databases for scalable applications.',
  },
  {
    id: nanoid(),
    title: 'Python',
    icon: <SiPython className="h-16 w-16 text-cyan-600" />,
    text: 'Expert in Python, leveraging its versatility for backend development, data analysis, and automation.',
  },
  {
    id: nanoid(),
    title: 'Express.js',
    icon: <SiExpress className="h-16 w-16 text-cyan-600" />,
    text: 'Skilled in Express.js, creating RESTful APIs and integrating middleware for seamless server-side functionality.',
  },
  {
    id: nanoid(),
    title: 'SQL',
    icon: <FaDatabase className="h-16 w-16 text-cyan-600" />,
    text: 'Adept at SQL, proficient in designing relational databases and writing complex queries for data management.',
  },
  {
    id: nanoid(),
    title: 'PyTorch',
    icon: <SiPytorch className="h-16 w-16 text-cyan-600" />,
    text: 'Experienced in PyTorch, developing machine learning and deep learning models with a focus on accuracy and efficiency.',
  },
]

export const projects = [
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'first project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'second project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'third project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
]
