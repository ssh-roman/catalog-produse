"use client";

import { Product } from "@/lib/data";
import { useCart } from "@/lib/cart-context";

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart, setIsCartOpen } = useCart();

  return (
    <button
      onClick={() => {
        addToCart(product);
        setIsCartOpen(true);
      }}
      className="flex-1 inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-4 rounded-xl transition-all duration-200 text-lg hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98]"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
      </svg>
      Adaugă în Coș
    </button>
  );
}
