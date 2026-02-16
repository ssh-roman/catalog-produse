import Image from "next/image";
import { products } from "@/lib/data";

export default function HeroBanner() {
  const heroProducts = products.filter(p => p.featured).slice(0, 4);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 h-auto lg:h-[520px]">
        {/* Main hero card */}
        <div className="lg:col-span-2 relative rounded-3xl overflow-hidden bg-primary min-h-[320px] lg:min-h-0">
          <Image
            src={heroProducts[0]?.image || "/placeholder.svg"}
            alt="Hero"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary/60 to-primary/30" />
          <div className="relative h-full flex flex-col justify-end p-8 sm:p-10">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] text-white leading-[1.1]">
              Produse Casnice<br />
              <em>pentru o casă</em><br />
              mai frumoasă
            </h1>
            <p className="mt-4 text-white/60 text-[15px] max-w-md leading-relaxed">
              Descoperă colecția noastră de produse alese cu grijă pentru fiecare colț al casei tale.
            </p>
            <a href="#produse" className="mt-6 inline-flex items-center gap-2 bg-white text-primary font-medium text-[14px] px-6 py-2.5 rounded-full w-fit hover:bg-white/90 transition-colors">
              Explorează
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
            </a>
          </div>
          {/* Discount badge */}
          <div className="absolute top-6 right-6 bg-white rounded-full w-16 h-16 flex flex-col items-center justify-center shadow-lg">
            <span className="text-primary font-bold text-lg leading-none">-20%</span>
            <span className="text-primary/60 text-[9px] font-medium">azi</span>
          </div>
        </div>

        {/* Right column - two stacked images */}
        <div className="flex flex-row lg:flex-col gap-3">
          <div className="relative flex-1 rounded-3xl overflow-hidden min-h-[160px] group">
            <Image
              src={heroProducts[1]?.image || "/placeholder.svg"}
              alt="Featured"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white text-[13px] font-medium">{heroProducts[1]?.name}</p>
              <p className="text-white/70 text-[12px] mt-0.5">{heroProducts[1]?.price.toFixed(2)} MDL</p>
            </div>
          </div>
          <div className="relative flex-1 rounded-3xl overflow-hidden min-h-[160px] group">
            <Image
              src={heroProducts[2]?.image || "/placeholder.svg"}
              alt="Featured"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white text-[13px] font-medium">{heroProducts[2]?.name}</p>
              <p className="text-white/70 text-[12px] mt-0.5">{heroProducts[2]?.price.toFixed(2)} MDL</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
