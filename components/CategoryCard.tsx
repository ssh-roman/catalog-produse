import Image from "next/image";
import { CategoryInfo, Product } from "@/lib/data";

interface CategoryCardProps {
  category: CategoryInfo;
  isActive: boolean;
  onClick: () => void;
  products: Product[];
}

export default function CategoryCard({ category, isActive, onClick, products }: CategoryCardProps) {
  const categoryProduct = products.find(p => p.category === category.slug);

  return (
    <button onClick={onClick} className="group flex flex-col items-center gap-3 cursor-pointer">
      <div className={`relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-3 transition-all duration-200 ${
        isActive ? "border-primary shadow-lg shadow-primary/20 scale-105" : "border-transparent hover:border-primary/30"
      }`}>
        {categoryProduct ? (
          <Image src={categoryProduct.image} alt={category.name} fill className="object-cover group-hover:scale-110 transition-transform duration-300" />
        ) : (
          <div className="w-full h-full bg-surface-elevated flex items-center justify-center text-3xl">{category.icon}</div>
        )}
        <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors" />
      </div>
      <div className="text-center">
        <span className="text-[12px] font-medium text-muted uppercase tracking-wider">Explore</span>
        <p className={`text-[14px] font-semibold transition-colors ${isActive ? "text-primary" : "text-foreground"}`}>
          {category.name}
        </p>
      </div>
    </button>
  );
}
