import React, { useState, useRef, useEffect } from 'react';
import { Code, Palette, Database, Server, Smartphone, Globe, Cpu, GitBranch } from 'lucide-react';


// a dropdown button to show all skills in box. open box

const SkillsOmnitrix = () => {
  const skills = [
    {
      name: 'HTML',
      icon: Code,
      color: '#E34F26',
      description: 'Semantic markup and accessibility',
      proficiency: 95,
      experience: '5+ years'
    },
    {
      name: 'CSS',
      icon: Palette,
      color: '#1572B6',
      description: 'Advanced styling and animations',
      proficiency: 90,
      experience: '5+ years'
    },
    {
      name: 'JavaScript',
      icon: Cpu,
      color: '#F7DF1E',
      description: 'Modern ES6+ and async programming',
      proficiency: 92,
      experience: '4+ years'
    },
    {
      name: 'React',
      icon: Globe,
      color: '#61DAFB',
      description: 'Component-based architecture',
      proficiency: 88,
      experience: '3+ years'
    },
    {
      name: 'Node.js',
      icon: Server,
      color: '#339933',
      description: 'Backend development and APIs',
      proficiency: 85,
      experience: '3+ years'
    },
    {
      name: 'Database',
      icon: Database,
      color: '#4479A1',
      description: 'SQL and NoSQL databases',
      proficiency: 80,
      experience: '3+ years'
    },
    {
      name: 'Mobile',
      icon: Smartphone,
      color: '#A4C639',
      description: 'Responsive and mobile-first design',
      proficiency: 87,
      experience: '4+ years'
    },
    {
      name: 'Git',
      icon: GitBranch,
      color: '#F05032',
      description: 'Version control and collaboration',
      proficiency: 90,
      experience: '5+ years'
    }
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startOffset, setStartOffset] = useState(0);
  const containerRef = useRef(null);

  const selectedSkill = skills[selectedIndex];
  const SelectedIcon = selectedSkill.icon;
  const itemWidth = 140;

  const handleStart = (e) => {
    setIsDragging(true);
    const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
    setStartOffset(offset);
  };

  const handleMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    const diff = clientX - startX;
    let newOffset = startOffset + diff;
    
    // Clamp offset to prevent scrolling beyond boundaries
    const maxOffset = 0;
    const minOffset = -(skills.length - 1) * itemWidth;
    newOffset = Math.max(minOffset, Math.min(maxOffset, newOffset));
    
    setOffset(newOffset);
    
    const centerOffset = -newOffset / itemWidth;
    const newIndex = Math.round(centerOffset);
    const clampedIndex = Math.max(0, Math.min(skills.length - 1, newIndex));
    setSelectedIndex(clampedIndex);
  };

  const handleEnd = () => {
    setIsDragging(false);
    const centerOffset = -offset / itemWidth;
    const snappedIndex = Math.round(centerOffset);
    const clampedIndex = Math.max(0, Math.min(skills.length - 1, snappedIndex));
    setOffset(-clampedIndex * itemWidth);
    setSelectedIndex(clampedIndex);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMove);
      window.addEventListener('mouseup', handleEnd);
      window.addEventListener('touchmove', handleMove, { passive: false });
      window.addEventListener('touchend', handleEnd);
      
      return () => {
        window.removeEventListener('mousemove', handleMove);
        window.removeEventListener('mouseup', handleEnd);
        window.removeEventListener('touchmove', handleMove);
        window.removeEventListener('touchend', handleEnd);
      };
    }
  }, [isDragging, startX, offset]);

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-center mb-4 bg-clip-text">
          Skills Sets 
        </h1>
        <p className="text-gray-400 text-center mb-12">Click and drag to scroll • Explore your skills</p>
        
        <div className="flex flex-col items-center justify-center gap-8">
          {/* Linear carousel */}
          <div className="relative w-full max-w-3xl overflow-hidden">
            {/* Fade gradients on edges - only show when not at boundaries */}
            <div 
              className="absolute left-0 top-0 bottom-0 w-32 to-transparent z-10 pointer-events-none transition-opacity duration-300"
              style={{ opacity: selectedIndex > 0 ? 1 : 0 }}
            ></div>
            <div 
              className="absolute right-0 top-0 bottom-0 w-32 to-transparent z-10 pointer-events-none transition-opacity duration-300"
              style={{ opacity: selectedIndex < skills.length - 1 ? 1 : 0 }}
            ></div>
            
            {/* Scrollable container */}
            <div 
              ref={containerRef}
              className="cursor-grab active:cursor-grabbing select-none py-8"
              onMouseDown={handleStart}
              onTouchStart={handleStart}
            >
              <div 
                className="flex items-center justify-start transition-transform"
                style={{ 
                  transform: `translateX(calc(50% - ${itemWidth / 2}px + ${offset}px))`,
                  transitionDuration: isDragging ? '0ms' : '300ms'
                }}
              >
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  const isSelected = index === selectedIndex;
                  const distanceFromCenter = Math.abs(index - selectedIndex);
                  const opacity = Math.max(0.3, 1 - distanceFromCenter * 0.2);
                  const blur = distanceFromCenter > 1 ? distanceFromCenter * 2 : 0;
                  const scale = isSelected ? 1.1 : Math.max(0.8, 1 - distanceFromCenter * 0.1);
                  
                  return (
                    <div
                      key={skill.name}
                      className="flex-shrink-0 transition-all duration-300 pointer-events-none px-2"
                      style={{
                        width: `${itemWidth}px`,
                        opacity,
                        filter: `blur(${blur}px)`,
                        transform: `scale(${scale})`
                      }}
                    >
                      <div 
                        className={`w-full aspect-square rounded-2xl flex flex-col items-center justify-center transition-all duration-300 ${
                          isSelected 
                            ? 'bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl' 
                            : 'bg-gray-800'
                        }`}
                        style={{
                          borderColor: skill.color,
                          borderWidth: isSelected ? '3px' : '2px',
                          boxShadow: isSelected ? `0 0 30px ${skill.color}50` : 'none'
                        }}
                      >
                        <div 
                          className="w-16 h-16 rounded-full flex items-center justify-center mb-3"
                          style={{ 
                            backgroundColor: isSelected ? skill.color + '30' : 'transparent'
                          }}
                        >
                          <Icon 
                            size={32} 
                            style={{ color: skill.color }}
                          />
                        </div>
                        <h3 className="text-white font-bold text-sm text-center px-2">{skill.name}</h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          
          {/* Selected skill details */}
          <div className="w-full max-w-md bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-green-500/30">
            <div className="flex items-center gap-4 mb-4">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ backgroundColor: selectedSkill.color + '30' }}
              >
                <SelectedIcon size={28} style={{ color: selectedSkill.color }} />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-2xl">{selectedSkill.name}</h3>
                <p className="text-gray-400 text-sm">{selectedSkill.experience}</p>
              </div>
            </div>
            
            <p className="text-gray-300 text-sm mb-4">{selectedSkill.description}</p>
            
            {/* Proficiency bar */}
            <div className="w-full">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400 text-xs">Proficiency</span>
                <span className="text-xs font-bold" style={{ color: selectedSkill.color }}>
                  {selectedSkill.proficiency}%
                </span>
              </div>
              <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full transition-all duration-500"
                  style={{ 
                    width: `${selectedSkill.proficiency}%`,
                    backgroundColor: selectedSkill.color
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsOmnitrix;