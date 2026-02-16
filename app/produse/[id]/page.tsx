import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  products,
  getProductById,
  getProductsByCategory,
  getCategoryInfo,
} from "@/lib/data";
import AddToCartButton from "@/components/AddToCartButton";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return { title: "Produs negăsit" };
  return {
    title: `${product.name} — CasaMea`,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) notFound();

  const categoryInfo = getCategoryInfo(product.category);
  const similarProducts = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-foreground/40 mb-10">
        <Link href="/" className="hover:text-primary transition-colors">Acasă</Link>
        <span>/</span>
        <Link href="/#produse" className="hover:text-primary transition-colors">Produse</Link>
        <span>/</span>
        {categoryInfo && (
          <>
            <span className="text-foreground/60">{categoryInfo.name}</span>
            <span>/</span>
          </>
        )}
        <span className="text-foreground/70 truncate max-w-[200px]">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Image */}
        <div className="animate-fade-up">
          <div className="relative aspect-square bg-gradient-to-br from-warm to-warm-dark rounded-3xl overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
            {product.featured && (
              <span className="absolute top-5 left-5 bg-gold text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                ★ Popular
              </span>
            )}
          </div>
        </div>

        {/* Details */}
        <div className="animate-fade-up delay-100">
          {categoryInfo && (
            <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-3 py-1.5 rounded-full">
              {categoryInfo.icon} {categoryInfo.name}
            </span>
          )}

          <h1 className="mt-5 font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={`text-lg ${i < product.rating ? "text-gold" : "text-warm-dark"}`}
              >
                ★
              </span>
            ))}
            <span className="ml-2 text-sm text-foreground/40">
              {product.rating}.0 din 5
            </span>
          </div>

          {/* Price */}
          <div className="mt-8 p-5 bg-primary-light/50 rounded-2xl border border-primary/10 inline-block">
            <span className="text-4xl sm:text-5xl font-bold text-primary tracking-tight">
              {product.price.toFixed(2)}
            </span>
            <span className="text-lg text-primary/60 ml-2">MDL</span>
          </div>

          {/* Description */}
          <div className="mt-8">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground/40 mb-3">
              Descriere
            </h3>
            <p className="text-foreground/60 leading-relaxed text-lg">
              {product.description}
            </p>
          </div>

          {/* Divider */}
          <div className="my-8 h-px bg-warm" />

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <AddToCartButton product={product} />
            <button className="flex-1 border-2 border-warm text-foreground/60 hover:border-foreground/20 hover:text-foreground font-semibold px-6 py-4 rounded-xl transition-all duration-200 text-lg">
              ♡ Favorite
            </button>
          </div>

          {/* Features */}
          <div className="mt-8 grid grid-cols-3 gap-3">
            {[
              { icon: "🚚", label: "Livrare 24h" },
              { icon: "↩️", label: "Retur 30 zile" },
              { icon: "✓", label: "Garanție" },
            ].map((f) => (
              <div key={f.label} className="text-center p-3 bg-warm/50 rounded-xl">
                <span className="text-lg">{f.icon}</span>
                <p className="text-[10px] text-foreground/50 font-medium mt-1">{f.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Similar Products */}
      {similarProducts.length > 0 && (
        <section className="mt-24">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Recomandări
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-foreground mt-2">
                Produse Similare
              </h2>
            </div>
            <Link
              href="/#produse"
              className="text-sm text-primary font-medium hover:underline hidden sm:block"
            >
              Vezi toate →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {similarProducts.map((p, i) => {
              const cat = getCategoryInfo(p.category);
              return (
                <Link
                  key={p.id}
                  href={`/produse/${p.id}`}
                  className="group bg-white rounded-2xl border border-warm overflow-hidden hover:shadow-xl hover:shadow-foreground/5 transition-all duration-500 hover:-translate-y-1 animate-fade-up"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-warm to-warm-dark relative overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-5">
                    {cat && (
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
                        {cat.name}
                      </span>
                    )}
                    <h3 className="mt-2.5 font-semibold text-foreground text-[15px]">
                      {p.name}
                    </h3>
                    <p className="mt-2 text-xl font-bold text-primary tracking-tight">
                      {p.price.toFixed(2)} <span className="text-sm font-medium text-foreground/40">MDL</span>
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
