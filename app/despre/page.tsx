import type { Metadata } from "next";
import Image from "next/image";
import { products } from "@/lib/data";

export const metadata: Metadata = {
  title: "Despre Noi — CasaMea",
  description: "Află mai multe despre CasaMea și valorile noastre.",
};

export default function DesprePage() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="relative rounded-3xl overflow-hidden bg-primary min-h-[300px] sm:min-h-[400px]">
          <Image src={products[6]?.image || "/placeholder.svg"} alt="About" fill className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-primary/40" />
          <div className="relative flex items-end h-full min-h-[300px] sm:min-h-[400px] p-8 sm:p-12">
            <div>
              <p className="text-white/60 text-[13px] mb-2">Despre noi</p>
              <h1 className="font-display text-4xl sm:text-5xl text-white leading-tight">
                Povestea <em>CasaMea</em>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 sm:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl text-foreground mb-6">Din pasiune pentru <em className="text-primary">calitate</em></h2>
          <div className="space-y-4 text-[15px] text-muted leading-relaxed">
            <p>CasaMea a luat naștere din dorința de a face produsele casnice de calitate accesibile tuturor. Fondată în 2020, am crescut de la un mic magazin online la unul dintre cele mai apreciate destinații pentru produse de uz casnic.</p>
            <p>Selecționăm cu grijă fiecare produs din catalogul nostru, asigurându-ne că îndeplinește standardele noastre ridicate de calitate și oferă valoare reală clienților noștri.</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl text-white mb-10">Valorile <em>noastre</em></h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: "⭐", title: "Calitate", desc: "Fiecare produs este testat și verificat." },
              { icon: "💰", title: "Prețuri corecte", desc: "Negociem cele mai bune prețuri." },
              { icon: "🚀", title: "Livrare rapidă", desc: "24-48h în toată Moldova." },
            ].map((v) => (
              <div key={v.title} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <span className="text-2xl">{v.icon}</span>
                <h3 className="mt-3 text-[15px] font-semibold text-white">{v.title}</h3>
                <p className="mt-2 text-[13px] text-white/60 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl text-foreground mb-10">Contactează-ne</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: "📍", title: "Adresă", text: "Str. Florilor 42, Chișinău" },
              { icon: "📞", title: "Telefon", text: "+373 69 123 456" },
              { icon: "✉️", title: "Email", text: "contact@casamea.md" },
            ].map((c) => (
              <div key={c.title} className="bg-primary-light border border-primary/10 rounded-2xl p-6">
                <span className="text-xl">{c.icon}</span>
                <h3 className="mt-2 text-[14px] font-semibold text-foreground">{c.title}</h3>
                <p className="mt-1 text-[13px] text-muted">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
