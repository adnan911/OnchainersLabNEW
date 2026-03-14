const AboutSection = () => (
  <section className="fade-up py-20 md:py-[120px] px-6 md:px-[52px] max-w-[900px] mx-auto text-center" id="about">
    <span className="font-mono text-[10px] tracking-[0.28em] text-neon uppercase mb-7 block">
      About Onchainers Lab
    </span>
    <h2 className="font-display font-black leading-[1.05] tracking-[-0.02em] mb-7 text-foreground"
      style={{ fontSize: "clamp(36px, 4.5vw, 58px)" }}>
      Building for the<br /><em className="italic text-crimson">Web3 generation.</em>
    </h2>
    <p className="text-base text-dim leading-[1.9] max-w-[680px] mx-auto">
      Onchainers Lab is an independent product studio focused on the Web3 ecosystem. We build games, creative tools, and experiences that make blockchain technology accessible and engaging. From puzzle games to NFT editors — we ship products people actually want to use.
    </p>
  </section>
);

export default AboutSection;
