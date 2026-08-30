// data/product.ts

export type ProductCategory =
  | "Classic"
  | "Nutty"
  | "Date"

export type Product = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  price: number;
  category: ProductCategory;
  size: string;
  image: string;
  badge?: string;
};

export const products: Product[] = [
  {
    id: "1",
    slug: "classic-blend",
    title: "Classic Blend",
    subtitle: "1 KG · SIGNATURE",
    description:
      "Our signature roasted blend of soya beans, guinea corn and groundnuts.",
    price: 5500,
    category: "Classic",
    size: "1 KG",
    image: "/hero.png",
    badge: "Best Seller",
  },

  {
    id: "2",
    slug: "classic-blend-family",
    title: "Classic Blend Family Pack",
    subtitle: "4 KG · FAMILY SIZE",
    description:
      "A larger pack of our signature blend, made for households and regular use.",
    price: 18000,
    category: "Nutty",
    size: "4 KG",
    image: "/hero.png",
    badge: "Best Value",
  },

  {
    id: "3",
    slug: "nutty-extra",
    title: "Nutty Extra",
    subtitle: "1 KG · RICH & NUTTY",
    description:
      "A fuller, nuttier expression for customers who enjoy a richer roasted taste.",
    price: 6200,
    category: "Nutty",
    size: "1 KG",
    image: "/hero.png",
    badge: "Popular",
  },

  {
    id: "4",
    slug: "nutty-extra-family",
    title: "Nutty Extra Family Pack",
    subtitle: "4 KG · FAMILY SIZE",
    description:
      "More of our rich nut-forward blend for families and frequent breakfasts.",
    price: 20000,
    category: "Date",
    size: "4 KG",
    image: "/hero.png",
    badge: "Family",
  },

  {
    id: "5",
    slug: "date-infused",
    title: "Date Infused",
    subtitle: "1 KG · NATURALLY SWEET",
    description:
      "A naturally sweetened variation with a warm roasted character.",
    price: 6500,
    category: "Date",
    size: "1 KG",
    image: "/hero.png",
    badge: "New",
  },

  {
    id: "6",
    slug: "date-infused-family",
    title: "Date Infused Family Pack",
    subtitle: "4 KG · FAMILY SIZE",
    description:
      "A generous family-size option for customers who enjoy our Date Infused blend.",
    price: 21000,
    category: "Classic",
    size: "4 KG",
    image: "/hero.png",
    badge: "Family",
  },
   {
    id: "7",
    slug: "date-infused-family",
    title: "Date Infused Family Pack",
    subtitle: "4 KG · FAMILY SIZE",
    description:
      "A generous family-size option for customers who enjoy our Date Infused blend.",
    price: 21000,
    category: "Classic",
    size: "4 KG",
    image: "/hero.png",
    badge: "Family",
  },
   {
    id: "8",
    slug: "date-infused-family",
    title: "Date Infused Family Pack",
    subtitle: "4 KG · FAMILY SIZE",
    description:
      "A generous family-size option for customers who enjoy our Date Infused blend.",
    price: 21000,
    category: "Classic",
    size: "4 KG",
    image: "/hero.png",
    badge: "Family",
  },
];