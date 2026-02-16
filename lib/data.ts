export type Category = "electronics" | "jewelery" | "men's clothing" | "women's clothing";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  featured: boolean;
  rating: number;
}

export interface CategoryInfo {
  slug: Category;
  name: string;
  icon: string;
  description: string;
}

export const categories: CategoryInfo[] = [
  {
    slug: "electronics",
    name: "Electronice",
    icon: "💻",
    description: "Gadgeturi și dispozitive electronice",
  },
  {
    slug: "jewelery",
    name: "Bijuterii",
    icon: "💍",
    description: "Bijuterii elegante și accesorii",
  },
  {
    slug: "men's clothing",
    name: "Îmbrăcăminte Bărbați",
    icon: "👔",
    description: "Modă și stil pentru bărbați",
  },
  {
    slug: "women's clothing",
    name: "Îmbrăcăminte Femei",
    icon: "👗",
    description: "Modă și stil pentru femei",
  },
];

const API_BASE = "https://fakestoreapi.com";

interface ApiProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

function mapApiProduct(apiProduct: ApiProduct): Product {
  return {
    id: apiProduct.id,
    name: apiProduct.title,
    description: apiProduct.description,
    price: apiProduct.price,
    category: apiProduct.category as Category,
    image: apiProduct.image,
    featured: apiProduct.rating.rate >= 4,
    rating: Math.round(apiProduct.rating.rate),
  };
}

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(`${API_BASE}/products`);
  if (!res.ok) throw new Error("Failed to fetch products");
  const data: ApiProduct[] = await res.json();
  return data.map(mapApiProduct);
}

export async function fetchProductById(id: number): Promise<Product> {
  const res = await fetch(`${API_BASE}/products/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  const data: ApiProduct = await res.json();
  return mapApiProduct(data);
}

export async function fetchProductsByCategory(category: string): Promise<Product[]> {
  const res = await fetch(`${API_BASE}/products/category/${encodeURIComponent(category)}`);
  if (!res.ok) throw new Error("Failed to fetch products by category");
  const data: ApiProduct[] = await res.json();
  return data.map(mapApiProduct);
}

export function getCategoryInfo(slug: Category): CategoryInfo | undefined {
  return categories.find((c) => c.slug === slug);
}
