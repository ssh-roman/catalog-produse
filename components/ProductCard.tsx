"use client";

import Image from "next/image";
import { Product, getCategoryInfo } from "@/lib/data";
import { useCart } from "@/lib/cart-context";

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  const { addToCart } = useCart();
  const categoryInfo = getCategoryInfo(product.category);

  return (
    <div className="group bg-surface rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:shadow-primary/[0.06] hover:border-primary/20 transition-all duration-500 hover:-translate-y-1">
      {/* Image */}
      <div onClick={onClick} className="cursor-pointer relative overflow-hidden">
        <div className="aspect-[4/3] bg-surface-elevated relative">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Badges */}
        {product.featured && (
          <span className="absolute top-3 left-3 bg-accent text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg shadow-sm">
            Popular
          </span>
        )}

        {/* Quick view */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <div className="bg-surface/90 backdrop-blur-sm text-center py-2 rounded-lg text-xs font-semibold text-primary border border-border">
            Vezi detalii
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {categoryInfo && (
          <span className="inline-block text-[10px] font-semibold text-primary bg-primary-light px-2 py-0.5 rounded-md">
            {categoryInfo.name}
          </span>
        )}
        <h3 className="mt-2 font-semibold text-foreground leading-snug line-clamp-2 text-[14px]">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-0.5 mt-1.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={`text-[11px] ${i < product.rating ? "text-gold" : "text-border"}`}>★</span>
          ))}
          <span className="ml-1 text-[10px] text-muted">{product.rating}.0</span>
        </div>

        {/* Price + Cart */}
        <div className="mt-3 flex items-end justify-between gap-2">
          <div>
            <span className="text-xl font-bold text-foreground font-display tracking-tight">
              {product.price.toFixed(0)}
            </span>
            <span className="text-xs text-muted ml-0.5">
              .{(product.price % 1).toFixed(2).slice(2)} MDL
            </span>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
            className="flex items-center gap-1 bg-primary hover:bg-primary-dark text-white text-[11px] font-semibold px-3 py-2 rounded-lg transition-all duration-200 hover:shadow-md hover:shadow-primary/25 active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Coș
          </button>
        </div>
      </div>
    </div>
  );
}
