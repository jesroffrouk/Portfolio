import { useRef, useState, useEffect, useCallback } from "react";
import "./SnapScroll.css";

/**
 * SnapScroll
 *
 * Wraps multiple full-height sections with smooth snap-scroll between them.
 * Each child fills the entire viewport height of the terminal.
 *
 * Props:
 *   children  — React nodes, each becomes one full-height snap section
 *   showDots  — boolean, show navigation dots on the right (default true)
 *
 * Usage:
 *   <SnapScroll>
 *     <Projects />
 *     <Skills />
 *     <Education />
 *   </SnapScroll>
 */
export default function SnapScroll({ children, showDots = false }) {
  const sections = Array.isArray(children) ? children : [children];
  const containerRef = useRef(null);
  const sectionRefs  = useRef([]);
  const [active, setActive]       = useState(0);
  const [animating, setAnimating] = useState(false);
  const lastScroll = useRef(Date.now());

  // Scroll to a specific index programmatically
  const scrollTo = useCallback((index) => {
    if (animating) return;
    const el = sectionRefs.current[index];
    if (!el) return;
    setAnimating(true);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(index);
    setTimeout(() => setAnimating(false), 650);
  }, [animating]);

  // Intercept wheel events and snap to next/prev section
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    function onWheel(e) {
      e.preventDefault();

      const now = Date.now();
      if (animating || now - lastScroll.current < 700) return;
      lastScroll.current = now;

      const dir = e.deltaY > 0 ? 1 : -1;
      const next = Math.min(Math.max(active + dir, 0), sections.length - 1);
      if (next !== active) scrollTo(next);
    }

    container.addEventListener("wheel", onWheel, { passive: false });
    return () => container.removeEventListener("wheel", onWheel);
  }, [active, animating, scrollTo, sections.length]);

  // Keyboard arrow support
  useEffect(() => {
    function onKey(e) {
      if (e.key === "ArrowDown") scrollTo(Math.min(active + 1, sections.length - 1));
      if (e.key === "ArrowUp")   scrollTo(Math.max(active - 1, 0));
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, scrollTo, sections.length]);

  // Update active dot on native scroll (e.g. touch)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sectionRefs.current.indexOf(entry.target);
            if (idx !== -1) setActive(idx);
          }
        });
      },
      { root: container, threshold: 0.6 }
    );

    sectionRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [sections.length]);

  return (
    <div ref={containerRef} className="snap-container">

      {sections.map((child, i) => (
        <div
          key={i}
          ref={(el) => (sectionRefs.current[i] = el)}
          className="snap-section"
        >
          {child}
        </div>
      ))}

      {/* Navigation dots */}
      {showDots && sections.length > 1 && (
        <div className="snap-dots">
          {sections.map((_, i) => (
            <button
              key={i}
              className={`snap-dot ${i === active ? "active" : ""}`}
              onClick={() => scrollTo(i)}
              aria-label={`Go to section ${i + 1}`}
            />
          ))}
        </div>
      )}

    </div>
  );
}
