import React from 'react';
import { Globe } from 'lucide-react';

const ProjectCard = ({ 
  title, 
  period, 
  description, 
  technologies, 
  links, 
  image, 
  variant = 'default' 
}) => {
  const baseClasses = "rounded-sm p-3 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105";
  const cardClasses = variant === 'red' 
    ? `${baseClasses} border border-gray-500 text-white` 
    : `${baseClasses} bg-gray border border-gray-200`;

  return (
    <div className={cardClasses}>
      {/* Header Image */}
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
      <p className={`text-xs mb-2 ${variant === 'red' ? 'text-gray-100' : 'text-gray-600'}`}>
        {period}
      </p>
      
      {/* Description */}
      <p className={`mb-3 leading-relaxed text-sm min-h-16 ${variant === 'red' ? 'text-gray-50' : 'text-gray-700'}`}>
        {description}
      </p>
      
      {/* Technology Tags */}
      <div className="flex flex-wrap gap-1 mb-3">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className={`px-2 py-0.5 text-xs font-medium rounded-full ${
              variant === 'red'
                ? 'bg-gray-600 text-red-100 border border-red-400'
                : 'bg-gray-100 text-gray-800 border border-gray-300'
            }`}
          >
            {tech}
          </span>
        ))}
      </div>
      
      {/* Action Links */}
      <div className="flex gap-2">
        {links.website && (
          <a
            href={links.website}
            className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              variant === 'red'
                ? 'bg-red-600 hover:bg-red-700 text-white'
                : 'bg-black hover:bg-gray-800 text-white'
            }`}
          >
            <Globe size={14} />
            Website
          </a>
        )}
        {links.source && (
          <a
            href={links.source}
            className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              variant === 'red'
                ? 'bg-red-600 hover:bg-red-700 text-white'
                : 'bg-black hover:bg-gray-800 text-white'
            }`}
          >
            Source
          </a>
        )}
      </div>
{/* 
      <BorderBeam
        duration={6}
        size={400}
        className="from-transparent via-red-500 to-transparent"
      />
      <BorderBeam
        duration={6}
        delay={3}
        size={400}
        borderWidth={2}
        className="from-transparent via-blue-500 to-transparent"
      /> */}
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
        website: "https://moviezone-jacks-projects-5af6c6ee.vercel.app/",
        source: "https://github.com/jesroffrouk/movie-review-platform"
      },
      image: "/project1.png",
      variant: "red"
    },
    {
      title: "Pinpic",
      period: "Jan 2025 - Aug 2025",
      description: "Designed a platform to bind Images to locations. People have to visit the places to see those images.",
      technologies: ["React.js", "Express", "PostgreSQL", "Prisma", "TailwindCSS", "Shadcn UI"],
      links: {
        website: "#",
      },
      image: "/project2.png",
      variant: "red"
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
              variant={project.variant}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCards;