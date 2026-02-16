import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export const metadata: Metadata = {
  title: "CasaMea — Produse Casnice pentru o Casă cu Suflet",
  description:
    "Descoperă cele mai bune produse casnice pentru curățenie, bucătărie, baie și grădină. Calitate aleasă cu grijă, livrare rapidă în toată România.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body className="antialiased">
        <CartProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
