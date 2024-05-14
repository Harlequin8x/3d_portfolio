import { mobile, backend, creator, web, javascript, typescript, html, css, reactjs, tailwind, nodejs, mongodb, git, threejs, java1, csharp1, metaverse, fastray, portfolio } from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'Infos',
  },
  {
    id: 'work',
    title: 'Projekte',
  },
  {
    id: 'contact',
    title: 'Kontakt',
  },
]

const services = [
  {
    title: 'Web-Entwickler',
    icon: web,
  },
  {
    title: 'JavaScript-Entwickler',
    icon: mobile,
  },
  {
    title: 'TypeScript-Entwickler',
    icon: backend,
  },
  {
    title: 'Java-Entwickler',
    icon: creator,
  },
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'Java',
    icon: java1,
  },
  {
    name: 'git',
    icon: git,
  },
]

const experiences = [
  {
    title: 'C#',
    icon: csharp1,
    iconBg: '#383E56',
    date: 'Jan 2022 - Jan 2023',
    points: [
      'Dashbaord mit WPF',
      'Inventory Management System',
    ],
  },
  {
    title: 'Java',
    icon: java1,
    iconBg: '#383E56',
    date: 'Jan 2021 - Feb 2022',
    points: [
      'Student Management System',
    ],
  },
  {
    title: 'TypeScript',
    icon: typescript,
    iconBg: '#383E56',
    date: 'March 2020 - April 2021',
    points: [
      'Employee Management System',
      'Ecommerce Website mit Payload',
    ],
  },
  {
    title: 'JavaScript',
    icon: javascript,
    iconBg: '#383E56',
    date: 'March 2020 - April 2021',
    points: [
      'Metaverse-Infinite Website mit Animationen',
      'Portfolio Website mit 3d-Model und Animationen',
      'Hardware Shop',
    ],
  },
]

const projects = [
  {
    name: 'Metaverse Infinite',
    description: 'Metaverse Website mit Animationen',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'next.js 13',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
      {
        name: 'framer motion',
        color: 'orange-text-gradient',
      },
    ],
    image: metaverse,
    source_code_link: 'https://github.com/Harlequin8x/metaverse_infinite.git',
    website_link: 'https://metaverse-infinite.de/'
  },
  {
    name: 'Fastray',
    description: 'Hardware Shop.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: fastray,
    source_code_link: 'https://github.com/Harlequin8x/fastray',
    website_link: 'https://fastray.de/',
  },
  {
    name: '3d Portfolio',
    description: '3D Portfolio',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'three',
        color: 'green-text-gradient',
      },
      {
        name: 'react three fiber',
        color: 'pink-text-gradient',
      },
      {
        name: 'react three drei',
        color: 'orange-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'blue-text-gradient',
      },
      {
        name: 'email js',
        color: 'green-text-gradient',
      },
      {
        name: 'vite',
        color: 'pink-text-gradient',
      },
    ],
    image: portfolio,
    source_code_link: 'https://github.com/Harlequin8x/3d_portfolio',
    website_link: 'https://ioannis-saltidis.eu/',
  },
]

export { services, technologies, experiences, projects }
