"use client";

import Image from "next/image";
import { useCart } from "@/lib/cart-context";

export default function CartDrawer() {
  const { items, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice, isCartOpen, setIsCartOpen } = useCart();
  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end animate-fade-in" onClick={() => setIsCartOpen(false)}>
      <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" />
      <div className="relative bg-surface w-full max-w-sm h-full flex flex-col shadow-2xl animate-slide-in-right" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between px-5 h-14 border-b border-border/50">
          <span className="text-[14px] font-semibold text-foreground">Coș ({totalItems})</span>
          <button onClick={() => setIsCartOpen(false)} className="p-1.5 rounded-lg hover:bg-surface-elevated text-muted hover:text-foreground transition-all" aria-label="Închide">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-5">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted text-sm">Coșul este gol.</p>
              <button onClick={() => setIsCartOpen(false)} className="mt-3 text-primary text-sm font-medium hover:underline">← Continuă</button>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((item) => (
                <div key={item.product.id} className="flex gap-3 p-2 rounded-xl border border-border/50">
                  <div className="relative w-16 h-16 flex-shrink-0 bg-surface-elevated rounded-lg overflow-hidden">
                    <Image src={item.product.image} alt={item.product.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-medium text-foreground truncate">{item.product.name}</p>
                    <p className="text-primary text-[13px] font-semibold">{(item.product.price * item.quantity).toFixed(2)} MDL</p>
                    <div className="flex items-center gap-1.5 mt-1.5">
                      <div className="flex items-center border border-border rounded-full">
                        <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="w-6 h-6 flex items-center justify-center text-muted text-xs">−</button>
                        <span className="w-5 text-center text-[11px] font-semibold">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="w-6 h-6 flex items-center justify-center text-muted text-xs">+</button>
                      </div>
                      <button onClick={() => removeFromCart(item.product.id)} className="ml-auto text-muted/40 hover:text-red-500 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {items.length > 0 && (
          <div className="border-t border-border/50 p-5 space-y-3">
            <div className="flex justify-between items-baseline">
              <span className="text-sm text-muted">Total</span>
              <span className="text-xl font-bold text-foreground">{totalPrice.toFixed(2)} <span className="text-sm font-normal text-muted">MDL</span></span>
            </div>
            <button className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-2.5 rounded-full transition-colors text-[14px]">Finalizează</button>
            <button onClick={clearCart} className="w-full text-muted/40 hover:text-red-500 text-[12px] transition-colors">Golește</button>
          </div>
        )}
      </div>
    </div>
  );
}
