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
    <div className="group bg-white rounded-2xl border border-warm overflow-hidden hover:shadow-xl hover:shadow-foreground/5 transition-all duration-500 hover:-translate-y-1">
      {/* Image area */}
      <div onClick={onClick} className="cursor-pointer relative overflow-hidden">
        <div className="aspect-[4/3] bg-gradient-to-br from-warm to-warm-dark relative">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {product.featured && (
            <span className="bg-gold text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
              ★ Popular
            </span>
          )}
        </div>

        {/* Quick view hint */}
        <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="bg-white/90 backdrop-blur-sm text-center py-2 rounded-lg text-xs font-semibold text-primary">
            Click pentru detalii
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {categoryInfo && (
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
            {categoryInfo.name}
          </span>
        )}
        <h3 className="mt-2.5 font-semibold text-foreground leading-snug line-clamp-2 text-[15px]">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-0.5 mt-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className={`text-xs ${i < product.rating ? "text-gold" : "text-warm-dark"}`}
            >
              ★
            </span>
          ))}
          <span className="ml-1.5 text-[11px] text-foreground/40 font-medium">
            {product.rating}.0
          </span>
        </div>

        {/* Price + Cart */}
        <div className="mt-4 flex items-end justify-between gap-3">
          <div>
            <span className="text-2xl font-bold text-foreground tracking-tight">
              {product.price.toFixed(0)}
            </span>
            <span className="text-sm text-foreground/40 font-medium ml-0.5">
              .{(product.price % 1).toFixed(2).slice(2)} MDL
            </span>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
            className="flex items-center gap-1.5 bg-primary hover:bg-primary-dark text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all duration-200 hover:shadow-md hover:shadow-primary/20 active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Coș
          </button>
        </div>
      </div>
    </div>
  );
}
