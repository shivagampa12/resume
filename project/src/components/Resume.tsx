import React from 'react';
import { Calendar, MapPin, Building, Award } from 'lucide-react';

const Resume: React.FC = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Auburn University at Montgomery",
      location: "Montgomery, AL",
      period: "2025 - Present",
      description: "Currently pursuing my Master's with a strong focus on software systems, algorithms, and cloud computing technologies."
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "JB Institute of Engineering and Technology",
      location: "Hyderabad, India",
      period: "2018 - 2023",
      description: "Graduated with a CGPA of 6.5. Focused on foundational computer science concepts and participated in several technical events."
    }
  ];

  const experience = [
    {
      position: "Application Development Analyst",
      company: "Accenture",
      location: "Hyderabad, India (Remote)",
      period: "August 2021 - December 2023",
      description: "Worked as a Cloud Technical Consultant in SAP BASIS Administration projects. Gained hands-on experience in system upgrades, migrations, and performance tuning."
    }
  ];

  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">My Resume</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Education Section */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <Award className="text-blue-600 dark:text-blue-400 mr-3" size={28} />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Education</h3>
            </div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1"
                >
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{edu.degree}</h4>
                  <div className="mb-4">
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-1">
                      <Building size={18} className="mr-2" />
                      <span>{edu.institution}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-1">
                      <MapPin size={18} className="mr-2" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Calendar size={18} className="mr-2" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <div className="flex items-center mb-8">
              <Building className="text-blue-600 dark:text-blue-400 mr-3" size={28} />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Experience</h3>
            </div>

            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1"
                >
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{exp.position}</h4>
                  <div className="mb-4">
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-1">
                      <Building size={18} className="mr-2" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-1">
                      <MapPin size={18} className="mr-2" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Calendar size={18} className="mr-2" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
