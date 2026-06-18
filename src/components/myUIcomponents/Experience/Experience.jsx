import { useState } from 'react';

const experiences = [
  {
    tab: 'Freelancing',
    role: 'Fullstack developer',
    company: 'Self-employed',
    period: 'June 2025 — Present',
    desc: 'Building and shipping web applications independently. Working directly with clients to scope, design, and deliver full-stack products from scratch.',
    bullets: [
      'Designed and developed a movie review platform with user auth, reviews, and media management',
      'Built Pinpic — a location-bound image sharing app using maps and real-time data',
      'Developed a local-first password manager with client-side AES encryption',
      'Managed deployments, CI pipelines, and database migrations end to end',
    ],
    tech: ['React', 'Next.js', 'TypeScript', 'PostgreSQL', 'MongoDB'],
  },
  {
    tab: 'Open Source',
    role: 'Contributor',
    company: 'Validator.js',
    period: 'Mid 2025 — Feb 2026',
    desc: 'Contributing to open source tooling and libraries in the JavaScript and TypeScript ecosystem. Bug fixes, feature additions, and documentation improvements.',
    bullets: [
      'Successfully merged a bug fix with the issue of outdated validation',
      'Wrote documentation for that specific change',
      'Also contributed again in new Issue, getting merged soon',
    ],
    tech: ['TypeScript', 'Git', 'GitHub Actions', 'Node.js'],
  },
  {
    tab: 'Personal Projects',
    role: 'Builder',
    company: 'Side work',
    period: '2025 — late 2025',
    desc: 'Building tools and experiments outside of client work. Focused on systems-level programming and exploring new technologies.',
    bullets: [
      'Designed and developed a movie review platform with user auth, reviews, and media management',
      'Built Pinpic — a location-bound image sharing app using maps and real-time data',
      'Developed a local-first password manager with client-side AES encryption',
      'Managed deployments, CI pipelines, and database migrations end to end',
    ],
    tech: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'MongoDB', 'Prisma'],
  },
];

export default function Experience() {
  const [active, setActive]     = useState(0);
  const [panelKey, setPanelKey] = useState(0);

  function select(i) {
    if (i === active) return;
    setActive(i);
    setPanelKey(k => k + 1);
  }

  const exp = experiences[active];

  return (
    <div className="w-full h-full flex flex-col items-center p-4 pt-4 sm:px-6 sm:py-8 overflow-hidden">

      {/* Heading */}
      <div className="text-center mt-4 mb-6 sm:mb-8">
        <h2 className="headings mb-1">Experience</h2>
        <p className="text-neutral-500 text-sm">Where I've worked and what I built</p>
      </div>

      {/* Tabs — scrolls horizontally on mobile, never wraps */}
      <div className="flex flex-nowrap overflow-x-auto gap-2 mb-4 w-full max-w-170 pb-0.5 [scrollbar-none] [&::-webkit-scrollbar]:hidden">
        {experiences.map((e, i) => (
          <button
            key={i}
            onClick={() => select(i)}
            className={`
              shrink-0 whitespace-nowrap px-3.5 py-1.5 rounded-lg
              text-xs font-medium tracking-wide cursor-pointer font-[inherit]
              border transition-all duration-180
              ${i === active
                ? 'bg-white/10 border-white/30 text-white'
                : 'bg-white/3 border-white/10 text-white/40 hover:bg-white/[0.07] hover:border-white/20 hover:text-white/75'
              }
            `}
          >
            {e.tab}
          </button>
        ))}
      </div>

      {/* Panel */}
      <div
        key={panelKey}
        className="
          w-full max-w-170
          h-80 sm:h-95
          overflow-y-auto [scrollbar-none] [&::-webkit-scrollbar]:hidden
          bg-white/3 border border-white/9 rounded-[14px]
          p-4 sm:p-7
          [backdrop-filter:blur(16px)_saturate(1.3)]
          [-webkit-backdrop-filter:blur(16px)_saturate(1.3)]
          [box-shadow:inset_0_1px_0_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.4)]
          animate-[exp-fade-in_0.25s_cubic_bezier(0.25,0.46,0.45,0.94)_both]
        "
      >
        {/* Top row */}
        <div className="flex items-start justify-between gap-2 flex-wrap mb-3.5">
          <div>
            <h3 className="text-[15px] sm:text-[17px] font-semibold text-white mb-0.5">
              {exp.role}
            </h3>
            <p className="text-xs text-white/40 tracking-wide">{exp.company}</p>
          </div>
          <span className="text-[10px] text-white/40 border border-white/10 rounded-md px-2.5 py-0.5 font-mono whitespace-nowrap shrink-0">
            {exp.period}
          </span>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/[0.07] mb-3.5" />

        {/* Description */}
        <p className="text-[12px] text-white/50 leading-[1.75] mb-3.5">
          {exp.desc}
        </p>

        {/* Bullets — hidden mobile, visible sm+ */}
        <ul className="hidden sm:flex flex-col gap-2 mb-4 list-none p-0">
          {exp.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-[12px] text-white/65 leading-[1.6]">
              <span className="text-white/25 shrink-0 text-[11px] mt-0.75 font-mono">→</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-1.5">
          {exp.tech.map((t, i) => (
            <span
              key={i}
              className="px-2 py-0.5 rounded-md text-[10px] border border-white/10 text-white/40 bg-white/3 font-mono tracking-wide"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Keyframe only — the one thing Tailwind can't do */}
      <style>{`
        @keyframes exp-fade-in {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

    </div>
  );
}
