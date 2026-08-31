"use client";

import React, { useEffect, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store/cart";

type CartDrawerProps = {
  open: boolean;
  onClose: () => void;
};

function formatCurrency(value: number) {
  return `₦${value.toLocaleString("en-NG")}`;
}

export default function CartDrawer({
  open,
  onClose,
}: CartDrawerProps) {
  const router = useRouter();

  const items = useCartStore((state) => state.items);

  const updateQuantity = useCartStore(
    (state) => state.updateQuantity
  );

  const removeItem = useCartStore(
    (state) => state.removeItem
  );

  const clearCart = useCartStore(
    (state) => state.clearCart
  );

  const subtotal = useMemo(() => {
    return items.reduce(
      (total, item) =>
        total + item.price * item.quantity,
      0
    );
  }, [items]);

  useEffect(() => {
    document.body.style.overflow = open
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleCheckout = () => {
    if (items.length === 0) return;

    onClose();

    router.push("/checkout");
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.button
            type="button"
            aria-label="Close cart"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              z-80
              cursor-default
              bg-black/65
              backdrop-blur-sm
            "
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              fixed
              right-0
              top-0
              z-90
              flex
              h-dvh
              w-full
              max-w-lg
              flex-col
              border-l
              border-white/10
              bg-[#120A07]
              shadow-2xl
            "
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/8 px-6 py-5">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#CD9C61]">
                  Your selection
                </p>

                <h2 className="mt-1 font-serif text-2xl text-white">
                  Shopping Cart
                </h2>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close cart"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  text-xl
                  text-white/60
                  transition
                  hover:border-[#CD9C61]/50
                  hover:text-[#CD9C61]
                "
              >
                ×
              </button>
            </div>

            {/* Cart */}
            <div className="flex-1 overflow-y-auto">
              {items.length === 0 ? (
                <div className="flex min-h-[65vh] flex-col items-center justify-center px-8 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 font-serif text-2xl text-[#CD9C61]">
                    ✦
                  </div>

                  <h3 className="mt-6 font-serif text-2xl text-white">
                    Your cart is empty.
                  </h3>

                  <p className="mt-3 max-w-xs text-xs leading-6 text-white/35">
                    Add something from the Wellfed collection
                    and it will appear here.
                  </p>

                  <button
                    type="button"
                    onClick={onClose}
                    className="
                      mt-6
                      rounded-full
                      bg-[#CD9C61]
                      px-6
                      py-3.5
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-[#120A07]
                    "
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-5 p-6">
                  {items.map((item) => (
                    <div
                      key={`${item.productId}-${item.size}`}
                      className="
                        flex
                        gap-4
                        border-b
                        border-white/8
                        pb-5
                      "
                    >
                      {/* Image */}
                      <div className="h-24 w-20 shrink-0 overflow-hidden rounded-xl bg-[#0E0705]">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      {/* Details */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h3 className="font-serif text-lg text-white">
                              {item.title}
                            </h3>

                            <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.15em] text-white/30">
                              {item.size}
                            </p>
                          </div>

                          <button
                            type="button"
                            onClick={() =>
                              removeItem(
                                item.productId,
                                item.size
                              )
                            }
                            aria-label={`Remove ${item.title}`}
                            className="text-lg text-white/25 transition hover:text-red-400"
                          >
                            ×
                          </button>
                        </div>

                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex h-9 items-center rounded-full border border-white/10">
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(
                                  item.productId,
                                  item.size,
                                  item.quantity - 1
                                )
                              }
                              className="flex h-full w-9 items-center justify-center text-white/40 hover:text-white"
                            >
                              −
                            </button>

                            <span className="w-7 text-center text-xs font-semibold text-white">
                              {item.quantity}
                            </span>

                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(
                                  item.productId,
                                  item.size,
                                  item.quantity + 1
                                )
                              }
                              className="flex h-full w-9 items-center justify-center text-white/40 hover:text-white"
                            >
                              +
                            </button>
                          </div>

                          <p className="text-sm text-[#CD9C61]">
                            {formatCurrency(
                              item.price *
                                item.quantity
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-white/8 bg-[#0E0705] p-6">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/30">
                      Subtotal
                    </p>

                    <p className="mt-1 font-serif text-2xl text-white">
                      {formatCurrency(subtotal)}
                    </p>
                  </div>

                  <p className="text-right text-[9px] uppercase leading-5 tracking-[0.12em] text-white/30">
                    Delivery
                    <br />
                    Calculated separately
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleCheckout}
                  className="
                    mt-5
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
                    transition
                    hover:bg-[#E3B77D]
                  "
                >
                  Proceed to Checkout
                </button>

                <button
                  type="button"
                  onClick={clearCart}
                  className="
                    mt-4
                    w-full
                    text-center
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-white/25
                    transition
                    hover:text-red-400
                  "
                >
                  Clear cart
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}