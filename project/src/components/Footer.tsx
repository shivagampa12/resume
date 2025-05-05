import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-4">Shiva Teja Gampa</h3>
            <p className="text-gray-400 mb-4">
              Software Developer & CS Graduate Student passionate about creating elegant solutions to complex problems.
            </p>
            <p className="text-gray-400">
              Available for freelance work and full-time positions.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Resume', 'Skills', 'Projects', 'Contact'].map((link, index) => (
                <li key={index}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to my newsletter to receive updates on my latest projects and blog posts.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-l-lg w-full"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-center md:text-left">
            &copy; {currentYear} Shiva Teja Gampa. All rights reserved.
          </p>
          <p className="text-gray-400 flex items-center mt-4 md:mt-0">
            Made with <Heart size={18} className="mx-1 text-red-500" /> using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;