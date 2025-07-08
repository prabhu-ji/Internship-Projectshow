import React, { useEffect, useRef, useState } from 'react';
import { Code, Server, Database, Cloud, Shield, Zap } from 'lucide-react';

const techCategories = [
  {
    title: 'Frontend',
    icon: Code,
    color: 'bg-blue-50 text-blue-600 border-blue-100',
    techs: ['React', 'Tailwind CSS', 'Bootstrap', 'HTML5', 'JavaScript']
  },
  {
    title: 'Backend',
    icon: Server,
    color: 'bg-green-50 text-green-600 border-green-100',
    techs: ['Node.js', 'Express', 'PHP Yii', 'REST APIs']
  },
  {
    title: 'Database',
    icon: Database,
    color: 'bg-orange-50 text-orange-600 border-orange-100',
    techs: ['MongoDB', 'JSON Processing', 'Data Modeling']
  },
  {
    title: 'Cloud & Tools',
    icon: Cloud,
    color: 'bg-cyan-50 text-cyan-600 border-cyan-100',
    techs: ['Docker', 'Cloudinary', 'AWS S3', 'Puppeteer']
  },
  {
    title: 'Security',
    icon: Shield,
    color: 'bg-purple-50 text-purple-600 border-purple-100',
    techs: ['JWT', 'RBAC', 'Session Management', 'Auth Systems']
  },
  {
    title: 'Automation',
    icon: Zap,
    color: 'bg-yellow-50 text-yellow-600 border-yellow-100',
    techs: ['Cron Jobs', 'OpenAI API', 'Email Automation', 'Real-time Editing']
  }
];

export const TechStackSection: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(6).fill(false));
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardRefs.current.findIndex(ref => ref === entry.target);
          if (entry.isIntersecting && index !== -1) {
            setVisibleCards(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    cardRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4 animate-fadeInUp">
            Tech Stack Mastery
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Comprehensive expertise across modern web technologies and development practices
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, index) => (
            <div
              key={category.title}
              ref={el => cardRefs.current[index] = el}
              className={`group relative bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white/40 hover:border-blue-200/60 transition-all duration-700 ease-out ${
                visibleCards[index] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              } hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-100/30 hover:bg-white/70`}
              style={{ 
                transitionDelay: `${index * 200}ms`,
              }}
            >
              <div 
                className={`inline-flex p-3 rounded-xl ${category.color} mb-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg`}
              >
                <category.icon className="w-6 h-6 transition-all duration-500 group-hover:scale-110" />
              </div>
              
              <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                {category.title}
              </h3>
              
              <div className="space-y-2">
                {category.techs.map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-2 group-hover:translate-x-2 transition-all duration-300 hover:translate-x-3"
                    style={{ transitionDelay: `${idx * 80}ms` }}
                  >
                    <div className="w-1 h-1 bg-blue-400 rounded-full flex-shrink-0 transition-all duration-300 group-hover:scale-150 group-hover:bg-blue-600" />
                    <span className="text-slate-700 font-medium hover:text-blue-600 transition-colors duration-300 text-sm">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>

              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-all duration-500 bg-gradient-to-br from-blue-100 via-transparent to-blue-50 pointer-events-none group-hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};