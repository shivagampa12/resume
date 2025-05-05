import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-950 pt-16">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                Shiva Teja Gampa
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-6">
              Software Developer & CS Graduate Student
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto md:mx-0">
              Passionate about creating elegant solutions to complex problems. Currently pursuing my Master's in Computer Science with focus on machine learning and web technologies.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Contact Me
              </a>
              <a
                href="#resume"
                className="px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
              >
                View Resume
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src="/src/components/PUBLIC/SHIVA.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a 
            href="#about" 
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
            aria-label="Scroll down"
          >
            <ArrowDown className="text-blue-600 dark:text-blue-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
