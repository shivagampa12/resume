export interface NavItem {
  title: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Skill {
  name: string;
  level: number; // 1-5
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
}

export interface PhotoItem {
  id: string;
  title: string;
  src: string;
  alt: string;
  category: string;
}

export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}