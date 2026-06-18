import { useState, useEffect } from "react";
import "./Panel.css";
import { useWorkspace } from "@/components/Workspace/WorkspaceContext";

export default function LinuxPanel() {
  const { active: activeWorkspace, switchTo: setActiveWorkspace } = useWorkspace();
  const [dateTime, setDateTime] = useState("");
  const [battery, setBattery] = useState({ level: 76, charging: false });

  // Live clock — updates every 10s
  useEffect(() => {
    function updateClock() {
      const now = new Date();
      const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
      ];
      const d = days[now.getDay()];
      const day = now.getDate();
      const mon = months[now.getMonth()];
      let h = now.getHours();
      const m = now.getMinutes().toString().padStart(2, "0");
      const ampm = h >= 12 ? "PM" : "AM";
      h = h % 12 || 12;
      setDateTime(`${d} ${day} ${mon}, ${h}:${m} ${ampm}`);
    }
    updateClock();
    const id = setInterval(updateClock, 10000);
    return () => clearInterval(id);
  }, []);

  // Battery API
  useEffect(() => {
    if ("getBattery" in navigator) {
      navigator.getBattery().then((bat) => {
        const sync = () =>
          setBattery({
            level: Math.round(bat.level * 100),
            charging: bat.charging,
          });
        sync();
        bat.addEventListener("levelchange", sync);
        bat.addEventListener("chargingchange", sync);
      });
    }
  }, []);

  // Battery fill colour (inline — value is dynamic, can't be Tailwind)
  const batteryFillColor =
    battery.level > 50
      ? "rgba(100,220,140,0.85)"
      : battery.level > 20
      ? "rgba(255,180,60,0.85)"
      : "rgba(255,80,60,0.85)";

  return (
    <div className="w-full font-sans">
      {/* ── Panel bar ── */}
      <div className="panel-glass relative flex h-9 w-full items-center justify-between rounded-xl px-2.5">

        {/* Left — Workspaces */}
        <div className="flex items-center gap-1.5">
          {[1, 2].map((ws) => (
            <button
              key={ws}
              onClick={() => setActiveWorkspace(ws)}
              className={`ws-btn flex h-6 w-6 cursor-pointer items-center justify-center rounded-md text-[11px] font-medium tracking-wide ${
                activeWorkspace === ws ? "active" : ""
              }`}
            >
              {ws}
            </button>
          ))}
        </div>

        {/* Centre — Date & Time (absolutely centred) */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <span className="whitespace-nowrap text-[12px] font-normal tracking-wide text-white/80">
            {dateTime}
          </span>
        </div>

        {/* Right — Battery + Shutdown */}
        <div className="flex items-center gap-2">

          {/* Battery */}
          <div className="flex items-center gap-1.5">
            <div className="battery-shell relative flex h-2.75 w-5.5 items-center">
              {/* Nub cap */}
              <div className="battery-nub absolute top-1/2 -translate-y-1/2" />
              {/* Fill */}
              <div
                className="battery-fill h-full"
                style={{
                  width: `${battery.level}%`,
                  background: batteryFillColor,
                }}
              />
            </div>
            <span className="font-mono text-[11px] text-white/65">
              {battery.level}%{battery.charging ? " ⚡" : ""}
            </span>
          </div>

          {/* Divider */}
          <div className="h-3.5 w-px rounded-sm bg-white/10" />

          {/* Shutdown */}
          <button
            title="Power"
            className="shutdown-btn flex h-5.5 w-5.5 cursor-pointer items-center justify-center rounded-full p-0"
          >
            <svg
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2v6" />
              <path d="M6.3 6.3A8 8 0 1 0 17.7 6.3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
