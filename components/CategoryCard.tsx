import { CategoryInfo } from "@/lib/data";

interface CategoryCardProps {
  category: CategoryInfo;
  isActive: boolean;
  onClick: () => void;
}

export default function CategoryCard({
  category,
  isActive,
  onClick,
}: CategoryCardProps) {
  return (
    <button
      onClick={onClick}
      className={`group relative flex flex-col items-center gap-3 p-5 sm:p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer overflow-hidden ${
        isActive
          ? "border-primary bg-primary-light shadow-lg shadow-primary/10 scale-[1.03]"
          : "border-transparent bg-surface hover:border-primary/20 hover:shadow-md hover:shadow-foreground/[0.03]"
      }`}
    >
      <span className="relative text-4xl sm:text-5xl group-hover:scale-110 transition-transform duration-300">
        {category.icon}
      </span>
      <span className="relative font-display font-semibold text-foreground text-sm">
        {category.name}
      </span>
      <span className="relative text-xs text-muted text-center leading-relaxed hidden sm:block">
        {category.description}
      </span>
    </button>
  );
}
