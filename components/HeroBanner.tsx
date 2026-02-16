import Image from "next/image";
import { getFeaturedProducts } from "@/lib/data";

export default function HeroBanner() {
  const featured = getFeaturedProducts().slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-foreground min-h-[85vh] flex items-center">
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c1445] via-foreground to-[#1a0f2e]" />

        {/* Mesh gradient blobs */}
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#6366f1]/15 blur-[100px]" />
        <div className="absolute top-[30%] left-[40%] w-[300px] h-[300px] rounded-full bg-accent/10 blur-[80px]" />

        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />

        {/* Floating geometric shapes */}
        <div className="absolute top-20 right-[15%] w-20 h-20 border border-white/[0.06] rounded-2xl rotate-12 animate-float" />
        <div className="absolute bottom-32 right-[25%] w-14 h-14 border border-primary/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[40%] left-[8%] w-10 h-10 border border-white/[0.08] rounded-lg rotate-45 animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            {/* Badge */}
            <div className="animate-fade-up inline-flex items-center gap-2 bg-white/[0.07] border border-white/[0.1] backdrop-blur-sm rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 bg-accent rounded-full" />
              <span className="text-white/60 text-xs font-medium tracking-wide">
                Colecția 2026 — 20 produse noi
              </span>
            </div>

            {/* Heading */}
            <h1 className="animate-fade-up font-display text-[clamp(2.5rem,5vw,4.5rem)] text-white leading-[1.08] font-bold tracking-tight" style={{ animationDelay: '100ms' }}>
              Produse Casnice
              <br />
              <span className="bg-gradient-to-r from-primary via-[#818cf8] to-primary bg-clip-text text-transparent">
                de Încredere
              </span>
            </h1>

            {/* Subtitle */}
            <p className="animate-fade-up mt-6 text-lg text-white/45 max-w-md leading-relaxed font-light" style={{ animationDelay: '200ms' }}>
              Descoperă gama noastră completă de produse pentru casă. De la
              bucătărie la grădină, totul într-un singur loc.
            </p>

            {/* CTAs */}
            <div className="animate-fade-up mt-10 flex flex-wrap items-center gap-4" style={{ animationDelay: '300ms' }}>
              <a
                href="#produse"
                className="group relative inline-flex items-center gap-2.5 bg-primary hover:bg-primary-dark text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-300 hover:shadow-[0_8px_30px_rgba(59,95,229,0.35)] active:scale-[0.97]"
              >
                Explorează Catalogul
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:translate-y-0.5 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </a>
              <a
                href="/despre"
                className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm font-medium transition-colors duration-200"
              >
                Despre noi
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>

            {/* Stats */}
            <div className="animate-fade-up mt-14 flex items-center gap-8" style={{ animationDelay: '400ms' }}>
              {[
                { value: "20+", label: "Produse" },
                { value: "6", label: "Categorii" },
                { value: "24h", label: "Livrare" },
              ].map((stat, i) => (
                <div key={stat.label} className={`${i > 0 ? 'pl-8 border-l border-white/[0.08]' : ''}`}>
                  <div className="text-white font-display font-bold text-xl">{stat.value}</div>
                  <div className="text-white/30 text-xs mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Floating product cards */}
          <div className="hidden lg:block relative h-[480px]">
            {featured.map((product, i) => {
              const positions = [
                "top-0 right-8 rotate-2",
                "top-24 left-0 -rotate-3",
                "bottom-0 right-0 rotate-1",
              ];
              const delays = ['0s', '2s', '4s'];
              return (
                <div
                  key={product.id}
                  className={`absolute ${positions[i]} w-56 animate-float`}
                  style={{ animationDelay: delays[i] }}
                >
                  <div className="bg-white/[0.07] backdrop-blur-md border border-white/[0.1] rounded-2xl overflow-hidden shadow-2xl shadow-black/20 hover:bg-white/[0.12] transition-colors duration-300">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-3.5">
                      <p className="text-white/80 text-xs font-medium truncate">{product.name}</p>
                      <p className="text-primary font-bold text-sm mt-1">{product.price.toFixed(2)} MDL</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
