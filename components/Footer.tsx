import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div className="col-span-2 sm:col-span-1">
            <span className="font-display text-lg italic text-foreground">CasaMea</span>
            <p className="mt-2 text-[13px] text-muted leading-relaxed">
              Produse casnice de calitate pentru fiecare casă din Moldova.
            </p>
          </div>
          <div>
            <h3 className="text-[12px] font-semibold text-foreground uppercase tracking-wider mb-3">Navigare</h3>
            <ul className="space-y-2">
              {[{ href: "/", label: "Acasă" }, { href: "/#produse", label: "Produse" }, { href: "/despre", label: "Despre" }].map((link) => (
                <li key={link.href}><Link href={link.href} className="text-[13px] text-muted hover:text-primary transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[12px] font-semibold text-foreground uppercase tracking-wider mb-3">Categorii</h3>
            <ul className="space-y-2 text-[13px] text-muted">
              {["Curățenie", "Bucătărie", "Baie", "Organizare"].map((c) => <li key={c}>{c}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-[12px] font-semibold text-foreground uppercase tracking-wider mb-3">Contact</h3>
            <ul className="space-y-2 text-[13px] text-muted">
              <li>Str. Florilor 42, Chișinău</li>
              <li>+373 69 123 456</li>
              <li>contact@casamea.md</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/50">
          <div className="text-center">
            <span className="font-display text-6xl sm:text-8xl italic text-foreground/10">CasaMea</span>
          </div>
          <div className="flex items-center justify-between mt-4">
            <span className="text-[11px] text-muted/50">© 2026 CasaMea</span>
            <div className="flex gap-3 text-[11px] text-muted/50">
              <span className="cursor-pointer hover:text-primary transition-colors">Facebook</span>
              <span className="cursor-pointer hover:text-primary transition-colors">Instagram</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
