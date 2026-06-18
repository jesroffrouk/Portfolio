import { useState } from "react";
import "./TerminalWindow.css";

/* ─────────────────────────────────────────────
   TerminalWindow
   Props:
     title    — string shown in titlebar (default "bash")
     children — any component rendered inside
   ───────────────────────────────────────────── */
export function TerminalWindow({ title = "bash", children }) {
  const [focused, setFocused] = useState(true);

  return (
    <div
      className={`terminal-window ${focused ? "focused" : ""} flex flex-col w-full h-full rounded-xl overflow-hidden`}
      onClick={() => setFocused(true)}
      tabIndex={0}
    >
      {/* ── Title bar ── */}
      <div className="terminal-titlebar relative flex items-center justify-center px-4 py-2.5 select-none shrink-0">
        <span className="text-[12px] font-normal text-white/40 tracking-wide pointer-events-none">
          {title}
        </span>
      </div>

      {/* ── Content area — fills remaining height, scrolls internally ── */}
      <div className="terminal-body flex-1 overflow-y-auto p-5 font-mono text-[13px] leading-relaxed min-h-0">
        {children}
      </div>
    </div>
  );
}


