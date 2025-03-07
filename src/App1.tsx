// File: App.tsx
import React, { useState, useEffect } from 'react';
// import { FaGithub, FaLinkedin, FaEnvelope, FaBriefcase, FaGraduationCap, FaTools, FaUser } from 'react-icons/fa';
import './App.css';
// import { motion } from 'framer-motion';

const App1: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = '';
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id') || '';
        }
      });
      
      if (current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // <div className="font-sans bg-gray-100 text-gray-800">
    //   {/* Navigation */}
    //   <nav className="fixed w-full bg-white shadow-md z-10">
    //     <div className="container mx-auto px-6 py-3 flex justify-between items-center">
    //       <motion.div 
    //         initial={{ opacity: 0 }}
    //         animate={{ opacity: 1 }}
    //         transition={{ duration: 0.5 }}
    //         className="text-xl font-bold"
    //       >
    //         Pritam Gope
    //       </motion.div>
          
    //       <div className="hidden md:flex space-x-6">
    //         {['home', 'about', 'experience', 'skills', 'education', 'contact'].map((item) => (
    //           <a
    //             key={item}
    //             href={`#${item}`}
    //             className={`capitalize hover:text-blue-600 transition-colors ${
    //               activeSection === item ? 'text-blue-600 font-semibold' : ''
    //             }`}
    //           >
    //             {item}
    //           </a>
    //         ))}
    //       </div>
          
    //       <div className="md:hidden">
    //         <button onClick={toggleMenu} className="focus:outline-none">
    //           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
    //           </svg>
    //         </button>
    //       </div>
    //     </div>
        
    //     {/* Mobile Menu */}
    //     {isMenuOpen && (
    //       <motion.div 
    //         initial={{ opacity: 0, y: -20 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         exit={{ opacity: 0, y: -20 }}
    //         transition={{ duration: 0.3 }}
    //         className="md:hidden bg-white shadow-md py-2"
    //       >
    //         {['home', 'about', 'experience', 'skills', 'education', 'contact'].map((item) => (
    //           <a
    //             key={item}
    //             href={`#${item}`}
    //             onClick={() => setIsMenuOpen(false)}
    //             className={`block px-6 py-2 capitalize hover:bg-gray-100 transition-colors ${
    //               activeSection === item ? 'text-blue-600 font-semibold bg-gray-50' : ''
    //             }`}
    //           >
    //             {item}
    //           </a>
    //         ))}
    //       </motion.div>
    //     )}
    //   </nav>

    //   {/* Hero Section */}
    //   <section id="home" className="min-h-screen flex items-center justify-center pt-16">
    //     <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center">
    //       <motion.div 
    //         initial={{ opacity: 0, x: -50 }}
    //         animate={{ opacity: 1, x: 0 }}
    //         transition={{ duration: 0.8 }}
    //         className="lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0"
    //       >
    //         <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
    //           Hi, I'm <span className="text-blue-600">Pritam Gope</span>
    //         </h1>
    //         <h2 className="text-2xl lg:text-3xl text-gray-600 mb-6">Senior Software Engineer</h2>
    //         <p className="text-lg text-gray-700 mb-8">
    //           Experienced Software Developer with 6.5 years of project delivery in cross-functional teams.
    //           Proficient in React, Typescript, JavaScript, CSS frameworks, Java, Spring Boot and MongoDB.
    //         </p>
    //         <div className="flex justify-center lg:justify-start space-x-4">
    //           <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition-colors">
    //             Contact Me
    //           </a>
    //           <a href="#experience" className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-6 py-3 rounded-md transition-colors">
    //             View Work
    //           </a>
    //         </div>
    //       </motion.div>
    //       <motion.div 
    //         initial={{ opacity: 0, x: 50 }}
    //         animate={{ opacity: 1, x: 0 }}
    //         transition={{ duration: 0.8 }}
    //         className="lg:w-1/2 flex justify-center"
    //       >
    //         <div className="h-64 w-64 lg:h-80 lg:w-80 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center mb-8 lg:mb-0">
    //           <span className="text-white text-8xl">JD</span>
    //         </div>
    //       </motion.div>
    //     </div>
    //   </section>

    //   {/* About Section */}
    //   <section id="about" className="py-20 bg-white">
    //     <div className="container mx-auto px-6">
    //       <motion.div 
    //         initial={{ opacity: 0, y: 50 }}
    //         whileInView={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.8 }}
    //         viewport={{ once: true }}
    //         className="text-center mb-12"
    //       >
    //         <h2 className="text-3xl font-bold mb-4">About Me</h2>
    //         <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
    //       </motion.div>
    //       <div className="flex flex-col md:flex-row">
    //         <motion.div 
    //           initial={{ opacity: 0, x: -50 }}
    //           whileInView={{ opacity: 1, x: 0 }}
    //           transition={{ duration: 0.8 }}
    //           viewport={{ once: true }}
    //           className="md:w-1/3 flex justify-center mb-8 md:mb-0"
    //         >
    //           <div className="relative">
    //             <div className="absolute inset-0 rounded-lg bg-blue-600 transform rotate-6"></div>
    //             <div className="relative z-10 h-64 w-64 rounded-lg bg-gray-200 flex items-center justify-center">
    //             <FaUser size="50px" color="black" className="text-6xl text-gray-400" />
    //             </div>
    //           </div>
    //         </motion.div>
    //         <motion.div 
    //           initial={{ opacity: 0, x: 50 }}
    //           whileInView={{ opacity: 1, x: 0 }}
    //           transition={{ duration: 0.8 }}
    //           viewport={{ once: true }}
    //           className="md:w-2/3 md:pl-12"
    //         >
    //           <h3 className="text-xl font-semibold mb-4">Who am I?</h3>
    //           <p className="text-gray-700 mb-4">
    //             I'm a Senior Software Engineer with 6.5 years of experience in building robust web applications. 
    //             I specialize in developing efficient and scalable software solutions using React, TypeScript, 
    //             JavaScript, CSS frameworks, Java, Spring Boot, and MongoDB.
    //           </p>
    //           <p className="text-gray-700 mb-4">
    //             Throughout my career, I've consistently met deadlines and exceeded client expectations while 
    //             working in cross-functional teams. I'm committed to continuous learning and staying up-to-date 
    //             with emerging technologies.
    //           </p>
    //           <p className="text-gray-700 mb-6">
    //             I have strong analytical and problem-solving abilities with a focus on creating clean, maintainable code.
    //           </p>
    //           <div className="flex space-x-4">
    //             <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
    //               <FaGithub className="text-2xl" />
    //             </a>
    //             <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
    //               <FaLinkedin className="text-2xl" />
    //             </a>
    //             <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
    //               <FaEnvelope className="text-2xl" />
    //             </a>
    //           </div>
    //         </motion.div>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Experience Section */}
    //   <section id="experience" className="py-20 bg-gray-50">
    //     <div className="container mx-auto px-6">
    //       <motion.div 
    //         initial={{ opacity: 0, y: 50 }}
    //         whileInView={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.8 }}
    //         viewport={{ once: true }}
    //         className="text-center mb-12"
    //       >
    //         <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
    //         <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
    //       </motion.div>
          
    //       <div className="relative">
    //         <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>
            
    //         {/* Dassault Systèmes */}
    //         <motion.div 
    //           initial={{ opacity: 0, x: -50 }}
    //           whileInView={{ opacity: 1, x: 0 }}
    //           transition={{ duration: 0.8 }}
    //           viewport={{ once: true }}
    //           className="relative mb-16"
    //         >
    //           <div className="flex flex-col md:flex-row items-center">
    //             <div className="md:w-1/2 md:pr-8 md:text-right">
    //               <h3 className="text-xl font-bold text-blue-600">Senior Software Engineer</h3>
    //               <h4 className="text-lg font-semibold">Dassault Systèmes</h4>
    //               <p className="text-gray-600">May 2021 - Present</p>
    //               <p className="text-gray-600">Pune, Maharashtra</p>
    //             </div>
    //             <div className="mx-auto md:mx-0 my-4 md:my-0 z-10 bg-blue-600 rounded-full h-8 w-8 flex items-center justify-center">
    //               <FaBriefcase className="text-white" />
    //             </div>
    //             <div className="md:w-1/2 md:pl-8">
    //               <div className="bg-white p-6 rounded-lg shadow-md">
    //                 <ul className="list-disc ml-6 text-gray-700 space-y-2">
    //                   <li>Engineered a versatile and customizable full-stack application using React, TypeScript, Java, and MongoDB.</li>
    //                   <li>Developed drag-and-drop functionality for form and page configuration.</li>
    //                   <li>Implemented API using Java and Spring Boot, deployed on AWS Lambda for DICOM image lesion detection.</li>
    //                   <li>Spearheaded the development of a video conferencing application using AWS Chime.</li>
    //                   <li>Evaluated project specifications and created innovative proofs of concept.</li>
    //                 </ul>
    //               </div>
    //             </div>
    //           </div>
    //         </motion.div>
            
    //         {/* Cognizant */}
    //         <motion.div 
    //           initial={{ opacity: 0, x: 50 }}
    //           whileInView={{ opacity: 1, x: 0 }}
    //           transition={{ duration: 0.8 }}
    //           viewport={{ once: true }}
    //           className="relative mb-16"
    //         >
    //           <div className="flex flex-col md:flex-row items-center">
    //             <div className="md:w-1/2 md:pr-8 md:text-right order-1 md:order-1">
    //               <div className="bg-white p-6 rounded-lg shadow-md md:hidden">
    //                 <ul className="list-disc ml-6 text-gray-700 space-y-2">
    //                   <li>Collaborated on a state-specific banking and finance web application using React.</li>
    //                   <li>Led Proof of Concept for a customized web component integration.</li>
    //                   <li>Implemented drag-and-drop functionality using React with TypeScript, Java, and SQL.</li>
    //                   <li>Developed web apps using CI/CD design models.</li>
    //                   <li>Engineered RESTful web services and integrated APIs for data exchange.</li>
    //                 </ul>
    //               </div>
    //             </div>
    //             <div className="mx-auto md:mx-0 my-4 md:my-0 z-10 bg-blue-600 rounded-full h-8 w-8 flex items-center justify-center order-2 md:order-2">
    //               <FaBriefcase className="text-white" />
    //             </div>
    //             <div className="md:w-1/2 md:pl-8 order-3 md:order-3">
    //               <h3 className="text-xl font-bold text-blue-600 md:text-left text-center">Web Application Developer</h3>
    //               <h4 className="text-lg font-semibold md:text-left text-center">Cognizant</h4>
    //               <p className="text-gray-600 md:text-left text-center">Feb 2019 - Apr 2021</p>
    //               <p className="text-gray-600 md:text-left text-center">Pune, Maharashtra</p>
    //               <div className="bg-white p-6 rounded-lg shadow-md hidden md:block">
    //                 <ul className="list-disc ml-6 text-gray-700 space-y-2">
    //                   <li>Collaborated on a state-specific banking and finance web application using React.</li>
    //                   <li>Led Proof of Concept for a customized web component integration.</li>
    //                   <li>Implemented drag-and-drop functionality using React with TypeScript, Java, and SQL.</li>
    //                   <li>Developed web apps using CI/CD design models.</li>
    //                   <li>Engineered RESTful web services and integrated APIs for data exchange.</li>
    //                 </ul>
    //               </div>
    //             </div>
    //           </div>
    //         </motion.div>
            
    //         {/* PowerSchool */}
    //         <motion.div 
    //           initial={{ opacity: 0, x: -50 }}
    //           whileInView={{ opacity: 1, x: 0 }}
    //           transition={{ duration: 0.8 }}
    //           viewport={{ once: true }}
    //           className="relative"
    //         >
    //           <div className="flex flex-col md:flex-row items-center">
    //             <div className="md:w-1/2 md:pr-8 md:text-right">
    //               <h3 className="text-xl font-bold text-blue-600">Associate Solution Specialist</h3>
    //               <h4 className="text-lg font-semibold">PowerSchool India Pvt. Ltd</h4>
    //               <p className="text-gray-600">Apr 2018 - Jan 2019</p>
    //               <p className="text-gray-600">Bengaluru, Karnataka</p>
    //             </div>
    //             <div className="mx-auto md:mx-0 my-4 md:my-0 z-10 bg-blue-600 rounded-full h-8 w-8 flex items-center justify-center">
    //               <FaBriefcase className="text-white" />
    //             </div>
    //             <div className="md:w-1/2 md:pl-8">
    //               <div className="bg-white p-6 rounded-lg shadow-md">
    //                 <ul className="list-disc ml-6 text-gray-700 space-y-2">
    //                   <li>Designed and developed school registration forms using PowerSchool's Registration tool.</li>
    //                   <li>Participated in regular brainstorming sessions for product enhancements.</li>
    //                   <li>Enhanced client satisfaction by developing tailored solutions for unique requirements.</li>
    //                 </ul>
    //               </div>
    //             </div>
    //           </div>
    //         </motion.div>
    //       </div>
          
    //       {/* Leadership */}
    //       <motion.div 
    //         initial={{ opacity: 0, y: 50 }}
    //         whileInView={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.8 }}
    //         viewport={{ once: true }}
    //         className="mt-16"
    //       >
    //         <h3 className="text-2xl font-bold text-center mb-6">Leadership</h3>
    //         <div className="bg-white p-6 rounded-lg shadow-md">
    //           <ul className="list-disc ml-6 text-gray-700 space-y-2">
    //             <li>Successfully led a team of five developers, including three freshers, assuming the role of mentor and facilitator.</li>
    //             <li>Conducted internal training sessions on essential technologies to equip team members for project tasks.</li>
    //             <li>Developed and distributed comprehensive documentation for configuring the development environment across teams.</li>
    //           </ul>
    //         </div>
    //       </motion.div>
    //     </div>
    //   </section>

    //   {/* Skills Section */}
    //   <section id="skills" className="py-20 bg-white">
    //     <div className="container mx-auto px-6">
    //       <motion.div 
    //         initial={{ opacity: 0, y: 50 }}
    //         whileInView={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.8 }}
    //         viewport={{ once: true }}
    //         className="text-center mb-12"
    //       >
    //         <h2 className="text-3xl font-bold mb-4">Skills</h2>
    //         <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
    //       </motion.div>
          
    //       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    //         {/* Technical Skills */}
    //         <motion.div 
    //           initial={{ opacity: 0, y: 30 }}
    //           whileInView={{ opacity: 1, y: 0 }}
    //           transition={{ duration: 0.6, delay: 0.1 }}
    //           viewport={{ once: true }}
    //           className="bg-white p-6 rounded-lg shadow-md"
    //         >
    //           <div className="flex items-center mb-4">
    //             <FaTools className="text-blue-600 text-2xl mr-3" />
    //             <h3 className="text-xl font-bold">Technical Skills</h3>
    //           </div>
    //           <div className="space-y-4">
    //             {[
    //               { name: 'React', level: 90 },
    //               { name: 'TypeScript/JavaScript', level: 85 },
    //               { name: 'HTML/CSS', level: 80 },
    //               { name: 'Java/Spring Boot', level: 75 },
    //               { name: 'MongoDB', level: 70 },
    //               { name: 'REST API', level: 85 },
    //             ].map((skill) => (
    //               <div key={skill.name}>
    //                 <div className="flex justify-between mb-1">
    //                   <span className="text-gray-700">{skill.name}</span>
    //                   <span className="text-gray-600 text-sm">{skill.level}%</span>
    //                 </div>
    //                 <div className="w-full bg-gray-200 rounded-full h-2">
    //                   <motion.div 
    //                     initial={{ width: 0 }}
    //                     whileInView={{ width: `${skill.level}%` }}
    //                     transition={{ duration: 1, ease: "easeOut" }}
    //                     viewport={{ once: true }}
    //                     className="bg-blue-600 h-2 rounded-full"
    //                   ></motion.div>
    //                 </div>
    //               </div>
    //             ))}
    //           </div>
    //         </motion.div>
            
    //         {/* Soft Skills */}
    //         <motion.div 
    //           initial={{ opacity: 0, y: 30 }}
    //           whileInView={{ opacity: 1, y: 0 }}
    //           transition={{ duration: 0.6, delay: 0.2 }}
    //           viewport={{ once: true }}
    //           className="bg-white p-6 rounded-lg shadow-md"
    //         >
    //           <div className="flex items-center mb-4">
    //             <FaUser className="text-blue-600 text-2xl mr-3" />
    //             <h3 className="text-xl font-bold">Soft Skills</h3>
    //           </div>
    //           <ul className="space-y-3 text-gray-700">
    //             {[
    //               'Communication',
    //               'Adaptability',
    //               'Problem-Solving',
    //               'Teamwork',
    //               'Leadership',
    //               'Time Management',
    //               'Critical Thinking',
    //               'Attention to Detail'
    //             ].map((skill) => (
    //               <li key={skill} className="flex items-center">
    //                 <span className="mr-2 text-blue-600">✓</span>
    //                 {skill}
    //               </li>
    //             ))}
    //           </ul>
    //         </motion.div>
            
    //         {/* Tools */}
    //         <motion.div 
    //           initial={{ opacity: 0, y: 30 }}
    //           whileInView={{ opacity: 1, y: 0 }}
    //           transition={{ duration: 0.6, delay: 0.3 }}
    //           viewport={{ once: true }}
    //           className="bg-white p-6 rounded-lg shadow-md"
    //         >
    //           <div className="flex items-center mb-4">
    //             <FaTools className="text-blue-600 text-2xl mr-3" />
    //             <h3 className="text-xl font-bold">Tools & Technologies</h3>
    //           </div>
    //           <div className="flex flex-wrap gap-2">
    //             {[
    //               'GIT', 'Git Actions', 'Azure DevOps', 'Octopus', 'TeamCity', 'JIRA',
    //               'AWS', 'VSCode', 'IntelliJ IDEA', 'Postman', 'Jenkins', 'Docker'
    //             ].map((tool) => (
    //               <span 
    //                 key={tool}
    //                 className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm"
    //               >
    //                 {tool}
    //               </span>
    //             ))}
    //           </div>
    //         </motion.div>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Education Section */}
    //   <section id="education" className="py-20 bg-gray-50">
    //     <div className="container mx-auto px-6">
    //       <motion.div 
    //         initial={{ opacity: 0, y: 50 }}
    //         whileInView={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.8 }}
    //         viewport={{ once: true }}
    //         className="text-center mb-12"
    //       >
    //         <h2 className="text-3xl font-bold mb-4">Education</h2>
    //         <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
    //       </motion.div>
          
    //       <div className="relative">
    //         <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>
            
    //         {/* B.Tech */}
    //         <motion.div 
    //           initial={{ opacity: 0, x: -50 }}
    //           whileInView={{ opacity: 1, x: 0 }}
    //           transition={{ duration: 0.8 }}
    //           viewport={{ once: true }}
    //           className="relative mb-12"
    //         >
    //           <div className="flex flex-col md:flex-row items-center">
    //             <div className="md:w-1/2 md:pr-8 md:text-right">
    //               <h3 className="text-xl font-bold text-blue-600">B.Tech, Electronics and Communication Engineering</h3>
    //               <h4 className="text-lg font-semibold">BPUT</h4>
    //               <p className="text-gray-600">2013 - 2017</p>
    //             </div>
    //             <div className="mx-auto md:mx-0 my-4 md:my-0 z-10 bg-blue-600 rounded-full h-8 w-8 flex items-center justify-center">
    //               <FaGraduationCap className="text-white" />
    //             </div>
    //             <div className="md:w-1/2 md:pl-8">
    //               <div className="bg-white p-6 rounded-lg shadow-md">
    //                 <p className="text-gray-700">
    //                   Completed Bachelor of Technology in Electronics and Communication Engineering with coursework in programming fundamentals, digital systems, and communication networks.
    //                 </p>
    //               </div>
    //             </div>
    //           </div>
    //         </motion.div>
            
    //         {/* Intermediate */}
    //         <motion.div 
    //           initial={{ opacity: 0, x: 50 }}
    //           whileInView={{ opacity: 1, x: 0 }}
    //           transition={{ duration: 0.8 }}
    //           viewport={{ once: true }}
    //           className="relative mb-12"
    //         >
    //           <div className="flex flex-col md:flex-row items-center">
    //             <div className="md:w-1/2 md:pr-8 md:text-right order-1 md:order-1">
    //               <div className="bg-white p-6 rounded-lg shadow-md md:hidden">
    //                 <p className="text-gray-700">
    //                   Completed Intermediate education with focus on Science subjects including Physics, Chemistry, and Mathematics.
    //                 </p>
    //               </div>
    //             </div>
    //             <div className="mx-auto md:mx-0 my-4 md:my-0 z-10 bg-blue-600 rounded-full h-8 w-8 flex items-center justify-center order-2 md:order-2">
    //               <FaGraduationCap className="text-white" />
    //             </div>
    //             <div className="md:w-1/2 md:pl-8 order-3 md:order-3">
    //               <h3 className="text-xl font-bold text-blue-600 md:text-left text-center">Intermediate, Science</h3>
    //               <h4 className="text-lg font-semibold md:text-left text-center">CBSE</h4>
    //               <p className="text-gray-600 md:text-left text-center">2011 - 2013</p>
    //               <div className="bg-white p-6 rounded-lg shadow-md hidden md:block">
    //                 <p className="text-gray-700">
    //                   Completed Intermediate education with focus on Science subjects including Physics, Chemistry, and Mathematics.
    //                 </p>
    //               </div>
    //             </div>
    //           </div>
    //         </motion.div>
            
    //         {/* Matriculation */}
    //         <motion.div 
    //           initial={{ opacity: 0, x: -50 }}
    //           whileInView={{ opacity: 1, x: 0 }}
    //           transition={{ duration: 0.8 }}
    //           viewport={{ once: true }}
    //           className="relative"
    //         >
    //           <div className="flex flex-col md:flex-row items-center">
    //             <div className="md:w-1/2 md:pr-8 md:text-right">
    //               <h3 className="text-xl font-bold text-blue-600">Matriculation</h3>
    //               <h4 className="text-lg font-semibold">CBSE</h4>
    //               <p className="text-gray-600">2010 - 2011</p>
    //             </div>
    //             <div className="mx-auto md:mx-0 my-4 md:my-0 z-10 bg-blue-600 rounded-full h-8 w-8 flex items-center justify-center">
    //               <FaGraduationCap className="text-white" />
    //             </div>
    //             <div className="md:w-1/2 md:pl-8">
    //               <div className="bg-white p-6 rounded-lg shadow-md">
    //                 <p className="text-gray-700">
    //                   Completed high school education with a strong foundation in basic sciences and mathematics.
    //                 </p>
    //               </div>
    //             </div>
    //           </div>
    //         </motion.div>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Contact Section */}
    //   <section id="contact" className="py-20 bg-white">
    //     <div className="container mx-auto px-6">
    //       <motion.div 
    //         initial={{ opacity: 0, y: 50 }}
    //         whileInView={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.8 }}
    //         viewport={{ once: true }}
    //         className="text-center mb-12"
    //       >
    //         <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
    //         <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
    //       </motion.div>
          
    //       <div className="flex flex-col md:flex-row gap-8">
    //         <motion.div 
    //           initial={{ opacity: 0, x: -50 }}
    //           whileInView={{ opacity: 1, x: 0 }}
    //           transition={{ duration: 0.8 }}
    //           viewport={{ once: true }}
    //           className="md:w-1/2"
    //         />
    //           <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
    //           <p className="text-gray-700 mb-6">
    //             Feel free to contact me for any work or suggestions. I'm always open to discussing new projects, 
    //             creative ideas, or opportunities to be part of your vision.
    //           </p>
    //           <div className="space-y-4">
    //             <div className="flex items-center">
    //             <div className="bg-blue-600 text-white p-2 rounded-full mr-3">
    //               <FaEnvelope />
    //             </div>
    //             <div>
    //               <h4 className="font-semibold">Email</h4>
    //               <p className="text-gray-600">jon.dev@example.com</p>
    //             </div>
    //           </div>
    //           <div className="flex items-center">
    //             <div className="bg-blue-600 text-white p-2 rounded-full mr-3">
    //               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
    //               </svg>
    //             </div>
    //             <div>
    //               <h4 className="font-semibold">Phone</h4>
    //               <p className="text-gray-600">+1 (123) 456-7890</p>
    //             </div>
    //           </div>
    //           <div className="flex items-center">
    //             <div className="bg-blue-600 text-white p-2 rounded-full mr-3">
    //               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
    //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
    //               </svg>
    //             </div>
    //             <div>
    //               <h4 className="font-semibold">Location</h4>
    //               <p className="text-gray-600">Pune, Maharashtra, India</p>
    //             </div>
    //           </div>
    //         </div>
    //         <motion.div 
    //           initial={{ opacity: 0, x: 50 }}
    //           whileInView={{ opacity: 1, x: 0 }}
    //           transition={{ duration: 0.8 }}
    //           viewport={{ once: true }}
    //           className="md:w-1/2"
    //         >
    //           <form className="bg-white p-6 rounded-lg shadow-md">
    //             <div className="mb-4">
    //               <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
    //               <input 
    //                 type="text" 
    //                 id="name" 
    //                 className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
    //                 placeholder="Your Name"
    //               />
    //             </div>
    //             <div className="mb-4">
    //               <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
    //               <input 
    //                 type="email" 
    //                 id="email" 
    //                 className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
    //                 placeholder="Your Email"
    //               />
    //             </div>
    //             <div className="mb-4">
    //               <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
    //               <input 
    //                 type="text" 
    //                 id="subject" 
    //                 className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
    //                 placeholder="Subject"
    //               />
    //             </div>
    //             <div className="mb-4">
    //               <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
    //               <textarea 
    //                 id="message" 
    //                 rows={4}
    //                 className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
    //                 placeholder="Your Message"
    //               ></textarea>
    //             </div>
    //             <button 
    //               type="submit" 
    //               className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition-colors w-full"
    //             >
    //               Send Message
    //             </button>
    //           </form>
    //         </motion.div>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Footer */}
    //   <footer className="bg-gray-800 text-white py-8">
    //     <div className="container mx-auto px-6">
    //       <div className="flex flex-col md:flex-row justify-between items-center">
    //         <div className="mb-4 md:mb-0">
    //           <h3 className="text-xl font-bold">Pritam Gope</h3>
    //           <p className="text-gray-400">Senior Software Engineer</p>
    //         </div>
    //         <div className="flex space-x-4">
    //           <a href="#" className="text-gray-400 hover:text-white transition-colors">
    //             <FaGithub className="text-2xl" />
    //           </a>
    //           <a href="#" className="text-gray-400 hover:text-white transition-colors">
    //             <FaLinkedin className="text-2xl" />
    //           </a>
    //           <a href="#" className="text-gray-400 hover:text-white transition-colors">
    //             <FaEnvelope className="text-2xl" />
    //           </a>
    //         </div>
    //       </div>
    //       <div className="mt-8 text-center text-gray-400 text-sm">
    //         <p>&copy; {new Date().getFullYear()} Pritam Gope. All rights reserved.</p>
    //       </div>
    //     </div>
    //   </footer>
    // </div>
    <></>
  );
};

export default App1;