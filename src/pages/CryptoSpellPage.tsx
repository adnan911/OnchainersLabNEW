import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CryptoSpellDetails from "@/components/CryptoSpellDetails";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import CustomCursor from "@/components/CustomCursor";

const CryptoSpellPage = () => {
  return (
    <div className="bg-background min-h-screen">
      <CustomCursor />
      <Navbar />
      
      <div className="pt-24 md:pt-32 pb-20 px-6 md:px-10 max-w-[1100px] mx-auto fade-up in">
        <Link to="/" className="inline-flex items-center gap-2 text-dim hover:text-foreground transition-colors mb-8 no-underline group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase font-bold">Back to Portfolio</span>
        </Link>
        
        <div className="rounded-2xl border border-ghost bg-ghost/10 overflow-hidden backdrop-blur-sm shadow-2xl">
          <CryptoSpellDetails />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CryptoSpellPage;
