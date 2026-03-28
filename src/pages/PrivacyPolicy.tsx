import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-background text-foreground">
    <div className="max-w-[760px] mx-auto px-6 py-20 md:py-28">
      <Link to="/" className="inline-flex items-center gap-2 text-dim hover:text-foreground text-xs font-mono tracking-[0.12em] uppercase mb-10 no-underline transition-colors">
        <ArrowLeft size={14} /> Back to Home
      </Link>

      <h1 className="font-display font-black text-3xl md:text-4xl mb-2 text-foreground">Privacy Policy</h1>
      <p className="text-dim text-sm mb-10">Effective Date: March 27, 2026</p>

      <div className="prose-custom space-y-8">
        <section className="space-y-3">
          <h2 className="font-display font-bold text-lg text-foreground">1. Overview</h2>
          <p className="text-sm text-dim leading-[1.85]">
            OnchainersLab ("we," "us," or "our") manages a portfolio of blockchain-enabled maritime and puzzle experiences, including <b>Color Maze</b> and <b>CryptoSpell</b>. 
            This Privacy Policy explains how we collect and process information through our applications.
          </p>
          <p className="text-sm text-dim leading-[1.85]">By using our applications, you agree to this Privacy Policy.</p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display font-bold text-lg text-foreground">2. Information We Process</h2>
          <h3 className="font-body font-bold text-sm text-foreground">2.1 Wallet Address and Blockchain Activity</h3>
          <p className="text-sm text-dim leading-[1.85]">CryptoSpell requires a Solana wallet to access certain features. When you connect a wallet (such as Phantom, Solflare, or Mobile Wallet Adapter), the application processes your public wallet address, transaction signatures you approve, and on-chain transaction data required to verify rewards or NFT minting.</p>
          <p className="text-sm text-dim leading-[1.85]"><strong className="text-foreground">CryptoSpell does not collect or store:</strong> Private keys, seed phrases, or recovery phrases. Authentication and transaction signing are handled entirely by the wallet provider.</p>

          <h3 className="font-body font-bold text-sm text-foreground mt-4">2.2 Gameplay Data</h3>
          <p className="text-sm text-dim leading-[1.85]">To operate the game, CryptoSpell may temporarily process basic gameplay information such as player progress and levels, in-game coins, and game streaks or scores. This data is stored locally on your device.</p>

          <h3 className="font-body font-bold text-sm text-foreground mt-4">2.3 Device Information</h3>
          <p className="text-sm text-dim leading-[1.85]">Limited technical information may be processed to ensure the application functions properly, such as device type, operating system version, app version, and basic error logs. CryptoSpell does not intentionally collect precise location data.</p>

          <h3 className="font-body font-bold text-sm text-foreground mt-4">2.4 Local Storage</h3>
          <p className="text-sm text-dim leading-[1.85]">CryptoSpell stores small amounts of information locally on your device to support the game, including saved game progress, user interface preferences, and cached game assets.</p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display font-bold text-lg text-foreground">3. Information We Do Not Collect</h2>
          <p className="text-sm text-dim leading-[1.85]">CryptoSpell does not intentionally collect or store private keys, seed phrases, recovery phrases, government identification numbers, exact home addresses, or sensitive personal information.</p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display font-bold text-lg text-foreground">4. Blockchain Transparency</h2>
          <p className="text-sm text-dim leading-[1.85]">CryptoSpell interacts with the Solana blockchain. Transactions performed through the game are publicly visible. Blockchain data is public and cannot be altered or deleted.</p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display font-bold text-lg text-foreground">5. Third-Party Services</h2>
          <p className="text-sm text-dim leading-[1.85]">CryptoSpell relies on external infrastructure providers such as Solana blockchain nodes, wallet providers (Phantom, Solflare), and application hosting services. These services may process limited technical data necessary to operate.</p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display font-bold text-lg text-foreground">6. Security</h2>
          <p className="text-sm text-dim leading-[1.85]">CryptoSpell does not store private wallet credentials. Users are responsible for protecting their wallets and devices. <strong className="text-foreground">Never share your seed phrase.</strong></p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display font-bold text-lg text-foreground">7. Contact</h2>
          <p className="text-sm text-dim leading-[1.85]">OnchainersLab — <a href="mailto:onchainersLab@gmail.com" className="text-neon hover:underline">onchainersLab@gmail.com</a></p>
        </section>
      </div>
    </div>
  </div>
);

export default PrivacyPolicy;
