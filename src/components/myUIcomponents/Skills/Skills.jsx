import {
 Braces, Code,
  Terminal, Cpu, Database, Monitor,Container
} from 'lucide-react';
import './Skills.css';

const icons = [
  { id: 3,  name: 'JavaScript',   Icon: Braces,     color: '#f7df1e' },
  { id: 4,  name: 'TypeScript',   Icon: Code,       color: '#3178c6' },
  { id: 7,  name: 'Python',       Icon: Terminal,   color: '#3776ab' },
  { id: 9,  name: 'Node.js',      Icon: Cpu,        color: '#339933' },
  { id: 10, name: 'MongoDB',      Icon: Database,   color: '#47a248' },
  { id: 11, name: 'PostgreSQL',   Icon: Database,   color: '#4169e1' },
  { id: 13, name: 'Docker',       Icon: Container,  color: '#2496ed' },
  { id: 14, name: 'Linux',        Icon: Monitor,    color: '#fcc624' },
];

export default function Skills() {
  return (
    <div className="skills-root">
      {/* Grid */}
      <div className="skills-grid">
        {icons.map(({ id, name, Icon, color }) => (
          <div key={id} className="skill-card" style={{ '--accent': color }}>
            {/* glow blob behind icon */}
            <div className="skill-glow" />
 
            <div className="skill-icon-wrap">
              <Icon
                size={20}
                strokeWidth={1.5}
                color={color}
                className="skill-icon"
              />
            </div>
 
            <span className="skill-name">{name}</span>
          </div>
        ))}
      </div>
 
    </div>
  );
}
