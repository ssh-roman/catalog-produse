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
    <div className="group bg-surface rounded-2xl overflow-hidden border border-border/60 hover:shadow-lg transition-all duration-300">
      {/* Image */}
      <div onClick={onClick} className="cursor-pointer relative overflow-hidden bg-surface-elevated">
        <div className="aspect-square relative">
          <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
        {product.featured && (
          <span className="absolute top-3 left-3 bg-primary text-white text-[10px] font-medium px-2.5 py-1 rounded-full">
            Bestseller
          </span>
        )}
        {/* Add to cart overlay button */}
        <button
          onClick={(e) => { e.stopPropagation(); addToCart(product); }}
          className="absolute bottom-3 right-3 w-9 h-9 bg-primary text-white rounded-full flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 hover:bg-primary-dark shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center gap-1 mb-1.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={`text-[10px] ${i < product.rating ? "text-gold" : "text-border"}`}>★</span>
          ))}
        </div>

        <h3 onClick={onClick} className="text-[14px] font-medium text-foreground leading-snug line-clamp-2 cursor-pointer hover:text-primary transition-colors">
          {product.name}
        </h3>

        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-baseline gap-1">
            <span className="text-[15px] font-bold text-foreground">{product.price.toFixed(2)}</span>
            <span className="text-[11px] text-muted">MDL</span>
          </div>
          {categoryInfo && (
            <span className="text-[10px] text-primary bg-primary-light px-2 py-0.5 rounded-full font-medium">{categoryInfo.name}</span>
          )}
        </div>
      </div>
    </div>
  );
}
