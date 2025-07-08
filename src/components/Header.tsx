import React from 'react';
import { Github, Linkedin } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="relative z-10 pt-12 pb-8">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-4">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-4 animate-fadeInUp">
            Internship Project Showcase
          </h1>
          <p className="text-xl text-slate-700 mb-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Full-Stack Developer & Innovation Enthusiast
          </p>
          <div className="flex justify-center gap-4 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <a
              href="https://github.com/prabhu-ji"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 hover:bg-white hover:shadow-lg hover:scale-110 transition-all duration-300 group"
            >
              <Github className="w-5 h-5 text-slate-700 group-hover:text-blue-600 transition-colors duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/prabhu-ji/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 hover:bg-white hover:shadow-lg hover:scale-110 transition-all duration-300 group"
            >
              <Linkedin className="w-5 h-5 text-slate-700 group-hover:text-blue-600 transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};