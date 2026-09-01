"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

import {
  products,
  type Product,
} from "../../data/product";

import ProductModal from "../../components/ProductModal";
import AddToCartButton from "../../components/AddToCartButton";

const rawPhone = "2347017096710";

const whatsappUrl = `https://wa.me/${rawPhone}?text=${encodeURIComponent(
  "Hello Becky! I'd like to place an order for Wellfed Tombrown."
)}`;

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 0.3],
    },
  },
};

const stagger: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const testimonials = [
  {
    quote:
      "Since I started taking Wellfed Tombrown with milk every morning, the results have been so visible. Pure quality.",
    name: "A. Nadia",
    location: "Lagos",
  },
  {
    quote:
      "Finding a nourishing breakfast for the kids was hard until this. Smooth, satisfying and easy to prepare.",
    name: "Grace T.",
    location: "Abuja",
  },
  {
    quote:
      "The roasted flavour is top tier. You can instantly tell that the ingredients have been thoughtfully selected.",
    name: "Aysher M.",
    location: "Kaduna",
  },
];

export default function PremiumWellfedLanding() {
  const [selectedProduct, setSelectedProduct] =
    useState<Product | null>(null);

  const [productModalOpen, setProductModalOpen] =
    useState(false);

  const openProduct = (product: Product) => {
    setSelectedProduct(product);
    setProductModalOpen(true);
  };

  const closeProduct = () => {
    setProductModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="overflow-hidden bg-[#0A0503] text-white">

      {/* =========================================================
          HERO
      ========================================================== */}

      <section className="relative overflow-hidden bg-[#CD9C61] pt-36 sm:pt-40 lg:pt-44">

        {/* Glow */}
        <div className="pointer-events-none absolute -left-5 top-50 h-105 w-105 rounded-full bg-[#E8D8C3]/40 blur-[130px]" />

        <div className="pointer-events-none absolute -bottom-40 -right-25 h-150 w-150 rounded-full bg-[#E8D8C3]/20 blur-[150px]" />

        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:pb-28">

          {/* =====================================================
              HERO COPY
          ====================================================== */}

          <div className="max-w-2xl text-center lg:text-left">

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
              }}
            >
              <span className="
                inline-flex
                items-center
                rounded-full
                border
                border-[#0A0503]/30
                bg-[#E8D8C3]/40
                px-4
                py-2
                text-[10px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#0A0503]
              ">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#0A0503]" />
                100% Natural Ingredients
              </span>
            </motion.div>

            <motion.h1
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                mt-8
                font-serif
                text-5xl
                leading-[0.98]
                tracking-[-0.04em]
                text-[#120A07]/40
                sm:text-6xl
                lg:text-7xl
                xl:text-8xl
              "
            >
              Nourish well.
              <br />

              <span className="italic font-light text-[#0A0503]">
                Gain with purpose.
              </span>
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.22,
              }}
              className="
                mx-auto
                mt-7
                max-w-xl
                text-sm
                font-light
                leading-7
                tracking-wide
                text-white/85
                sm:text-base
                lg:mx-0
              "
            >
              A premium Tombrown blend crafted from carefully
              selected grains and nuts, made to turn an ordinary
              breakfast into a nourishing daily ritual.
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.32,
              }}
              className="
                mt-9
                flex
                flex-col
                items-center
                justify-center
                gap-3
                sm:flex-row
                lg:justify-start
              "
            >
              <a
                href={whatsappUrl}
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
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#CD9C61]
                  shadow-[0_0_30px_rgba(205,156,97,0.18)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_0_40px_rgba(205,156,97,0.30)]
                  sm:w-auto
                "
              >
                Order on WhatsApp
              </a>

              <Link
                href="/product"
                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#120A07]
                  bg-white
                  px-8
                  py-4
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#120A07]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_0_40px_rgba(205,156,97,0.30)]
                  sm:w-auto
                "
              >
                Explore Collection
              </Link>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.5,
              }}
              className="
                mt-8
                flex
                flex-wrap
                items-center
                justify-center
                gap-x-5
                gap-y-2
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.14em]
                text-[#6B4F3A]
                lg:justify-start
              "
            >
              <span>Premium Grains</span>

              <span>✦</span>

              <span>Protein Powered</span>

              <span>✦</span>

              <span>Carefully Made</span>
            </motion.div>
          </div>

          {/* =====================================================
              HERO PRODUCT
          ====================================================== */}
<div
  className="
    relative
    min-h-125
    overflow-hidden
    rounded-4xl
    border
    border-[#0A0503]
    bg-[#6B4F3A]
    sm:min-h-145
    lg:min-h-162.5
  "
>
  {/* Product image covering the entire area */}
  <motion.img
    src="/logo.png"
    alt="Wellfed Tombrown"
    className="
      absolute
      inset-0
      z-10
      h-full
      w-full
      object-cover
      object-center
    "
    animate={{
      scale: [1, 1.02, 1],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  {/* Dark/light overlay for readability */}
  <div
    className="
      absolute
      inset-0
      z-20
      bg-linear-to-t
      from-[#120A07]/50
      via-transparent
      to-transparent
    "
  />

  {/* Floating stat */}
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{
      duration: 0.8,
      delay: 1,
    }}
    className="
      absolute
      bottom-6
      right-6
      z-30
      rounded-2xl
      border
      border-white/30
      bg-[#120A07]/90
      px-5
      py-4
      shadow-2xl
      backdrop-blur-xl
    "
  >
    <p className="font-serif text-4xl text-white">
      100
      <span className="text-xl text-[#CD9C61]">%</span>
    </p>

    <p
      className="
        mt-1
        text-[9px]
        font-semibold
        uppercase
        tracking-[0.16em]
        text-white/50
      "
    >
      Natural roasted
      <br />
      grains & nuts
    </p>
  </motion.div>
</div>
        </div>
      </section>

      {/* =========================================================
          TRUST STRIP
      ========================================================== */}

      <section className="border-y border-white/8 bg-[#6B4F3A]">
        <div className="
          mx-auto
          grid
          max-w-7xl
          grid-cols-2
          divide-x
          divide-[#CD9C61]/30
          px-6
          sm:grid-cols-4
        ">
          {[
            ["01", "Premium Ingredients"],
            ["02", "Carefully Roasted"],
            ["03", "Protein Powered"],
            ["04", "Made For Everyday"],
          ].map(([number, label]) => (
            <div
              key={number}
              className="px-4 py-8 sm:px-6 lg:px-8"
            >
              <p className="
                text-[9px]
                font-bold
                tracking-[0.15em]
                text-[#CD9C61]
              ">
                {number}
              </p>

              <p className="
                mt-2
                max-w-37.5
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.12em]
                text-[#120A07]/80
                sm:text-xs
              ">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          COLLECTION
      ========================================================== */}

      <section className="bg-[#120A07] px-6 py-28 lg:py-36">
        <div className="mx-auto max-w-7xl">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: "-100px",
            }}
            variants={fadeUp}
            className="
              flex
              flex-col
              justify-between
              gap-6
              md:flex-row
              md:items-end
            "
          >
            <div>
              <p className="
                mb-5
                text-[10px]
                font-bold
                uppercase
                tracking-[0.25em]
                text-[#CD9C61]
              ">
                The collection
              </p>

              <h2 className="
                max-w-3xl
                font-serif
                text-4xl
                leading-tight
                tracking-[-0.03em]
                text-white
                sm:text-5xl
                lg:text-6xl
              ">
                Choose your
                <span className="italic font-light text-[#C9A15B]">
                  {" "}daily ritual.
                </span>
              </h2>
            </div>

            <Link
              href="/product"
              className="
                group
                inline-flex
                items-center
                text-[10px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-white/55
                transition
                hover:text-[#CD9C61]
              "
            >
              View all products

              <span className="
                ml-3
                transition-transform
                duration-300
                group-hover:translate-x-1
              ">
                →
              </span>
            </Link>
          </motion.div>

          {/* Product grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: "-60px",
            }}
            variants={stagger}
            className="
              mt-14
              grid
              grid-cols-1
              gap-6
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {products.slice(0, 4).map((product) => (
              <motion.article
                key={product.id}
                variants={fadeUp}
                className="group"
              >
                {/* Product image */}
                <button
                  type="button"
                  onClick={() =>
                    openProduct(product)
                  }
                  aria-label={`View ${product.title}`}
                  className="block w-full text-left"
                >
                  <div className="
                    relative
                    aspect-[0.85]
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/8
                    bg-[#0F0806]
                  ">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                        transition-all
                        duration-700
                        group-hover:scale-[1.04]
                      "
                    />

                    <div className="
                      absolute
                      inset-0
                      bg-linear-to-t
                      from-[#0A0503]
                      via-[#0A0503]/10
                      to-transparent
                      opacity-80
                    " />

                    {/* Product badge */}
                    {product.badge && (
                      <div className="
                        absolute
                        left-5
                        top-5
                        rounded-full
                        border
                        border-white/15
                        bg-[#120A07]/60
                        px-3
                        py-1.5
                        backdrop-blur-md
                      ">
                        <span className="
                          text-[8px]
                          font-bold
                          uppercase
                          tracking-[0.18em]
                          text-[#E3B77D]
                        ">
                          {product.badge}
                        </span>
                      </div>
                    )}

                    {/* Category */}
                    <div className="
                      absolute
                      bottom-5
                      left-5
                    ">
                      <span className="
                        text-[8px]
                        font-bold
                        uppercase
                        tracking-[0.18em]
                        text-white/45
                      ">
                        {product.category}
                      </span>
                    </div>

                    {/* View */}
                    <div className="
                      absolute
                      bottom-5
                      right-5
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/15
                      bg-white/5
                      text-[#E3B77D]
                      opacity-0
                      backdrop-blur-md
                      transition-all
                      duration-500
                      group-hover:opacity-100
                    ">
                      ↗
                    </div>
                  </div>
                </button>

                {/* Product information */}
                <div className="mt-5">
                  <div className="
                    flex
                    items-start
                    justify-between
                    gap-4
                  ">
                    <div className="min-w-0">
                      <button
                        type="button"
                        onClick={() =>
                          openProduct(product)
                        }
                        className="text-left"
                      >
                        <h3 className="
                          font-serif
                          text-xl
                          text-white
                          transition-colors
                          duration-300
                          hover:text-[#CD9C61]
                        ">
                          {product.title}
                        </h3>
                      </button>

                      <p className="
                        mt-1
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.15em]
                        text-white/35
                      ">
                        {product.subtitle}
                      </p>
                    </div>

                    <span className="
                      shrink-0
                      pt-1
                      text-sm
                      font-light
                      tracking-wide
                      text-white/75
                    ">
                      ₦
                      {product.price.toLocaleString(
                        "en-NG"
                      )}
                    </span>
                  </div>

                  {/* Add to cart */}
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
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          EDITORIAL / INGREDIENTS
      ========================================================== */}

      <section className="bg-[#F5EFE8] px-6 py-24 text-[#120A07] lg:py-32">
        <div className="
          mx-auto
          grid
          max-w-7xl
          grid-cols-1
          items-center
          gap-16
          lg:grid-cols-[0.8fr_1.2fr]
          lg:gap-24
        ">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: "-100px",
            }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="
                flex
                items-center
                gap-3
                text-[10px]
                font-bold
                uppercase
                tracking-[0.25em]
                text-[#CD9C61]
              "
            >
              <span className="h-px w-8 bg-[#CD9C61]" />
              The Wellfed Standard
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="
                mt-6
                font-serif
                text-5xl
                leading-[1.02]
                tracking-[-0.04em]
                sm:text-6xl
                lg:text-7xl
              "
            >
              Made from
              <br />

              <span className="italic font-light text-black/45">
                what matters.
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="
                mt-7
                max-w-xl
                text-sm
                leading-7
                text-black/60
                sm:text-base
              "
            >
              We believe great nourishment begins with great
              ingredients. Every blend is thoughtfully assembled,
              carefully roasted and created to make healthy eating
              feel effortless.
            </motion.p>

            <motion.div
              variants={stagger}
              className="mt-10 border-t border-black/10"
            >
              {[
                "Premium Soya",
                "Guinea Corn",
                "Groundnuts",
                "Thoughtfully selected ingredients",
              ].map((ingredient) => (
                <motion.div
                  variants={fadeUp}
                  key={ingredient}
                  className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-black/10
                    py-5
                  "
                >
                  <span className="font-serif text-lg">
                    {ingredient}
                  </span>

                  <span className="text-sm text-[#CD9C61]">
                    ✦
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              relative
              aspect-[0.85]
              overflow-hidden
              bg-[#E8DBCC]
              lg:aspect-[1.05]
            "
          >
            <img
              src="https://images.unsplash.com/photo-1490474504059-bf2db5ab2348?q=80&w=1400&auto=format&fit=crop"
              alt="Healthy nourishing breakfast"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                transition-transform
                duration-[12s]
                hover:scale-105
              "
            />

            <div className="
              absolute
              inset-0
              bg-linear-to-t
              from-black/20
              via-transparent
              to-transparent
            " />

            <div className="
              absolute
              bottom-6
              left-6
              right-6
            ">
              <div className="
                max-w-xs
                rounded-2xl
                border
                border-white/20
                bg-black/25
                px-5
                py-4
                text-white
                backdrop-blur-md
              ">
                <p className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#E3B77D]
                ">
                  Thoughtfully made
                </p>

                <p className="
                  mt-2
                  font-serif
                  text-xl
                ">
                  Simple ingredients.
                  <br />
                  Better mornings.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          MANIFESTO
      ========================================================== */}

      <section className="bg-[#0A0503] px-6 py-28 lg:py-36">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.25em]
                text-[#CD9C61]
              "
            >
              Our philosophy
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="
                mt-7
                font-serif
                text-4xl
                leading-tight
                tracking-[-0.03em]
                text-white/50
                sm:text-5xl
                lg:text-7xl
              "
            >
              Good food should feel
              <br />

              <span className="italic font-light text-[#B87333]">
                good to come back to.
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="
                mx-auto
                mt-8
                max-w-2xl
                text-sm
                leading-7
                text-[#FFFFFF]
                sm:text-base
              "
            >
              That is why Wellfed is built around something simple:
              satisfying flavour, thoughtful ingredients and a
              breakfast ritual you can actually look forward to.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          TESTIMONIALS
      ========================================================== */}

      <section className="bg-[#120A07] px-6 py-28 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            variants={fadeUp}
            className="
              flex
              flex-col
              justify-between
              gap-6
              md:flex-row
              md:items-end
            "
          >
            <div>
              <p className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.25em]
                text-[#CD9C61]
              ">
                Customer love
              </p>

              <h2 className="
                mt-5
                font-serif
                text-4xl
                tracking-[-0.03em]
                sm:text-5xl
              ">
                Real people.
                <br />

                <span className="italic font-light text-white/35">
                  Real reactions.
                </span>
              </h2>
            </div>

            <p className="
              max-w-xs
              text-xs
              leading-6
              text-white/35
            ">
              From Lagos to Abuja and beyond, Wellfed is becoming
              part of everyday breakfast routines.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: "-50px",
            }}
            variants={stagger}
            className="
              mt-14
              grid
              grid-cols-1
              gap-5
              md:grid-cols-3
            "
          >
            {testimonials.map((review) => (
              <motion.article
                key={review.name}
                variants={fadeUp}
                className="
                  group
                  flex
                  min-h-82.5
                  flex-col
                  justify-between
                  border
                  border-white/8
                  bg-[#0E0705]
                  p-8
                  transition-all
                  duration-500
                  hover:border-[#CD9C61]/30
                  hover:bg-[#120A07]
                "
              >
                <div>
                  <div className="
                    flex
                    items-center
                    gap-1
                    text-[#CD9C61]
                  ">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>

                  <div className="
                    mt-10
                    font-serif
                    text-3xl
                    text-white/30
                  ">
                    “
                  </div>

                  <p className="
                    mt-2
                    text-sm
                    font-light
                    leading-7
                    text-white/70
                  ">
                    {review.quote}
                  </p>
                </div>

                <div className="
                  mt-10
                  border-t
                  border-white/8
                  pt-5
                ">
                  <p className="
                    font-serif
                    text-lg
                    text-white
                  ">
                    {review.name}
                  </p>

                  <p className="
                    mt-1
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-white/30
                  ">
                    Customer · {review.location}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}

      <section className="
        relative
        overflow-hidden
        bg-[#CD9C61]
        px-6
        py-24
        text-[#120A07]
        lg:py-32
      ">
        <div className="
          pointer-events-none
          absolute
          -right-24
          -top-24
          h-80
          w-80
          rounded-full
          border
          border-black/10
        " />

        <div className="
          pointer-events-none
          absolute
          -bottom-32
          -left-16
          h-96
          w-96
          rounded-full
          border
          border-black/10
        " />

        <div className="
          relative
          z-10
          mx-auto
          flex
          max-w-7xl
          flex-col
          items-start
          justify-between
          gap-10
          lg:flex-row
          lg:items-end
        ">
          <div>
            <p className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.25em]
              text-black/45
            ">
              Ready when you are
            </p>

            <h2 className="
              mt-5
              max-w-3xl
              font-serif
              text-5xl
              leading-[0.95]
              tracking-[-0.04em]
              sm:text-6xl
              lg:text-7xl
            ">
              Make your mornings
              <br />
              worth looking forward to.
            </h2>
          </div>

          <div className="
            flex
            w-full
            flex-col
            gap-3
            sm:w-auto
            sm:flex-row
          ">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
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
                text-[#F9F4EE]
                transition
                hover:-translate-y-1
              "
            >
              Order on WhatsApp
            </a>

            <Link
              href="/product"
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                border
                border-black/20
                px-8
                py-4
                text-[10px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#120A07]
                transition
                hover:border-black/50
              "
            >
              Browse Collection
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          PRODUCT MODAL
      ========================================================== */}

      <ProductModal
        product={selectedProduct}
        open={productModalOpen}
        onClose={closeProduct}
      />
    </div>
  );
}