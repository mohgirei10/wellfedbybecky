export type ProductCategory =
  | "Tombrown"
  | "Curves";

export type ProductSize = {
  id: string;
  label: string;
  price: number;
};

export type Product = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  price: number;
  category: ProductCategory;
  size: string;
  image: string;
  badge?: string;
  sizes: ProductSize[];
};

export const products: Product[] = [
  {
    id: "1",
    slug: "premium-tombrown-400g",
    title: "Premium Tombrown",
    subtitle: "400G · PREMIUM BLEND",
    description:
      "Nutritious cereal blend made from carefully selected ingredients🥣 Suitable for everyone🤗 Super effective 💯",
    longDescription:
      "Nutritious cereal blend made from carefully selected ingredients🥣 Suitable for everyone🤗 Super effective 💯",
    price: 8500,
    category: "Tombrown",
    size: "400G",
    image: "/product1.png",
    badge: "Popular",
    sizes: [
      {
        id: "400g",
        label: "400G",
        price: 8500,
      },
    ],
  },

  {
    id: "2",
    slug: "premium-tombrown-600g",
    title: "Premium Tombrown",
    subtitle: "600G · PREMIUM BLEND",
    description:
      "Nutritious cereal blend made from carefully selected ingredients🥣 Suitable for everyone🤗 Super effective 💯",
    longDescription:
      "Nutritious cereal blend made from carefully selected ingredients🥣 Suitable for everyone🤗 Super effective 💯",
    price: 10000,
    category: "Tombrown",
    size: "600G",
    image: "/product2.png",
    badge: "Best Seller",
    sizes: [
      {
        id: "600g",
        label: "600G",
        price: 10000,
      },
    ],
  },

  {
    id: "3",
    slug: "premium-tombrown-1kg",
    title: "Premium Tombrown",
    subtitle: "1KG · PREMIUM BLEND",
    description:
      "Nutritious cereal blend made from carefully selected ingredients🥣 Suitable for everyone🤗 Super effective 💯",
    longDescription:
      "Nutritious cereal blend made from carefully selected ingredients🥣 Suitable for everyone🤗 Super effective 💯",
    price: 15000,
    category: "Tombrown",
    size: "1 KG",
    image: "/product3.png",
    badge: "Popular",
    sizes: [
      {
        id: "1kg",
        label: "1 KG",
        price: 15000,
      },
    ],
  },

  {
    id: "4",
    slug: "premium-tombrown-1-5kg",
    title: "Premium Tombrown",
    subtitle: "1.5KG · PREMIUM BLEND",
    description:
      "Nutritious cereal blend made from carefully selected ingredients🥣 Suitable for everyone🤗 Super effective 💯",
    longDescription:
      "Nutritious cereal blend made from carefully selected ingredients🥣 Suitable for everyone🤗 Super effective 💯",
    price: 15000,
    category: "Tombrown",
    size: "1.5 KG",
    image: "/product4.png",
    badge: "Best Value",
    sizes: [
      {
        id: "1-5kg",
        label: "1.5 KG",
        price: 15000,
      },
    ],
  },

  {
    id: "5",
    slug: "premium-tombrown-2kg",
    title: "Premium Tombrown",
    subtitle: "2KG · PREMIUM BLEND",
    description:
      "Nutritious cereal blend made from carefully selected ingredients🥣 Suitable for everyone🤗 Super effective 💯",
    longDescription:
      "Nutritious cereal blend made from carefully selected ingredients🥣 Suitable for everyone🤗 Super effective 💯",
    price: 25000,
    category: "Tombrown",
    size: "2 KG",
    image: "/product5.png",
    badge: "Family Size",
    sizes: [
      {
        id: "2kg",
        label: "2 KG",
        price: 25000,
      },
    ],
  },

  // Curves products
  {
    id: "6",
    slug: "curves-enhancement-powder-600g",
    title: "Curves Enhancement Powder",
    subtitle: "600G · CURVES ENHANCEMENT 🍑",
    description:
      "Curves Enhancement Powder designed as part of a beauty and wellness routine.",
    longDescription:
      "Supports Hips, Butt & Overall Feminine body fullness, Super effective",
    price: 15000,
    category: "Curves",
    size: "600G",
    image: "/product6.png",
    badge: "Popular",
    sizes: [
      {
        id: "600g",
        label: "600G",
        price: 15000,
      },
    ],
  },

  {
    id: "7",
    slug: "curves-enhancement-powder-1kg",
    title: "Curves Enhancement Powder",
    subtitle: "1KG · CURVES ENHANCEMENT 🍑",
    description:
      "Curves Enhancement Powder designed as part of a beauty and wellness routine.",
    longDescription:
      "Supports Hips, Butt & Overall Feminine body fullness, Super effective",
    price: 20000,
    category: "Curves",
    size: "1 KG",
    image: "/product7.png",
    badge: "Best Seller",
    sizes: [
      {
        id: "1kg",
        label: "1 KG",
        price: 20000,
      },
    ],
  },

  {
    id: "8",
    slug: "curves-enhancement-powder-1-5kg",
    title: "Curves Enhancement Powder",
    subtitle: "1.5KG · CURVES ENHANCEMENT 🍑",
    description:
      "Curves Enhancement Powder designed as part of a beauty and wellness routine.",
    longDescription:
      "Supports Hips, Butt & Overall Feminine body fullness, Super effective",
    price: 27000,
    category: "Curves",
    size: "1.5 KG",
    image: "/product8.png",
    badge: "Best Value",
    sizes: [
      {
        id: "1-5kg",
        label: "1.5 KG",
        price: 27000,
      },
    ],
  },

  {
    id: "9",
    slug: "curves-enhancement-powder-2kg",
    title: "Curves Enhancement Powder",
    subtitle: "2KG · CURVES ENHANCEMENT 🍑",
    description:
      "Curves Enhancement Powder designed as part of a beauty and wellness routine.",
    longDescription:
      "Supports Hips, Butt & Overall Feminine body fullness, Super effective",
    price: 34000,
    category: "Curves",
    size: "2 KG",
    image: "/product9.png",
    badge: "Family Size",
    sizes: [
      {
        id: "2kg",
        label: "2 KG",
        price: 34000,
      },
    ],
  },
];