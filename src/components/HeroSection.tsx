import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { EtheralShadow } from "./ui/etheral-shadow";

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="min-h-[85vh] flex flex-col justify-center items-center text-center px-6 py-[100px] md:px-10 relative overflow-hidden">
      {/* Dynamic Background Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-100">
        <EtheralShadow 
          color="rgba(239, 68, 68, 0.18)" 
          animation={{ scale: 40, speed: 25 }} 
          noise={{ opacity: 0.15, scale: 1.5 }}
        />
      </div>

      {/* Content with parallax (Z-indexed above BG) */}
      <motion.div className="relative z-10 flex flex-col items-center" style={{ y: contentY, opacity: contentOpacity }}>
        {/* Badge */}
        <div className="font-mono text-[10px] tracking-[0.25em] text-neon uppercase mb-8 flex items-center gap-3">
          <span className="w-8 h-px bg-neon/40" />
          Web3 Product Studio
          <span className="w-8 h-px bg-neon/40" />
        </div>

        {/* Heading */}
        <h1 className="font-display font-black leading-[0.92] tracking-[-0.025em] mb-6"
          style={{ fontSize: "clamp(48px, 7vw, 100px)" }}>
          <span className="block text-foreground">Onchainers</span>
          <span className="block text-transparent" style={{ WebkitTextStroke: "1.5px hsl(var(--crimson))" }}>Lab.</span>
        </h1>

        {/* Sub */}
        <p className="text-base text-dim max-w-[520px] leading-[1.85] mb-10">
          We design and ship on-chain products — games, tools, and experiences built for the decentralized future.
        </p>

        {/* CTA */}
        <a href="#portfolio" className="font-mono text-[11px] tracking-[0.18em] uppercase text-background bg-neon px-8 py-3.5 rounded-sm font-medium hover:opacity-90 transition-opacity no-underline">
          View Our Work
        </a>
      </motion.div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 flex flex-col items-center gap-2 font-mono text-[9px] tracking-[0.2em] text-dim uppercase"
        style={{ animation: "scroll-hint 2s ease-in-out infinite" }}>
        <span className="w-px h-8 block" style={{ background: "linear-gradient(to bottom, transparent, hsl(var(--crimson)))" }} />
        Scroll
      </div>
    </section>
  );
};

export default HeroSection;
