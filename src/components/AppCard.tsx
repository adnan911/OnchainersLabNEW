import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface AppCardProps {
  variant: "cs" | "pm" | "cm";
  image: string;
  tag: string;
  name: string;
  desc: string;
  features: string[];
  path?: string;
}

const variantStyles = {
  cs: {
    tagColor: "hsl(var(--cs-purple))",
    tagBg: "hsl(var(--cs-purple) / 0.1)",
    tagBorder: "hsl(var(--cs-purple) / 0.25)",
    infoBg: "linear-gradient(135deg, hsl(260 43% 4%) 0%, hsl(var(--background)) 100%)",
    imgOverlay: "linear-gradient(to top, hsl(260 43% 4%), transparent)",
    ctaBg: "hsl(var(--cs-purple) / 0.12)",
    ctaBorder: "hsl(var(--cs-purple) / 0.35)",
    hoverShadow: "0 30px 60px hsl(var(--cs-purple) / 0.15), 0 0 0 1px hsl(var(--cs-purple) / 0.15)",
    dotShadow: "0 0 6px hsl(var(--cs-purple))",
  },
  pm: {
    tagColor: "hsl(var(--pm-blue))",
    tagBg: "hsl(var(--pm-blue) / 0.1)",
    tagBorder: "hsl(var(--pm-blue) / 0.25)",
    infoBg: "linear-gradient(135deg, hsl(225 50% 5%) 0%, hsl(var(--background)) 100%)",
    imgOverlay: "linear-gradient(to top, hsl(225 50% 5%), transparent)",
    ctaBg: "hsl(var(--pm-blue) / 0.12)",
    ctaBorder: "hsl(var(--pm-blue) / 0.35)",
    hoverShadow: "0 30px 60px hsl(var(--pm-blue) / 0.12), 0 0 0 1px hsl(var(--pm-blue) / 0.15)",
    dotShadow: "0 0 6px hsl(var(--pm-blue))",
  },
  cm: {
    tagColor: "hsl(var(--cm-yellow))",
    tagBg: "hsl(var(--cm-yellow) / 0.1)",
    tagBorder: "hsl(var(--cm-yellow) / 0.25)",
    infoBg: "linear-gradient(135deg, hsl(200 100% 5%) 0%, hsl(var(--background)) 100%)",
    imgOverlay: "linear-gradient(to top, hsl(200 100% 5%), transparent)",
    ctaBg: "hsl(var(--cm-yellow) / 0.12)",
    ctaBorder: "hsl(var(--cm-yellow) / 0.35)",
    hoverShadow: "0 30px 60px hsl(var(--cm-blue) / 0.15), 0 0 0 1px hsl(var(--cm-yellow) / 0.15)",
    dotShadow: "0 0 6px hsl(var(--cm-yellow))",
  },
};

const AppCard = ({ variant, image, tag, name, desc, features, path }: AppCardProps) => {
  const s = variantStyles[variant];

  const content = (
    <div className="group rounded-xl overflow-hidden relative flex flex-col text-foreground transition-all duration-[350ms] ease-[cubic-bezier(.22,1,.36,1)] h-full cursor-pointer hover:scale-[1.01]"
      style={{ border: "1px solid hsl(var(--ghost))", background: "hsl(var(--ghost))" }}
      onMouseEnter={e => (e.currentTarget.style.boxShadow = s.hoverShadow)}
      onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}>
      {/* Image */}
      <div className="relative overflow-hidden">
        <img src={image} alt={name} className="w-full aspect-[16/10] object-cover block group-hover:scale-105 transition-transform duration-[600ms]" />
        <div className="absolute bottom-0 left-0 right-0 h-[60%] pointer-events-none" style={{ background: s.imgOverlay }} />
      </div>
      {/* Info */}
      <div className="flex-1 flex flex-col gap-3 px-6 py-6 md:px-8 md:py-7" style={{ background: s.infoBg }}>
        <span className="font-mono text-[9px] tracking-[0.22em] uppercase inline-flex items-center gap-[7px] w-fit px-3 py-[5px] rounded-sm"
          style={{ color: s.tagColor, background: s.tagBg, border: `1px solid ${s.tagBorder}` }}>
          <span className="w-[5px] h-[5px] rounded-full" style={{ background: s.tagColor, boxShadow: s.dotShadow, animation: "pulse-dot 2s ease-in-out infinite" }} />
          {tag}
        </span>
        <div className="font-display font-black text-[28px] md:text-[34px] leading-none tracking-[-0.02em] text-foreground">{name}</div>
        <p className="text-sm text-dim leading-[1.75] max-w-[420px]">{desc}</p>
        <div className="flex flex-wrap gap-2 mt-1">
          {features.map(f => (
            <span key={f} className="font-mono text-[10px] tracking-[0.1em] px-[13px] py-[5px] rounded-full uppercase text-dim border border-ghost">
              {f}
            </span>
          ))}
        </div>
        {path && (
          <div className="inline-flex items-center gap-[10px] mt-4 font-body text-xs font-bold tracking-[0.15em] uppercase no-underline py-3.5 px-8 rounded w-fit transition-all duration-300 group-hover:brightness-110"
            style={{ background: s.ctaBg, border: `1px solid ${s.ctaBorder}`, color: s.tagColor }}>
            VIEW DETAILS <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </div>
        )}
      </div>
    </div>
  );

  if (path) {
    return (
      <Link to={path} className="block no-underline h-full transition-transform duration-300">
        {content}
      </Link>
    );
  }

  return content;
};

export default AppCard;
