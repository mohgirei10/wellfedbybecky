"use client";

import React from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const rawPhone = "2347017096710";

const whatsappUrl = `https://wa.me/${rawPhone}?text=${encodeURIComponent(
  "Hello Becky! I'd like to learn more about Wellfed Tombrown."
)}`;

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1],
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

const values = [
  {
    number: "01",
    title: "Thoughtful",
    desc: "We choose ingredients and processes with care, keeping the focus on quality and everyday nourishment.",
  },
  {
    number: "02",
    title: "Honest",
    desc: "We believe food should speak for itself. No unnecessary complexity, just a carefully made blend.",
  },
  {
    number: "03",
    title: "Nourishing",
    desc: "Our blends are designed to make a satisfying, wholesome meal part of your daily routine.",
  },
  {
    number: "04",
    title: "Local",
    desc: "Proudly developed and produced in Nigeria, with an appreciation for ingredients familiar to our homes.",
  },
];

export default function PremiumAboutPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#0A0503] text-[#F9F4EE]">
      {/* =========================================================
          HERO
      ========================================================== */}
     
         
            <section className="bg-[#0A0503] px-6 py-28 lg:py-36">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{ once: true }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="aspect-[0.8] overflow-hidden bg-[#160C08]">
              <img
                src="/ceo.png"
                alt="Becky, founder of Wellfed by Becky"
                className="h-full w-full object-cover rounded transition duration-700 hover:scale-105 hover:grayscale-0"
              />
            </div>

            <div className="absolute -bottom-5 -right-5 border border-white/10 bg-[#120A07] px-5 py-4">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#CD9C61]">
                Founder
              </p>

              <p className="mt-1 font-serif text-lg text-white">
                Becky
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#CD9C61]"
            >
              A note from Becky
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-7 font-serif text-4xl leading-[1.18] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              “I wanted to create something that felt familiar, nourishing
              and genuinely enjoyable — something people would be happy to
              make part of their everyday life.”
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-9 flex items-center gap-4"
            >
              <div className="h-px w-10 bg-[#CD9C61]" />

              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                Becky · Founder, Wellfed by Becky
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

           <section className="border-y border-white/8 bg-[#0E0705] px-6 mt-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-3">
          <div className="border-b border-white/8 px-0 py-10 md:border-b-0 md:border-r md:px-8 lg:px-12">
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#CD9C61]">
              01
            </p>

            <p className="mt-3 font-serif text-xl text-white">
              Simple ingredients.
            </p>
          </div>

          <div className="border-b border-white/8 px-0 py-10 md:border-b-0 md:border-r md:px-8 lg:px-12">
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#CD9C61]">
              02
            </p>

            <p className="mt-3 font-serif text-xl text-white">
              Thoughtful preparation.
            </p>
          </div>

          <div className="px-0 py-10 md:px-8 lg:px-12">
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#CD9C61]">
              03
            </p>

            <p className="mt-3 font-serif text-xl text-white">
              Better everyday nourishment.
            </p>
          </div>
        </div>
      </section>

      <section className="relative bg-[#120A07] px-6 pb-24 pt-36 sm:pt-40 lg:pb-32 lg:pt-48">
        <div className="pointer-events-none absolute -left-45 top-20 h-107.5 w-107.5 rounded-full bg-[#CD9C61]/8 blur-[140px]" />

        <div className="pointer-events-none absolute -bottom-50 -right-25 h-125 w-125 rounded-full bg-[#CD9C61]/7 blur-[150px]" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#CD9C61]"
            >
              Our story
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="mx-auto mt-7 max-w-5xl font-serif text-5xl leading-[0.98] tracking-[-0.045em] text-[#F9F4EE] sm:text-6xl lg:text-8xl"
            >
              Rooted in{" "}
              <span className="italic font-light text-white/38">
                tradition.
              </span>
              <br />
              Made for{" "}
              <span className="text-[#CD9C61]">today.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-8 max-w-2xl text-sm font-light leading-7 text-white/55 sm:text-base"
            >
              Wellfed by Becky began with a simple belief: nourishing food
              should be comforting, thoughtfully made and easy to make part of
              everyday life.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          BRAND STATEMENT
      ========================================================== */}
    

      {/* =========================================================
          IMAGE / STORY
      ========================================================== */}
      <section className="bg-[#F5EFE8] px-6 py-24 text-[#120A07] lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{ once: true }}
            className="relative aspect-[0.9] overflow-hidden bg-[#E4D8CB] sm:aspect-[1.05]"
          >
            <img
              src="/hero.png"
              alt="Wellfed by Becky ingredients and preparation"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[10s] hover:scale-105"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 rounded-2xl border border-white/20 bg-black/25 px-5 py-4 text-white backdrop-blur-md">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#E3B77D]">
                The Wellfed story
              </p>

              <p className="mt-2 max-w-47.5 font-serif text-xl">
                Familiar ingredients.
                <br />
                A more thoughtful ritual.
              </p>
            </div>
          </motion.div>

          {/* Story */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#CD9C61]"
            >
              <span className="h-px w-8 bg-[#CD9C61]" />
              Where it began
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mt-6 font-serif text-5xl leading-[1.02] tracking-[-0.04em] sm:text-6xl"
            >
              From a familiar
              <br />
              <span className="italic font-light text-black/40">
                idea to a brand.
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-7 text-sm leading-7 text-black/60 sm:text-base"
            >
              Tombrown has long been part of everyday nourishment across
              African homes. Wellfed by Becky takes that familiar idea and
              gives it a more intentional, contemporary expression.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-5 text-sm leading-7 text-black/60 sm:text-base"
            >
              The goal is not to make food complicated. It is to create blends
              that feel trustworthy, satisfying and easy to return to again and
              again.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-9 border-t border-black/10 pt-7"
            >
              <p className="font-serif text-2xl">
                “Nourishment should fit naturally into life.”
              </p>

              <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.18em] text-black/40">
                The Wellfed philosophy
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================== */}
      <section className="bg-[#120A07] px-6 py-28 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.p
              variants={fadeUp}
              className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#CD9C61]"
            >
              Our approach
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mt-5 font-serif text-5xl leading-[1.02] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl"
            >
              Carefully chosen.
              <br />
              <span className="italic font-light text-white/35">
                Carefully made.
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-2xl text-sm leading-7 text-white/45 sm:text-base"
            >
              From ingredient selection to roasting and blending, every step
              should serve the final experience: a smooth, satisfying and
              thoughtfully prepared Tombrown.
            </motion.p>
          </motion.div>

          {/* Process image */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{ once: true }}
            className="mt-14 relative aspect-2/1 overflow-hidden bg-[#1A0F0A]"
          >
            <img
              src="/hero.png"
              alt="Wellfed Tombrown preparation process"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[12s] hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
              <div className="max-w-lg rounded-2xl border border-white/10 bg-black/25 p-6 backdrop-blur-md">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#E3B77D]">
                  From grain to blend
                </p>

                <p className="mt-3 font-serif text-2xl text-white sm:text-3xl">
                  The details matter.
                </p>

                <p className="mt-3 text-xs leading-6 text-white/60">
                  We focus on careful handling, roasting and blending to create
                  the smooth texture and rich roasted character associated with
                  Wellfed.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          VALUES
      ========================================================== */}
      <section className="bg-[#F5EFE8] px-6 py-24 text-[#120A07] lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.75fr_1.25fr]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.p
                variants={fadeUp}
                className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#CD9C61]"
              >
                What we stand for
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="mt-5 max-w-lg font-serif text-5xl leading-[1.03] tracking-[-0.04em] sm:text-6xl"
              >
                A few things
                <br />
                <span className="italic font-light text-black/40">
                  we won't compromise.
                </span>
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid grid-cols-1 sm:grid-cols-2"
            >
              {values.map((value) => (
                <motion.div
                  key={value.number}
                  variants={fadeUp}
                  className="border-b border-black/10 py-7 first:pt-0 sm:px-8 sm:nth-[2n+1]:border-r sm:nth-[2n+1]:pl-0 sm:nth-[2n+2]:pr-0"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-bold tracking-[0.18em] text-[#CD9C61]">
                      {value.number}
                    </span>

                    <span className="text-sm text-[#CD9C61]">✦</span>
                  </div>

                  <h3 className="mt-5 font-serif text-2xl">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-black/55">
                    {value.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOUNDER
      ========================================================== */}
     

      {/* =========================================================
          CTA
      ========================================================== */}
      <section className="bg-[#CD9C61] px-6 py-24 text-[#120A07] lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/45">
              Discover Wellfed
            </p>

            <h2 className="mt-5 max-w-3xl font-serif text-5xl leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Good nourishment
              <br />
              starts with a choice.
            </h2>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              href="/product"
              className="inline-flex items-center justify-center rounded-full bg-[#120A07] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#F9F4EE] transition hover:-translate-y-1"
            >
              Explore Collection
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-black/20 px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#120A07] transition hover:border-black/50"
            >
              Talk to Becky
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}