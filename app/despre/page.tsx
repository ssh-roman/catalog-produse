import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Despre Noi — CasaMea",
  description: "Află mai multe despre CasaMea, valorile noastre și cum te putem ajuta.",
};

export default function DesprePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-foreground py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c1445] via-foreground to-[#1a0f2e]" />
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/15 blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-up inline-flex items-center gap-2 bg-white/[0.07] border border-white/[0.1] backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-accent rounded-full" />
            <span className="text-white/60 text-xs font-medium tracking-wide">Despre noi</span>
          </div>
          <h1 className="animate-fade-up font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white" style={{ animationDelay: '100ms' }}>
            Povestea <span className="bg-gradient-to-r from-primary via-[#818cf8] to-primary bg-clip-text text-transparent">CasaMea</span>
          </h1>
          <p className="animate-fade-up mt-6 text-lg text-white/40 max-w-2xl mx-auto leading-relaxed" style={{ animationDelay: '200ms' }}>
            Suntem dedicați să oferim cele mai bune produse casnice la prețuri accesibile pentru fiecare familie.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-up">
          <span className="inline-flex items-center gap-2 bg-primary-light text-primary text-xs font-semibold px-3 py-1 rounded-full">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            Povestea noastră
          </span>
          <h2 className="font-display text-3xl font-bold text-foreground mt-4 mb-8">Din pasiune pentru calitate</h2>
          <div className="space-y-5 text-muted leading-relaxed text-[15px]">
            <p>CasaMea a luat naștere din dorința de a face produsele casnice de calitate accesibile tuturor. Fondată în 2020, am crescut de la un mic magazin online la unul dintre cele mai apreciate destinații pentru produse de uz casnic.</p>
            <p>Selecționăm cu grijă fiecare produs din catalogul nostru, asigurându-ne că îndeplinește standardele noastre ridicate de calitate și oferă valoare reală clienților noștri.</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-surface-elevated/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-primary-light text-primary text-xs font-semibold px-3 py-1 rounded-full">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              Ce ne definește
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-4">Valorile Noastre</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { icon: "⭐", title: "Calitate", desc: "Selectăm doar produse care îndeplinesc cele mai înalte standarde de calitate. Fiecare produs este testat și verificat." },
              { icon: "💰", title: "Prețuri Accesibile", desc: "Credem că produsele de calitate nu trebuie să fie scumpe. Negociem cele mai bune prețuri pentru clienții noștri." },
              { icon: "🚀", title: "Livrare Rapidă", desc: "Livrăm în toată Moldova în 24-48 de ore. Comenzile plasate până la ora 14:00 sunt expediate în aceeași zi." },
            ].map((value, i) => (
              <div key={value.title} className="bg-surface p-8 sm:p-10 rounded-2xl border border-border text-center animate-fade-up hover:shadow-lg hover:shadow-primary/[0.04] hover:-translate-y-1 hover:border-primary/20 transition-all duration-500" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-light rounded-2xl mb-6">
                  <span className="text-2xl">{value.icon}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted leading-relaxed text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-primary-light text-primary text-xs font-semibold px-3 py-1 rounded-full">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              Contact
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-4">Contactează-ne</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: "📍", title: "Adresă", line1: "Str. Florilor 42", line2: "Chișinău, MD-2001" },
              { icon: "📞", title: "Telefon", line1: "+373 69 123 456", line2: "Luni – Vineri, 9:00 – 18:00" },
              { icon: "✉️", title: "Email", line1: "contact@casamea.md", line2: "Răspundem în max. 24h" },
            ].map((item, i) => (
              <div key={item.title} className="p-6 sm:p-8 bg-primary-light/50 border border-primary/10 rounded-2xl text-center animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-surface rounded-xl shadow-sm mb-4 border border-border">
                  <span className="text-xl">{item.icon}</span>
                </div>
                <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                <p className="text-muted mt-2 text-sm">{item.line1}</p>
                <p className="text-muted/60 text-xs mt-1">{item.line2}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
