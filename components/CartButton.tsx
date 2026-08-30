// src/components/CartButton.tsx

"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useCartStore } from "@/store/cart";
import CartDrawer from "./CartDrawer";

export default function CartButton() {
  const [open, setOpen] = useState(false);

  const items = useCartStore((state) => state.items);

  const itemCount = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Open cart with ${itemCount} items`}
        className="
          relative
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          text-white/65
          transition
          hover:border-[#CD9C61]/50
          hover:text-[#CD9C61]
        "
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="h-4.5 w-[18px]"
          aria-hidden="true"
        >
          <path d="M6 8h12l1 12H5L6 8Z" />
          <path d="M9 8a3 3 0 0 1 6 0" />
        </svg>

        <AnimatePresence>
          {itemCount > 0 && (
            <motion.span
              key={itemCount}
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="
                absolute
                -right-1
                -top-1
                flex
                h-5
                min-w-5
                items-center
                justify-center
                rounded-full
                bg-[#CD9C61]
                px-1
                text-[8px]
                font-bold
                text-[#120A07]
              "
            >
              {itemCount > 99 ? "99+" : itemCount}
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      <CartDrawer
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}