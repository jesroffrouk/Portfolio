import { useEffect, useRef, useState } from "react";

const FIRST_LINE = "I've always been obsessed with what happens under the hood. The stuff people don't see. " +
  "With the growth of AI, it has become a lot easier.\n\n" 
    
const TYPED_TEXT =
  "Early 2025, after the degree, I stopped just looking at technology and started writing it. " +
  "Web development was the entry point. No corporate office, no manager looking over my shoulder. " +
  "Just me, a terminal, and a habit of breaking systems just to figure out how to piece them back together.\n\n" +
  "Right now, I'm learning Rust. Going deep into memory management.\n\n" +
  "When I'm not looking at a screen, I need distractions to keep my mind from looping. " +
  "Games, books, movies. Sometimes I go outside for hiking, swimming. Anything to clear the noise.";

const SPEED_MS = 30; // ms per character — slow and readable

function About() {
  const [typed, setTyped] = useState("");
  const indexRef          = useRef(0);
  const timerRef          = useRef(null);

  useEffect(() => {
    indexRef.current = 0;
    setTyped("");

    const startDelay = setTimeout(() => {
      timerRef.current = setInterval(() => {
        indexRef.current += 1;
        setTyped(TYPED_TEXT.slice(0, indexRef.current));
        if (indexRef.current >= FULL_TEXT.length) {
          clearInterval(timerRef.current);
        }
      }, SPEED_MS);
    }, 300);

    return () => {
      clearTimeout(startDelay);
      clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div className="mt-4 sm:mt-14">
      {/* Header */}
      <div className="py-5 text-center">
        <h2 className="headings mb-2">About</h2>
        <p className="text-neutral-500 text-sm md:text-base">More about myself</p>
      </div>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-gray-200 leading-relaxed text-xs sm:text-base text-center whitespace-pre-line">
          <span>{FIRST_LINE}</span>
          <span>{typed}</span>
          {/* Blinking cursor — always visible, always blinking */}
          <span
            className="inline-block align-text-bottom ml-px"
            style={{
              width: "8px",
              height: "1.1em",
              background: "#ffffff",
              animation: "about-blink 1s step-end infinite",
              borderRadius: "1px",
            }}
          />
        </p>
      </div>

      <style>{`
        @keyframes about-blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
      `}</style>
    </div>
  );
}

export default About;
