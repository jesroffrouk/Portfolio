import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router';
import './projects.css';

const CARD_WIDTH = 300;
const CARD_GAP   = 32;
const STEP       = CARD_WIDTH + CARD_GAP;

const projects = [
  {
    title: "CreatorShelf",
    period: "May 2026 - June 2026",
    description: "A platform to creators to centralized their portfolio",
    technologies: ["Next.js", "Supabase", "PostgreSQL", "TailwindCSS"],
    links: { fullpage: "creatorshelf" },
    image: "/project4/img1.png",
  },
  {
    title: "Pinpic",
    period: "Jan 2025 - Aug 2025",
    description: "A platform to bind images to locations. People have to visit the places to see those images.",
    technologies: ["React.js", "Express", "PostgreSQL", "Prisma", "TailwindCSS", "Shadcn UI"],
    links: { fullpage: "pinpic" },
    image: "/project2.png",
  },
  {
    title: "Password Manager",
    period: "Nov 2025 - Dec 2025",
    description: "A platform to encrypt passwords locally and manage them securely.",
    technologies: ["React.js", "Express", "PostgreSQL", "Prisma", "TailwindCSS", "Shadcn UI"],
    links: { fullpage: "passwordmanager" },
    image: "/project3/img1.png",
  },
  {
    title: "Movie Review Platform",
    period: "Oct 2024 - Feb 2025",
    description: "A movie review platform for movie lovers to share their opinion on movies with others.",
    technologies: ["Next.js", "Typescript", "TailwindCSS", "MongoDB", "Redux", "RTKQuery", "DaisyUI"],
    links: { fullpage: "moviezone" },
    image: "project1.png",
  },
];

/* ─── Card ─── */
const ProjectCard = ({ project, isActive }) => (
  <Link
    to={project.links.fullpage ? `/projects/${project.links.fullpage}` : '#'}
    className={`project-card ${isActive ? 'active' : 'inactive'}`}
    tabIndex={isActive ? 0 : -1}
    onClick={e => !isActive && e.preventDefault()}
  >
    <div className="rounded-lg overflow-hidden mb-3">
      <img src={project.image} alt={project.title} className="w-full h-36 object-cover" />
    </div>
    <h2 className="text-sm sm:text-base font-bold mb-1 text-white">{project.title}</h2>
    <p className="text-xs text-gray-400 mb-2">{project.period}</p>
    <p className="text-xs sm:text-sm text-gray-200 leading-relaxed mb-3 min-h-12">
      {project.description}
    </p>
    <div className="flex flex-wrap gap-1">
      {project.technologies.map((tech, i) => (
        <span key={i} className="tech-tag">{tech}</span>
      ))}
    </div>
  </Link>
);

/* ─── Carousel ─── */
const PortfolioCards = () => {
  const [active, setActive] = useState(0);
  const outerRef            = useRef(null);
  const [offset, setOffset] = useState(0);
  const cooldown            = useRef(false);

  /* Recalculate offset whenever active or container size changes */
  useEffect(() => {
    const calc = () => {
      if (!outerRef.current) return;
      const w = outerRef.current.offsetWidth;
      setOffset(w / 2 - CARD_WIDTH / 2 - active * STEP);
    };
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, [active]);

  const go = (dir) => {
    if (cooldown.current) return;
    cooldown.current = true;
    setActive(a => Math.min(Math.max(a + dir, 0), projects.length - 1));
    setTimeout(() => { cooldown.current = false; }, 550);
  };

  /* Arrow keys */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft')  go(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  /* Touch swipe */
  const touchStart = useRef(null);
  const onTouchStart = (e) => { touchStart.current = e.touches[0].clientX; };
  const onTouchEnd   = (e) => {
    if (touchStart.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStart.current;
    if (diff < -40) go(1);
    if (diff > 40)  go(-1);
    touchStart.current = null;
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-full py-6 select-none">

      {/* Carousel outer — clips overflow, catches wheel */}
      <div
        ref={outerRef}
        className="carousel-outer"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >

        {/* Sliding track */}
        <div
          className="carousel-track"
          style={{ transform: `translateX(${offset}px)` }}
        >
          {projects.map((project, i) => (
            <div
              key={i}
              className={`carousel-slot ${i === active ? 'active' : i === active - 1 || i === active + 1 ? 'adjacent' : 'far'}`}
              onClick={() => i !== active && go(i > active ? 1 : -1)}
            >
              <ProjectCard project={project} isActive={i === active} />
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex items-center gap-2 mt-6">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Project ${i + 1}`}
            className="carousel-dot-btn"
            style={{
              width:      i === active ? '20px' : '6px',
              background: i === active ? '#fff' : 'rgba(255,255,255,0.3)',
            }}
          />
        ))}
      </div>

    </div>
  );
};

export default PortfolioCards;
