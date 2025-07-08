import React from 'react';
import { Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center">
      <a
        href="https://www.linkedin.com/in/prabhu-ji/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors duration-300 text-slate-700 hover:text-slate-900"
      >
        <Linkedin className="w-4 h-4" />
        <span className="text-sm font-medium">Connect on LinkedIn</span>
      </a>
    </footer>
  );
};