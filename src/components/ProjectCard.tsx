import React, { useEffect, useRef, useState } from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  overview: string;
  details: string[];
  techStack: string[];
  highlights: string[];
  icon: LucideIcon;
  gradient: string;
  index: number;
  status: string;
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Prod':
      return 'bg-green-100 text-green-700 border-green-200';
    case 'QA':
      return 'bg-yellow-100 text-yellow-700 border-yellow-200';
    case 'Dummy':
      return 'bg-purple-100 text-purple-700 border-purple-200';
    default:
      return 'bg-gray-100 text-gray-700 border-gray-200';
  }
};

const getStatusBgColor = (status: string) => {
  switch (status) {
    case 'Prod':
      return 'hover:bg-green-50/80';
    case 'QA':
      return 'hover:bg-yellow-50/80';
    case 'Dummy':
      return 'hover:bg-purple-50/80';
    default:
      return 'hover:bg-gray-50/80';
  }
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  overview,
  details,
  techStack,
  highlights,
  icon: Icon,
  gradient,
  index,
  status
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`group relative bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/40 hover:border-blue-200/60 transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      } ${
        isHovered 
          ? 'scale-[1.02] shadow-xl shadow-blue-100/50' 
          : 'scale-100 shadow-lg shadow-slate-100/30'
      } ${getStatusBgColor(status)}`}
      style={{ 
        transitionDelay: `${index * 150}ms`,
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold border transition-all duration-300 ${
          getStatusColor(status)
        } ${
          isHovered ? 'scale-110 shadow-md' : 'scale-100'
        }`}
      >
        {status}
      </div>

      <div className="flex items-start gap-4 mb-6 pr-16">
        <div 
          className={`p-3 rounded-xl bg-blue-50 transition-all duration-300 ${
            isHovered ? 'bg-blue-100 scale-110 rotate-3' : 'scale-100 rotate-0'
          }`}
        >
          <Icon className={`w-6 h-6 text-blue-600 transition-all duration-300 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`} />
        </div>
        <div className="flex-1">
          <h3 
            className={`text-xl font-bold mb-2 transition-all duration-300 ${
              isHovered ? 'text-blue-700' : 'text-slate-800'
            }`}
          >
            {title}
          </h3>
          <p className="text-slate-700 text-sm leading-relaxed">{overview}</p>
        </div>
      </div>

      <div className="space-y-4">
        {details.map((detail, idx) => (
          <div 
            key={idx} 
            className={`text-slate-600 text-sm transition-all duration-300 ${
              isHovered ? 'translate-x-1' : 'translate-x-0'
            }`}
            style={{ transitionDelay: `${idx * 50}ms` }}
          >
            <span className="font-semibold text-slate-800">{detail.split(':')[0]}:</span>
            <span className="ml-1">{detail.split(':').slice(1).join(':')}</span>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <h4 className="text-sm font-semibold text-slate-800 mb-3">Tech Stack</h4>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, idx) => (
            <span
              key={idx}
              className={`px-3 py-1 bg-slate-50/80 rounded-full text-xs font-medium text-slate-700 border border-slate-100 transition-all duration-300 hover:bg-blue-50 hover:text-blue-700 hover:scale-105 hover:shadow-sm ${
                isHovered ? 'hover:translate-y-[-2px]' : ''
              }`}
              style={{ transitionDelay: `${idx * 30}ms` }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h4 className="text-sm font-semibold text-slate-800 mb-3">Key Highlights</h4>
        <ul className="space-y-2">
          {highlights.map((highlight, idx) => (
            <li 
              key={idx} 
              className={`text-slate-700 text-sm flex items-start gap-2 transition-all duration-300 ${
                isHovered ? 'translate-x-1' : 'translate-x-0'
              }`}
              style={{ transitionDelay: `${idx * 40}ms` }}
            >
              <div 
                className={`w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0 transition-all duration-300 ${
                  isHovered ? 'scale-150 bg-blue-600' : 'scale-100'
                }`}
              />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      <div 
        className={`absolute inset-0 rounded-2xl transition-all duration-500 pointer-events-none ${
          isHovered 
            ? 'opacity-10 bg-gradient-to-br from-blue-100 via-transparent to-blue-50' 
            : 'opacity-0'
        }`}
      />
    </div>
  );
};