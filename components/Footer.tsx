import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white/60 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute -top-32 right-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-serif text-lg font-bold">C</span>
              </div>
              <span className="font-serif text-xl text-white">CasaMea</span>
            </div>
            <p className="text-sm leading-relaxed">
              Produse casnice alese cu grijă pentru o casă cu suflet. Calitate
              și prețuri accesibile din 2020.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">
              Navigare
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: "/", label: "Acasă" },
                { href: "/#produse", label: "Produse" },
                { href: "/despre", label: "Despre Noi" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">
              Categorii
            </h3>
            <ul className="space-y-2.5 text-sm">
              {["Curățenie", "Bucătărie", "Baie", "Spălare Rufe", "Organizare", "Grădină"].map(
                (cat) => (
                  <li key={cat} className="text-white/40">{cat}</li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">📍</span>
                <span>Str. Florilor 42, București</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">📞</span>
                <span>+40 721 234 567</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">✉️</span>
                <span>contact@casamea.ro</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-white/30">
            © 2026 CasaMea. Toate drepturile rezervate.
          </span>
          <div className="flex gap-3">
            {["Fb", "Ig", "Li"].map((s) => (
              <span
                key={s}
                className="w-8 h-8 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-[10px] font-bold text-white/40 hover:text-primary hover:border-primary/30 transition-all duration-200 cursor-pointer"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
