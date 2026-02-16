"use client";

import { useState, useMemo } from "react";
import HeroBanner from "@/components/HeroBanner";
import CategoryCard from "@/components/CategoryCard";
import FilterBar from "@/components/FilterBar";
import ProductGrid from "@/components/ProductGrid";
import ProductModal from "@/components/ProductModal";
import { Product, Category, products, categories } from "@/lib/data";

export default function Home() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [sortBy, setSortBy] = useState("price-asc");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (search) {
      const lower = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(lower) ||
          p.description.toLowerCase().includes(lower)
      );
    }

    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory);
    }

    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        result.sort((a, b) => a.name.localeCompare(b.name, "ro"));
        break;
    }

    return result;
  }, [search, activeCategory, sortBy]);

  return (
    <>
      <HeroBanner />

      {/* Categories */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-warm/50 to-transparent h-1/2" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Explorează
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground mt-2">
              Categorii Populare
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {categories.map((cat, i) => (
              <div
                key={cat.slug}
                className="animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <CategoryCard
                  category={cat}
                  isActive={activeCategory === cat.slug}
                  onClick={() =>
                    setActiveCategory(
                      activeCategory === cat.slug ? null : cat.slug
                    )
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="produse" className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Catalog
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-foreground mt-2">
                Toate Produsele
              </h2>
            </div>
            <span className="text-sm text-foreground/40 font-medium hidden sm:block">
              {filteredProducts.length} produse
            </span>
          </div>

          <FilterBar
            search={search}
            onSearchChange={setSearch}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />

          <div className="mt-10">
            <ProductGrid
              products={filteredProducts}
              onProductClick={setSelectedProduct}
            />
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-foreground" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl text-white">
              Livrare în <span className="text-primary italic">toată România</span>
            </h2>
            <p className="mt-3 text-white/50 max-w-md">
              Comenzile plasate până la ora 14:00 sunt expediate în aceeași zi.
              Calitate garantată sau banii înapoi.
            </p>
          </div>
          <a
            href="#produse"
            className="flex-shrink-0 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
          >
            Vezi Catalogul →
          </a>
        </div>
      </section>

      {/* Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}
