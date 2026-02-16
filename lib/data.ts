export type Category = "curatenie" | "bucatarie" | "baie" | "spalare" | "organizare" | "gradina";

export interface Product {
  id: string;
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
    slug: "curatenie",
    name: "Curățenie",
    icon: "🧹",
    description: "Produse pentru curățenia casei tale",
  },
  {
    slug: "bucatarie",
    name: "Bucătărie",
    icon: "🍳",
    description: "Accesorii și produse pentru bucătărie",
  },
  {
    slug: "baie",
    name: "Baie",
    icon: "🛁",
    description: "Produse pentru baie și igienă",
  },
  {
    slug: "spalare",
    name: "Spălare Rufe",
    icon: "👕",
    description: "Detergenți și produse pentru spălare",
  },
  {
    slug: "organizare",
    name: "Organizare",
    icon: "📦",
    description: "Soluții de organizare pentru casă",
  },
  {
    slug: "gradina",
    name: "Grădină",
    icon: "🌱",
    description: "Unelte și produse pentru grădină",
  },
];

export const products: Product[] = [
  // Curățenie (4)
  {
    id: "detergent-universal",
    name: "Detergent Universal Multi-Suprafețe",
    description:
      "Detergent universal pentru toate suprafețele din casă. Formula puternică care îndepărtează murdăria și grăsimea cu ușurință. Parfum proaspăt de lavandă.",
    price: 24.99,
    category: "curatenie",
    image: "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=600&h=600&fit=crop",
    featured: true,
    rating: 5,
  },
  {
    id: "mop-microfibra",
    name: "Mop Microfibră Premium",
    description:
      "Mop cu pad din microfibră de înaltă calitate. Se potrivește perfect pentru pardoseli din gresie, parchet și laminat. Mâner telescopic reglabil.",
    price: 89.99,
    category: "curatenie",
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&h=600&fit=crop",
    featured: false,
    rating: 4,
  },
  {
    id: "aspirator-manual",
    name: "Aspirator Manual Compact",
    description:
      "Aspirator manual ușor și compact, ideal pentru curățarea rapidă a firimiturilor și prafului. Funcționează cu baterii reîncărcabile.",
    price: 149.99,
    category: "curatenie",
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=600&h=600&fit=crop",
    featured: true,
    rating: 4,
  },
  {
    id: "lavete-microfibra-set",
    name: "Set 10 Lavete Microfibră",
    description:
      "Set de 10 lavete din microfibră în culori diferite. Absorbante și durabile, perfecte pentru orice tip de curățenie. Se pot spăla la mașină.",
    price: 34.99,
    category: "curatenie",
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600&h=600&fit=crop",
    featured: false,
    rating: 5,
  },

  // Bucătărie (4)
  {
    id: "set-cutite-bucatarie",
    name: "Set Cuțite Bucătărie Inox",
    description:
      "Set de 6 cuțite profesionale din oțel inoxidabil. Include cuțit de bucătar, cuțit de pâine, cuțit de legume și suport din lemn.",
    price: 199.99,
    category: "bucatarie",
    image: "https://images.unsplash.com/photo-1593618998160-e34014e67546?w=600&h=600&fit=crop",
    featured: true,
    rating: 5,
  },
  {
    id: "tocator-bambus",
    name: "Tocător din Bambus Natural",
    description:
      "Tocător elegant din bambus natural, rezistent la tăieturi și bacterii. Dimensiune generoasă pentru prepararea alimentelor.",
    price: 49.99,
    category: "bucatarie",
    image: "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=600&h=600&fit=crop",
    featured: false,
    rating: 4,
  },
  {
    id: "set-oale-ceramica",
    name: "Set Oale Ceramică Anti-Aderentă",
    description:
      "Set de 3 oale cu strat ceramic anti-aderent. Compatibile cu toate tipurile de plite, inclusiv inducție. Mânere ergonomice termoizolante.",
    price: 349.99,
    category: "bucatarie",
    image: "https://images.unsplash.com/photo-1584990347449-a8f1d0c55e47?w=600&h=600&fit=crop",
    featured: true,
    rating: 5,
  },
  {
    id: "recipient-sticla-set",
    name: "Set Recipiente Sticlă cu Capac",
    description:
      "Set de 5 recipiente din sticlă borosilicată cu capace etanșe. Perfecte pentru păstrarea alimentelor, compatibile cu microunde și congelator.",
    price: 79.99,
    category: "bucatarie",
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=600&h=600&fit=crop",
    featured: false,
    rating: 4,
  },

  // Baie (3)
  {
    id: "set-prosoape-bumbac",
    name: "Set Prosoape Bumbac Premium",
    description:
      "Set de 4 prosoape din bumbac 100% egyptian, extra moi și absorbante. Include 2 prosoape de baie și 2 prosoape de mâini.",
    price: 129.99,
    category: "baie",
    image: "https://images.unsplash.com/photo-1616627561839-074385245ff6?w=600&h=600&fit=crop",
    featured: true,
    rating: 5,
  },
  {
    id: "dozator-sapun-ceramic",
    name: "Dozator Săpun Lichid Ceramic",
    description:
      "Dozator elegant din ceramică pentru săpun lichid. Design modern care se potrivește în orice baie. Pompă anti-picurare din inox.",
    price: 44.99,
    category: "baie",
    image: "https://images.unsplash.com/photo-1620756236308-65c3ef5d25f3?w=600&h=600&fit=crop",
    featured: false,
    rating: 4,
  },
  {
    id: "covoras-baie-antiderapant",
    name: "Covoraș Baie Anti-Derapant",
    description:
      "Covoraș de baie din microfibră cu bază anti-derapantă. Ultra absorbant și ușor de curățat. Disponibil în mai multe culori.",
    price: 59.99,
    category: "baie",
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600&h=600&fit=crop",
    featured: false,
    rating: 4,
  },

  // Spălare Rufe (3)
  {
    id: "detergent-rufe-gel",
    name: "Detergent Rufe Gel Concentrat",
    description:
      "Detergent lichid concentrat pentru rufe albe și colorate. Formula hipoalergenică, ideală pentru pielea sensibilă. Parfum delicat de crin.",
    price: 39.99,
    category: "spalare",
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600&h=600&fit=crop",
    featured: true,
    rating: 5,
  },
  {
    id: "balsam-rufe-premium",
    name: "Balsam Rufe Aromă Premium",
    description:
      "Balsam de rufe cu parfum de trandafir și iasomie. Conferă moliciune excepțională și miros persistent hainelor tale.",
    price: 29.99,
    category: "spalare",
    image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=600&h=600&fit=crop",
    featured: false,
    rating: 4,
  },
  {
    id: "uscator-rufe-pliabil",
    name: "Uscător Rufe Pliabil",
    description:
      "Uscător de rufe pliabil din aluminiu ușor. Design compact care economisește spațiu. Suprafață mare de uscare cu brațe extensibile.",
    price: 119.99,
    category: "spalare",
    image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=600&h=600&fit=crop",
    featured: false,
    rating: 4,
  },

  // Organizare (3)
  {
    id: "cutii-depozitare-set",
    name: "Set Cutii Depozitare Modulare",
    description:
      "Set de 4 cutii de depozitare modulare cu capac. Fabricate din plastic reciclat, durabil și ușor. Ideale pentru dulap sau debara.",
    price: 69.99,
    category: "organizare",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop",
    featured: true,
    rating: 4,
  },
  {
    id: "organizator-sertar",
    name: "Organizator Sertar Ajustabil",
    description:
      "Organizator de sertar cu compartimente ajustabile din bambus. Se potrivește în orice sertar. Perfect pentru tacâmuri sau accesorii.",
    price: 54.99,
    category: "organizare",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop",
    featured: false,
    rating: 5,
  },
  {
    id: "raft-baie-montaj",
    name: "Raft Colț Baie Montaj Ușor",
    description:
      "Raft de colț pentru baie cu montaj fără găurire. 3 niveluri din aluminiu anti-rugină. Ideal pentru șampoane și produse de îngrijire.",
    price: 84.99,
    category: "organizare",
    image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&h=600&fit=crop",
    featured: false,
    rating: 4,
  },

  // Grădină (3)
  {
    id: "set-unelte-gradina",
    name: "Set Unelte Grădină 5 Piese",
    description:
      "Set complet de unelte pentru grădină: lopățică, greblă, foarfecă, mănuși și genuncher. Mânere ergonomice anti-alunecare.",
    price: 99.99,
    category: "gradina",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=600&fit=crop",
    featured: true,
    rating: 5,
  },
  {
    id: "ghiveci-auto-udare",
    name: "Ghiveci cu Auto-Udare",
    description:
      "Ghiveci elegant cu sistem de auto-udare integrat. Rezervor de apă pentru până la 2 săptămâni. Design modern pentru interior și exterior.",
    price: 64.99,
    category: "gradina",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&h=600&fit=crop",
    featured: false,
    rating: 4,
  },
  {
    id: "furtun-extensibil",
    name: "Furtun Grădină Extensibil 30m",
    description:
      "Furtun extensibil de la 10m la 30m cu 8 moduri de pulverizare. Material latex durabil cu conectori din alamă. Se contractă automat.",
    price: 139.99,
    category: "gradina",
    image: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=600&h=600&fit=crop",
    featured: false,
    rating: 4,
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function searchProducts(query: string): Product[] {
  const lower = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(lower) ||
      p.description.toLowerCase().includes(lower)
  );
}

export function getProductsByCategory(category: Category): Product[] {
  return products.filter((p) => p.category === category);
}

export function getCategoryInfo(slug: Category): CategoryInfo | undefined {
  return categories.find((c) => c.slug === slug);
}
