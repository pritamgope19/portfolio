import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  const socialLinks = [
    { 
      icon: <Github className="w-6 h-6" />, 
      href: "https://github.com/pritamgope19" 
    },
    { 
      icon: <Linkedin className="w-6 h-6" />, 
      href: "https://www.linkedin.com/in/pritamgope" 
    },
    { 
      icon: <Twitter className="w-6 h-6" />, 
      href: "https://twitter.com/pgope" 
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          {socialLinks.map((social) => (
            <a 
              key={social.href}
              href={social.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {social.icon}
            </a>
          ))}
        </div>
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Pritam Gope. All rights reserved.
        </p>
      </div>
    </footer>
  );
};