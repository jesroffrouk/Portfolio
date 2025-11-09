import React, { useState, useEffect } from 'react';
import { Code, Palette, Globe, Database, Box, Layers, Cpu, Terminal, Server, FileCode, Braces, Component, Workflow, Container, Monitor, Package} from 'lucide-react';

const Allskills = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const icons = [
    { id: 1, name: 'HTML', Icon: FileCode, color: '#e34c26' },
    { id: 2, name: 'CSS', Icon: Palette, color: '#264de4' },
    { id: 3, name: 'JavaScript', Icon: Braces, color: '#f7df1e' },
    { id: 4, name: 'TypeScript', Icon: Code, color: '#3178c6' },
    { id: 5, name: 'React.js', Icon: Component, color: '#61dafb' },
    { id: 6, name: 'Next.js', Icon: Layers, color: '#b1a7a6' },
    { id: 7, name: 'Python', Icon: Terminal, color: '#3776ab' },
    { id: 8, name: 'Express.js', Icon: Server, color: '#b1a7a6' },
    { id: 9, name: 'Node.js', Icon: Cpu, color: '#339933' },
    { id: 10, name: 'MongoDB', Icon: Database, color: '#47a248' },
    { id: 11, name: 'PostgreSQL', Icon: Database, color: '#4169e1' },
    { id: 12, name: 'Prisma ORM', Icon: Box, color: '#2d3748' },
    { id: 13, name: 'Docker', Icon: Container, color: '#2496ed' },
    { id: 14, name: 'Linux', Icon: Monitor, color: '#fcc624' },
    { id: 15, name: 'Redux', Icon: Workflow, color: '#764abc' },
    { id: 16, name: 'Tailwind CSS', Icon: Package, color: '#06b6d4' },
  ];

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-1.5 mx-2 px-3 py-1.5 rounded-md outline-1 hover:bg-gray-700 transition-colors duration-200"
      >
        <Globe size={14} />
        <span>View All</span>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-3xl p-8 max-w-5xl w-full max-h-[80vh] overflow-y-auto custom-scrollbar border-2 border-gray-700 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-white">Skills:</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors duration-200 text-2xl"
              >
                ×
              </button>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
              {icons.map((item) => {
                const { Icon, color, name, id } = item;

                return (
                  <div
                    key={id}
                    className="relative aspect-square rounded-2xl flex flex-col items-center justify-center transition-all duration-300 cursor-pointer group border-2 hover:border-[3px]"
                    style={{
                      borderColor: color,
                      backgroundColor: 'transparent'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = color + '15';
                      e.currentTarget.style.boxShadow = `0 0 25px ${color}40`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    {/* Icon Container */}
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center mb-2 transition-all duration-300"
                      style={{
                        backgroundColor: color + '10'
                      }}
                    >
                      <Icon
                        size={28}
                        style={{ color }}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>

                    {/* Name */}
                    <h3 className="text-white font-semibold text-xs text-center px-2">
                      {name}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Allskills;