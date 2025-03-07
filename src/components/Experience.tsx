import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

export const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'Dassault Systèmes',
      duration: 'May 2021 - Present',
      location: 'Pune, Maharashtra',
      highlights: [
        'Engineered a full-stack application using React, TypeScript, Java, and MongoDB',
        'Developed drag-and-drop functionality for form and page configuration',
        'Implemented machine learning API for DICOM image lesion detection',
        'Created a video conferencing application using AWS Chime',
        'Demonstrated innovation by creating proofs of concept for various solutions, contributing to the continual evolution of technological capabilities.'
      ]
    },
    {
      title: 'Web Application Developer',
      company: 'Cognizant',
      duration: 'Feb 2019 - Apr 2021',
      location: 'Pune, Maharashtra',
      highlights: [
        'Developed state-specific web application for Banking and Finance team',
        'Led Proof of Concept for customized web components',
        'Implemented drag-and-drop functionality for Exam Management Project',
        'Developed web apps using CI/CD design models'
      ]
    },
    {
      title: 'Associate Solution Specialist',
      company: 'PowerSchool India Pvt. Ltd',
      duration: 'Apr 2018 - Jan 2019',
      location: 'Bengaluru, Karnataka',
      highlights: [
        'Designed school registration forms using PowerSchool Registration tool',
        'Participated in product enhancement brainstorming sessions',
        'Developed tailored solutions for unique client requirements'
      ]
    }
  ];

  return (
    <div id="experience" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Professional Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start mb-4">
                <Briefcase className="w-10 h-10 text-blue-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                  <p className="text-gray-600">{exp.company} | {exp.duration}</p>
                  <p className="text-gray-500 text-sm">{exp.location}</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {exp.highlights.map(highlight => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};