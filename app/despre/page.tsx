import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Despre Noi — CasaMea",
  description:
    "Află mai multe despre CasaMea, valorile noastre și cum te putem ajuta.",
};

export default function DesprePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-foreground py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground/95 to-primary-dark/30" />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-up flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary text-sm font-medium uppercase tracking-[0.2em]">
              Despre noi
            </span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h1 className="animate-fade-up delay-100 font-serif text-4xl sm:text-5xl lg:text-6xl text-white">
            O Casă cu <span className="text-primary italic">Suflet</span>
          </h1>
          <p className="animate-fade-up delay-200 mt-6 text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            Suntem dedicați să oferim cele mai bune produse casnice la prețuri
            accesibile pentru fiecare familie din România.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-up">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Povestea noastră
            </span>
            <h2 className="font-serif text-3xl text-foreground mt-3 mb-8">
              Din pasiune pentru calitate
            </h2>
            <div className="space-y-5 text-foreground/60 leading-relaxed text-lg">
              <p>
                CasaMea a luat naștere din dorința de a face produsele casnice de
                calitate accesibile tuturor. Fondată în 2020, am crescut de la un
                mic magazin online la unul dintre cele mai apreciate destinații
                pentru produse de uz casnic din România.
              </p>
              <p>
                Selecționăm cu grijă fiecare produs din catalogul nostru,
                asigurându-ne că îndeplinește standardele noastre ridicate de
                calitate și oferă valoare reală clienților noștri.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-warm/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Ce ne definește
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground mt-3">
              Valorile Noastre
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: "⭐",
                title: "Calitate",
                desc: "Selectăm doar produse care îndeplinesc cele mai înalte standarde de calitate. Fiecare produs este testat și verificat.",
                color: "primary",
              },
              {
                icon: "💰",
                title: "Prețuri Accesibile",
                desc: "Credem că produsele de calitate nu trebuie să fie scumpe. Negociem cele mai bune prețuri pentru clienții noștri.",
                color: "gold",
              },
              {
                icon: "🚀",
                title: "Livrare Rapidă",
                desc: "Livrăm în toată România în 24-48 de ore. Comenzile plasate până la ora 14:00 sunt expediate în aceeași zi.",
                color: "accent",
              },
            ].map((value, i) => (
              <div
                key={value.title}
                className="bg-white p-8 sm:p-10 rounded-2xl border border-warm text-center animate-fade-up hover:shadow-lg hover:-translate-y-1 transition-all duration-500"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-warm rounded-2xl mb-6">
                  <span className="text-3xl">{value.icon}</span>
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-foreground/50 leading-relaxed text-sm">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Hai să vorbim
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground mt-3">
              Contactează-ne
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                icon: "📍",
                title: "Adresă",
                line1: "Str. Florilor 42, Sector 1",
                line2: "București, 010101",
              },
              {
                icon: "📞",
                title: "Telefon",
                line1: "+40 721 234 567",
                line2: "Luni – Vineri, 9:00 – 18:00",
              },
              {
                icon: "✉️",
                title: "Email",
                line1: "contact@casamea.ro",
                line2: "Răspundem în max. 24h",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="p-6 sm:p-8 bg-primary-light/40 border border-primary/10 rounded-2xl text-center animate-fade-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-2xl shadow-sm mb-4">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="text-foreground/60 mt-2 text-sm">{item.line1}</p>
                <p className="text-foreground/40 text-xs mt-1">{item.line2}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
