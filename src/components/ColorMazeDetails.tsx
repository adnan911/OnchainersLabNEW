import { Link } from "react-router-dom";
import { Gamepad2, Layers, Palette, WifiOff, Zap, Shield, Mail } from "lucide-react";

const gameFeatures = [
  { icon: Gamepad2, title: "Intuitive Controls", desc: "Simple swipe or arrow key movements designed for precise navigation through complex labyrinths." },
  { icon: Zap, title: "Dynamic Logic Puzzles", desc: "Experience levels that challenge your spatial awareness and color-matching logic as you progress." },
  { icon: Palette, title: "Vibrant Visual Themes", desc: "Immerse yourself in clean, high-fidelity 3D environments with stunning neon effects and smooth animations." },
  { icon: WifiOff, title: "Play Anywhere", desc: "Full offline support ensures you can continue your maze-solving journey without an internet connection." },
  { icon: Shield, title: "On-Chain Rewards", desc: "Earn and mint unique on-chain assets like the 'Maze Matter' NFT to unlock exclusive skins and features." },
  { icon: Layers, title: "Endless Challenges", desc: "Hundreds of handcrafted levels ranging from relaxing paths to brain-bending mega-mazes." },
];

const legalLinks = [
  { label: "Privacy Policy", path: "/privacy-policy" },
  { label: "License Agreement", path: "/license" },
  { label: "Copyright Notice", path: "/copyright" },
];

const ColorMazeDetails = () => (
  <div className="px-6 py-8 md:px-8 md:py-10 space-y-10">
    {/* Hero banner */}
    <div className="rounded-lg overflow-hidden bg-ghost/20 flex items-center justify-center border border-ghost">
      <img src="/colormaze.jpg" alt="Color Maze Cover" className="w-full h-auto object-cover max-h-[300px] md:max-h-[400px]" />
    </div>

    {/* Tagline */}
    <div className="text-center space-y-2">
      <h3 className="font-display font-black text-xl md:text-2xl text-foreground">
        Paint the Proof. Spell the Future.
      </h3>
      <p className="text-xs font-mono tracking-[0.15em] text-cm-yellow uppercase italic">Proof of Knowledge</p>
    </div>

    {/* About */}
    <div className="space-y-4">
      <h3 className="font-display font-bold text-lg text-foreground">The Experience</h3>
      <p className="text-sm text-dim leading-[1.85] max-w-[640px]">
        Color Maze is a high-octane, neon-drenched puzzle experience where every slide counts. More than just a trail-painting challenge, it’s a journey through the blockchain universe.
      </p>
      <p className="text-sm text-dim leading-[1.85] max-w-[640px]">
        As you navigate intricate grids across 10 vibrant worlds, your color trails reveal the names of the most influential crypto projects, turning your spatial logic into a proof-of-knowledge. From the neon glow of the Cyber Grid to the molten depths of the Lava Core, your journey will unlock exclusive Solana NFTs and test your logic to the limit.
      </p>
    </div>

    {/* Gameplay */}
    <div className="space-y-6">
      <h3 className="font-display font-bold text-lg text-foreground">Learn to Play in 3 Steps</h3>
      <div className="grid grid-cols-1 gap-4">
        {[
          { 
            title: "Swipe to Slide", 
            desc: "Use intuitive swipe controls (keyboard arrows or touch) to move your marker across the grid. Your marker slides in a straight line until it hits a wall, leaving a vibrant, customizable trail of color. Every movement is a brushstroke on the digital canvas." 
          },
          { 
            title: "Paint the Path", 
            desc: "Your objective is to paint every reachable tile in the maze. Strategize your moves to find the most efficient path through increasingly complex grids. As you fill the space, the \"hidden spell\"—the name of a crypto landmark—emerges from the architecture of the puzzle." 
          },
          { 
            title: "Mint Your Legacy", 
            desc: "Complete worlds to unlock unique skins and mint rare on-chain Solana NFT Awards. These \"Master Keys\" are permanent badges of your gaming mastery, stored forever on the blockchain and unlocking exclusive future content." 
          },
        ].map((step, i) => (
          <div key={i} className="flex flex-col md:flex-row items-start gap-4 p-5 rounded-lg border border-ghost bg-ghost/50 group hover:border-cm-yellow/30 hover:bg-gradient-to-br hover:from-cm-yellow/[0.05] hover:to-transparent transition-all duration-300">
            <div className="flex items-center gap-3 shrink-0">
              <span className="font-mono text-xs text-cm-yellow font-bold px-2 py-1 rounded bg-cm-yellow/10 border border-cm-yellow/20 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.2)] transition-shadow">{String(i + 1).padStart(2, '0')}</span>
              <span className="font-display font-bold text-sm text-foreground md:hidden">{step.title}</span>
            </div>
            <div className="space-y-1.5 flex-1">
              <span className="hidden md:block font-display font-bold text-sm text-foreground">{step.title}</span>
              <p className="text-sm text-dim leading-relaxed group-hover:text-foreground/80 transition-colors">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Features grid */}
    <div className="space-y-4">
      <h3 className="font-display font-bold text-lg text-foreground">Core Features</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { icon: Gamepad2, title: "Swift & Fluid", desc: "High-octane swipe mechanics designed for lightning-fast spatial puzzles." },
          { icon: Zap, title: "Proof of Knowledge", desc: "Every level reveals a crypto landmark, testing your logic and blockchain lore." },
          { icon: Palette, title: "Neon Aesthetics", desc: "Immerse yourself in 10 vibrant worlds, from Cyber Grids to Molten Cores." },
          { icon: Shield, title: "On-Chain Legacy", desc: "Mint permanent 'Master Key' NFTs on Solana as badges of your mastery." },
          { icon: Layers, title: "Infinite Growth", desc: "Progressive difficulty across hundreds of handcrafted, logic-bending grids." },
          { icon: WifiOff, title: "Total Immersion", desc: "Zero interruptions. Play offline anywhere, anytime across the digital universe." },
        ].map((f, i) => (
          <div key={i} className="p-5 rounded-lg border border-ghost bg-ghost/30 space-y-2.5 hover:border-cm-yellow/30 hover:bg-cm-yellow/[0.02] transition-all group">
            <f.icon size={18} className="text-cm-yellow group-hover:scale-110 transition-transform" />
            <div className="font-body text-sm font-bold text-foreground">{f.title}</div>
            <p className="text-xs text-dim leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Legal & Support */}
    <div className="border-t border-ghost pt-8 space-y-4">
      <h3 className="font-display font-bold text-lg text-foreground">Legal & Support</h3>
      <div className="flex flex-wrap gap-3">
        {legalLinks.map(link => (
          <Link key={link.path} to={link.path}
            className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.12em] uppercase px-5 py-2.5 rounded border border-ghost text-dim hover:text-foreground hover:border-foreground/20 transition-colors no-underline">
            {link.label}
          </Link>
        ))}
        <a href="mailto:onchainersLab@gmail.com"
          className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.12em] uppercase px-5 py-2.5 rounded border border-ghost text-dim hover:text-foreground hover:border-foreground/20 transition-colors no-underline">
          <Mail size={12} />
          Contact Support
        </a>
      </div>
    </div>
  </div>
);

export default ColorMazeDetails;
