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
          ? "border-primary bg-primary-light shadow-lg shadow-primary/10 scale-[1.02]"
          : "border-transparent bg-white hover:border-primary/20 hover:shadow-md"
      }`}
    >
      {/* Hover glow */}
      <div className={`absolute inset-0 rounded-2xl transition-opacity duration-300 ${
        isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
      }`} style={{
        background: 'radial-gradient(circle at 50% 0%, var(--primary-light) 0%, transparent 70%)',
      }} />

      <span className="relative text-4xl sm:text-5xl group-hover:scale-110 transition-transform duration-300">
        {category.icon}
      </span>
      <span className="relative font-semibold text-foreground text-sm sm:text-base">
        {category.name}
      </span>
      <span className="relative text-xs text-foreground/50 text-center leading-relaxed hidden sm:block">
        {category.description}
      </span>
    </button>
  );
}
