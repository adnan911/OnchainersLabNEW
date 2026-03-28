import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const License = () => (
  <div className="min-h-screen bg-background text-foreground">
    <div className="max-w-[760px] mx-auto px-6 py-20 md:py-28">
      <Link to="/" className="inline-flex items-center gap-2 text-dim hover:text-foreground text-xs font-mono tracking-[0.12em] uppercase mb-10 no-underline transition-colors">
        <ArrowLeft size={14} /> Back to Home
      </Link>

      <h1 className="font-display font-black text-3xl md:text-4xl mb-2 text-foreground">Software License Agreement</h1>
      <p className="text-dim text-sm mb-10">Last Updated: March 27, 2026</p>

      <div className="space-y-8">
        {[
          { title: "1. License Grant", body: 'OnchainersLab ("Licensor") hereby grants you ("Licensee") a personal, non-exclusive, non-transferable, and limited license to download, install, and use our application software (including <b>Color Maze</b>, <b>CryptoSpell</b>, and related titles) for personal, non-commercial purposes on mobile devices or computers owned or controlled by you.' },
          { title: "2. Restrictions", body: "Licensee shall not: Copy, modify, or create derivative works of the Software; Reverse engineer, decompile, or disassemble the Software; Rent, lease, lend, sell, sublicense, or distribute the Software; Remove any proprietary notices or labels on the Software." },
          { title: "3. Open Source Components", body: "The Software may include third-party software components subject to open-source licenses. To the extent required by those licenses, the terms of such licenses will apply in lieu of the terms of this Agreement for those specific components." },
          { title: "4. Termination", body: "This License is effective until terminated. Your rights under this License will terminate automatically without notice from OnchainersLab if you fail to comply with any term(s) of this License. Upon termination, you shall cease all use of the Software and delete all copies." },
          { title: "5. Disclaimer of Warranty", body: 'THE SOFTWARE IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. ONCHAINERSLAB DISCLAIMS ALL WARRANTIES, INCLUDING ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.' },
          { title: "6. Limitation of Liability", body: "IN NO EVENT SHALL ONCHAINERSLAB BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES, OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA, OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE, OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THE SOFTWARE." },
          { title: "7. Contact", body: "" },
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

export default License;
