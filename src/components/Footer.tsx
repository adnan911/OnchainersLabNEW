import logo from "@/assets/onchainerslab-logo.png";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="flex flex-col md:flex-row items-center justify-between gap-6 px-6 py-10 md:px-[52px] md:py-[52px] text-center border-t border-ghost">
    <img src={logo} alt="Onchainers Lab" className="h-6 w-auto opacity-80" />
    <div className="flex flex-wrap justify-center gap-6 md:gap-8">
      {[
        { label: "CryptoSpell", href: "#portfolio" },
        { label: "PixelMint", href: "#portfolio" },
      ].map(l => (
        <a key={l.label} href={l.href} className="text-xs tracking-[0.08em] no-underline text-dim hover:text-foreground transition-colors">{l.label}</a>
      ))}
      {[
        { label: "Privacy Policy", to: "/privacy-policy" },
        { label: "License", to: "/license" },
        { label: "Copyright", to: "/copyright" },
      ].map(l => (
        <Link key={l.label} to={l.to} className="text-xs tracking-[0.08em] no-underline text-dim hover:text-foreground transition-colors">{l.label}</Link>
      ))}
    </div>
    <div className="font-mono text-[10px] text-neon tracking-[0.15em] flex items-center gap-[7px]">
      <span className="w-[5px] h-[5px] rounded-full bg-neon" style={{ animation: "pulse-dot 2s infinite" }} />
      Mainnet
    </div>
  </footer>
);

export default Footer;
