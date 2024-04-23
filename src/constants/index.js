import { mobile, backend, creator, web, javascript, typescript, html, css, reactjs, redux, tailwind, nodejs, mongodb, git, figma, docker, meta, starbucks, tesla, shopify, carrent, jobit, tripguide, threejs, java1, csharp1 } from '../assets'

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
    title: 'Java-Entwickler',
    icon: backend,
  },
  {
    title: 'Backend-Entwickler',
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

const testimonials = [
  {
    testimonial: 'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
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
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/Harlequin8x/metaverse_infinite',
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

export { services, technologies, experiences, testimonials, projects }
