import { useRef, useEffect, useState } from "react";
import { useWorkspace } from "./WorkspaceContext";
import "./WorkspaceViewport.css";

/**
 * WorkspaceViewport
 *
 * Props:
 *   workspaces — object mapping workspace number → React node
 *                e.g. { 1: <Hero />, 2: <Projects /> }
 *
 * Usage:
 *   <WorkspaceViewport workspaces={{ 1: <Hero />, 2: <Projects /> }} />
 */
export default function WorkspaceViewport({ workspaces }) {
  const { active, direction } = useWorkspace();

  // Track which key is "current" and which is "exiting"
  const [current, setCurrent]   = useState(active);
  const [exiting, setExiting]   = useState(null);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (active === current) return;

    // Cancel any in-flight animation
    clearTimeout(timerRef.current);

    setExiting(current);
    setAnimating(true);
    setCurrent(active);

    // After CSS transition ends, clear the ghost
    timerRef.current = setTimeout(() => {
      setExiting(null);
      setAnimating(false);
    }, 420); // matches CSS transition duration

    return () => clearTimeout(timerRef.current);
  }, [active]); // eslint-disable-line

  // CSS class names driven by direction
  const enterClass = direction === 1 ? "ws-enter-right" : "ws-enter-left";
  const exitClass  = direction === 1 ? "ws-exit-left"  : "ws-exit-right";

  return (
    <div className="ws-viewport w-full h-full relative overflow-hidden rounded-xl">

      {/* Exiting slide (ghost) */}
      {exiting !== null && (
        <div key={`exit-${exiting}`} className={`ws-slide ${exitClass}`}>
          {workspaces[exiting]}
        </div>
      )}

      {/* Entering slide (active) */}
      <div
        key={`enter-${current}`}
        className={`ws-slide ${animating ? enterClass : ""}`}
      >
        {workspaces[current]}
      </div>

    </div>
  );
}
