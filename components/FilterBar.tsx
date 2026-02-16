"use client";

import { Category, categories } from "@/lib/data";

interface FilterBarProps {
  search: string;
  onSearchChange: (value: string) => void;
  activeCategory: Category | null;
  onCategoryChange: (category: Category | null) => void;
  sortBy: string;
  onSortChange: (value: string) => void;
}

export default function FilterBar({
  search,
  onSearchChange,
  activeCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
}: FilterBarProps) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      {/* Search */}
      <div className="relative flex-1 max-w-sm">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        <input
          type="text"
          placeholder="Caută produse..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 bg-surface border border-border rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-muted/50"
        />
      </div>

      {/* Category pills */}
      <div className="flex flex-wrap gap-1.5">
        <button
          onClick={() => onCategoryChange(null)}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
            activeCategory === null
              ? "bg-primary text-white shadow-sm shadow-primary/25"
              : "bg-surface-elevated text-muted hover:text-foreground"
          }`}
        >
          Toate
        </button>
        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() =>
              onCategoryChange(activeCategory === cat.slug ? null : cat.slug)
            }
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
              activeCategory === cat.slug
                ? "bg-primary text-white shadow-sm shadow-primary/25"
                : "bg-surface-elevated text-muted hover:text-foreground"
            }`}
          >
            {cat.icon} {cat.name}
          </button>
        ))}
      </div>

      {/* Sort */}
      <select
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
        className="px-3.5 py-2.5 bg-surface border border-border rounded-xl text-xs text-muted font-medium focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all cursor-pointer"
      >
        <option value="price-asc">Preț ↑ crescător</option>
        <option value="price-desc">Preț ↓ descrescător</option>
        <option value="name-asc">Nume A → Z</option>
      </select>
    </div>
  );
}
