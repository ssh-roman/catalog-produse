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

export default function FilterBar({ search, onSearchChange, activeCategory, onCategoryChange, sortBy, onSortChange }: FilterBarProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-2 flex-wrap">
        <button
          onClick={() => onCategoryChange(null)}
          className={`px-4 py-2 rounded-full text-[12px] font-medium border transition-all ${
            activeCategory === null
              ? "bg-primary text-white border-primary"
              : "bg-transparent text-foreground/60 border-border hover:border-primary/40 hover:text-foreground"
          }`}
        >
          Toate
        </button>
        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => onCategoryChange(activeCategory === cat.slug ? null : cat.slug)}
            className={`px-4 py-2 rounded-full text-[12px] font-medium border transition-all ${
              activeCategory === cat.slug
                ? "bg-primary text-white border-primary"
                : "bg-transparent text-foreground/60 border-border hover:border-primary/40 hover:text-foreground"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <div className="relative">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <input
            type="text"
            placeholder="Caută..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-9 pr-3 py-2 bg-transparent border border-border rounded-full text-[12px] w-40 focus:outline-none focus:border-primary transition-colors placeholder:text-muted/50"
          />
        </div>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="px-3 py-2 bg-transparent border border-border rounded-full text-[12px] text-muted focus:outline-none focus:border-primary cursor-pointer"
        >
          <option value="price-asc">Preț ↑</option>
          <option value="price-desc">Preț ↓</option>
          <option value="name-asc">Nume A-Z</option>
        </select>
      </div>
    </div>
  );
}
