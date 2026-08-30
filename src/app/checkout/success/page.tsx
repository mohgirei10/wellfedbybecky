"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CheckoutSuccessPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#120A07] px-6 text-[#F9F4EE]">
      <motion.main
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-xl text-center"
      >
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#25D366]/10 text-3xl text-[#25D366]">
          ✓
        </div>

        <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.25em] text-[#CD9C61]">
          Order handoff complete
        </p>

        <h1 className="mt-5 font-serif text-5xl leading-none tracking-[-0.04em] sm:text-6xl">
          We have your order.
        </h1>

        <p className="mx-auto mt-6 max-w-md text-sm leading-7 text-white/45">
          Your order details have been prepared for WhatsApp.
          Becky can now confirm your delivery details, delivery
          fee and payment instructions with you.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/product"
            className="
              rounded-full
              bg-[#CD9C61]
              px-7
              py-4
              text-[10px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-[#120A07]
              transition
              hover:bg-[#E3B77D]
            "
          >
            Continue Shopping
          </Link>

          <Link
            href="/"
            className="
              rounded-full
              border
              border-white/10
              px-7
              py-4
              text-[10px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-white/60
              transition
              hover:border-white/25
              hover:text-white
            "
          >
            Back Home
          </Link>
        </div>
      </motion.main>
    </div>
  );
}