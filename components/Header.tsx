"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";

export default function Header() {
  const { totalItems, setIsCartOpen } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-background/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        {/* Left nav */}
        <nav className="hidden md:flex items-center gap-6">
          {[
            { href: "/#produse", label: "Produse" },
            { href: "/#categorii", label: "Categorii" },
            { href: "/despre", label: "Despre" },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="text-[13px] font-medium text-foreground/60 hover:text-foreground transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Logo center */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
          <span className="font-display text-xl font-semibold text-foreground tracking-tight italic">CasaMea</span>
        </Link>

        {/* Right actions */}
        <div className="flex items-center gap-3 ml-auto">
          {/* Search icon */}
          <button className="hidden md:flex p-1.5 text-foreground/50 hover:text-foreground transition-colors" aria-label="Caută">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[18px] h-[18px]">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>

          {/* Cart */}
          <button onClick={() => setIsCartOpen(true)} className="relative p-1.5 text-foreground/50 hover:text-foreground transition-colors" aria-label="Coș">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[18px] h-[18px]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-primary text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center animate-scale-in">{totalItems}</span>
            )}
          </button>

          {/* Mobile toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-1.5 text-foreground/50 hover:text-foreground" aria-label="Meniu">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[18px] h-[18px]">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="md:hidden px-4 pb-3 pt-1 animate-fade-in space-y-0.5 border-t border-border/30">
          {[
            { href: "/", label: "Acasă" },
            { href: "/#produse", label: "Produse" },
            { href: "/#categorii", label: "Categorii" },
            { href: "/despre", label: "Despre" },
          ].map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-foreground/60 hover:text-foreground rounded-lg transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
