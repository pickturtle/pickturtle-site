import { useState, useEffect } from "react";
import type { Product } from "@/types";
import { products as mockProducts } from "@/data/mock-data";

export function useCatalogProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let cancelled = false;

    const loadProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        // Simulate loading
        await new Promise((resolve) => setTimeout(resolve, 150));

        if (!cancelled) {
          // TODO: substituir por fonte de dados real
          setProducts(mockProducts);
          setLoading(false);
        }
      } catch (e) {
        if (!cancelled) {
          setError(
            e instanceof Error ? e : new Error("Failed to load products"),
          );
          setLoading(false);
        }
      }
    };

    loadProducts();

    return () => {
      cancelled = true;
    };
  }, []);

  return { products, loading, error };
}
