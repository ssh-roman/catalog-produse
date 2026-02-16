"use client";

import { Product } from "@/lib/data";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

export default function ProductGrid({
  products,
  onProductClick,
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-warm rounded-full mb-6">
          <span className="text-3xl">🔍</span>
        </div>
        <p className="text-foreground/70 text-lg font-medium">
          Nu am găsit produse
        </p>
        <p className="text-foreground/40 text-sm mt-2 max-w-md mx-auto">
          Încearcă să modifici filtrele sau termenul de căutare pentru a găsi ce cauți.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
      {products.map((product, i) => (
        <div
          key={product.id}
          className="animate-fade-up"
          style={{ animationDelay: `${Math.min(i * 60, 400)}ms` }}
        >
          <ProductCard
            product={product}
            onClick={() => onProductClick(product)}
          />
        </div>
      ))}
    </div>
  );
}
