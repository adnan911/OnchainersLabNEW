import { useEffect, useState } from "react";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AppCard from "@/components/AppCard";
import StatsStrip from "@/components/StatsStrip";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import cryptospellCover from "@/assets/cryptospell-feature.png";
import pixelmintCover from "@/assets/pixelmint-cover.jpg";

const Index = () => {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-up").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="bg-background min-h-screen">
      <CustomCursor />
      <Navbar />
      <HeroSection />

      {/* Portfolio Section */}
      <section className="px-6 md:px-10 pb-20 md:pb-[120px] max-w-[1300px] mx-auto" id="portfolio">
        <div className="font-mono text-[10px] tracking-[0.28em] text-neon uppercase text-center mb-16 flex items-center justify-center gap-4">
          <span className="flex-1 max-w-[80px] h-px" style={{ background: "linear-gradient(to right, transparent, hsl(var(--neon) / 0.3))" }} />
          Our Portfolio
          <span className="flex-1 max-w-[80px] h-px" style={{ background: "linear-gradient(to left, transparent, hsl(var(--neon) / 0.3))" }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="fade-up">
            <AppCard
              variant="cm"
              image="/colormaze.jpg"
              tag="Puzzle Game"
              name="Color Maze"
              desc="A high-octane, neon-drenched puzzle experience where every slide counts. Navigate 10 vibrant worlds to reveal hidden crypto landmarks and mint exclusive Solana NFTs."
              features={["10 Neon Worlds", "Proof of Knowledge", "Solana NFTs", "Intuitive Swipes"]}
              path="/color-maze"
            />
          </div>
          <div className="fade-up">
            <AppCard
              variant="cs"
              image={cryptospellCover}
              tag="Puzzle Game"
              name="CryptoSpell"
              desc="A puzzle game where you identify and spell the names of real crypto projects using visual clues and letter tiles. Explore the Web3 ecosystem one puzzle at a time."
              features={["Logo Puzzles", "Offline Play", "Progressive Levels", "Web3 Optional"]}
              path="/cryptospell"
            />
          </div>
          <div className="fade-up">
            <AppCard
              variant="pm"
              image={pixelmintCover}
              tag="NFT Tool"
              name="PixelMint"
              desc="A professional pixel art editor with on-chain minting built in. Design your collection, set traits, and deploy an ERC-721 — all in one place."
              features={["Layers", "Blend Modes", "Batch Mint", "ERC-721"]}
            />
          </div>
        </div>
      </section>

      <StatsStrip />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
