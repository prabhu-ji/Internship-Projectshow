import React from 'react';
import { Header } from './components/Header';
import { ProjectCard } from './components/ProjectCard';
import { TechStackSection } from './components/TechStackSection';
import { Footer } from './components/Footer';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import { projects } from './data/projects';

function App() {
  useScrollAnimation();

  return (
    <div className="min-h-screen transition-all duration-500 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      
      {/* Projects Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-16">
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <TechStackSection />
      <Footer />
    </div>
  );
}

export default App;