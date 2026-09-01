"use client";

import React from "react";
import Link from "next/link";

type PolicySection = {
  number: string;
  title: string;
  icon: React.ReactNode;
  items: string[];
};

const ShoppingCartIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="9" cy="20" r="1.5" />
    <circle cx="19" cy="20" r="1.5" />
    <path d="M3 4h2l2.5 11.5a2 2 0 0 0 2 1.5h8.7a2 2 0 0 0 1.9-1.5L22 8H6" />
  </svg>
);

const WalletIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3 7.5A2.5 2.5 0 0 1 5.5 5H20a1 1 0 0 1 1 1v12.5a1.5 1.5 0 0 1-1.5 1.5h-14A2.5 2.5 0 0 1 3 17.5z" />
    <path d="M3 8h16" />
    <path d="M17 13h4" />
    <circle cx="17" cy="13" r=".5" fill="currentColor" />
  </svg>
);

const TruckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3 6h11v11H3z" />
    <path d="M14 10h4l3 3v4h-7z" />
    <circle cx="7" cy="19" r="2" />
    <circle cx="18" cy="19" r="2" />
  </svg>
);

const PackageIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9z" />
    <path d="m4 7.5 8 4.5 8-4.5" />
    <path d="M12 12v9" />
    <path d="m8 5.25 8 4.5" />
  </svg>
);

const CustomerIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21a8 8 0 0 1 16 0" />
  </svg>
);

const ClockIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

const ProductIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 8h14" />
    <path d="M6 8v11h12V8" />
    <path d="M8 5h8l2 3H6z" />
    <path d="M9 12h6" />
    <path d="M9 15h4" />
  </svg>
);

const LockIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="4" y="10" width="16" height="11" rx="2" />
    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    <path d="M12 14v3" />
  </svg>
);

const policySections: PolicySection[] = [
  {
    number: "01",
    title: "Ordering",
    icon: <ShoppingCartIcon />,
    items: [
      "All orders must be placed via WhatsApp.",
      "Kindly be sure of the product and size you want before confirming your order.",
      "Orders are processed only after confirmation.",
    ],
  },
  {
    number: "02",
    title: "Payment",
    icon: <WalletIcon />,
    items: [
      "Full payment or an agreed deposit must be made before your order is processed.",
      "No payment = No order.",
      "Payments are non-refundable once an order has been confirmed and processing has begun.",
    ],
  },
  {
    number: "03",
    title: "Delivery",
    icon: <TruckIcon />,
    items: [
      "Please DO NOT send delivery/waybill fees unless you have been instructed to do so.",
      "Delivery fees are paid by the customer.",
      "Dispatch is done on our scheduled delivery days.",
      "Please ensure your name, phone number and delivery address are correct before dispatch.",
      "Once your package has been handed over to the logistics company, delivery timelines are controlled by the courier. We are happy to help track your package if needed.",
    ],
  },
  {
    number: "04",
    title: "Refunds & Exchanges",
    icon: <PackageIcon />,
    items: [
      "No refunds after an order has been delivered.",
      "Exchanges are only accepted if the mistake was made by us.",
      "Any complaint must be reported within 24 hours of receiving your package.",
    ],
  },
  {
    number: "05",
    title: "Customer Care",
    icon: <CustomerIcon />,
    items: [
      "We are committed to treating every customer with respect and kindness.",
      "In return, we kindly ask that all communication remains respectful.",
      "Rude, abusive or insulting messages may result in cancellation of service.",
    ],
  },
  {
    number: "06",
    title: "Processing Time",
    icon: <ClockIcon />,
    items: [
      "Please place your orders early.",
      "Last-minute or urgent requests may not always be accommodated.",
      "During busy periods, processing may take a little longer. We appreciate your patience.",
    ],
  },
  {
    number: "07",
    title: "Product Use",
    icon: <ProductIcon />,
    items: [
      "Please follow the recommended directions for use.",
      "Results vary from person to person depending on consistency, diet and individual differences.",
      "If you have any concerns about using a product during pregnancy, breastfeeding, or because of a medical condition, please consult your healthcare provider before use.",
    ],
  },
  {
    number: "08",
    title: "Privacy",
    icon: <LockIcon />,
    items: [
      "Your personal information is kept confidential and will not be shared.",
    ],
  },
];

export default function PolicyPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff8ef] text-[#4c2819]">
      {/* Decorative background */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -left-32 top-40 h-72 w-72 rounded-full bg-[#dca878]/10 blur-3xl" />
        <div className="absolute -right-32 top-[40%] h-96 w-96 rounded-full bg-[#b97843]/10 blur-3xl" />
      </div>

      {/* Navigation */}
      <header className="relative z-10 border-b border-[#8b5738]/10 bg-[#fff8ef]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <Link
            href="/"
            className="font-serif text-2xl font-semibold tracking-wide text-[#713b24]"
          >
            Wellfed
            <span className="ml-1 text-[#9c6240]">by Becky</span>
          </Link>

          <Link
            href="/"
            className="rounded-full border border-[#8b5738]/20 px-5 py-2 text-sm font-medium text-[#713b24] transition hover:bg-[#713b24] hover:text-white"
          >
            Back Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 px-5 pb-12 pt-14 sm:px-8 sm:pt-20 lg:px-12 lg:pt-24">
        <div className="mx-auto max-w-5xl text-center">
          {/* small ornament */}
          <div className="mb-7 flex items-center justify-center gap-4">
            <span className="h-px w-16 bg-[#a86f4d]/40 sm:w-24" />
            <span className="text-xl text-[#a86f4d]">❧</span>
            <span className="h-px w-16 bg-[#a86f4d]/40 sm:w-24" />
          </div>

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#a86f4d]">
            Wellfed by Becky
          </p>

          <h1 className="font-serif text-5xl font-bold tracking-tight text-[#63331f] sm:text-6xl lg:text-7xl">
            Business Policy
          </h1>

          <div className="mx-auto mt-6 max-w-2xl">
            <p className="text-base leading-7 text-[#6e5549] sm:text-lg">
              Thank you for choosing{" "}
              <span className="font-semibold italic text-[#8a4f32]">
                Wellfed by Becky
              </span>
              .
            </p>

            <p className="mt-1 text-sm leading-6 text-[#80685b] sm:text-base">
              To ensure a smooth experience for everyone, kindly read our
              policies before placing an order.
            </p>
          </div>

          {/* Decorative divider */}
          <div className="mt-8 flex items-center justify-center gap-3 text-[#b8754c]">
            <span className="h-px w-10 bg-[#b8754c]/30" />
            <span>◆</span>
            <span className="h-px w-10 bg-[#b8754c]/30" />
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="relative z-10 px-5 pb-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-4 md:grid-cols-2">
            {policySections.map((section) => (
              <article
                key={section.number}
                className="group overflow-hidden rounded-2xl border border-[#a66b48]/15 bg-white/75 shadow-[0_8px_30px_rgba(91,52,31,0.06)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(91,52,31,0.10)]"
              >
                {/* Section heading */}
                <div className="flex items-center gap-4 bg-linear-to-r from-[#f5dfca] to-[#f9eadb] px-5 py-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/80 bg-[#a86a43] text-white shadow-sm">
                    <div className="h-6 w-6">{section.icon}</div>
                  </div>

                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#aa6d4a]">
                      Policy {section.number}
                    </p>

                    <h2 className="font-serif text-xl font-bold text-[#663822]">
                      {section.title}
                    </h2>
                  </div>
                </div>

                {/* Content */}
                <div className="px-5 py-5">
                  <ul className="space-y-3">
                    {section.items.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-sm leading-6 text-[#665046]"
                      >
                        <span className="mt-2.25 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b97952]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / WhatsApp */}
      <section className="relative z-10 border-t border-[#8b5738]/10 bg-[#f3dfca] px-5 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a26949]">
            Need help?
          </p>

          <h2 className="mt-3 font-serif text-3xl font-bold text-[#63331f] sm:text-4xl">
            We&apos;re happy to help
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#70574a]">
            For orders, questions or assistance, kindly reach out to us on
            WhatsApp.
          </p>

          <a
            href="https://wa.me/2347017096710"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#744128] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#744128]/15 transition hover:-translate-y-0.5 hover:bg-[#5f321f]"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4A8 8 0 1 1 20 11.5Z" />
              <path d="M9 9.5c.2-.4.4-.4.7-.4h.4c.2 0 .4.1.5.4l.6 1.3c.1.2.1.4-.1.6l-.5.6c.5 1 1.2 1.7 2.2 2.2l.6-.5c.2-.2.4-.2.6-.1l1.3.6c.3.1.4.3.4.5v.4c0 .3 0 .5-.4.7-.4.2-1 .2-1.4.1-2.5-.6-5-3.1-5.6-5.6-.1-.5-.1-1 .1-1.4Z" />
            </svg>
            WhatsApp: 07017096710
          </a>

          {/* Social */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-5 text-sm text-[#785c4e]">
            <span>WhatsApp • 07017096710</span>
            <span className="hidden h-4 w-px bg-[#9d7055]/30 sm:block" />
            <span>TikTok • @Wellfed By Becky</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-[#63331f] px-5 py-8 text-center text-[#f6e4d3]">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 flex items-center justify-center gap-3 opacity-70">
            <span className="h-px w-12 bg-current" />
            <span>❧</span>
            <span className="h-px w-12 bg-current" />
          </div>

          <p className="font-serif text-xl italic">
            Nourish Your Body • Love Your Curves
          </p>

        </div>
      </footer>
    </main>
  );
}