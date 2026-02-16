export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-foreground">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground/95 to-primary-dark/40" />
        {/* Decorative circles */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-gold/10 blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="animate-fade-up flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary text-sm font-medium uppercase tracking-[0.2em]">
              Colecția 2026
            </span>
          </div>

          {/* Heading */}
          <h1 className="animate-fade-up delay-100 font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight">
            Produse Casnice
            <br />
            <span className="text-primary italic">pentru o Casă</span>
            <br />
            cu Suflet
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-up delay-200 mt-8 text-lg sm:text-xl text-white/60 max-w-xl leading-relaxed font-light">
            Descoperă gama noastră curată de produse alese cu grijă —
            de la bucătărie la grădină. Calitate care se simte.
          </p>

          {/* CTA */}
          <div className="animate-fade-up delay-300 mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#produse"
              className="group inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white font-medium px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
            >
              Explorează Catalogul
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
              </svg>
            </a>
            <span className="text-white/30 text-sm">
              20 produse · 6 categorii
            </span>
          </div>
        </div>

        {/* Decorative stat badges */}
        <div className="animate-fade-up delay-500 hidden lg:flex absolute bottom-12 right-8 gap-4">
          {[
            { value: "4.8", label: "Rating mediu", icon: "★" },
            { value: "24h", label: "Livrare rapidă", icon: "→" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-5 py-3"
            >
              <span className="text-primary text-lg">{stat.icon}</span>
              <div>
                <div className="text-white font-semibold text-sm">{stat.value}</div>
                <div className="text-white/40 text-xs">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
