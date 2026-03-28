import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Copyright = () => (
  <div className="min-h-screen bg-background text-foreground">
    <div className="max-w-[760px] mx-auto px-6 py-20 md:py-28">
      <Link to="/" className="inline-flex items-center gap-2 text-dim hover:text-foreground text-xs font-mono tracking-[0.12em] uppercase mb-10 no-underline transition-colors">
        <ArrowLeft size={14} /> Back to Home
      </Link>

      <h1 className="font-display font-black text-3xl md:text-4xl mb-2 text-foreground">Copyright Notice</h1>
      <p className="text-dim text-sm mb-10">Last Updated: March 27, 2026 — © 2026 OnchainersLab. All Rights Reserved.</p>

      <div className="space-y-8">
        {[
          { title: "1. Ownership of Content", body: "All content included in our applications (including <b>Color Maze</b>, <b>CryptoSpell</b>, and others), such as text, graphics, logos, images, digital downloads, and software, is the property of OnchainersLab or its content suppliers and is protected by international copyright laws." },
          { title: "2. Intellectual Property", body: "The compilation of all content in this application is the exclusive property of OnchainersLab and protected by international copyright laws. All software used in this application is the property of OnchainersLab or its software suppliers and protected by international copyright laws." },
          { title: "3. Trademarks", body: "CryptoSpell, the CryptoSpell logo, and other marks indicated in our application are registered trademarks or trademarks of OnchainersLab. OnchainersLab's trademarks and trade dress may not be used in connection with any product or service that is not OnchainersLab's, in any manner that is likely to cause confusion among customers, or in any manner that disparages or discredits OnchainersLab." },
          { title: "4. License and Access", body: "OnchainersLab grants you a limited license to access and make personal use of this application. This license does not include any resale or commercial use of this application or its contents; any collection and use of any product listings, descriptions, or prices; any derivative use of this application or its contents; or any use of data mining, robots, or similar data gathering and extraction tools." },
          { title: "5. Infringement Claims", body: "OnchainersLab respects the intellectual property of others. If you believe that your work has been copied in a way that constitutes copyright infringement, please contact us at the email address provided below." },
          { title: "6. Contact", body: "" },
        ].map((s, i) => (
          <section key={i} className="space-y-3">
            <h2 className="font-display font-bold text-lg text-foreground">{s.title}</h2>
            {s.body ? (
              <p className="text-sm text-dim leading-[1.85]">{s.body}</p>
            ) : (
              <p className="text-sm text-dim leading-[1.85]">OnchainersLab — <a href="mailto:onchainersLab@gmail.com" className="text-neon hover:underline">onchainersLab@gmail.com</a></p>
            )}
          </section>
        ))}
      </div>
    </div>
  </div>
);

export default Copyright;
