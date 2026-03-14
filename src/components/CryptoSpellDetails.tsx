import { Link } from "react-router-dom";
import { Puzzle, Layers, Palette, WifiOff, Wallet, TrendingUp, Mail } from "lucide-react";
import featureGraphic from "@/assets/cryptospell-feature.png";

const gameFeatures = [
  { icon: Puzzle, title: "Logo-Based Puzzle Challenges", desc: "Solve word puzzles inspired by widely recognized blockchain projects. Identify logos, arrange letter tiles, and spell the correct project name." },
  { icon: TrendingUp, title: "Progressive Levels", desc: "Difficulty increases gradually as new puzzles and projects are introduced from across the Web3 ecosystem." },
  { icon: Palette, title: "Stylized Visual Themes", desc: "Immerse yourself in digital art styles — Glitch, Cyberpunk, and Pop-Art inspired designs bring each puzzle to life." },
  { icon: WifiOff, title: "Offline Gameplay", desc: "Play puzzles anytime, anywhere — no internet connection required. Perfect for on-the-go puzzle solving." },
  { icon: Wallet, title: "Optional Web3 Connectivity", desc: "Connect your wallet for optional blockchain features including NFT support on compatible devices." },
  { icon: Layers, title: "Brand Recognition & Learning", desc: "Explore the Web3 ecosystem naturally. Each puzzle teaches you about well-known blockchain brands and communities." },
];

const legalLinks = [
  { label: "Privacy Policy", path: "/privacy-policy" },
  { label: "License Agreement", path: "/license" },
  { label: "Copyright Notice", path: "/copyright" },
];

const CryptoSpellDetails = () => (
  <div className="px-6 py-8 md:px-8 md:py-10 space-y-10">
    {/* Hero banner */}
    <div className="rounded-lg overflow-hidden">
      <img src={featureGraphic} alt="CryptoSpell Feature Graphic" className="w-full max-h-[280px] object-cover" />
    </div>

    {/* Tagline */}
    <div className="text-center space-y-2">
      <h3 className="font-display font-black text-xl md:text-2xl text-foreground">
        Explore Crypto Projects in a Puzzle Adventure
      </h3>
      <p className="text-xs font-mono tracking-[0.15em] text-cs-purple uppercase">How many crypto projects can you spell?</p>
    </div>

    {/* About */}
    <div className="space-y-4">
      <h3 className="font-display font-bold text-lg text-foreground">About CryptoSpell</h3>
      <p className="text-sm text-dim leading-[1.85] max-w-[640px]">
        CryptoSpell is a puzzle game where players identify and spell the names of well-known blockchain projects using visual clues and letter tiles. Explore the Web3 ecosystem through a series of logo-based puzzles inspired by popular crypto platforms and communities.
      </p>
      <p className="text-sm text-dim leading-[1.85] max-w-[640px]">
        The game combines word puzzles, brand recognition, and modern digital art styles to create a visually engaging puzzle experience.
      </p>
    </div>

    {/* Gameplay */}
    <div className="space-y-4">
      <h3 className="font-display font-bold text-lg text-foreground">Gameplay</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          "You're shown a crypto project logo or visual clue",
          "Arrange letter tiles to spell the correct project name",
          "Progress through levels as puzzles get more challenging",
          "Play offline — no internet connection needed",
        ].map((step, i) => (
          <div key={i} className="flex items-start gap-3 p-4 rounded-lg border border-ghost bg-ghost/50">
            <span className="font-mono text-xs text-cs-purple font-bold mt-0.5">{String(i + 1).padStart(2, '0')}</span>
            <span className="text-sm text-dim leading-relaxed">{step}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Features grid */}
    <div className="space-y-4">
      <h3 className="font-display font-bold text-lg text-foreground">Features</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {gameFeatures.map((f, i) => (
          <div key={i} className="p-5 rounded-lg border border-ghost bg-ghost/30 space-y-2.5 hover:border-cs-purple/30 transition-colors">
            <f.icon size={18} className="text-cs-purple" />
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
        <a href="mailto:onchainerslab@gmail.com"
          className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.12em] uppercase px-5 py-2.5 rounded border border-ghost text-dim hover:text-foreground hover:border-foreground/20 transition-colors no-underline">
          <Mail size={12} />
          Contact Support
        </a>
      </div>
    </div>
  </div>
);

export default CryptoSpellDetails;
