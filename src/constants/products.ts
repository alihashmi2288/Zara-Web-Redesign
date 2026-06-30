export interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  composition: string;
  images: string[];
  videos?: string[];
  sizes: string[];
  colors: { name: string; hex: string }[];
  details: string[];
  category: 'woman' | 'man' | 'kids' | 'beauty';
  rating: number;
  reviewsCount: number;
}

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Oversized Wool Blend Coat",
    price: "199.00 USD",
    category: "woman",
    description: "Long coat made of a wool blend. Lapel collar and long sleeves. Front welt pockets. Matching interior lining. Front button closure.",
    composition: "75% wool · 25% polyamide",
    images: [
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=2574&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2576&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=2574&auto=format&fit=crop"
    ],
    videos: [
      "https://player.vimeo.com/external/494252666.sd.mp4?s=721c0704044708304918f780824968159187310b&profile_id=165&oauth2_token_id=57447761"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Camel", hex: "#c19a6b" }
    ],
    details: [
      "Height of model: 177 cm / 5′ 9″",
      "Model is wearing size: S",
      "Dry clean only",
      "Made in Portugal"
    ],
    rating: 4.8,
    reviewsCount: 124
  },
  {
    id: "2",
    name: "Satin Finish Dress",
    price: "59.90 USD",
    category: "woman",
    description: "Midi dress with a straight neckline and thin straps. Side hidden in-seam zip closure.",
    composition: "100% viscose",
    images: [
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=2574&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2670&auto=format&fit=crop"
    ],
    videos: [
      "https://player.vimeo.com/external/459389137.sd.mp4?s=964e53f02e6270518fd1d11da34c022977d5d975&profile_id=165&oauth2_token_id=57447761"
    ],
    sizes: ["S", "M", "L"],
    colors: [
      { name: "Emerald", hex: "#046307" },
      { name: "Black", hex: "#000000" }
    ],
    details: [
      "Height of model: 178 cm / 5′ 10″",
      "Model is wearing size: S",
      "Machine wash cold",
      "Imported"
    ],
    rating: 4.5,
    reviewsCount: 86
  },
  {
    id: "3",
    name: "Textured Suit Blazer",
    price: "129.00 USD",
    category: "man",
    description: "Blazer with a notched lapel collar and long sleeves. Chest welt pocket and hip flap pockets. Interior pocket. Central back vent. Front button closure.",
    composition: "100% polyester",
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2680&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=2680&auto=format&fit=crop"
    ],
    sizes: ["46", "48", "50", "52", "54"],
    colors: [
      { name: "Navy", hex: "#000080" },
      { name: "Grey", hex: "#808080" }
    ],
    details: [
      "Height of model: 189 cm / 6′ 2″",
      "Model is wearing size: 50",
      "Dry clean only"
    ],
    rating: 4.9,
    reviewsCount: 42
  },
  {
    id: "4",
    name: "Leather Loafers",
    price: "89.90 USD",
    category: "man",
    description: "Leather loafers with a classic design. Round toe. Topstitching. Leather lining and insole.",
    composition: "100% cow leather",
    images: [
      "https://images.unsplash.com/photo-1614252369475-531eba835eb1?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?q=80&w=2670&auto=format&fit=crop"
    ],
    sizes: ["40", "41", "42", "43", "44", "45"],
    colors: [
      { name: "Brown", hex: "#8b4513" },
      { name: "Black", hex: "#000000" }
    ],
    details: [
      "Genuine leather",
      "Made in Spain"
    ],
    rating: 4.7,
    reviewsCount: 65
  },
  {
    id: "5",
    name: "Knit Cardigan with Buttons",
    price: "35.90 USD",
    category: "kids",
    description: "V-neck cardigan with long sleeves. Front button closure. Ribbed trims.",
    composition: "100% cotton",
    images: [
      "https://images.unsplash.com/photo-1519457431-44ccd64a579b?q=80&w=1000",
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=1000"
    ],
    sizes: ["6-9M", "9-12M", "12-18M", "18-24M", "2-3Y"],
    colors: [
      { name: "Cream", hex: "#fffdd0" },
      { name: "Blue", hex: "#add8e6" }
    ],
    details: [
      "Soft touch fabric",
      "Machine wash warm"
    ],
    rating: 4.6,
    reviewsCount: 38
  },
  {
    id: "6",
    name: "Red Seduction Perfume",
    price: "25.90 USD",
    category: "beauty",
    description: "Eau de toilette. The fragrance pyramid reveals notes of red fruits, jasmine and vanilla. A feminine, intense and long-lasting fragrance.",
    composition: "Alcohol denat, Aqua, Parfum",
    images: [
      "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=2670&auto=format&fit=crop"
    ],
    sizes: ["100ml"],
    colors: [
      { name: "Clear", hex: "#ffffff" }
    ],
    details: [
      "Feminine fragrance",
      "Long-lasting"
    ],
    rating: 4.4,
    reviewsCount: 112
  }
];
