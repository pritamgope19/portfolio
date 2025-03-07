import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Server, Layout } from 'lucide-react';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: <Code className="w-12 h-12 text-blue-600" />,
      title: 'Front-end',
      skills: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Responsive Design']
    },
    {
      icon: <Server className="w-12 h-12 text-green-600" />,
      title: 'Back-end',
      skills: ['Java', 'Spring Boot', 'REST APIs', 'MongoDB']
    },
    {
      icon: <Database className="w-12 h-12 text-purple-600" />,
      title: 'Tools & DevOps',
      skills: ['Git', 'Git Actions', 'Azure DevOps', 'JIRA', 'TeamCity', 'Octopus']
    },
    {
      icon: <Layout className="w-12 h-12 text-red-600" />,
      title: 'Soft Skills',
      skills: ['Communication', 'Leadership', 'Problem-Solving', 'Teamwork', 'Adaptability']
    }
  ];

  return (
    <div id="skills" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">My Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-4 text-gray-800">
                {category.title}
              </h3>
              <ul className="text-center text-gray-600">
                {category.skills.map(skill => (
                  <li key={skill} className="mb-2">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};