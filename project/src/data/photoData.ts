import { PhotoItem } from '../types';

export const photos: PhotoItem[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    src: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg',
    alt: 'Modern e-commerce platform interface',
    category: 'frontend'
  },
  {
    id: '2',
    title: 'Analytics Dashboard',
    src: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg',
    alt: 'Data analytics dashboard',
    category: 'frontend'
  },
  {
    id: '3',
    title: 'Mobile App',
    src: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg',
    alt: 'Mobile application interface',
    category: 'mobile'
  },
  {
    id: '4',
    title: 'API Architecture',
    src: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg',
    alt: 'API system architecture diagram',
    category: 'backend'
  },
  {
    id: '5',
    title: 'Cloud Infrastructure',
    src: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg',
    alt: 'Cloud infrastructure setup',
    category: 'devops'
  },
  {
    id: '6',
    title: 'Social Platform',
    src: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
    alt: 'Social media platform interface',
    category: 'frontend'
  },
  {
    id: '7',
    title: 'Microservices Architecture',
    src: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg',
    alt: 'Microservices system diagram',
    category: 'backend'
  },
  {
    id: '8',
    title: 'CI/CD Pipeline',
    src: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg',
    alt: 'Continuous Integration workflow',
    category: 'devops'
  }
];

export const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'frontend', name: 'Frontend' },
  { id: 'backend', name: 'Backend' },
  { id: 'mobile', name: 'Mobile' },
  { id: 'devops', name: 'DevOps' }
];