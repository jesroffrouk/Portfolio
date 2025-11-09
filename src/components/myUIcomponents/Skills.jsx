import React, { useState, useRef , useEffect } from 'react';
import { Code, Palette, Database, Server, Smartphone, Globe, Cpu, GitBranch , Container , Layers , Atom , Cylinder , Terminal , Box , Workflow } from 'lucide-react';
import Allskills from './AllSkills';

const SkillsOmnitrix = () => {
  const skills = [
    {
      name: 'JavaScript',
      icon: Cpu,
      color: '#F7DF1E',
      description: 'Modern ES6+ and async programming',
      proficiency: 80,
    },
    {
      name: 'React',
      icon: Globe,
      color: '#61DAFB',
      description: 'Component-based architecture',
      proficiency: 80,
    },  
    {
      name: 'Node.js',
      icon: Server,
      color: '#339933',
      description: 'Backend development and APIs',
      proficiency: 80,
    },
    {
      name: 'Git',
      icon: GitBranch,
      color: '#F05032',
      description: 'Version control and collaboration',
      proficiency: 90,
    },
      {
    name: 'Next.js',
    icon: Layers,
    color: '#FBFBFB',
    description: 'Full-stack React framework with SSR',
    proficiency: 80,
  },
  {
    name: 'Express',
    icon: Server,
    color: '#F4F754',
    description: 'Fast Node.js web framework',
    proficiency: 85,
  },
  {
    name: 'MongoDB',
    icon: Database,
    color: '#47A248',
    description: 'NoSQL database for scalable apps',
    proficiency: 85,
  },
  {
    name: 'PostgreSQL',
    icon: Cylinder,
    color: '#4169E1',
    description: 'Relational database management',
    proficiency: 65,
  },
  {
    name: 'Bash',
    icon: Terminal,
    color: '#4EAA25',
    description: 'Shell scripting and automation',
    proficiency: 65,
  },
  {
    name: 'Prisma',
    icon: Box,
    color: '#4E61D3',
    description: 'Next-gen TypeScript ORM',
    proficiency: 70,
  },
  {
    name: 'Redux',
    icon: Workflow,
    color: '#764ABC',
    description: 'State management for React apps',
    proficiency: 70,
  },
  ];


  const [selectedIndex, setSelectedIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startOffset, setStartOffset] = useState(0);
  const containerRef = useRef(null);

  const selectedSkill = skills[selectedIndex];
  const SelectedIcon = selectedSkill.icon;
  const itemWidth = 140;

  // Detect if touch device
  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouch();
    window.addEventListener('resize', checkTouch);
    return () => window.removeEventListener('resize', checkTouch);
  }, []);

  // Hover scrolling for desktop
  const handleMouseMove = (e) => {
    if (isTouchDevice || isDragging) return;
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const containerWidth = rect.width;
    
    const ratio = mouseX / containerWidth;
    const maxOffset = 0;
    const minOffset = -(skills.length - 1) * itemWidth;
    const newOffset = maxOffset + (minOffset - maxOffset) * ratio;
    
    setOffset(newOffset);
    
    const centerOffset = -newOffset / itemWidth;
    const newIndex = Math.round(centerOffset);
    const clampedIndex = Math.max(0, Math.min(skills.length - 1, newIndex));
    setSelectedIndex(clampedIndex);
  };

  const handleMouseEnter = () => {
    if (!isTouchDevice) {
      setIsHovering(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isTouchDevice) {
      setIsHovering(false);
      const centerOffset = -offset / itemWidth;
      const snappedIndex = Math.round(centerOffset);
      const clampedIndex = Math.max(0, Math.min(skills.length - 1, snappedIndex));
      setOffset(-clampedIndex * itemWidth);
      setSelectedIndex(clampedIndex);
    }
  };

  // Touch/drag scrolling for mobile
  const handleStart = (e) => {
    if (!isTouchDevice) return;
    setIsDragging(true);
    const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
    setStartOffset(offset);
  };

  const handleMove = (e) => {
    if (!isDragging || !isTouchDevice) return;
    
    const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    const diff = clientX - startX;
    let newOffset = startOffset + diff;
    
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
    if (!isTouchDevice) return;
    setIsDragging(false);
    const centerOffset = -offset / itemWidth;
    const snappedIndex = Math.round(centerOffset);
    const clampedIndex = Math.max(0, Math.min(skills.length - 1, snappedIndex));
    setOffset(-clampedIndex * itemWidth);
    setSelectedIndex(clampedIndex);
  };

  // Click to select skill
  const handleSkillClick = (index) => {
    setSelectedIndex(index);
    setOffset(-index * itemWidth);
  };

  useEffect(() => {
    if (isDragging && isTouchDevice) {
      window.addEventListener('mousemove', handleMove);
      window.addEventListener('mouseup', handleEnd);
      window.addEventListener('touchmove', handleMove);
      window.addEventListener('touchend', handleEnd);
      
      return () => {
        window.removeEventListener('mousemove', handleMove);
        window.removeEventListener('mouseup', handleEnd);
        window.removeEventListener('touchmove', handleMove);
        window.removeEventListener('touchend', handleEnd);
      };
    }
  }, [isDragging, startX, offset, isTouchDevice]);

  return (
    <div className="h-full sm:min-h-screen flex items-center justify-center px-8 mt-14 sm:mt-0">
      <div className="max-w-4xl w-full">
        <div className='py-5'>
          <h1 className="headings mb-4">
            Skills 
          </h1>
          <p className="text-gray-400 text-center flex flex-row justify-center items-center">
            {isTouchDevice ? 'Swipe or tap to explore • ' : 'Move your cursor to scroll • '}
            <Allskills />
          </p>
        </div>
        
        <div className="flex flex-col items-center justify-center mt-4 gap-8">
          {/* Linear carousel */}
          <div className="relative w-full max-w-3xl overflow-hidden">
            {/* Fade gradients on edges */}
            <div 
              className="absolute left-0 top-0 bottom-0 w-32  z-10 pointer-events-none transition-opacity duration-300"
              style={{ opacity: selectedIndex > 0 ? 1 : 0 }}
            ></div>
            <div 
              className="absolute right-0 top-0 bottom-0 w-32  z-10 pointer-events-none transition-opacity duration-300"
              style={{ opacity: selectedIndex < skills.length - 1 ? 1 : 0 }}
            ></div>
            
            {/* Scrollable container */}
            <div 
              ref={containerRef}
              className={`select-none py-8 ${isTouchDevice ? 'cursor-grab active:cursor-grabbing' : 'cursor-default'}`}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onMouseDown={handleStart}
              onTouchStart={handleStart}
            >
              <div 
                className="flex items-center justify-start transition-transform"
                style={{ 
                  transform: `translateX(calc(50% - ${itemWidth / 2}px + ${offset}px))`,
                  transitionDuration: (isHovering && !isTouchDevice) || isDragging ? '0ms' : '300ms'
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
                      className="flex-shrink-0 transition-all duration-300 px-2"
                      style={{
                        width: `${itemWidth}px`,
                        opacity,
                        filter: `blur(${blur}px)`,
                        transform: `scale(${scale})`,
                        pointerEvents: 'auto'
                      }}
                      onClick={() => handleSkillClick(index)}
                    >
                      <div 
                        className={`w-full aspect-square rounded-2xl flex flex-col items-center justify-center transition-all duration-300 cursor-pointer ${
                          isSelected 
                            ? 'bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl' 
                            : 'hover:bg-gray-950'
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
                        <h3 className="text-white font-bold text-xs sm:text-sm text-center px-2">{skill.name}</h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          
          {/* Selected skill details */}
          <div className="w-full max-w-md backdrop-blur-sm rounded-xl p-6 border-2 border-blue-200/40 hover:border-blue-400/40">
            <div className="flex items-center gap-4 mb-4">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ backgroundColor: selectedSkill.color + '30' }}
              >
                <SelectedIcon size={28} style={{ color: selectedSkill.color }} />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-sm sm:text-2xl">{selectedSkill.name}</h3>
              </div>
            </div>
            
            <p className="text-gray-300 text-xs sm:text-sm mb-4">{selectedSkill.description}</p>
            
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