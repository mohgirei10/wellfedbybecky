"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Product } from "../data/product";
import { useCartStore } from "@/store/cart";
import { p } from "framer-motion/client";

type ProductModalProps = {
  product: Product | null;
  open: boolean;
  onClose: () => void;
};

function formatCurrency(value: number) {
  return `₦${value.toLocaleString("en-NG")}`;
}

export default function ProductModal({
  product,
  open,
  onClose,
}: ProductModalProps) {
  const addItem = useCartStore((state) => state.addItem);

  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes[0]?.id ?? "");
      setQuantity(1);
      setAdded(false);
    }
  }, [product]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!product) {
    return null;
  }

  const selectedOption =
    product.sizes.find(
      (size) => size.id === selectedSize
    ) ?? product.sizes[0];

  if (!selectedOption) {
    return null;
  }

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      slug: product.slug,
      title: product.title,
      size: selectedOption.label,
      price: selectedOption.price,
      quantity,
      image: product.image,
    });

    setAdded(true);

    window.setTimeout(() => {
      onClose();
    }, 800);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.button
            type="button"
            aria-label="Close product"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              z-70
              cursor-default
              bg-black/70
              backdrop-blur-md
            "
          />

          {/* Modal */}
          <div className="fixed inset-0 z-80 flex items-center justify-center overflow-y-auto p-4 sm:p-6">
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.98,
              }}
              transition={{
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={(event) => event.stopPropagation()}
              className="
                relative
                my-8
                grid
                w-full
                max-w-5xl
                overflow-hidden
                rounded-[1.75rem]
                border
                border-white/10
                bg-[#120A07]
                shadow-[0_30px_100px_rgba(0,0,0,0.5)]
                lg:grid-cols-2
              "
            >
              {/* Close */}
              <button
                type="button"
                onClick={onClose}
                aria-label="Close product modal"
                className="
                  absolute
                  right-5
                  top-5
                  z-30
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  bg-black/20
                  text-xl
                  text-white/65
                  backdrop-blur-md
                  transition
                  hover:border-[#CD9C61]/50
                  hover:text-[#CD9C61]
                "
              >
                ×
              </button>

              {/* Image */}
              <div className="relative min-h-105 overflow-hidden bg-[#E9DDCD] sm:min-h-140">
                <div className="absolute left-1/2 top-1/2 h-[65%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#CD9C61]/10 blur-[90px]" />

                <img
                  src={product.image}
                  alt={product.title}
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                  "
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />

                {product.badge && (
                  <div className="absolute left-6 top-6 rounded-full border border-black/10 bg-white/70 px-4 py-2 backdrop-blur-md">
                    <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#120A07]/65">
                      {product.badge}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#CD9C61]">
                  {product.category} collection
                </p>

                <h2 className="mt-4 font-serif text-4xl leading-none tracking-[-0.035em] text-white sm:text-5xl">
                  {product.title}
                </h2>

                <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.16em] text-white/30">
                  {product.subtitle}
                </p>

                <div className="mt-6">
                  <span className="text-2xl font-light text-[#CD9C61]">
                    {formatCurrency(selectedOption.price)}
                  </span>
                </div>

                <p className="mt-6 text-sm leading-7 text-white/50">
                  {product.longDescription ??
                    product.description}
                </p>

                {/* Sizes */}
                <div className="mt-8">
                  <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.18em] text-white/35">
                    Select size
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    {product.sizes.map((size) => {
                      const active =
                        selectedSize === size.id;

                      return (
                        <button
                          type="button"
                          key={size.id}
                          onClick={() =>
                            setSelectedSize(size.id)
                          }
                          className={`
                            rounded-xl
                            border
                            p-4
                            text-left
                            transition-all
                            ${
                              active
                                ? "border-[#CD9C61] bg-[#CD9C61]/6"
                                : "border-white/10 bg-white/2 hover:border-white/20"
                            }
                          `}
                        >
                          <p
                            className={`text-[10px] font-bold uppercase tracking-[0.15em] ${
                              active
                                ? "text-[#CD9C61]"
                                : "text-white/65"
                            }`}
                          >
                            {size.label}
                          </p>

                          <p className="mt-2 text-xs text-white/30">
                            {formatCurrency(size.price)}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Quantity */}
                <div className="mt-7">
                  <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.18em] text-white/35">
                    Quantity
                  </p>

                  <div className="flex h-12 w-fit items-center rounded-full border border-white/10">
                    <button
                      type="button"
                      onClick={() =>
                        setQuantity((value) =>
                          Math.max(1, value - 1)
                        )
                      }
                      className="flex h-full w-12 items-center justify-center text-white/45 hover:text-white"
                    >
                      −
                    </button>

                    <span className="w-8 text-center text-xs font-semibold">
                      {quantity}
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        setQuantity((value) => value + 1)
                      }
                      className="flex h-full w-12 items-center justify-center text-white/45 hover:text-white"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Add to cart */}
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="
                    mt-8
                    flex
                    h-14
                    w-full
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#CD9C61]
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-[#120A07]
                    transition-all
                    hover:bg-[#E3B77D]
                  "
                >
                  {added
                    ? "✓ Added to Cart"
                    : "Add to Cart"}
                </button>

                <p className="mt-4 text-center text-[9px] leading-5 text-white/25">
                  You can review your cart and complete
                  checkout through WhatsApp.
                </p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}