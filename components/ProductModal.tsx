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
      <div className="relative bg-surface rounded-3xl max-w-lg w-full max-h-[85vh] overflow-y-auto shadow-2xl animate-scale-in" onClick={(e) => e.stopPropagation()}>
        <div className="relative aspect-[16/10] overflow-hidden rounded-t-3xl">
          <Image src={product.image} alt={product.name} fill className="object-cover" />
          <button onClick={onClose} className="absolute top-3 right-3 w-8 h-8 bg-surface/90 backdrop-blur rounded-full flex items-center justify-center text-muted hover:text-foreground transition-colors" aria-label="Închide">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
          </button>
          {product.featured && <span className="absolute top-3 left-3 bg-primary text-white text-[10px] font-medium px-2.5 py-1 rounded-full">Bestseller</span>}
        </div>
        <div className="p-6">
          <div className="flex items-center gap-1 mb-2">
            {Array.from({ length: 5 }).map((_, i) => <span key={i} className={`text-[11px] ${i < product.rating ? "text-gold" : "text-border"}`}>★</span>)}
            {categoryInfo && <span className="ml-2 text-[11px] text-primary">{categoryInfo.name}</span>}
          </div>
          <h2 className="font-display text-2xl text-foreground">{product.name}</h2>
          <p className="mt-2 text-2xl font-bold text-primary">{product.price.toFixed(2)} <span className="text-sm font-normal text-muted">MDL</span></p>
          <div className="my-4 h-px bg-border/50" />
          <p className="text-[14px] text-muted leading-relaxed">{product.description}</p>
          <div className="mt-6 flex gap-2">
            <button onClick={() => { addToCart(product); onClose(); }} className="flex-1 bg-primary hover:bg-primary-dark text-white font-medium py-2.5 rounded-full transition-colors text-[14px]">
              Adaugă în coș
            </button>
            <Link href={`/produse/${product.id}`} className="flex-1 text-center border border-border text-muted hover:text-foreground font-medium py-2.5 rounded-full transition-all text-[14px]">
              Vezi detalii
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
