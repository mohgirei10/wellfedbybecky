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
          <span className="text-sm">+</span>
          Add to Cart
        </>
      )}
    </button>
  );
}