import React from 'react';
import { Link } from 'react-router';

const ProjectCard = ({ 
  title, 
  period, 
  description, 
  technologies, 
  links, 
  image, 
}) => {
  const baseClasses = "rounded-lg p-3 shadow-lg  transition-all duration-300 hover:bg-gray-900 hover:shadow-xl hover:scale-105";
  const cardClasses = `${baseClasses} border-2 border-blue-200/40 hover:border-blue-400/40`;

  return (
    <div className={cardClasses}>
      {/* Header Image */}
      <div>
      <Link to={links.fullpage ? `/projects/${links.fullpage}`: ''}>
      <div className="mb-2 rounded-lg overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-32 object-cover"
        />
      </div>

      {/* Title */}
      <h2 className="text-lg font-bold mb-1">{title}</h2>
      
      {/* Period */}
      <p className={`text-xs mb-2 text-gray-400`}>
        {period}
      </p>
      
      {/* Description */}
      <p className={`mb-3 leading-relaxed text-sm min-h-16 text-gray-200`}>
        {description}
      </p>
      
      {/* Technology Tags */}
      <div className="flex flex-wrap gap-1 mb-3">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className={`px-2 py-0.5 text-xs font-medium rounded-full text-gray-400 outline-1 bg-red-00 `}
          >
            {tech}
          </span>
        ))}
      </div>
      </Link>
      </div>
    </div>
  );
};

const PortfolioCards = () => {
  const projects = [
    {
      title: "Movie Review Platform",
      period: "Oct 2024 - Feb 2025",
      description: "It's movie review platform, for movie lovers to share their opinion on movies with others",
      technologies: ["Next.js", "Typescript", "TailwindCSS" ,"MongoDB", "redux", "RTKQuery", "Daisyui"],
      links: {
        fullpage: "moviezone",
      },
      image: "project1.png",
    },
    {
      title: "Pinpic",
      period: "Jan 2025 - Aug 2025",
      description: "Designed a platform to bind Images to locations. People have to visit the places to see those images.",
      technologies: ["React.js", "Express", "PostgreSQL", "Prisma", "TailwindCSS", "Shadcn UI"],
      links: {
        fullpage: "pinpic",
      },
      image: "/project2.png",
    },
  ];

  return (
    <div className="min-h-auto py-3">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project,index) => (
            <ProjectCard
              key={index}
              title={project.title}
              period={project.period}
              description={project.description}
              technologies={project.technologies}
              links={project.links}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCards;