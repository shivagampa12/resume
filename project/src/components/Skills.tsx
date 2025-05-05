import React from 'react';

const Skills: React.FC = () => {
  const technicalSkills = [
    { name: "JavaScript", proficiency: 90 },
    { name: "React", proficiency: 85 },
    { name: "TypeScript", proficiency: 80 },
    { name: "Node.js", proficiency: 85 },
    { name: "Python", proficiency: 75 },
    { name: "SQL", proficiency: 80 },
    { name: "HTML/CSS", proficiency: 90 },
    { name: "RESTful APIs", proficiency: 85 },
  ];

  const softSkills = [
    { name: "Problem Solving", proficiency: 90 },
    { name: "Communication", proficiency: 85 },
    { name: "Teamwork", proficiency: 95 },
    { name: "Time Management", proficiency: 80 },
  ];

  const tools = [
    { name: "Git", proficiency: 90 },
    { name: "Docker", proficiency: 75 },
    { name: "VS Code", proficiency: 95 },
    { name: "MongoDB", proficiency: 80 },
  ];

  const SkillBar = ({ name, proficiency }: { name: string; proficiency: number }) => (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="font-medium text-gray-700 dark:text-gray-300">{name}</span>
        <span className="text-sm text-gray-600 dark:text-gray-400">{proficiency}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div 
          className="bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-500 h-2.5 rounded-full"
          style={{ width: `${proficiency}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Technical Skills */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 text-center">Technical Skills</h3>
              {technicalSkills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} proficiency={skill.proficiency} />
              ))}
            </div>
            
            {/* Soft Skills */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 text-center">Soft Skills</h3>
              {softSkills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} proficiency={skill.proficiency} />
              ))}
            </div>
            
            {/* Tools & Technologies */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 md:col-span-2 lg:col-span-1">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 text-center">Tools & Technologies</h3>
              {tools.map((skill, index) => (
                <SkillBar key={index} name={skill.name} proficiency={skill.proficiency} />
              ))}
            </div>
          </div>
          
          {/* Languages */}
          <div className="mt-12 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 text-center">Programming Languages</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL", "HTML", "CSS"].map((lang, index) => (
                <div 
                  key={index}
                  className="px-4 py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full shadow-sm border border-gray-200 dark:border-gray-700"
                >
                  {lang}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;