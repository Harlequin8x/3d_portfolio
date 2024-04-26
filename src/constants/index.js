import { mobile, backend, creator, web, javascript, typescript, html, css, reactjs, redux, tailwind, nodejs, mongodb, git, figma, docker, meta, starbucks, tesla, shopify, carrent, jobit, tripguide, threejs, java1, csharp1, metaverse } from '../assets'

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
    company_name: 'Shopify',
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
    company_name: 'Tesla',
    icon: java1,
    iconBg: '#383E56',
    date: 'Jan 2021 - Feb 2022',
    points: [
      'Student Management System',
    ],
  },
  {
    title: 'TypeScript',
    company_name: 'Starbucks',
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
    company_name: 'Starbucks',
    icon: javascript,
    iconBg: '#383E56',
    date: 'March 2020 - April 2021',
    points: [
      'Metaverse-Infinite Website mit Animationen',
      'Portfolio Website mit 3d-Model und Animationen',
    ],
  },
]

const projects = [
  {
    name: 'Metaverse Infinite',
    description: 'Metaverse Theme Website mit Animationen',
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
    name: 'Job IT',
    description: 'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/',
  },
  // {
  //   name: 'Trip Guide',
  //   description: 'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: 'https://github.com/',
  // },
]

export { services, technologies, experiences, projects }
