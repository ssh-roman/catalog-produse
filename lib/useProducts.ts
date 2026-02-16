"use client";

import { useState, useEffect } from "react";
import { Product, fetchProducts } from "./data";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);
        const data = await fetchProducts();
        setProducts(data);
      } catch {
        setError("Nu am putut încărca produsele. Verifică conexiunea.");
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, []);

  return { products, loading, error };
}
