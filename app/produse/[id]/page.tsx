import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProductById, getProductsByCategory, getCategoryInfo } from "@/lib/data";
import AddToCartButton from "@/components/AddToCartButton";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return { title: "Produs negăsit" };
  return { title: `${product.name} — CasaMea`, description: product.description };
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  const categoryInfo = getCategoryInfo(product.category);
  const similarProducts = getProductsByCategory(product.category).filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-muted mb-10">
        <Link href="/" className="hover:text-primary transition-colors">Acasă</Link>
        <span className="text-border">/</span>
        <Link href="/#produse" className="hover:text-primary transition-colors">Produse</Link>
        <span className="text-border">/</span>
        {categoryInfo && (
          <>
            <span>{categoryInfo.name}</span>
            <span className="text-border">/</span>
          </>
        )}
        <span className="text-foreground/70 truncate max-w-[200px]">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Image */}
        <div className="animate-fade-up">
          <div className="relative aspect-square bg-surface-elevated rounded-3xl overflow-hidden border border-border">
            <Image src={product.image} alt={product.name} fill className="object-cover" />
            {product.featured && (
              <span className="absolute top-5 left-5 bg-accent text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg">
                Popular
              </span>
            )}
          </div>
        </div>

        {/* Details */}
        <div className="animate-fade-up" style={{ animationDelay: '100ms' }}>
          {categoryInfo && (
            <span className="inline-block text-[10px] font-semibold text-primary bg-primary-light px-3 py-1.5 rounded-md">
              {categoryInfo.icon} {categoryInfo.name}
            </span>
          )}

          <h1 className="mt-5 font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-foreground leading-tight">
            {product.name}
          </h1>

          <div className="flex items-center gap-1 mt-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className={`text-lg ${i < product.rating ? "text-gold" : "text-border"}`}>★</span>
            ))}
            <span className="ml-2 text-sm text-muted">{product.rating}.0 din 5</span>
          </div>

          <div className="mt-8 inline-flex items-baseline gap-2 bg-primary-light rounded-2xl px-6 py-4 border border-primary/10">
            <span className="text-4xl sm:text-5xl font-display font-bold text-primary tracking-tight">
              {product.price.toFixed(2)}
            </span>
            <span className="text-lg text-primary/50">MDL</span>
          </div>

          <div className="mt-8">
            <h3 className="text-[10px] font-semibold uppercase tracking-wider text-muted mb-3">Descriere</h3>
            <p className="text-muted leading-relaxed text-[15px]">{product.description}</p>
          </div>

          <div className="my-8 h-px bg-border" />

          <div className="flex flex-col sm:flex-row gap-3">
            <AddToCartButton product={product} />
            <button className="flex-1 border border-border text-muted hover:border-foreground/20 hover:text-foreground font-semibold px-6 py-4 rounded-xl transition-all duration-200 text-lg">
              ♡ Favorite
            </button>
          </div>

          {/* Features */}
          <div className="mt-8 grid grid-cols-3 gap-2.5">
            {[
              { icon: "🚚", label: "Livrare 24h" },
              { icon: "↩️", label: "Retur 30 zile" },
              { icon: "✓", label: "Garanție" },
            ].map((f) => (
              <div key={f.label} className="text-center p-3 bg-surface-elevated rounded-xl border border-border-light">
                <span className="text-base">{f.icon}</span>
                <p className="text-[10px] text-muted font-medium mt-1">{f.label}</p>
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
              <span className="inline-flex items-center gap-2 bg-primary-light text-primary text-xs font-semibold px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                Recomandări
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mt-4">
                Produse Similare
              </h2>
            </div>
            <Link href="/#produse" className="text-sm text-primary font-semibold hover:underline hidden sm:block">
              Vezi toate →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {similarProducts.map((p, i) => {
              const cat = getCategoryInfo(p.category);
              return (
                <Link
                  key={p.id}
                  href={`/produse/${p.id}`}
                  className="group bg-surface rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:shadow-primary/[0.06] hover:border-primary/20 transition-all duration-500 hover:-translate-y-1 animate-fade-up"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="aspect-[4/3] bg-surface-elevated relative overflow-hidden">
                    <Image src={p.image} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-4">
                    {cat && (
                      <span className="text-[10px] font-semibold text-primary bg-primary-light px-2 py-0.5 rounded-md">{cat.name}</span>
                    )}
                    <h3 className="mt-2 font-semibold text-foreground text-sm">{p.name}</h3>
                    <p className="mt-2 text-lg font-display font-bold text-foreground tracking-tight">
                      {p.price.toFixed(2)} <span className="text-xs font-medium text-muted">MDL</span>
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
