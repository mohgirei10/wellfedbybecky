"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "framer-motion";

import {
  products,
  type ProductCategory,
} from "../../../data/product";

import AddToCartButton from "../../../components/AddToCartButton";

type CategoryFilter = ProductCategory | "All";

type SortOption =
  | "featured"
  | "price-low"
  | "price-high"
  | "name";

const categories: CategoryFilter[] = [
  "All",
  "Classic",
  "Nutty",
  "Date",
];

const sortOptions: {
  value: SortOption;
  label: string;
}[] = [
  {
    value: "featured",
    label: "Featured",
  },
  {
    value: "price-low",
    label: "Price: Low to High",
  },
  {
    value: "price-high",
    label: "Price: High to Low",
  },
  {
    value: "name",
    label: "Name: A–Z",
  },
];

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const stagger: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </svg>
  );
}

function FilterIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M4 6h16" />
      <path d="M7 12h10" />
      <path d="M10 18h4" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function GridIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <rect x="4" y="4" width="6" height="6" rx="1" />
      <rect x="14" y="4" width="6" height="6" rx="1" />
      <rect x="4" y="14" width="6" height="6" rx="1" />
      <rect x="14" y="14" width="6" height="6" rx="1" />
    </svg>
  );
}

export default function CollectionsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] =
    useState<CategoryFilter>("All");

  const [sortBy, setSortBy] =
    useState<SortOption>("featured");

  const [mobileFiltersOpen, setMobileFiltersOpen] =
    useState(false);

  const filteredProducts = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    let result = products.filter((product) => {
      const matchesCategory =
        activeCategory === "All" ||
        product.category === activeCategory;

      const searchableText = [
        product.title,
        product.subtitle,
        product.description,
        product.category,
        product.size,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        normalizedSearch === "" ||
        searchableText.includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });

    result = [...result].sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;

        case "price-high":
          return b.price - a.price;

        case "name":
          return a.title.localeCompare(b.title);

        case "featured":
        default:
          return (
            Number(Boolean(b.badge)) -
            Number(Boolean(a.badge))
          );
      }
    });

    return result;
  }, [activeCategory, search, sortBy]);

  const clearFilters = () => {
    setSearch("");
    setActiveCategory("All");
    setSortBy("featured");
  };

  const hasActiveFilters =
    search.trim() !== "" ||
    activeCategory !== "All" ||
    sortBy !== "featured";

  return (
    <div className="min-h-screen overflow-hidden bg-[#120A07] text-[#F9F4EE] selection:bg-[#CD9C61] selection:text-[#120A07]">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative bg-[#120A07] px-6 pb-20 pt-36 sm:pt-40 lg:pb-28 lg:pt-48">
        {/* Decorative glow */}
        <div className="pointer-events-none absolute -left-45 top-20 h-107.5 w-107.5 rounded-full bg-[#CD9C61]/8 blur-[140px]" />

        <div className="pointer-events-none absolute -bottom-45 -right-25 h-112.5 w-112.5 rounded-full bg-[#CD9C61]/7 blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-4xl"
          >
            <motion.p
              variants={fadeUp}
              className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#CD9C61]"
            >
              The collection
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="mt-7 font-serif text-5xl leading-[0.95] tracking-[-0.045em] text-[#F9F4EE] sm:text-6xl lg:text-8xl"
            >
              Find your
              <br />
              <span className="italic font-light text-white/35">
                Wellfed ritual.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-2xl text-sm font-light leading-7 text-white/50 sm:text-base"
            >
              Explore every Wellfed blend, from everyday
              favourites to larger packs. Search, filter and
              discover what fits your routine.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          FILTER BAR
      ========================================================== */}
      <section className="sticky top-19 z-30 border-y border-white/8 bg-[#0E0705]/95 px-6 py-5 backdrop-blur-2xl">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Search */}
            <div className="relative w-full lg:max-w-md">
              <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/30">
                <SearchIcon />
              </div>

              <input
                type="search"
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search products..."
                aria-label="Search products"
                className="
                  h-12
                  w-full
                  rounded-full
                  border
                  border-white/10
                  bg-white/2.5
                  pl-11
                  pr-5
                  text-xs
                  text-white
                  outline-none
                  placeholder:text-white/25
                  transition
                  focus:border-[#CD9C61]/50
                  focus:bg-white/4
                "
              />
            </div>

            {/* Right controls */}
            <div className="flex items-center justify-between gap-3 sm:justify-end">
              {/* Mobile filters */}
              <button
                type="button"
                onClick={() =>
                  setMobileFiltersOpen(
                    (current) => !current
                  )
                }
                className="
                  flex
                  h-11
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/10
                  px-4
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.15em]
                  text-white/55
                  transition
                  hover:border-white/20
                  hover:text-white
                  lg:hidden
                "
              >
                <FilterIcon />
                Filters
              </button>

              {/* Sort */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(event) =>
                    setSortBy(
                      event.target.value as SortOption
                    )
                  }
                  aria-label="Sort products"
                  className="
                    h-11
                    appearance-none
                    rounded-full
                    border
                    border-white/10
                    bg-[#120A07]
                    px-4
                    pr-9
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    text-white/55
                    outline-none
                    transition
                    hover:border-white/20
                    focus:border-[#CD9C61]/50
                  "
                >
                  {sortOptions.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      className="bg-[#120A07] text-white"
                    >
                      {option.label}
                    </option>
                  ))}
                </select>

                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#CD9C61]">
                  ▾
                </span>
              </div>
            </div>
          </div>

          {/* =====================================================
              CATEGORY FILTERS
          ====================================================== */}
          <AnimatePresence initial={false}>
            {(!mobileFiltersOpen || mobileFiltersOpen) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: 1,
                  height: "auto",
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="mt-4 overflow-hidden"
              >
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {categories.map((category) => {
                    const active =
                      activeCategory === category;

                    return (
                      <button
                        type="button"
                        key={category}
                        onClick={() =>
                          setActiveCategory(category)
                        }
                        className={`
                          shrink-0
                          rounded-full
                          border
                          px-4
                          py-2.5
                          text-[9px]
                          font-bold
                          uppercase
                          tracking-[0.16em]
                          transition-all
                          duration-300
                          ${
                            active
                              ? "border-[#CD9C61] bg-[#CD9C61] text-[#120A07]"
                              : "border-white/10 text-white/40 hover:border-white/20 hover:text-white"
                          }
                        `}
                      >
                        {category}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* =========================================================
          RESULTS HEADER
      ========================================================== */}
      <section className="px-6 pt-14">
        <div className="mx-auto flex max-w-7xl items-end justify-between gap-5">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#CD9C61]">
              {activeCategory === "All"
                ? "All products"
                : `${activeCategory} collection`}
            </p>

            <h2 className="mt-2 font-serif text-3xl text-white sm:text-4xl">
              {filteredProducts.length}{" "}
              {filteredProducts.length === 1
                ? "product"
                : "products"}
            </h2>
          </div>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={clearFilters}
              className="
                pb-1
                text-[9px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-white/35
                transition
                hover:text-[#CD9C61]
              "
            >
              Clear filters
            </button>
          )}
        </div>
      </section>

      {/* =========================================================
          PRODUCT GRID
      ========================================================== */}
      <main className="px-6 pb-32 pt-10">
        <div className="mx-auto max-w-7xl">
          {filteredProducts.length > 0 ? (
            <motion.div
              layout
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="
                grid
                grid-cols-1
                gap-x-6
                gap-y-12
                sm:grid-cols-2
                lg:grid-cols-3
                xl:grid-cols-4
              "
            >
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product) => (
                  <motion.article
                    layout
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    exit={{
                      opacity: 0,
                      scale: 0.96,
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                    key={product.id}
                    className="group"
                  >
                   <div className="relative aspect-[0.84] overflow-hidden rounded-[1.25rem] border border-white/8 bg-[#0E0705]">
  <img
    src={product.image}
    alt={product.title}
    className="
      absolute
      inset-0
      h-full
      w-full
      object-cover
      transition-transform
      duration-700
      group-hover:scale-[1.035]
    "
  />

  <div className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent" />

  {product.badge && (
    <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-[#120A07]/60 px-3 py-1.5 backdrop-blur-md">
      <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#E3B77D]">
        {product.badge}
      </span>
    </div>
  )}
</div>

                    {/* Details */}
                    <div className="mt-5">
                      <div className="flex items-start justify-between gap-4">
                        <Link
                          href={`/product/${product.slug}`}
                          className="min-w-0"
                        >
                          <h3 className="font-serif text-xl text-white transition-colors duration-300 hover:text-[#CD9C61]">
                            {product.title}
                          </h3>

                          <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.17em] text-white/30">
                            {product.subtitle}
                          </p>
                        </Link>

                        <p className="shrink-0 pt-1 text-sm font-light text-white/75">
                          ₦{product.price.toLocaleString("en-NG")}
                        </p>
                      </div>

                      <p className="mt-3 min-h-[48px] text-xs leading-6 text-white/35">
                        {product.description}
                      </p>

                      {/* Cart action */}
                      <div className="mt-5">
                      <AddToCartButton
  productId={product.id}
  slug={product.slug}
  title={product.title}
  size={product.size}
  price={product.price}
  image={product.image}
  quantity={1}
  className="w-full"
/>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            /* =====================================================
               EMPTY STATE
            ====================================================== */
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="
                mx-auto
                max-w-xl
                border
                border-white/8
                bg-[#0E0705]
                px-6
                py-20
                text-center
              "
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/10 font-serif text-2xl text-[#CD9C61]">
                ∅
              </div>

              <h3 className="mt-6 font-serif text-3xl text-white">
                Nothing matched your search.
              </h3>

              <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-white/35">
                Try another product name, category or search
                term.
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className="
                  mt-7
                  rounded-full
                  bg-[#CD9C61]
                  px-7
                  py-3.5
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#120A07]
                  transition
                  hover:bg-[#E3B77D]
                "
              >
                Reset Collection
              </button>
            </motion.div>
          )}
        </div>
      </main>

      {/* =========================================================
          BRAND CTA
      ========================================================== */}
      <section className="bg-[#F5EFE8] px-6 py-24 text-[#120A07] lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#CD9C61]">
              Need help choosing?
            </p>

            <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-none tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              Not sure which blend
              <br />
              is right for you?
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-black/55">
              Tell us what you're looking for and we'll help
              you choose the Wellfed blend that fits your
              routine.
            </p>
          </div>

          <a
            href={`https://wa.me/2347017096710?text=${encodeURIComponent(
              "Hello Becky! I need help choosing a Wellfed product."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              w-full
              items-center
              justify-center
              rounded-full
              bg-[#120A07]
              px-8
              py-4
              text-[10px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-white
              transition
              hover:-translate-y-1
              sm:w-auto
            "
          >
            Ask Becky
          </a>
        </div>
      </section>
    </div>
  );
}