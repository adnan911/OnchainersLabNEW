import logo from "@/assets/onchainerslab-logo.png";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-[52px]"
    style={{ background: "linear-gradient(to bottom, rgba(3,2,6,0.92), transparent)" }}>
    <a href="#" className="flex items-center gap-3 no-underline">
      <img src={logo} alt="Onchainers Lab" className="h-8 w-auto" />
    </a>
    <ul className="hidden md:flex gap-9 list-none items-center">
      {[
        { label: "Portfolio", href: "#portfolio" },
        { label: "About", href: "#about" },
        { label: "CryptoSpell", href: "#portfolio" },
        { label: "PixelMint", href: "#portfolio" },
      ].map(item => (
        <li key={item.label}>
          <a href={item.href}
            className="text-dim no-underline text-xs font-semibold tracking-[0.12em] uppercase hover:text-foreground transition-colors">
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
