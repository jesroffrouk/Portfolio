import { createContext, useContext, useState, useRef } from "react";

const WorkspaceContext = createContext(null);

export function WorkspaceProvider({ children }) {
  const [active, setActive]       = useState(1);   // current workspace (1 or 2)
  const [direction, setDirection] = useState(1);   // 1 = going right, -1 = going left
  const prevRef = useRef(1);

  function switchTo(ws) {
    if (ws === active) return;
    setDirection(ws > prevRef.current ? 1 : -1);
    prevRef.current = ws;
    setActive(ws);
  }

  return (
    <WorkspaceContext.Provider value={{ active, direction, switchTo }}>
      {children}
    </WorkspaceContext.Provider>
  );
}

export function useWorkspace() {
  const ctx = useContext(WorkspaceContext);
  if (!ctx) throw new Error("useWorkspace must be used inside <WorkspaceProvider>");
  return ctx;
}
