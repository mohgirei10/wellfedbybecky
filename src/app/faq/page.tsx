"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
type Category =
  | "All"
  | "Products"
  | "Preparation"
  | "Orders"
  | "Delivery"
  | "Payments";

type FAQ = {
  question: string;
  answer: string;
  category: Exclude<Category, "All">;
};

const categories: Category[] = [
  "All",
  "Products",
  "Preparation",
  "Orders",
  "Delivery",
  "Payments",
];

const faqs: FAQ[] = [
  {
    question: "What is Wellfed Tombrown?",
    answer:
      "Wellfed Tombrown is a blended grain-and-nut food product made from selected ingredients including soya beans, guinea corn and groundnuts. It is designed to be a convenient and satisfying addition to your everyday meal routine.",
    category: "Products",
  },
  {
    question: "What ingredients are used in Classic Blend?",
    answer:
      "Our Classic Blend is made with soya beans, guinea corn and groundnuts. For the most current ingredient and allergen information, please check the product packaging before consumption.",
    category: "Products",
  },
  {
    question: "Does Wellfed contain artificial preservatives?",
    answer:
      "Our Classic Blend is made without artificial preservatives. Please always refer to the product packaging for the latest ingredient information.",
    category: "Products",
  },
  {
    question: "Does Wellfed contain added sugar?",
    answer:
      "Classic Blend is not formulated around added sugar. You can prepare it with milk, natural sweeteners or other additions according to your preference.",
    category: "Products",
  },
  {
    question: "How do I prepare Wellfed Tombrown?",
    answer:
      "Mix your desired quantity with a small amount of cool water to make a smooth paste. Gradually add hot water while stirring continuously until you reach your preferred consistency. You can then add milk or your preferred sweetener.",
    category: "Preparation",
  },
  {
    question: "Can I prepare it with milk?",
    answer:
      "Yes. Wellfed can be enjoyed with milk, and many customers use it as part of their breakfast or daily meal routine. Prepare the Tombrown first, then add milk according to your preference.",
    category: "Preparation",
  },
  {
    question: "Can children take Wellfed?",
    answer:
      "Wellfed is a food product, but individual dietary needs vary. Parents and guardians should consider the child's age, allergies and dietary requirements and check the ingredient information on the packaging before serving.",
    category: "Preparation",
  },
  {
    question: "How do I place an order?",
    answer:
      "The easiest way to order is through WhatsApp. Choose the product and size you'd like, tap one of the Order on WhatsApp buttons and we'll confirm your order details, delivery location and payment information with you.",
    category: "Orders",
  },
  {
    question: "Can I order more than one pouch?",
    answer:
      "Yes. You can order multiple pouches or family-size packs. For larger or repeat orders, contact us directly on WhatsApp so we can confirm the order and delivery details.",
    category: "Orders",
  },
  {
    question: "Can I order through Instagram or TikTok?",
    answer:
      "You can reach us through our social channels, but WhatsApp is our preferred channel for completing an order because it allows us to confirm your product, quantity, delivery location and payment details directly.",
    category: "Orders",
  },
  {
    question: "Do you deliver across Nigeria?",
    answer:
      "We arrange delivery across Nigeria. Delivery availability, cost and estimated timing depend on your location and will be confirmed when your order is placed.",
    category: "Delivery",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery timing depends on your location and the delivery option available for your order. We'll confirm an estimated delivery timeframe with you before completing the order.",
    category: "Delivery",
  },
  {
    question: "How much is delivery?",
    answer:
      "Delivery charges depend on your location and the delivery method available. The delivery cost will be confirmed as part of your order before payment.",
    category: "Delivery",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "Available payment options are confirmed directly when your order is placed. We'll provide the payment details and confirm your order before dispatch.",
    category: "Payments",
  },
  {
    question: "Can I pay on delivery?",
    answer:
      "Payment-on-delivery availability depends on your location and the delivery arrangement for the order. Please contact us on WhatsApp to confirm whether it is available for your location.",
    category: "Payments",
  },
  {
    question: "What happens after I place an order?",
    answer:
      "We'll confirm your selected product, quantity and delivery location, then provide the relevant payment and delivery information. Once everything is confirmed, your order can be prepared for dispatch.",
    category: "Orders",
  },
];

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
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

function PlusIcon({ open }: { open: boolean }) {
  return (
    <span
      className={`relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
        open
          ? "border-[#CD9C61] bg-[#CD9C61] text-[#120A07]"
          : "border-white/10 text-[#CD9C61]"
      }`}
      aria-hidden="true"
    >
      <span className="absolute h-px w-3 bg-current" />

      <span
        className={`absolute h-3 w-px bg-current transition-transform duration-300 ${
          open ? "rotate-90 opacity-0" : ""
        }`}
      />
    </span>
  );
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("All");

  const [search, setSearch] = useState("");

  const [openQuestion, setOpenQuestion] = useState<string | null>(
    faqs[0].question
  );

  const filteredFAQs = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return faqs.filter((faq) => {
      const matchesCategory =
        activeCategory === "All" ||
        faq.category === activeCategory;

      const matchesSearch =
        normalizedSearch === "" ||
        faq.question.toLowerCase().includes(normalizedSearch) ||
        faq.answer.toLowerCase().includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  const whatsappUrl = `https://wa.me/2347017096710?text=${encodeURIComponent(
    "Hello Becky! I have a question about Wellfed Tombrown."
  )}`;

  const toggleQuestion = (question: string) => {
    setOpenQuestion((current) =>
      current === question ? null : question
    );
  };

  return (
    <div className="min-h-screen mt-20 overflow-hidden bg-[#120A07] text-[#F9F4EE] selection:bg-[#CD9C61] selection:text-[#120A07]">
      {/* =========================================================
          HERO


      {/* =========================================================
          SEARCH + CATEGORIES
      ========================================================== */}
      <section className="border-y border-white/8 bg-[#0E0705] px-6 py-8">
    
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            {/* Search */}

            <div className="relative w-full lg:max-w-sm">
              <svg
                className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-4-4" />
              </svg>

              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search questions..."
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

            {/* Categories */}
            <div className="flex gap-2 overflow-x-auto pb-1 lg:justify-end">
              {categories.map((category) => {
                const active = activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
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
                          : "border-white/10 text-white/45 hover:border-white/20 hover:text-white"
                      }
                    `}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ CONTENT
      ========================================================== */}
      <main className="px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.55fr_1.45fr]">
            {/* Side intro */}
            <motion.aside
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="lg:sticky lg:top-32 lg:self-start"
            >
              <motion.p
                variants={fadeUp}
                className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#CD9C61]"
              >
                Need help?
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="mt-5 font-serif text-4xl leading-[1.03] tracking-[-0.03em] text-white sm:text-5xl"
              >
                Answers,
                <br />
                without the
                <br />
                <span className="italic font-light text-white/35">
                  guesswork.
                </span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-sm text-sm leading-7 text-white/40"
              >
                We have collected the most common questions customers ask
                before and after ordering Wellfed.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-8 rounded-2xl border border-white/8 bg-[#0E0705] p-6"
              >
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#CD9C61]">
                  Still have a question?
                </p>

                <p className="mt-3 text-xs leading-6 text-white/40">
                  Talk directly with the Wellfed team and we'll help you with
                  your order or product questions.
                </p>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-5
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    rounded-full
                    bg-[#CD9C61]
                    px-5
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
                  Chat on WhatsApp
                </a>
              </motion.div>
            </motion.aside>

            {/* Questions */}
            <div>
              {filteredFAQs.length > 0 ? (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={stagger}
                  className="border-t border-white/8"
                >
                  {filteredFAQs.map((faq, index) => {
                    const isOpen = openQuestion === faq.question;

                    return (
                      <motion.div
                        key={faq.question}
                        variants={fadeUp}
                        className="border-b border-white/8"
                      >
                        <button
                          type="button"
                          onClick={() => toggleQuestion(faq.question)}
                          aria-expanded={isOpen}
                          className="flex w-full items-center justify-between gap-6 py-7 text-left"
                        >
                          <div className="flex items-start gap-5">
                            <span className="hidden pt-1 text-[9px] font-bold tracking-[0.15em] text-[#CD9C61] sm:block">
                              {String(index + 1).padStart(2, "0")}
                            </span>

                            <div>
                              <span className="mb-2 block text-[8px] font-bold uppercase tracking-[0.16em] text-white/25">
                                {faq.category}
                              </span>

                              <span
                                className={`font-serif text-xl transition-colors duration-300 sm:text-2xl ${
                                  isOpen
                                    ? "text-[#CD9C61]"
                                    : "text-white"
                                }`}
                              >
                                {faq.question}
                              </span>
                            </div>
                          </div>

                          <PlusIcon open={isOpen} />
                        </button>

                        <motion.div
                          initial={false}
                          animate={{
                            height: isOpen ? "auto" : 0,
                            opacity: isOpen ? 1 : 0,
                          }}
                          transition={{
                            duration: 0.35,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <div className="pb-7 pl-0 sm:pl-10">
                            <p className="max-w-2xl text-sm font-light leading-7 text-white/45">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border border-white/8 bg-[#0E0705] p-10 text-center"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-[#CD9C61]">
                    ?
                  </div>

                  <h3 className="mt-5 font-serif text-2xl text-white">
                    No matching questions
                  </h3>

                  <p className="mx-auto mt-3 max-w-sm text-xs leading-6 text-white/35">
                    Try another search term or speak with us directly on
                    WhatsApp.
                  </p>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex rounded-full bg-[#CD9C61] px-6 py-3 text-[9px] font-bold uppercase tracking-[0.18em] text-[#120A07]"
                  >
                    Ask on WhatsApp
                  </a>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* =========================================================
          QUICK LINKS
      ========================================================== */}
      <section className="border-t border-white/8 bg-[#F5EFE8] px-6 py-24 text-[#120A07] lg:py-28">
        <div className="mx-auto max-w-5xl">
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
              Continue exploring
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mt-5 font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-5xl"
            >
              There's more to
              <br />
              <span className="italic font-light text-black/40">
                discover.
              </span>
            </motion.h2>

            <motion.div
              variants={stagger}
              className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
              <motion.div variants={fadeUp}>
                <Link
                  href="/product"
                  className="group flex items-center justify-between rounded-2xl border border-black/10 bg-white/50 p-6 transition-all duration-300 hover:border-[#CD9C61]/50 hover:bg-white"
                >
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#CD9C61]">
                      Shop
                    </p>

                    <p className="mt-2 font-serif text-2xl">
                      Explore the collection
                    </p>
                  </div>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </motion.div>

              <motion.div variants={fadeUp}>
                <Link
                  href="/about"
                  className="group flex items-center justify-between rounded-2xl border border-black/10 bg-white/50 p-6 transition-all duration-300 hover:border-[#CD9C61]/50 hover:bg-white"
                >
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#CD9C61]">
                      Our story
                    </p>

                    <p className="mt-2 font-serif text-2xl">
                      Meet Wellfed
                    </p>
                  </div>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className="bg-[#CD9C61] px-6 py-24 text-[#120A07]">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-10 sm:flex-row sm:items-end">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/45">
              We're here to help
            </p>

            <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-none tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              Still curious?
              <br />
              Just ask Becky.
            </h2>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              shrink-0
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
            "
          >
            WhatsApp Us
          </a>
        </div>
      </section>
    </div>
  );
}