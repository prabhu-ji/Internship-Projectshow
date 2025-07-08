import React from 'react';
import { Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center">
          <a
            href="https://www.linkedin.com/in/prabhu-ji/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Linkedin className="w-5 h-5" />
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};