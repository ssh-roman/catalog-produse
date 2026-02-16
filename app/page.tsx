"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import HeroBanner from "@/components/HeroBanner";
import CategoryCard from "@/components/CategoryCard";
import FilterBar from "@/components/FilterBar";
import ProductGrid from "@/components/ProductGrid";
import ProductModal from "@/components/ProductModal";
import { Product, Category, categories } from "@/lib/data";
import { useProducts } from "@/lib/useProducts";

export default function Home() {
  const { products, loading, error } = useProducts();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [sortBy, setSortBy] = useState("price-asc");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    let result = [...products];
    if (search) {
      const lower = search.toLowerCase();
      result = result.filter((p) => p.name.toLowerCase().includes(lower) || p.description.toLowerCase().includes(lower));
    }
    if (activeCategory) result = result.filter((p) => p.category === activeCategory);
    switch (sortBy) {
      case "price-asc": result.sort((a, b) => a.price - b.price); break;
      case "price-desc": result.sort((a, b) => b.price - a.price); break;
      case "name-asc": result.sort((a, b) => a.name.localeCompare(b.name, "ro")); break;
    }
    return result;
  }, [products, search, activeCategory, sortBy]);

  const featured = products.filter(p => p.featured).slice(0, 4);
  const galleryProducts = products.slice(5, 11);

  return (
    <>
      <HeroBanner products={products} />

      {/* ─── BESTSELLING PRODUCTS ─── */}
      <section id="produse" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-[13px] text-muted mb-1">Cele mai căutate</p>
              <h2 className="font-display text-3xl sm:text-4xl text-foreground">
                Bestselling · <em className="text-primary">Produse</em>
              </h2>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-[13px] text-muted">
              {filteredProducts.length} produse
            </div>
          </div>

          <FilterBar
            search={search}
            onSearchChange={setSearch}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />

          <div className="mt-8">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-20">
                <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
                <p className="mt-4 text-sm text-muted">Se încarcă produsele...</p>
              </div>
            ) : error ? (
              <div className="flex flex-col items-center justify-center py-20">
                <p className="text-red-500 text-sm">{error}</p>
                <button onClick={() => window.location.reload()} className="mt-3 text-primary text-sm font-medium hover:underline">
                  Reîncearcă
                </button>
              </div>
            ) : (
              <ProductGrid products={filteredProducts} onProductClick={setSelectedProduct} />
            )}
          </div>
        </div>
      </section>

      {/* ─── TRUST / VALUES SECTION (green bg like inspiration) ─── */}
      <section className="relative overflow-hidden">
        <div className="bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Image */}
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                <Image
                  src={products[4]?.image || "/placeholder.svg"}
                  alt="Trust"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Text */}
              <div className="text-white">
                <p className="font-display text-3xl sm:text-4xl leading-snug">
                  Produse de <em>încredere</em> pe care te poți baza ani la rând — pentru o casă
                  <em> îngrijită</em> cu stil.
                </p>
                <div className="mt-10 grid grid-cols-3 gap-4">
                  {[
                    { icon: "🌿", label: "Materiale Naturale" },
                    { icon: "♻️", label: "Eco Friendly" },
                    { icon: "🏗️", label: "Materiale Sustenabile" },
                  ].map((v) => (
                    <div key={v.label} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                      <span className="text-2xl">{v.icon}</span>
                      <p className="text-white/80 text-[12px] font-medium mt-2">{v.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CATEGORIES (circular cards like inspiration) ─── */}
      <section id="categorii" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-[13px] text-muted mb-1">Explorează produsele noastre</p>
            <h2 className="font-display text-3xl sm:text-4xl text-foreground">
              și alege din {categories.length} · <em className="text-primary">Categorii</em>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center sm:justify-start gap-6 sm:gap-10">
            {categories.map((cat, i) => (
              <div key={cat.slug} className="animate-fade-up" style={{ animationDelay: `${i * 60}ms` }}>
                <CategoryCard
                  category={cat}
                  isActive={activeCategory === cat.slug}
                  products={products}
                  onClick={() => {
                    setActiveCategory(activeCategory === cat.slug ? null : cat.slug);
                    document.getElementById("produse")?.scrollIntoView({ behavior: "smooth" });
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GALLERY (bento grid like inspiration) ─── */}
      {galleryProducts.length > 0 && (
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="text-[13px] text-muted mb-1">Idei și inspirație</p>
                <h2 className="font-display text-3xl text-foreground">
                  Galerie · <em className="text-primary">Inspirație</em>
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {galleryProducts.map((p, i) => {
                const tall = i === 0 || i === 3;
                return (
                  <div key={p.id} className={`relative rounded-2xl overflow-hidden group cursor-pointer ${tall ? "row-span-2 aspect-auto min-h-[280px] sm:min-h-[380px]" : "aspect-square"}`}>
                    <Image src={p.image} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <p className="text-white text-[12px] font-medium truncate">{p.name}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Rating banner */}
          <div className="flex items-center gap-6 mb-10 flex-wrap">
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-display font-bold text-foreground">4.9</span>
              <div className="flex gap-0.5">
                {Array(5).fill(null).map((_, i) => <span key={i} className="text-gold text-sm">★</span>)}
              </div>
            </div>
            <p className="text-[13px] text-muted">Peste 500 de clienți mulțumiți din întreaga Moldovă.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { quote: "Produse excelente! Calitatea e mult peste ce mă așteptam la prețul acesta.", name: "Ana Ciobanu", city: "Chișinău" },
              { quote: "Comanda a ajuns în 24 de ore. Ambalaj impecabil și produse frumoase.", name: "Daniela Moraru", city: "Bălți" },
              { quote: "Am comandat set de oale ceramice — sunt absolut perfecte!", name: "Maria Rusu", city: "Cahul" },
              { quote: "Cel mai bun magazin online pentru produse casnice pe care l-am găsit.", name: "Sofia Popescu", city: "Orhei" },
            ].map((t, i) => (
              <div key={i} className="bg-surface border border-border/60 rounded-2xl p-5 flex flex-col animate-fade-up" style={{ animationDelay: `${i * 60}ms` }}>
                <div className="text-primary text-2xl font-display mb-3">&ldquo;</div>
                <p className="text-[13px] text-foreground/80 leading-relaxed flex-1">{t.quote}</p>
                <div className="mt-4 pt-3 border-t border-border/40">
                  <p className="text-[13px] font-semibold text-foreground">{t.name}</p>
                  <p className="text-[11px] text-muted">{t.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SUSTAINABILITY STATEMENT ─── */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-display text-2xl sm:text-3xl text-foreground leading-relaxed">
            Descoperă angajamentul nostru pentru 🌿 <em className="text-primary">materiale sustenabile</em>,
            producție cu impact redus și <em className="text-primary">parteneriate etice</em> —
            toate create pentru o casă mai verde și un viitor mai bun. 🏡
          </p>
        </div>
      </section>

      {/* ─── NEWSLETTER CTA (dark green like inspiration) ─── */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-dark rounded-3xl overflow-hidden relative">
            <div className="absolute inset-0">
              <Image
                src={products[8]?.image || "/placeholder.svg"}
                alt="Newsletter"
                fill
                className="object-cover opacity-20"
              />
            </div>
            <div className="relative px-8 sm:px-12 py-14 text-center">
              <p className="text-white/60 text-[13px] mb-3">Newsletter</p>
              <h2 className="font-display text-3xl sm:text-4xl text-white">
                Primește <em>10% Reducere</em>
              </h2>
              <p className="mt-3 text-white/50 text-[14px] max-w-md mx-auto">
                Abonează-te la newsletter și primești 10% reducere la prima comandă plus rețete și sfaturi pentru casă.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="email@exemplu.md"
                  className="w-full sm:flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white text-[14px] placeholder:text-white/30 focus:outline-none focus:border-white/40"
                />
                <button className="w-full sm:w-auto px-6 py-3 bg-white text-primary-dark font-medium text-[14px] rounded-full hover:bg-white/90 transition-colors">
                  Abonează-te
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BRAND FOOTER STATEMENT ─── */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
            <div>
              <p className="text-[13px] text-muted mb-2">CasaMea promovează produse casnice de calitate</p>
              <p className="text-[13px] text-muted">cu materiale alese cu grijă · <em className="font-display text-foreground not-italic">Produse Casnice</em>!</p>
            </div>
            <div className="flex gap-6 text-[13px] text-muted">
              <span>Kitchenware</span>
              <span>Tableware</span>
              <span>Lifestyle</span>
            </div>
          </div>
        </div>
      </section>

      {selectedProduct && <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </>
  );
}
