"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";

export default function Header() {
  const { totalItems, setIsCartOpen } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
              <span className="text-white font-serif text-lg font-bold">C</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl text-foreground leading-none tracking-tight">
                CasaMea
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-medium">
                produse casnice
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {[
              { href: "/", label: "Acasă" },
              { href: "/#produse", label: "Produse" },
              { href: "/despre", label: "Despre Noi" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-xl text-foreground/60 hover:text-primary hover:bg-primary-light transition-all duration-200 group"
              aria-label="Coș de cumpărături"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 group-hover:scale-110 transition-transform"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-primary text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center animate-scale-in ring-2 ring-background">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2.5 rounded-xl text-foreground/60 hover:text-primary hover:bg-primary-light transition-all"
              aria-label="Meniu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="md:hidden pb-4 border-t border-warm pt-3 animate-fade-up space-y-1">
            {[
              { href: "/", label: "Acasă" },
              { href: "/#produse", label: "Produse" },
              { href: "/despre", label: "Despre Noi" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-2.5 text-sm font-medium text-foreground/70 hover:text-primary hover:bg-primary-light rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
