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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <nav className="flex items-center gap-1.5 text-[12px] text-muted mb-8">
        <Link href="/" className="hover:text-primary transition-colors">Acasă</Link>
        <span>/</span>
        <Link href="/#produse" className="hover:text-primary transition-colors">Produse</Link>
        {categoryInfo && <><span>/</span><span>{categoryInfo.name}</span></>}
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
        <div className="animate-fade-up">
          <div className="relative aspect-square bg-surface-elevated rounded-3xl overflow-hidden border border-border/50">
            <Image src={product.image} alt={product.name} fill className="object-cover" />
            {product.featured && <span className="absolute top-4 left-4 bg-primary text-white text-[10px] font-medium px-2.5 py-1 rounded-full">Bestseller</span>}
          </div>
        </div>

        <div className="animate-fade-up" style={{ animationDelay: '80ms' }}>
          <div className="flex items-center gap-1 mb-2">
            {Array.from({ length: 5 }).map((_, i) => <span key={i} className={`text-sm ${i < product.rating ? "text-gold" : "text-border"}`}>★</span>)}
            <span className="ml-1 text-[12px] text-muted">{product.rating}.0</span>
          </div>
          {categoryInfo && <span className="text-[11px] text-primary bg-primary-light px-2.5 py-1 rounded-full font-medium">{categoryInfo.icon} {categoryInfo.name}</span>}

          <h1 className="mt-4 font-display text-3xl sm:text-4xl text-foreground leading-tight">{product.name}</h1>
          <p className="mt-4 text-3xl font-bold text-primary">{product.price.toFixed(2)} <span className="text-base font-normal text-muted">MDL</span></p>

          <div className="my-6 h-px bg-border/50" />
          <p className="text-[15px] text-muted leading-relaxed">{product.description}</p>

          <div className="mt-8 flex gap-3">
            <AddToCartButton product={product} />
            <button className="px-6 py-3.5 border border-border text-muted hover:text-foreground hover:border-foreground/20 font-medium rounded-full transition-all text-[15px]">♡</button>
          </div>

          <div className="mt-8 flex gap-6 text-[12px] text-muted">
            <span>🚚 Livrare 24h</span>
            <span>↩️ Retur 30 zile</span>
            <span>✓ Garanție</span>
          </div>
        </div>
      </div>

      {similarProducts.length > 0 && (
        <section className="mt-20">
          <h2 className="font-display text-2xl text-foreground mb-8">Produse <em className="text-primary">similare</em></h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {similarProducts.map((p) => {
              const cat = getCategoryInfo(p.category);
              return (
                <Link key={p.id} href={`/produse/${p.id}`} className="group bg-surface rounded-2xl border border-border/60 overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="aspect-square bg-surface-elevated relative overflow-hidden">
                    <Image src={p.image} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-4">
                    {cat && <span className="text-[11px] text-primary">{cat.name}</span>}
                    <h3 className="mt-1 text-[14px] font-medium text-foreground">{p.name}</h3>
                    <p className="mt-1.5 text-[15px] font-bold text-foreground">{p.price.toFixed(2)} <span className="text-[12px] font-normal text-muted">MDL</span></p>
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
