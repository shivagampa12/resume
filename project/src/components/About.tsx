import React from 'react';
import { GraduationCap, Briefcase, Code, GitBranch } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 text-center">
            I'm Gampa Shiva Teja, a software enthusiast currently pursuing my Master's in Computer Science at 
            <span className="font-medium text-blue-600 dark:text-blue-400"> Auburn University at Montgomery, Alabama</span>. 
            I have a strong interest in modern software technologies, cloud computing, and solving real-world problems through code.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full mr-4">
                  <GraduationCap className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Education</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Currently pursuing a Master's in Computer Science at Auburn University at Montgomery. 
                Completed B.Sc. from JBIET (2018–2023) with a 6.5 CGPA. Scored 96.7% in Intermediate and 9.2 CGPA in SSC.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full mr-4">
                  <Briefcase className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Experience</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Worked as an Application Development Analyst at Accenture (Aug 2021 – Dec 2023), 
                primarily serving as a Cloud Technical Consultant in SAP BASIS Administration.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full mr-4">
                  <Code className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Skills</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Proficient in JavaScript, Python, and Java. Experienced with React, Node.js, and cloud platforms. 
                Strong communication, collaboration, and problem-solving abilities.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full mr-4">
                  <GitBranch className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Achievements</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                District-level winner in Elocution and Chess. Recognized for leadership and event organization 
                during academic years.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
