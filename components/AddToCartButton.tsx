// src/components/AddToCartButton.tsx

"use client";

import React, { useState } from "react";
import { useCartStore } from "@/store/cart";

type AddToCartButtonProps = {
  productId: string;
  slug: string;
  title: string;
  size: string;
  price: number;
  image: string;
  quantity?: number;
  className?: string;
};

export default function AddToCartButton({
  productId,
  slug,
  title,
  size,
  price,
  image,
  quantity = 1,
  className = "",
}: AddToCartButtonProps) {
  const addItem = useCartStore((state) => state.addItem);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addItem({
      productId,
      slug,
      title,
      size,
      price,
      quantity,
      image,
    });

    setAdded(true);

    window.setTimeout(() => {
      setAdded(false);
    }, 1800);
  };

  return (
    <button
      type="button"
      onClick={handleAddToCart}
      className={`
        flex
        items-center
        justify-center
        gap-2
        rounded-full
        bg-[#CD9C61]
        px-6
        py-3.5
        text-[10px]
        font-bold
        uppercase
        tracking-[0.18em]
        text-[#120A07]
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:bg-[#E3B77D]
        ${className}
      `}
    >
      {added ? (
        <>
          <span className="text-sm">✓</span>
          Added to Cart
        </>
      ) : (
        <>
          <span className="text-sm"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-cart-icon lucide-shopping-cart"><path d="m2.05 2.05 1.099-.028a1 1 0 0 1 1.008.815l2.69 14.347A1 1 0 0 0 7.83 18H18"/><path d="M4.563 5h16.435a1 1 0 0 1 .981 1.204l-1.026 6.226A2 2 0 0 1 18.962 14H6.25"/><circle cx="18" cy="20" r="2"/><circle cx="8" cy="20" r="2"/></svg></span>
          Add to Cart
        </>
      )}
    </button>
  );
}