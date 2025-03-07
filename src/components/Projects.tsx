import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, ExternalLink } from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: 'Integration & Deployment Platform',
      description: 'Full-stack application using React, TypeScript, Java, and MongoDB for internal product integration',
      technologies: ['React', 'TypeScript', 'Java', 'MongoDB', 'AWS Lambda'],
      category: 'Full Stack',
      githubLink: '#',
      liveLink: '#'
    },
    {
      title: 'DICOM Image Lesion Detection',
      description: 'Machine learning API for detecting lesions in medical imaging using advanced algorithms',
      technologies: ['Java', 'Spring Boot', 'Machine Learning', 'AWS'],
      category: 'Machine Learning',
      githubLink: '#',
      liveLink: '#'
    },
    {
      title: 'Video Conferencing Application',
      description: 'Developed using AWS Chime to facilitate communication between patients and clinicians',
      technologies: ['React', 'AWS Chime', 'WebRTC'],
      category: 'Web Application',
      githubLink: '#',
      liveLink: '#'
    },
    {
      title: 'Exam Management System',
      description: 'Drag-and-drop questionnaire creation platform for annual exams',
      technologies: ['React', 'TypeScript', 'Java', 'SQL'],
      category: 'Web Application',
      githubLink: '#',
      liveLink: '#'
    }
  ];

  const categories = ['All', ...Array.from(new Set(projects.flatMap(p => p.category)))];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div id="projects" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Projects
        </h2>

        {/* Category Filters */}
        <div className="flex justify-center mb-8 space-x-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`
                px-4 py-2 rounded-md transition-colors 
                ${activeFilter === category 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.2 
              }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech}
                      className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <Code className="mr-2" /> GitHub
                  </a>
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <ExternalLink className="mr-2" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};