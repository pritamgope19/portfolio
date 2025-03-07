import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import Resume_PritamGope from '../assets/Resume.pdf'
import profileImage from '../assets/ProfileImage.jpeg'

export const Hero: React.FC = () => {
  const resumeDownload = () => {
    const link = document.createElement("a");
    link.href = Resume_PritamGope;
    link.download = "Resume_PritamGope.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="home" className="relative pt-24 pb-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-2/3 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hi, I'm <span className="text-blue-600">Pritam Gope</span>
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Software Developer | React | TypeScript | Java | Full Stack
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <button 
              onClick={resumeDownload}
              className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Download className="mr-2" /> Download CV
            </button>
            <a 
              href="#contact"
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-10 md:mt-0 md:w-1/3 flex justify-center"
        >
          <div className="w-64 h-64 bg-blue-100 rounded-full overflow-hidden">
            <img 
              src={profileImage}
              alt="Pritam Gope" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};