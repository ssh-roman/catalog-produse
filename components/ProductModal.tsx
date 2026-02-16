"use client";

import Image from "next/image";
import Link from "next/link";
import { Product, getCategoryInfo } from "@/lib/data";
import { useCart } from "@/lib/cart-context";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const { addToCart } = useCart();
  const categoryInfo = getCategoryInfo(product.category);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in" onClick={onClose}>
      <div className="absolute inset-0 bg-foreground/50 backdrop-blur-sm" />

      <div
        className="relative bg-surface rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-border animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <div className="relative">
          <div className="aspect-[16/10] bg-surface-elevated relative overflow-hidden rounded-t-3xl">
            <Image src={product.image} alt={product.name} fill className="object-cover" />
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 bg-surface/90 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center text-muted hover:text-foreground hover:rotate-90 transition-all duration-300 border border-border"
            aria-label="Închide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
          {product.featured && (
            <span className="absolute top-4 left-4 bg-accent text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg">
              Popular
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {categoryInfo && (
            <span className="inline-block text-[10px] font-semibold text-primary bg-primary-light px-2.5 py-1 rounded-md">
              {categoryInfo.icon} {categoryInfo.name}
            </span>
          )}

          <h2 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-foreground leading-tight">
            {product.name}
          </h2>

          <div className="flex items-center gap-1 mt-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className={`text-sm ${i < product.rating ? "text-gold" : "text-border"}`}>★</span>
            ))}
            <span className="ml-2 text-xs text-muted">{product.rating}.0 din 5</span>
          </div>

          <div className="mt-5 flex items-baseline gap-1.5">
            <span className="text-4xl font-display font-bold text-primary tracking-tight">{product.price.toFixed(2)}</span>
            <span className="text-sm text-muted font-medium">MDL</span>
          </div>

          <div className="my-5 h-px bg-border" />

          <p className="text-muted leading-relaxed">{product.description}</p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => { addToCart(product); onClose(); }}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              Adaugă în Coș
            </button>
            <Link
              href={`/produse/${product.id}`}
              className="flex-1 text-center border border-border text-muted font-semibold px-6 py-3.5 rounded-xl hover:border-foreground/20 hover:text-foreground transition-all duration-200"
            >
              Pagina Completă
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
