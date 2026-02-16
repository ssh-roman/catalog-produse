import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center">
                <span className="text-white font-display text-sm font-bold">C</span>
              </div>
              <span className="font-display text-base font-bold text-white">CasaMea</span>
            </div>
            <p className="text-sm leading-relaxed">
              Produse casnice de calitate pentru fiecare casă din Moldova.
            </p>
          </div>

          <div>
            <h3 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">Navigare</h3>
            <ul className="space-y-2.5 text-sm">
              {[{ href: "/", label: "Acasă" }, { href: "/#produse", label: "Produse" }, { href: "/despre", label: "Despre Noi" }].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary transition-colors duration-200">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">Categorii</h3>
            <ul className="space-y-2.5 text-sm">
              {["Curățenie", "Bucătărie", "Baie", "Spălare Rufe", "Organizare", "Grădină"].map((cat) => (
                <li key={cat} className="text-white/30">{cat}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2"><span className="text-primary mt-0.5">📍</span>Str. Florilor 42, Chișinău</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-0.5">📞</span>+373 69 123 456</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✉️</span>contact@casamea.md</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.06] mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[11px] text-white/25">© 2026 CasaMea. Toate drepturile rezervate.</span>
          <div className="flex gap-2">
            {["Fb", "Ig", "Li"].map((s) => (
              <span key={s} className="w-8 h-8 bg-white/[0.04] border border-white/[0.06] rounded-lg flex items-center justify-center text-[10px] font-bold text-white/30 hover:text-primary hover:border-primary/30 transition-all duration-200 cursor-pointer">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
