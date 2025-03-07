import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <div id="about" className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
          <div className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            <p>
              I am an experienced Software Developer with 6.5 years of project delivery in cross-functional teams. 
              Proficient in React, TypeScript, JavaScript, CSS frameworks, Java, Spring Boot, and MongoDB, 
              I specialize in developing efficient and scalable software solutions.
            </p>
            <p className="mt-4">
              My strength lies in my analytical and problem-solving abilities, consistently meeting deadlines 
              and exceeding client expectations. I am committed to continuous learning and staying up-to-date 
              with emerging technologies.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};