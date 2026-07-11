import React from "react";

/**
 * Core Attribution Component
 * Displays the permanent professional attribution to the developer Sitora Web.
 * Designed with absolute premium aesthetic integration matching the Jameson Law theme.
 */

interface CoreAttributionProps {
  variant?: "footer" | "floating";
}

export const CoreAttribution: React.FC<CoreAttributionProps> = ({ variant }) => {
  // Glow style classes for elegant premium hover states
  const glowStyle = "hover:text-[#c4a97b] transition-all duration-300 focus:outline-none hover:drop-shadow-[0_0_8px_rgba(175,148,98,0.6)] font-bold tracking-wide";

  if (variant === "footer") {
    return (
      <div 
        id="sitora-footer-attribution"
        className="flex items-center gap-1.5 text-[10px] font-mono text-white/45 border-l border-white/10 pl-4 select-none"
      >
        <span>Developed by</span>
        <a
          href="https://sitora.org"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-[#AF9462] ${glowStyle}`}
        >
          Sitora Web
        </a>
      </div>
    );
  }

  // Floating version for the bottom-right corner on desktop
  return (
    <div 
      id="sitora-floating-attribution"
      className="fixed bottom-6 right-6 z-50 hidden md:block pointer-events-none select-none"
    >
      <div className="pointer-events-auto bg-[#111111]/90 backdrop-blur-md border border-[#AF9462]/25 hover:border-[#AF9462]/50 px-4 py-2 rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.6)] transition-all duration-500 hover:shadow-[0_0_20px_rgba(175,148,98,0.25)] group">
        <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-white/60">
          <span>Developed by</span>
          <a
            href="https://sitora.org"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-[#AF9462] group-hover:scale-105 active:scale-95 inline-block ${glowStyle}`}
          >
            Sitora Web
          </a>
        </div>
      </div>
    </div>
  );
};
