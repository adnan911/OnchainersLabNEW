import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

interface AppCardProps {
  variant: "cs" | "pm";
  image: string;
  tag: string;
  name: string;
  desc: string;
  features: string[];
  expanded?: boolean;
  onToggle?: () => void;
  children?: React.ReactNode;
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
};

const AppCard = ({ variant, image, tag, name, desc, features, expanded, onToggle, children }: AppCardProps) => {
  const s = variantStyles[variant];

  return (
    <div className="group rounded-xl overflow-hidden relative flex flex-col text-foreground transition-all duration-[350ms] ease-[cubic-bezier(.22,1,.36,1)]"
      style={{ border: "1px solid hsl(var(--ghost))", background: "hsl(var(--ghost))" }}
      onMouseEnter={e => (e.currentTarget.style.boxShadow = s.hoverShadow)}
      onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}>
      {/* Image */}
      <div className="relative overflow-hidden">
        <img src={image} alt={name} className="w-full aspect-[16/10] object-cover block" />
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
        {onToggle && (
          <button onClick={onToggle}
            className="inline-flex items-center gap-[10px] mt-3 font-body text-xs font-bold tracking-[0.15em] uppercase no-underline py-3 px-7 rounded w-fit transition-all duration-200 hover:opacity-80 cursor-pointer"
            style={{ background: s.ctaBg, border: `1px solid ${s.ctaBorder}`, color: s.tagColor }}>
            {expanded ? "Close" : "View Details"} {expanded ? <ChevronUp size={14} /> : <ArrowRight size={14} />}
          </button>
        )}
      </div>
      {/* Expandable detail section */}
      {expanded && children && (
        <div className="border-t border-ghost overflow-hidden animate-accordion-down" style={{ background: s.infoBg }}>
          {children}
        </div>
      )}
    </div>
  );
};

export default AppCard;
