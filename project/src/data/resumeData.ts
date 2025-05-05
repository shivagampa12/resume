import { Experience, Education, Skill, SocialLink } from '../types';

export const experienceData: Experience[] = [
  {
    role: 'Senior Software Engineer',
    company: 'Tech Solutions Inc.',
    duration: '2020 - Present',
    description: 'Lead developer for enterprise-scale React applications, implementing microservices architecture and improving system performance by 40%. Mentored junior developers and established best practices for code quality.'
  },
  {
    role: 'Full Stack Developer',
    company: 'Digital Innovations',
    duration: '2018 - 2020',
    description: 'Developed and maintained multiple full-stack applications using React, Node.js, and PostgreSQL. Implemented CI/CD pipelines and reduced deployment time by 60%.'
  },
  {
    role: 'Software Developer',
    company: 'StartUp Tech',
    duration: '2016 - 2018',
    description: 'Built responsive web applications using React and Redux. Collaborated with UX team to implement pixel-perfect designs and optimize user experience.'
  }
];

export const educationData: Education[] = [
  {
    institution: 'Tech University',
    degree: 'Master of Science in Computer Science',
    duration: '2014 - 2016'
  },
  {
    institution: 'Engineering College',
    degree: 'Bachelor of Science in Software Engineering',
    duration: '2010 - 2014'
  }
];

export const skillsData: Skill[] = [
  { name: 'React/Next.js', level: 5 },
  { name: 'TypeScript', level: 5 },
  { name: 'Node.js', level: 4 },
  { name: 'PostgreSQL', level: 4 },
  { name: 'System Design', level: 4 },
  { name: 'DevOps/CI/CD', level: 4 },
  { name: 'Cloud Services', level: 3 },
  { name: 'Testing/TDD', level: 4 }
];

export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/',
    icon: 'Github'
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/',
    icon: 'Linkedin'
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com/',
    icon: 'Twitter'
  },
  {
    platform: 'CodePen',
    url: 'https://codepen.io/',
    icon: 'Code'
  }
];

export const personalInfo = {
  name: 'Alex Morgan',
  title: 'Senior Software Engineer',
  bio: 'Passionate software engineer with 7+ years of experience specializing in full-stack development. Expert in React ecosystem and modern JavaScript. Committed to writing clean, maintainable code and building scalable applications.',
  location: 'San Francisco, CA',
  email: 'alex@example.com',
  phone: '+1 (555) 123-4567'
};