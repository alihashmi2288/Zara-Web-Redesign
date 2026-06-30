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
  category: 'woman' | 'man' | 'kids' | 'beauty' | 'accessories';
  rating: number;
  reviewsCount: number;
  
  // Filtering and sorting helpers
  brand?: string;
  isSale?: boolean;
  salePrice?: string;
  discountPercentage?: number;
  isNewArrival?: boolean;
  isBestSeller?: boolean;
  dateAdded?: string; // ISO string format
  popularity?: number; // scale 1-100
  ageGroup?: '0-2Y' | '3-5Y' | '6-12Y'; // for kids category
  subCategory?: 'clothing' | 'shoes' | 'accessories' | 'perfume' | 'cosmetics';
}

export const PRODUCTS: Product[] = [
  // --- WOMAN CATEGORY (12 items) ---
  {
    id: "1",
    name: "Oversized Wool Blend Coat",
    price: "199.00 USD",
    category: "woman",
    description: "Long coat made of a wool blend. Lapel collar and long sleeves. Front welt pockets. Matching interior lining. Front button closure.",
    composition: "75% wool · 25% polyamide",
    images: [
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1200&auto=format&fit=crop"
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
    reviewsCount: 124,
    brand: "ZARA STUDIO",
    isNewArrival: true,
    dateAdded: "2026-06-01",
    popularity: 95,
    subCategory: "clothing"
  },
  {
    id: "2",
    name: "Satin Finish Dress",
    price: "59.90 USD",
    category: "woman",
    description: "Midi dress with a straight neckline and thin straps. Side hidden in-seam zip closure.",
    composition: "100% viscose",
    images: [
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop"
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
    reviewsCount: 86,
    brand: "ZARA ORIGINALS",
    isBestSeller: true,
    dateAdded: "2026-05-15",
    popularity: 90,
    subCategory: "clothing"
  },
  {
    id: "7",
    name: "Linen Blend Vest",
    price: "49.90 USD",
    category: "woman",
    description: "V-neck vest made of a linen blend. Sleeveless design. Front button closure with contrast buttons.",
    composition: "55% linen · 45% viscose",
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Cream", hex: "#fffdd0" },
      { name: "Taupe", hex: "#b38b6d" }
    ],
    details: [
      "Height of model: 175 cm / 5′ 9″",
      "Model is wearing size: S",
      "Machine wash gentle"
    ],
    rating: 4.6,
    reviewsCount: 54,
    brand: "ZARA WOMAN",
    isSale: true,
    salePrice: "34.90 USD",
    discountPercentage: 30,
    dateAdded: "2026-04-20",
    popularity: 78,
    subCategory: "clothing"
  },
  {
    id: "8",
    name: "Draped Midi Dress",
    price: "79.90 USD",
    category: "woman",
    description: "Midi dress featuring a round neckline and long sleeves. Draped detail at the waist. Asymmetrical hem.",
    composition: "95% polyester · 5% elastane",
    images: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Crimson", hex: "#990000" },
      { name: "Black", hex: "#000000" }
    ],
    details: [
      "Model is 176 cm / 5′ 9″ wearing size M",
      "Concealed back zip"
    ],
    rating: 4.7,
    reviewsCount: 62,
    brand: "ZARA ORIGINALS",
    isNewArrival: true,
    dateAdded: "2026-06-15",
    popularity: 88,
    subCategory: "clothing"
  },
  {
    id: "9",
    name: "Oversized Cotton Trench",
    price: "159.00 USD",
    category: "woman",
    description: "Trench coat made of cotton blend fabric. Lapel collar, long adjustable sleeves with tabs. Double-breasted front button closure.",
    composition: "65% cotton · 35% polyester",
    images: [
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Beige", hex: "#f5f5dc" },
      { name: "Khaki", hex: "#8fbc8f" }
    ],
    details: [
      "Model wears size S",
      "Water resistant coating"
    ],
    rating: 4.9,
    reviewsCount: 92,
    brand: "ZARA STUDIO",
    isBestSeller: true,
    dateAdded: "2026-03-10",
    popularity: 98,
    subCategory: "clothing"
  },
  {
    id: "10",
    name: "Ribbed Knit Sweater",
    price: "49.90 USD",
    category: "woman",
    description: "High collar sweater made of soft ribbed knit fabric. Long sleeves. Ribbed trims.",
    composition: "50% viscose · 30% polyester · 20% nylon",
    images: [
      "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["S", "M", "L"],
    colors: [
      { name: "Gray", hex: "#808080" },
      { name: "Ivory", hex: "#fffff0" }
    ],
    details: [
      "Machine wash delicate cycle",
      "Lay flat to dry"
    ],
    rating: 4.4,
    reviewsCount: 47,
    brand: "ZARA WOMAN",
    isSale: true,
    salePrice: "35.90 USD",
    discountPercentage: 28,
    dateAdded: "2026-05-02",
    popularity: 82,
    subCategory: "clothing"
  },
  {
    id: "11",
    name: "High-Waisted Tailored Trousers",
    price: "69.90 USD",
    category: "woman",
    description: "Trousers featuring a high waist with belt loops. Front pockets and rear false welt pockets. Front zip fly and button closure.",
    composition: "80% polyester · 16% viscose · 4% elastane",
    images: [
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "White", hex: "#ffffff" }
    ],
    details: [
      "Model is 178 cm wearing size XS",
      "Dry clean recommended"
    ],
    rating: 4.6,
    reviewsCount: 110,
    brand: "ZARA ORIGINALS",
    isBestSeller: true,
    dateAdded: "2026-02-14",
    popularity: 89,
    subCategory: "clothing"
  },
  {
    id: "12",
    name: "Pleated Asymmetrical Skirt",
    price: "59.90 USD",
    category: "woman",
    description: "High-waisted skirt with pleated fabric design. Side concealed zip closure. Asymmetrical hemline.",
    composition: "100% polyester",
    images: [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["S", "M", "L"],
    colors: [
      { name: "Sage", hex: "#9caf88" },
      { name: "Terracotta", hex: "#e2725b" }
    ],
    details: [
      "Height of model: 177 cm wearing size S",
      "Iron low heat only"
    ],
    rating: 4.3,
    reviewsCount: 39,
    brand: "ZARA WOMAN",
    isSale: true,
    salePrice: "39.90 USD",
    discountPercentage: 33,
    dateAdded: "2026-04-12",
    popularity: 70,
    subCategory: "clothing"
  },
  {
    id: "13",
    name: "Cropped Leather Jacket",
    price: "189.00 USD",
    category: "woman",
    description: "Jacket made of genuine lambskin leather. Lapel collar with snaps. Long sleeves with zippers. Front zip pockets. Asymmetrical zip closure.",
    composition: "100% lamb leather · 100% polyester lining",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Black", hex: "#000000" }
    ],
    details: [
      "Premium genuine leather",
      "Specialist leather clean only"
    ],
    rating: 4.9,
    reviewsCount: 77,
    brand: "ZARA STUDIO",
    isNewArrival: true,
    dateAdded: "2026-06-20",
    popularity: 96,
    subCategory: "clothing"
  },
  {
    id: "14",
    name: "Floral Print Midi Dress",
    price: "89.90 USD",
    category: "woman",
    description: "V-neck midi dress with short sleeves. Floral print design. Front slit detail. Ruffled details.",
    composition: "100% polyester",
    images: [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Floral Navy", hex: "#1d2951" }
    ],
    details: [
      "Flowing fit",
      "Machine wash cold"
    ],
    rating: 4.5,
    reviewsCount: 50,
    brand: "ZARA ORIGINALS",
    isSale: false,
    dateAdded: "2026-05-10",
    popularity: 81,
    subCategory: "clothing"
  },
  {
    id: "15",
    name: "Poplin Shirt Dress",
    price: "69.90 USD",
    category: "woman",
    description: "Midi dress featuring a lapel collar and long cuffed sleeves. Front elastic waist details. Front button placket closure.",
    composition: "100% cotton",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "White", hex: "#ffffff" },
      { name: "Sky Blue", hex: "#87ceeb" }
    ],
    details: [
      "100% organic cotton",
      "Model wears size S"
    ],
    rating: 4.7,
    reviewsCount: 88,
    brand: "ZARA WOMAN",
    isNewArrival: true,
    dateAdded: "2026-06-25",
    popularity: 93,
    subCategory: "clothing"
  },
  {
    id: "16",
    name: "Wool Blend Cable Sweater",
    price: "99.90 USD",
    category: "woman",
    description: "Sweater made of wool blend yarn. Round neck, long sleeves. Cable knit patterns.",
    composition: "40% wool · 30% acrylic · 30% polyester",
    images: [
      "https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Oatmeal", hex: "#eae6df" }
    ],
    details: [
      "Heavyweight fabric",
      "Hand wash cold only"
    ],
    rating: 4.8,
    reviewsCount: 42,
    brand: "ZARA STUDIO",
    isSale: true,
    salePrice: "69.90 USD",
    discountPercentage: 30,
    dateAdded: "2026-03-01",
    popularity: 76,
    subCategory: "clothing"
  },

  // --- MAN CATEGORY (12 items) ---
  {
    id: "3",
    name: "Textured Suit Blazer",
    price: "129.00 USD",
    category: "man",
    description: "Blazer with a notched lapel collar and long sleeves. Chest welt pocket and hip flap pockets. Interior pocket. Central back vent. Front button closure.",
    composition: "100% polyester",
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=1200&auto=format&fit=crop"
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
    reviewsCount: 42,
    brand: "ZARA MAN",
    isNewArrival: false,
    dateAdded: "2026-05-01",
    popularity: 87,
    subCategory: "clothing"
  },
  {
    id: "4",
    name: "Leather Loafers",
    price: "89.90 USD",
    category: "man",
    description: "Leather loafers with a classic design. Round toe. Topstitching. Leather lining and insole.",
    composition: "100% cow leather",
    images: [
      "https://images.unsplash.com/photo-1614252369475-531eba835eb1?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?q=80&w=1200&auto=format&fit=crop"
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
    reviewsCount: 65,
    brand: "ZARA ORIGINALS",
    isBestSeller: true,
    dateAdded: "2026-04-10",
    popularity: 91,
    subCategory: "shoes"
  },
  {
    id: "17",
    name: "Structured Wool Coat",
    price: "229.00 USD",
    category: "man",
    description: "Double breasted long coat made of a wool blend. Peak lapels. Long sleeves with buttons on cuffs. Flap pockets at the hip.",
    composition: "60% wool · 35% polyester · 5% other fibers",
    images: [
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["48", "50", "52", "54"],
    colors: [
      { name: "Camel", hex: "#c19a6b" },
      { name: "Black", hex: "#000000" }
    ],
    details: [
      "Model is 187 cm / 6'1\" wearing size 50",
      "Dry clean only"
    ],
    rating: 4.8,
    reviewsCount: 38,
    brand: "ZARA STUDIO",
    isNewArrival: true,
    dateAdded: "2026-06-05",
    popularity: 94,
    subCategory: "clothing"
  },
  {
    id: "18",
    name: "Slim Fit Cotton Suit",
    price: "179.00 USD",
    category: "man",
    description: "Two-piece suit containing single-breasted blazer and tailored trousers. Stretch cotton fabric.",
    composition: "97% cotton · 3% elastane",
    images: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["46", "48", "50", "52", "54"],
    colors: [
      { name: "Sage", hex: "#7a8b7b" },
      { name: "Tan", hex: "#d2b48c" }
    ],
    details: [
      "Slim fit",
      "Warm iron if needed"
    ],
    rating: 4.6,
    reviewsCount: 71,
    brand: "ZARA ORIGINALS",
    isSale: true,
    salePrice: "129.00 USD",
    discountPercentage: 28,
    dateAdded: "2026-05-18",
    popularity: 85,
    subCategory: "clothing"
  },
  {
    id: "19",
    name: "Minimalist Crewneck Sweater",
    price: "49.90 USD",
    category: "man",
    description: "Crewneck sweater in fine-knit cotton. Ribbed collar, cuffs, and hem. Clean regular cut.",
    composition: "100% combed cotton",
    images: [
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505633560063-d824df76f744?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Cream", hex: "#fffdd0" },
      { name: "Forest", hex: "#228b22" }
    ],
    details: [
      "Lightweight breathable knit",
      "Machine wash cold"
    ],
    rating: 4.5,
    reviewsCount: 55,
    brand: "ZARA MAN",
    isNewArrival: true,
    dateAdded: "2026-06-18",
    popularity: 89,
    subCategory: "clothing"
  },
  {
    id: "20",
    name: "Oversized Denim Jacket",
    price: "69.90 USD",
    category: "man",
    description: "Denim jacket featuring a collared neck and long sleeves with button cuffs. Chest patch pockets and side pockets.",
    composition: "100% organic cotton",
    images: [
      "https://images.unsplash.com/photo-1505633560063-d824df76f744?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618886614638-80e3c103d31a?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Light Wash", hex: "#add8e6" },
      { name: "Dark Indigo", hex: "#000080" }
    ],
    details: [
      "Eco-conscious wash process",
      "Front metal button closure"
    ],
    rating: 4.7,
    reviewsCount: 112,
    brand: "ZARA ORIGINALS",
    isBestSeller: true,
    dateAdded: "2026-03-22",
    popularity: 92,
    subCategory: "clothing"
  },
  {
    id: "21",
    name: "Leather Bomber Jacket",
    price: "249.00 USD",
    category: "man",
    description: "Bomber jacket made of high-grade cow split leather. Ribbed collar, hem, and cuffs. Inside pocket.",
    composition: "100% leather · 100% polyester lining",
    images: [
      "https://images.unsplash.com/photo-1618886614638-80e3c103d31a?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Dark Brown", hex: "#5c4033" },
      { name: "Black", hex: "#000000" }
    ],
    details: [
      "Genuine leather construction",
      "Satin lining for smoothness"
    ],
    rating: 4.9,
    reviewsCount: 29,
    brand: "ZARA STUDIO",
    isNewArrival: true,
    dateAdded: "2026-06-22",
    popularity: 97,
    subCategory: "clothing"
  },
  {
    id: "22",
    name: "Regular Fit Linen Shirt",
    price: "49.90 USD",
    category: "man",
    description: "Linen shirt featuring a classic collar and long sleeves. Front patch pocket. Button placket.",
    composition: "100% linen",
    images: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544923246-77307dd654cb?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "White", hex: "#ffffff" },
      { name: "Olive", hex: "#556b2f" }
    ],
    details: [
      "Cool fabric for summer",
      "Model wearing size L"
    ],
    rating: 4.4,
    reviewsCount: 84,
    brand: "ZARA MAN",
    isSale: true,
    salePrice: "34.90 USD",
    discountPercentage: 30,
    dateAdded: "2026-04-28",
    popularity: 80,
    subCategory: "clothing"
  },
  {
    id: "23",
    name: "Technical Puffer Jacket",
    price: "119.00 USD",
    category: "man",
    description: "Waterproof technical jacket with synthetic feather filling. High neck, adjustable hood.",
    composition: "100% nylon · Recycled polyester fill",
    images: [
      "https://images.unsplash.com/photo-1544923246-77307dd654cb?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Steel", hex: "#4682b4" }
    ],
    details: [
      "Windbreaker cuffs",
      "Internal thermal insulation"
    ],
    rating: 4.7,
    reviewsCount: 46,
    brand: "ZARA MAN",
    isBestSeller: true,
    dateAdded: "2026-01-15",
    popularity: 88,
    subCategory: "clothing"
  },
  {
    id: "24",
    name: "Tailored Suit Trousers",
    price: "79.90 USD",
    category: "man",
    description: "Slim fit trousers. Front zip and button fastening. Diagonal side pockets and back buttoned welt pockets.",
    composition: "65% polyester · 35% viscose",
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["38", "40", "42", "44", "46"],
    colors: [
      { name: "Grey", hex: "#808080" },
      { name: "Black", hex: "#000000" }
    ],
    details: [
      "Matching blazer available",
      "Machine wash warm"
    ],
    rating: 4.6,
    reviewsCount: 92,
    brand: "ZARA MAN",
    isSale: false,
    dateAdded: "2026-05-05",
    popularity: 83,
    subCategory: "clothing"
  },
  {
    id: "25",
    name: "Cable Knit Cardigan",
    price: "89.90 USD",
    category: "man",
    description: "Heavy cable knit cardigan. V-neck collar, long cuffed sleeves. Contrast buttons.",
    composition: "80% acrylic · 20% alpaca wool",
    images: [
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Oatmeal", hex: "#eae6df" }
    ],
    details: [
      "Oversized fit",
      "Hand wash warm"
    ],
    rating: 4.8,
    reviewsCount: 23,
    brand: "ZARA STUDIO",
    isSale: true,
    salePrice: "59.90 USD",
    discountPercentage: 33,
    dateAdded: "2026-03-12",
    popularity: 74,
    subCategory: "clothing"
  },
  {
    id: "26",
    name: "Relaxed Fit Chinos",
    price: "59.90 USD",
    category: "man",
    description: "Chino trousers made of stretch cotton fabric. Relaxed straight leg structure.",
    composition: "98% cotton · 2% elastane",
    images: [
      "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["38", "40", "42", "44", "46"],
    colors: [
      { name: "Beige", hex: "#f5f5dc" },
      { name: "Navy", hex: "#000080" }
    ],
    details: [
      "Front side slanted pockets",
      "Comfy stretch texture"
    ],
    rating: 4.5,
    reviewsCount: 86,
    brand: "ZARA ORIGINALS",
    isNewArrival: true,
    dateAdded: "2026-06-12",
    popularity: 86,
    subCategory: "clothing"
  },

  // --- KIDS CATEGORY (12 items) ---
  {
    id: "5",
    name: "Knit Cardigan with Buttons",
    price: "35.90 USD",
    category: "kids",
    description: "V-neck cardigan with long sleeves. Front button closure. Ribbed trims.",
    composition: "100% cotton",
    images: [
      "https://images.unsplash.com/photo-1519457431-44ccd64a579b?q=80&w=1200",
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=1200"
    ],
    sizes: ["6-9M", "9-12M", "12-18M", "18-24M", "2-3Y", "4-5Y"],
    colors: [
      { name: "Cream", hex: "#fffdd0" },
      { name: "Blue", hex: "#add8e6" }
    ],
    details: [
      "Soft touch fabric",
      "Machine wash warm"
    ],
    rating: 4.6,
    reviewsCount: 38,
    brand: "ZARA KIDS",
    isNewArrival: true,
    dateAdded: "2026-06-01",
    popularity: 84,
    ageGroup: "0-2Y",
    subCategory: "clothing"
  },
  {
    id: "29",
    name: "Hooded Windbreaker Jacket",
    price: "45.90 USD",
    category: "kids",
    description: "Windbreaker jacket with fleece lining and mesh details. High neck with zip protection. Side pockets.",
    composition: "100% nylon · 100% polyester lining",
    images: [
      "https://images.unsplash.com/photo-1622244244253-294b47164b68?q=80&w=1200",
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=1200"
    ],
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y"],
    colors: [
      { name: "Mustard", hex: "#ffdb58" },
      { name: "Navy", hex: "#000080" }
    ],
    details: [
      "Water repellent outer fabric",
      "Reflective stripes on sleeves"
    ],
    rating: 4.7,
    reviewsCount: 22,
    brand: "ZARA KIDS",
    isBestSeller: true,
    dateAdded: "2026-05-12",
    popularity: 89,
    ageGroup: "3-5Y",
    subCategory: "clothing"
  },
  {
    id: "30",
    name: "Cotton Denim Dungarees",
    price: "39.90 USD",
    category: "kids",
    description: "Classic denim dungarees with metal hooks on straps. Front chest pouch pocket and side hip pockets.",
    composition: "100% organic cotton",
    images: [
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=1200",
      "https://images.unsplash.com/photo-1607990283143-e81e7a2c93ab?q=80&w=1200"
    ],
    sizes: ["12-18M", "18-24M", "2-3Y", "4-5Y"],
    colors: [
      { name: "Blue Denim", hex: "#4682b4" }
    ],
    details: [
      "Adjustable length straps",
      "Soft pre-washed denim texture"
    ],
    rating: 4.8,
    reviewsCount: 41,
    brand: "ZARA KIDS",
    isSale: true,
    salePrice: "27.90 USD",
    discountPercentage: 30,
    dateAdded: "2026-04-15",
    popularity: 76,
    ageGroup: "0-2Y",
    subCategory: "clothing"
  },
  {
    id: "31",
    name: "Patterned Sweatshirt",
    price: "29.90 USD",
    category: "kids",
    description: "Fleece sweater with rounded crewneck. Graphic print details on front. Ribbed elastic cuffs.",
    composition: "80% cotton · 20% polyester",
    images: [
      "https://images.unsplash.com/photo-1607990283143-e81e7a2c93ab?q=80&w=1200",
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1200"
    ],
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y"],
    colors: [
      { name: "Ecru", hex: "#f5f5dc" },
      { name: "Sage", hex: "#8fbc8f" }
    ],
    details: [
      "Cozy brushed lining",
      "Zara exclusive design print"
    ],
    rating: 4.4,
    reviewsCount: 19,
    brand: "ZARA KIDS",
    isNewArrival: true,
    dateAdded: "2026-06-20",
    popularity: 81,
    ageGroup: "3-5Y",
    subCategory: "clothing"
  },
  {
    id: "32",
    name: "Cozy Fleece Jacket",
    price: "49.90 USD",
    category: "kids",
    description: "Faux shearling fleece jacket with front zipper. Contrast fabric breast pocket with zip.",
    composition: "100% polyester shearling",
    images: [
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1200",
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&w=1200"
    ],
    sizes: ["6-7Y", "8-9Y", "10-11Y", "12-14Y"],
    colors: [
      { name: "Cream/Tan", hex: "#d2b48c" }
    ],
    details: [
      "High neck warm structure",
      "Two handwarmer pockets"
    ],
    rating: 4.9,
    reviewsCount: 30,
    brand: "ZARA KIDS",
    isBestSeller: true,
    dateAdded: "2026-02-28",
    popularity: 93,
    ageGroup: "6-12Y",
    subCategory: "clothing"
  },
  {
    id: "33",
    name: "Ruffled Cotton Dress",
    price: "35.90 USD",
    category: "kids",
    description: "Cotton fabric dress with elastic waist and ruffled sleeves. Allover embroidery pattern details.",
    composition: "100% combed cotton",
    images: [
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&w=1200",
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=1200"
    ],
    sizes: ["12-18M", "18-24M", "2-3Y", "4-5Y"],
    colors: [
      { name: "Peach Pink", hex: "#ffdab9" }
    ],
    details: [
      "Lightweight material",
      "Rear keyhole closure with button"
    ],
    rating: 4.5,
    reviewsCount: 26,
    brand: "ZARA KIDS",
    isSale: true,
    salePrice: "24.90 USD",
    discountPercentage: 30,
    dateAdded: "2026-05-01",
    popularity: 72,
    ageGroup: "0-2Y",
    subCategory: "clothing"
  },
  {
    id: "34",
    name: "Canvas Sneakers",
    price: "39.90 USD",
    category: "kids",
    description: "Low-top canvas sneakers with hook-and-loop straps. Reinforced rubber toe cap.",
    composition: "100% cotton canvas · Rubber sole",
    images: [
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=1200",
      "https://images.unsplash.com/photo-1519457431-44ccd64a579b?q=80&w=1200"
    ],
    sizes: ["26", "27", "28", "29", "30", "31", "32"],
    colors: [
      { name: "White", hex: "#ffffff" },
      { name: "Red", hex: "#b22222" }
    ],
    details: [
      "Dual strap closure for easy wear",
      "Breathable canvas body"
    ],
    rating: 4.6,
    reviewsCount: 33,
    brand: "ZARA KIDS",
    isBestSeller: true,
    dateAdded: "2026-04-05",
    popularity: 88,
    ageGroup: "3-5Y",
    subCategory: "shoes"
  },
  {
    id: "35",
    name: "Checked Flannel Shirt",
    price: "29.90 USD",
    category: "kids",
    description: "Soft flannel shirt featuring a collar and long cuffed sleeves. Allover checkered flannel pattern.",
    composition: "100% cotton",
    images: [
      "https://images.unsplash.com/photo-1519457431-44ccd64a579b?q=80&w=1200",
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=1200"
    ],
    sizes: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"],
    colors: [
      { name: "Red/Navy Check", hex: "#800020" }
    ],
    details: [
      "Double breast chest pockets",
      "Curved shirttail hem"
    ],
    rating: 4.7,
    reviewsCount: 48,
    brand: "ZARA KIDS",
    isSale: false,
    dateAdded: "2026-06-11",
    popularity: 83,
    ageGroup: "6-12Y",
    subCategory: "clothing"
  },
  {
    id: "36",
    name: "Striped Knit Jumper",
    price: "39.90 USD",
    category: "kids",
    description: "Knit sweater featuring a round neck and long cuffed sleeves. Contrast stripe details.",
    composition: "60% cotton · 40% acrylic",
    images: [
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=1200",
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=1200"
    ],
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
    colors: [
      { name: "Navy Stripe", hex: "#000080" }
    ],
    details: [
      "Comfort knit warmth",
      "Ribbed collar trim"
    ],
    rating: 4.5,
    reviewsCount: 29,
    brand: "ZARA KIDS",
    isSale: true,
    salePrice: "25.90 USD",
    discountPercentage: 35,
    dateAdded: "2026-05-24",
    popularity: 79,
    ageGroup: "3-5Y",
    subCategory: "clothing"
  },
  {
    id: "37",
    name: "Ribbed Cotton Leggings",
    price: "19.90 USD",
    category: "kids",
    description: "Leggings made of ribbed stretch cotton fabric. Comfortable elastic waistband.",
    composition: "95% cotton · 5% elastane",
    images: [
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=1200",
      "https://images.unsplash.com/photo-1607990283143-e81e7a2c93ab?q=80&w=1200"
    ],
    sizes: ["6-9M", "9-12M", "12-18M", "18-24M"],
    colors: [
      { name: "Beige Ribbed", hex: "#d2b48c" },
      { name: "Charcoal Ribbed", hex: "#36454f" }
    ],
    details: [
      "Elastic pull-on waist",
      "Soft ribbed stretch body"
    ],
    rating: 4.4,
    reviewsCount: 37,
    brand: "ZARA KIDS",
    isNewArrival: true,
    dateAdded: "2026-06-22",
    popularity: 80,
    ageGroup: "0-2Y",
    subCategory: "clothing"
  },
  {
    id: "38",
    name: "Kids Rubber Rain Boots",
    price: "45.90 USD",
    category: "kids",
    description: "Rubber rain boots with textile lining and handles on top for easy pulling on.",
    composition: "100% rubber · Cotton lining",
    images: [
      "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?q=80&w=1200",
      "https://images.unsplash.com/photo-1622244244253-294b47164b68?q=80&w=1200"
    ],
    sizes: ["26", "27", "28", "29", "30"],
    colors: [
      { name: "Yellow", hex: "#ffd700" }
    ],
    details: [
      "Waterproof build",
      "Nonslip rubber treads"
    ],
    rating: 4.8,
    reviewsCount: 20,
    brand: "ZARA KIDS",
    isBestSeller: true,
    dateAdded: "2026-03-15",
    popularity: 91,
    ageGroup: "3-5Y",
    subCategory: "shoes"
  },
  {
    id: "39",
    name: "Quilted Utility Vest",
    price: "39.90 USD",
    category: "kids",
    description: "Quilted vest featuring a zip-up front, high collar, and front patch pockets with snaps.",
    composition: "100% polyester",
    images: [
      "https://images.unsplash.com/photo-1607990283143-e81e7a2c93ab?q=80&w=1200",
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1200"
    ],
    sizes: ["6-7Y", "8-9Y", "10-11Y", "12-14Y"],
    colors: [
      { name: "Khaki Green", hex: "#4b5320" }
    ],
    details: [
      "Slightly water resistant",
      "Perfect for layering"
    ],
    rating: 4.6,
    reviewsCount: 25,
    brand: "ZARA KIDS",
    isSale: true,
    salePrice: "29.90 USD",
    discountPercentage: 25,
    dateAdded: "2026-04-18",
    popularity: 81,
    ageGroup: "6-12Y",
    subCategory: "clothing"
  },

  // --- ACCESSORIES CATEGORY (12 items) ---
  {
    id: "41",
    name: "Minimalist Leather Backpack",
    price: "119.00 USD",
    category: "accessories",
    description: "Premium backpack made of high grade cow leather. Main compartment zipper closure. Adjustable straps.",
    composition: "100% cow leather · 100% cotton lining",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["ONE SIZE"],
    colors: [
      { name: "Tan Brown", hex: "#8b4513" },
      { name: "Coal Black", hex: "#111111" }
    ],
    details: [
      "Spacious main compartment",
      "Internal 13-inch laptop sleeve"
    ],
    rating: 4.7,
    reviewsCount: 52,
    brand: "ZARA ACCESSORIES",
    isNewArrival: true,
    dateAdded: "2026-06-08",
    popularity: 89,
    subCategory: "accessories"
  },
  {
    id: "42",
    name: "Classic Leather Belt",
    price: "39.90 USD",
    category: "accessories",
    description: "Buckle belt made of solid cow leather. Metal belt buckle. Smooth finish design.",
    composition: "100% cow leather · Zinc alloy buckle",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["85", "90", "95", "100"],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Chestnut", hex: "#7b3f00" }
    ],
    details: [
      "Engraved brand detail",
      "Made in Italy"
    ],
    rating: 4.5,
    reviewsCount: 88,
    brand: "ZARA ORIGINALS",
    isBestSeller: true,
    dateAdded: "2026-05-02",
    popularity: 90,
    subCategory: "accessories"
  },
  {
    id: "43",
    name: "Retro Acetate Sunglasses",
    price: "49.90 USD",
    category: "accessories",
    description: "Sunglasses made of premium acetate frames. Polarized dark gray UV protection lenses.",
    composition: "100% acetate frame · 100% polycarbonate lenses",
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509319117193-57bab727e09d?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["ONE SIZE"],
    colors: [
      { name: "Tortoiseshell", hex: "#845e3c" },
      { name: "Glossy Black", hex: "#050505" }
    ],
    details: [
      "Category 3 UV filter",
      "Includes premium protective case"
    ],
    rating: 4.8,
    reviewsCount: 64,
    brand: "ZARA STUDIO",
    isNewArrival: true,
    dateAdded: "2026-06-15",
    popularity: 92,
    subCategory: "accessories"
  },
  {
    id: "44",
    name: "Ribbed Merino Wool Beanie",
    price: "29.90 USD",
    category: "accessories",
    description: "Merino wool knit beanie with thick ribbed cuff. Soft texture and excellent insulation.",
    composition: "100% merino wool",
    images: [
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520635360276-79f3dbd809f6?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["ONE SIZE"],
    colors: [
      { name: "Charcoal", hex: "#3a3a3a" },
      { name: "Oatmeal", hex: "#eae6df" }
    ],
    details: [
      "100% extrafine merino wool",
      "Hand wash warm"
    ],
    rating: 4.6,
    reviewsCount: 47,
    brand: "ZARA ACCESSORIES",
    isSale: true,
    salePrice: "19.90 USD",
    discountPercentage: 33,
    dateAdded: "2026-04-10",
    popularity: 80,
    subCategory: "accessories"
  },
  {
    id: "45",
    name: "Wool Blend Fringe Scarf",
    price: "39.90 USD",
    category: "accessories",
    description: "Thick winter scarf featuring fringes on both ends. Extremely cozy brushed knit fabric.",
    composition: "70% acrylic · 30% wool",
    images: [
      "https://images.unsplash.com/photo-1520635360276-79f3dbd809f6?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["ONE SIZE"],
    colors: [
      { name: "Forest Green", hex: "#1f3022" },
      { name: "Soft Grey", hex: "#d3d3d3" }
    ],
    details: [
      "Length: 200cm, Width: 45cm",
      "Dry clean recommended"
    ],
    rating: 4.4,
    reviewsCount: 31,
    brand: "ZARA ACCESSORIES",
    isSale: true,
    salePrice: "25.90 USD",
    discountPercentage: 35,
    dateAdded: "2026-05-02",
    popularity: 72,
    subCategory: "accessories"
  },
  {
    id: "46",
    name: "Metal Buckle Shoulder Bag",
    price: "69.90 USD",
    category: "accessories",
    description: "Sleek shoulder handbag with structured design. Foldover top flap with high-shine metal buckle fastening.",
    composition: "100% polyurethane outer · 100% polyester lining",
    images: [
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["ONE SIZE"],
    colors: [
      { name: "Burgundy", hex: "#4a0404" },
      { name: "Black", hex: "#000000" }
    ],
    details: [
      "Internal zipped organizer slot",
      "Adjustable shoulder strap drop"
    ],
    rating: 4.7,
    reviewsCount: 59,
    brand: "ZARA ACCESSORIES",
    isBestSeller: true,
    dateAdded: "2026-03-24",
    popularity: 91,
    subCategory: "accessories"
  },
  {
    id: "47",
    name: "Gold Plated Link Chain",
    price: "35.90 USD",
    category: "accessories",
    description: "Necklace made of sterling silver, thick-plated in 18k yellow gold. Modern link chain structure.",
    composition: "925 Sterling Silver · 18K Yellow Gold Plating",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["45CM"],
    colors: [
      { name: "18K Gold", hex: "#ffd700" }
    ],
    details: [
      "Anti-tarnish treatment",
      "Lobster clasp closure"
    ],
    rating: 4.6,
    reviewsCount: 72,
    brand: "ZARA STUDIO",
    isNewArrival: true,
    dateAdded: "2026-06-24",
    popularity: 88,
    subCategory: "accessories"
  },
  {
    id: "48",
    name: "Stainless Steel Watch",
    price: "149.00 USD",
    category: "accessories",
    description: "Analogue wrist watch with stainless steel casing and link bracelet. Quartz movement mechanism.",
    composition: "100% stainless steel watch casing and straps",
    images: [
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["ONE SIZE"],
    colors: [
      { name: "Silver Metal", hex: "#c0c0c0" }
    ],
    details: [
      "Waterproof depth up to 30 meters",
      "Comes with box and strap-adjuster tool"
    ],
    rating: 4.8,
    reviewsCount: 26,
    brand: "ZARA STUDIO",
    isSale: false,
    dateAdded: "2026-05-15",
    popularity: 94,
    subCategory: "accessories"
  },
  {
    id: "49",
    name: "Suede Leather Gloves",
    price: "49.90 USD",
    category: "accessories",
    description: "Gloves made of soft sheep suede leather. Warm interior polar lining. Ribbed knit wrist cuff.",
    composition: "100% sheep suede outer · 100% polyester interior lining",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["M", "L"],
    colors: [
      { name: "Tan", hex: "#d2b48c" },
      { name: "Black", hex: "#000000" }
    ],
    details: [
      "Touchscreen-compatible fingertips",
      "Specialist leather clean only"
    ],
    rating: 4.5,
    reviewsCount: 39,
    brand: "ZARA ACCESSORIES",
    isSale: true,
    salePrice: "34.90 USD",
    discountPercentage: 30,
    dateAdded: "2026-03-10",
    popularity: 70,
    subCategory: "accessories"
  },
  {
    id: "50",
    name: "Canvas Duffle Bag",
    price: "79.90 USD",
    category: "accessories",
    description: "Large capacity weekender canvas bag. Double handle leather trim and optional long strap.",
    composition: "100% thick canvas body · 100% genuine leather details",
    images: [
      "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1627124118400-1dc460773d15?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["ONE SIZE"],
    colors: [
      { name: "Navy Canvas", hex: "#0b1d3a" },
      { name: "Olive Canvas", hex: "#3b4531" }
    ],
    details: [
      "Durable heavy-weight fabric",
      "Perfect cabin luggage size"
    ],
    rating: 4.7,
    reviewsCount: 42,
    brand: "ZARA ACCESSORIES",
    isBestSeller: true,
    dateAdded: "2026-02-18",
    popularity: 87,
    subCategory: "accessories"
  },
  {
    id: "51",
    name: "Leather Card Wallet",
    price: "29.90 USD",
    category: "accessories",
    description: "Slim card wallet made of high grain cowhide leather. 6 outer slots and middle pocket.",
    composition: "100% genuine leather",
    images: [
      "https://images.unsplash.com/photo-1627124118400-1dc460773d15?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["ONE SIZE"],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Tan", hex: "#b38b6d" }
    ],
    details: [
      "RFID blocking protection lining",
      "Zara emboss logo print"
    ],
    rating: 4.6,
    reviewsCount: 95,
    brand: "ZARA ORIGINALS",
    isSale: false,
    dateAdded: "2026-05-30",
    popularity: 91,
    subCategory: "accessories"
  },
  {
    id: "52",
    name: "Felt Fedora Hat",
    price: "49.90 USD",
    category: "accessories",
    description: "Fedora hat made of soft wool felt. Ribbon trim accentuating the crown base.",
    composition: "100% wool felt",
    images: [
      "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["S", "M", "L"],
    colors: [
      { name: "Warm Taupe", hex: "#9f8170" }
    ],
    details: [
      "Adjustable interior strap",
      "Brush clean only"
    ],
    rating: 4.4,
    reviewsCount: 18,
    brand: "ZARA ACCESSORIES",
    isSale: true,
    salePrice: "34.90 USD",
    discountPercentage: 30,
    dateAdded: "2026-04-14",
    popularity: 68,
    subCategory: "accessories"
  },

  // --- BEAUTY CATEGORY (12 items) ---
  {
    id: "6",
    name: "Red Seduction Perfume",
    price: "25.90 USD",
    category: "beauty",
    description: "Eau de toilette. The fragrance pyramid reveals notes of red fruits, jasmine and vanilla. A feminine, intense and long-lasting fragrance.",
    composition: "Alcohol denat, Aqua, Parfum",
    images: [
      "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["100ML"],
    colors: [
      { name: "Clear", hex: "#ffffff" }
    ],
    details: [
      "Feminine fragrance",
      "Long-lasting"
    ],
    rating: 4.4,
    reviewsCount: 112,
    brand: "ZARA BEAUTY",
    isNewArrival: false,
    dateAdded: "2026-04-12",
    popularity: 88,
    subCategory: "perfume"
  },
  {
    id: "53",
    name: "Nude Plumping Lip Gloss",
    price: "17.90 USD",
    category: "beauty",
    description: "Hydrating high-shine lip gloss with a mild tingling plumping effect. Contains jojoba oil.",
    composition: "Mineral oil, Polybutene, Jojoba seed oil, Menthol",
    images: [
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["8ML"],
    colors: [
      { name: "Dusty Rose", hex: "#d8a1a3" },
      { name: "Warm Honey", hex: "#d2b48c" }
    ],
    details: [
      "Non-sticky finish",
      "Cruelty free formulation"
    ],
    rating: 4.6,
    reviewsCount: 94,
    brand: "ZARA BEAUTY",
    isBestSeller: true,
    dateAdded: "2026-05-18",
    popularity: 91,
    subCategory: "cosmetics"
  },
  {
    id: "54",
    name: "Hydrating Face Serum",
    price: "29.90 USD",
    category: "beauty",
    description: "Face serum formulated with 2% Hyaluronic Acid and Provitamin B5. Locks in moisture for soft dewy skin.",
    composition: "Aqua, Hyaluronic acid, Panthenol, Phenoxyethanol",
    images: [
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["50ML"],
    colors: [
      { name: "Clear", hex: "#ffffff" }
    ],
    details: [
      "Dermatologically tested",
      "Fragrance-free formula"
    ],
    rating: 4.7,
    reviewsCount: 73,
    brand: "ZARA BEAUTY",
    isNewArrival: true,
    dateAdded: "2026-06-11",
    popularity: 93,
    subCategory: "cosmetics"
  },
  {
    id: "55",
    name: "Eau de Parfum - Orchid",
    price: "35.90 USD",
    category: "beauty",
    description: "Feminine eau de parfum. The fragrance pyramid reveals notes of bergamot, orchid and vanilla. A fresh, bright scent.",
    composition: "Alcohol denat, Water, Fragrance compounds",
    images: [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["90ML"],
    colors: [
      { name: "Pale Pink", hex: "#fff0f5" }
    ],
    details: [
      "Fresh floral notes",
      "Travel friendly glass bottle"
    ],
    rating: 4.5,
    reviewsCount: 65,
    brand: "ZARA BEAUTY",
    isSale: true,
    salePrice: "24.90 USD",
    discountPercentage: 30,
    dateAdded: "2026-04-20",
    popularity: 80,
    subCategory: "perfume"
  },
  {
    id: "56",
    name: "Matte Velvet Lipstick",
    price: "19.90 USD",
    category: "beauty",
    description: "Highly pigmented lipstick with a velvet matte finish. Rich color payoff that stays comfortable.",
    composition: "Dimethicone, Silica, Beeswax, Tocopherol",
    images: [
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["4G"],
    colors: [
      { name: "Ruby Red", hex: "#cc0000" },
      { name: "Nude Mauve", hex: "#a17a74" }
    ],
    details: [
      "Long wear up to 8 hours",
      "Magnetic closure case"
    ],
    rating: 4.8,
    reviewsCount: 110,
    brand: "ZARA BEAUTY",
    isBestSeller: true,
    dateAdded: "2026-03-12",
    popularity: 95,
    subCategory: "cosmetics"
  },
  {
    id: "57",
    name: "Velvet Nudes Eyeshadow",
    price: "29.90 USD",
    category: "beauty",
    description: "Eyeshadow palette with 9 highly blendable nude shade pans in matte, satin and shimmer finishes.",
    composition: "Talc, Mica, Magnesium stearate, Mineral oils",
    images: [
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["9 SHADES"],
    colors: [
      { name: "Multi-Palette", hex: "#bf8f6b" }
    ],
    details: [
      "Built-in vanity mirror",
      "Double ended brush included"
    ],
    rating: 4.6,
    reviewsCount: 42,
    brand: "ZARA BEAUTY",
    isSale: true,
    salePrice: "19.90 USD",
    discountPercentage: 33,
    dateAdded: "2026-05-02",
    popularity: 76,
    subCategory: "cosmetics"
  },
  {
    id: "58",
    name: "Nourishing Argan Body Oil",
    price: "24.90 USD",
    category: "beauty",
    description: "Dry body oil enriched with organic argan oil. Absorbs instantly for a satin sheen finish.",
    composition: "Argan oil, Sweet almond oil, Isopropyl myristate, Fragrance",
    images: [
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["150ML"],
    colors: [
      { name: "Amber Tint", hex: "#ffbf00" }
    ],
    details: [
      "100% natural oil base",
      "Glass spray bottle packaging"
    ],
    rating: 4.7,
    reviewsCount: 38,
    brand: "ZARA BEAUTY",
    isNewArrival: true,
    dateAdded: "2026-06-18",
    popularity: 87,
    subCategory: "cosmetics"
  },
  {
    id: "59",
    name: "Gel Polish - Cherry",
    price: "12.90 USD",
    category: "beauty",
    description: "High-shine gel nail polish. Long wear chip-resistant formula. No UV lamp required.",
    composition: "Butyl acetate, Ethyl acetate, Nitrocellulose, Acetyl tributyl citrate",
    images: [
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["15ML"],
    colors: [
      { name: "Glossy Cherry", hex: "#7a0815" }
    ],
    details: [
      "Wide brush for quick application",
      "Removes easily with standard acetone"
    ],
    rating: 4.4,
    reviewsCount: 67,
    brand: "ZARA BEAUTY",
    isSale: false,
    dateAdded: "2026-05-10",
    popularity: 81,
    subCategory: "cosmetics"
  },
  {
    id: "60",
    name: "Mineral Loose Powder",
    price: "25.90 USD",
    category: "beauty",
    description: "Loose setting powder with ultra-fine mineral pigments. Blurs pores and controls shine all day.",
    composition: "Silica, Mica, Zinc oxide, Iron oxides",
    images: [
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["12G"],
    colors: [
      { name: "Translucent", hex: "#ffffff" }
    ],
    details: [
      "Includes premium powder puff",
      "Non-comedogenic formula"
    ],
    rating: 4.5,
    reviewsCount: 52,
    brand: "ZARA BEAUTY",
    isBestSeller: true,
    dateAdded: "2026-04-18",
    popularity: 89,
    subCategory: "cosmetics"
  },
  {
    id: "61",
    name: "Scented Soy Wax Candle",
    price: "29.90 USD",
    category: "beauty",
    description: "Aromatherapy soy wax candle featuring notes of sandalwood, amber and cardamom.",
    composition: "100% natural soy wax, Essential oils, Cotton wick",
    images: [
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["220G"],
    colors: [
      { name: "Warm Sandalwood", hex: "#e5d3b3" }
    ],
    details: [
      "Approx. 45 hours burn time",
      "Reusable glass jar container"
    ],
    rating: 4.9,
    reviewsCount: 30,
    brand: "ZARA BEAUTY",
    isNewArrival: true,
    dateAdded: "2026-06-21",
    popularity: 96,
    subCategory: "cosmetics"
  },
  {
    id: "62",
    name: "Hydrating Shea Hand Cream",
    price: "12.90 USD",
    category: "beauty",
    description: "Fast-absorbing hand cream containing 20% organic shea butter. Heals dry hands instantly.",
    composition: "Aqua, Shea butter, Glycerin, Cetearyl alcohol",
    images: [
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["75ML"],
    colors: [
      { name: "Pure Shea", hex: "#fcf8f2" }
    ],
    details: [
      "Rich creamy texture",
      "Subtle sweet almond aroma"
    ],
    rating: 4.6,
    reviewsCount: 77,
    brand: "ZARA BEAUTY",
    isSale: true,
    salePrice: "8.90 USD",
    discountPercentage: 31,
    dateAdded: "2026-03-28",
    popularity: 83,
    subCategory: "cosmetics"
  },
  {
    id: "63",
    name: "Regenerating Night Cream",
    price: "39.90 USD",
    category: "beauty",
    description: "Overnight facial cream enriched with Retinol and Rosehip Oil. Repairs fine lines and uneven tone.",
    composition: "Aqua, Rosehip oil, Retinol, Glycerin, Shea butter",
    images: [
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["50ML"],
    colors: [
      { name: "Creamy White", hex: "#ffffff" }
    ],
    details: [
      "Use only at night",
      "Apply SPF during daytime"
    ],
    rating: 4.8,
    reviewsCount: 51,
    brand: "ZARA BEAUTY",
    isBestSeller: true,
    dateAdded: "2026-02-14",
    popularity: 90,
    subCategory: "cosmetics"
  }
];
