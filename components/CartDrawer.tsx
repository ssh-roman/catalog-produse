"use client";

import Image from "next/image";
import { useCart } from "@/lib/cart-context";

export default function CartDrawer() {
  const { items, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice, isCartOpen, setIsCartOpen } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end animate-fade-in" onClick={() => setIsCartOpen(false)}>
      <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" />

      <div className="relative bg-surface w-full max-w-md h-full flex flex-col shadow-2xl animate-slide-in-right border-l border-border" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="font-display text-lg font-bold text-foreground">Coșul Tău</h2>
            <p className="text-xs text-muted mt-0.5">{totalItems} {totalItems === 1 ? "produs" : "produse"}</p>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="w-9 h-9 flex items-center justify-center rounded-xl hover:bg-surface-elevated text-muted hover:text-foreground transition-all duration-200 border border-transparent hover:border-border"
            aria-label="Închide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-surface-elevated rounded-2xl mb-5">
                <span className="text-2xl">🛒</span>
              </div>
              <p className="text-foreground font-medium">Coșul este gol</p>
              <p className="text-muted text-sm mt-1.5">Adaugă produse din catalog.</p>
              <button onClick={() => setIsCartOpen(false)} className="mt-5 text-primary text-sm font-semibold hover:underline">
                ← Continuă cumpărăturile
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((item) => (
                <div key={item.product.id} className="flex gap-3.5 p-3 rounded-xl bg-surface border border-border group hover:border-primary/20 transition-colors">
                  <div className="relative w-[72px] h-[72px] flex-shrink-0 bg-surface-elevated rounded-xl overflow-hidden">
                    <Image src={item.product.image} alt={item.product.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-foreground text-sm truncate">{item.product.name}</h3>
                    <p className="text-primary font-bold text-sm mt-0.5">
                      {(item.product.price * item.quantity).toFixed(2)} MDL
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center bg-surface-elevated rounded-lg border border-border">
                        <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="w-7 h-7 flex items-center justify-center text-muted hover:text-foreground text-sm transition-colors">−</button>
                        <span className="text-xs font-semibold w-5 text-center text-foreground">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="w-7 h-7 flex items-center justify-center text-muted hover:text-foreground text-sm transition-colors">+</button>
                      </div>
                      <button onClick={() => removeFromCart(item.product.id)} className="ml-auto text-muted/50 hover:text-red-500 transition-colors" aria-label="Șterge">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border p-6 space-y-4">
            <div className="flex items-baseline justify-between">
              <span className="text-sm text-muted">Total</span>
              <div>
                <span className="text-2xl font-display font-bold text-foreground tracking-tight">{totalPrice.toFixed(2)}</span>
                <span className="text-sm text-muted ml-1">MDL</span>
              </div>
            </div>
            <button className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98]">
              Finalizează Comanda
            </button>
            <button onClick={clearCart} className="w-full text-muted/40 hover:text-red-500 text-xs font-medium transition-colors py-1">
              Golește coșul
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
