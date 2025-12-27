import React from 'react';
import { Code, Database , CheckCircle, AlertCircle, Image, Layers , Eye } from 'lucide-react';

// Reusable Project Showcase Component
export default function ProjectShowcase({ project }) {
  return (
    <>
      <div className=" text-white border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center gap-3 mb-4">
            {project.icon || <Code className="w-10 h-10 text-blue-400" />}
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white">{project.title}</h1>
              <p className="text-gray-400 mt-1">{project.description}</p>
            </div>
          </div>
          {/* github info */}
          {/* <div className="flex gap-4 mt-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-md border border-gray-700 hover:border-gray-600 transition-colors">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-semibold">{project.stats.stars}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-md border border-gray-700 hover:border-gray-600 transition-colors">
              <GitFork className="w-4 h-4 text-gray-400" />
              <span className="text-sm font-semibold">{project.stats.forks}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-md border border-gray-700 hover:border-gray-600 transition-colors">
              <Eye className="w-4 h-4 text-gray-400" />
              <span className="text-sm font-semibold">{project.stats.watchers}</span>
            </div>
          </div> */}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        
        {/* Tech Stack Badges */}
        <div className="mb-12">
          <h2 className="headings mb-4 flex items-center gap-2">
            <span></span> Tech Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-md border border-gray-700 hover:border-gray-600 transition-colors"
              >
                <div className={`w-3 h-3 rounded-full ${tech.color}`}></div>
                <span className="text-sm font-semibold text-gray-300">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="headings mb-6 flex items-center gap-2">
            <span></span> Features
          </h2>
          <div className="space-y-3">
            {project.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 border-2 border-blue-200/40 rounded-md hover:bg-gray-800 hover:border-blue-400/40 transition-colors"
              >
                <div className="mt-1 text-blue-400">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm sm:text-lg mb-1">{feature.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-lg leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Problems & Solutions */}
        {
          project.challenges && 
          <>
        <div className="mb-12">
          <h2 className="headings mb-6 flex items-center gap-2">
            <span></span> Challenges & Solutions
          </h2>
          <div className="space-y-4">
            {project.challenges.map((item, index) => (
              <div
                key={index}
                className="overflow-hidden border-2 rounded-md border-blue-200/40 hover:border-blue-400/40 transition-colors"
              >
                <details className="group">
                  <summary className="flex items-center gap-3 p-4 cursor-pointer hover:bg-gray-800 transition-colors">
                    <AlertCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                    <span className="font-semibold text-white text-sm sm:text-lg">{item.problem}</span>
                    <span className="ml-auto text-gray-500 group-open:rotate-90 transition-transform">▶</span>
                  </summary>
                  <div className="p-4 border-t border-blue-200/40">
                    <div className="flex items-start gap-3 ">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-green-400 mb-1">Solution</p>
                        <p className="text-gray-300 text-xs sm:text-lg">{item.solution}</p>
                      </div>
                    </div>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
          </>
        }


        {/* Demo Screenshots */}
        {project.screenshots && project.screenshots.length > 0 && (
          <div className="mb-12">
            <h2 className="headings mb-6 flex items-center gap-2">
              <span></span> Screenshots
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.screenshots.map((screenshot, index) => (
                <div key={index} className="border-2 border-blue-200/40 hover:border-blue-400/40 rounded-md p-8 transition-colors">
                  {screenshot.url ? (
                    <img src={screenshot.url} alt={screenshot.title} className="w-full h-64 object-cover rounded" />
                  ) : (
                    <div className="flex flex-col items-center justify-center h-64">
                      <Image className="w-16 h-16 text-gray-600 mb-4" />
                      <p className="text-gray-300 font-semibold mb-2">{screenshot.title}</p>
                      <p className="text-gray-500 text-sm text-center">{screenshot.placeholder || 'Add your screenshot here'}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* System Architecture */}
        {project.systemArchitecture && (
          <div className="mb-12">
            <h2 className="headings mb-6 flex items-center gap-2">
              <span></span> System Architecture
            </h2>
            <div className="border-2 border-blue-200/40 hover:border-blue-400/40 rounded-md p-8 transition-colors">
              {project.systemArchitecture.url ? (
                <img src={project.systemArchitecture.url} alt="System Architecture" className="w-fit h-fit rounded" />
              ) : (
                <div className="flex flex-col items-center justify-center min-h-[400px]">
                  <Layers className="w-20 h-20 text-gray-600 mb-4" />
                  <p className="text-gray-300 font-semibold mb-2">System Architecture Diagram</p>
                  <p className="text-gray-500 text-sm text-center max-w-md">
                    {project.systemArchitecture.placeholder || 'Replace this with your architecture diagram showing frontend, backend, database, and service interactions'}
                  </p>
                  <div className="mt-4 px-4 py-2 bg-blue-900 bg-opacity-30 border border-blue-800 rounded-md">
                    <code className="text-xs text-blue-400">Recommended: 1200px width • PNG/SVG</code>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Database Model */}
        {project.databaseModel && (
          <div className="mb-12">
            <h2 className="headings mb-6 flex items-center gap-2">
              <span></span> Database Model
            </h2>
            <div className="rounded-md p-8 border-2 border-blue-200/40 hover:border-blue-400/40 transition-colors">
              {project.databaseModel.url ? (
                <img src={project.databaseModel.url} alt="Database Model" className="w-full rounded bg-contain" />
              ) : (
                <div className="flex flex-col items-center justify-center min-h-[400px]">
                  <Database className="w-20 h-20 text-gray-600 mb-4" />
                  <p className="text-gray-300 font-semibold mb-2">Database Schema Diagram</p>
                  <p className="text-gray-500 text-sm text-center max-w-md">
                    {project.databaseModel.placeholder || 'Replace this with your ER diagram or database schema showing tables, relationships, and structure'}
                  </p>
                  <div className="mt-4 px-4 py-2 bg-green-900 bg-opacity-30 border border-green-800 rounded-md">
                    <code className="text-xs text-green-400">Recommended: 1200px width • PNG/SVG</code>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Conclusion */}
        <div className="mb-12">
          <h2 className="headings mb-6 flex items-center gap-2">
            <span>📝</span> Conclusion
          </h2>
          <div className="bg-opacity-20 border-l-4 border-blue-800 p-6 rounded-r-md">
            <p className="text-gray-300 text-xs sm:text-lg leading-relaxed mb-4">
              {project.conclusion.summary}
            </p>
            <p className="text-gray-400 text-xs sm:text-lg leading-relaxed mb-6">
              {project.conclusion.learnings}
            </p>
            <div className="flex flex-wrap gap-3">
              {project.links.demo && (
                <a 
                  href={project.links.demo} 
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-white font-semibold rounded-md hover:bg-gray-800 border border-blue-200/40 hover:border-blue-400/40 transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  View Live Demo
                </a>
              )}
              {project.links.github && (
                <a 
                  href={project.links.github} 
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-600 transition-colors border border-gray-700 hover:border-gray-400"
                >
                  <Code className="w-4 h-4" />
                  View on GitHub
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            {project.footer || 'Made with ❤️ by Jesroff • Licensed under MIT'}
          </p>
        </div>

      </div>
    </>
  );
}