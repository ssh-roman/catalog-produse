"use client";

import { Product } from "@/lib/data";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

export default function ProductGrid({ products, onProductClick }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-24">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-surface-elevated rounded-2xl mb-5">
          <span className="text-2xl">🔍</span>
        </div>
        <p className="text-foreground font-medium">Nu am găsit produse</p>
        <p className="text-muted text-sm mt-1.5">
          Încearcă să modifici filtrele sau termenul de căutare.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {products.map((product, i) => (
        <div
          key={product.id}
          className="animate-fade-up"
          style={{ animationDelay: `${Math.min(i * 50, 350)}ms` }}
        >
          <ProductCard product={product} onClick={() => onProductClick(product)} />
        </div>
      ))}
    </div>
  );
}
