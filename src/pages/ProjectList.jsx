import { DockDemo } from '@/components/myUIcomponents/Dock';
import React from 'react';


const ProjectCard = ({ title, description, link, comingSoon }) => {
  const CardContent = (
    <div
      className={`relative p-5 rounded-lg border-2 transition-all duration-300 flex flex-col justify-between h-46 w-full ${
        comingSoon
          ? 'border-gray-700 cursor-not-allowed opacity-50'
          : 'border-blue-200/40 hover:bg-gray-900 hover:border-blue-400/40 cursor-pointer group'
      }`}
    >
      <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
        comingSoon ? 'text-white' : 'text-white group-hover:text-white'
      }`}>{title}</h3>
      <p className={`text-sm mb-3 transition-colors duration-300 ${
        comingSoon ? 'text-gray-400' : 'text-gray-400 group-hover:text-blue-100'
      }`}>{description}</p>
      
      {comingSoon ? (
        <span className="inline-block px-3 py-1 bg-gray-700 text-gray-400 text-xs font-medium rounded-full">
          Coming Soon
        </span>
      ) : (
        <span className="text-blue-400 text-sm font-medium transition-colors duration-300 group-hover:text-white">
          View Project →
        </span>
      )}
    </div>
  );

  if (comingSoon) {
    return CardContent;
  }

  return (
    <a href={link} className="block">
      {CardContent}
    </a>
  );
};

export default function ProjectsList() {
  const projects = [
    {
      title: 'Movie-Review-Platform',
      description: 'A Platform to browse movies and review them',
      link: '/projects/moviezone',
      comingSoon: false
    },
    {
      title: 'PinPic',
      description: 'A Platform to bind images to locations',
      link: '/projects/pinpic',
      comingSoon: false
    },
    {
      title: 'Password Manager',
      description: 'A website to manage passwords enitrely on client side',
      link: '/projects/passwordmanager',
      comingSoon: false
    },
  ];

  return (
    <div className="min-h-screen bg-home-bg text-home-bg font-home p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">My Projects</h1>
          <p className="text-gray-400">Explore my latest work and creations</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
              comingSoon={project.comingSoon}
            />
          ))}
        </div>
        <DockDemo />
      </div>
    </div>
  );
}