const stats = [
  { num: "2", accent: ".", label: "Products in our portfolio — games and creative tools for the Web3 ecosystem." },
  { num: "100", accent: "+", label: "Crypto projects featured as puzzles inside CryptoSpell and growing." },
  { num: "∞", accent: ".", label: "More products and experiments in the lab. Always building." },
];

const StatsStrip = () => (
  <div className="fade-up grid grid-cols-1 md:grid-cols-[1fr_1px_1fr_1px_1fr] gap-12 md:gap-0 max-w-[1300px] mx-auto px-6 py-20 md:px-[52px] md:py-20"
    style={{ borderTop: "1px solid hsl(var(--ghost))", borderBottom: "1px solid hsl(var(--ghost))" }}>
    {stats.map((s, i) => (
      <div key={i} className="contents">
        {i > 0 && <div className="hidden md:block w-px bg-ghost" />}
        <div className="flex flex-col gap-3.5 md:px-8">
          <div className="font-display text-[52px] font-black leading-none text-foreground">
            {s.num}<span className="text-crimson">{s.accent}</span>
          </div>
          <div className="text-[13px] text-dim leading-[1.7] max-w-[240px]">{s.label}</div>
        </div>
      </div>
    ))}
  </div>
);

export default StatsStrip;
