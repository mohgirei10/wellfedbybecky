"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import CartButton from "./CartButton";
 import { Phone } from "lucide-react";


type SocialLinks = {
  instagram: string;
  facebook: string;
  tiktok: string;
};

type NavbarProps = {
  phone: string;
  rawPhone: string;
  email: string;
  socialLinks: SocialLinks;
};

const InstagramIcon = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" />
    <path d="M16 11.37a4 4 0 1 1-3.37-3.37A4 4 0 0 1 16 11.37Z" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
  </svg>
);

const FacebookIcon = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TikTokIcon = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-2.89-2.89 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 1 0 16.33 15V8a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const MenuIcon = ({ open }: { open: boolean }) => (
  <div className="relative h-5 w-6">
    <span
      className={`absolute left-0 top-1 block h-px w-6 bg-current transition-all duration-300 ${
        open ? "top-2.5 rotate-45" : ""
      }`}
    />

    <span
      className={`absolute left-0 top-2.5 block h-px w-6 bg-current transition-all duration-300 ${
        open ? "opacity-0" : ""
      }`}
    />

    <span
      className={`absolute left-0 top-4 block h-px w-6 bg-current transition-all duration-300 ${
        open ? "top-2.5 -rotate-45" : ""
      }`}
    />
  </div>
);

export default function Navbar({
  phone,
  rawPhone,
  email,
  socialLinks,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const whatsappUrl = `https://wa.me/${rawPhone}?text=${encodeURIComponent(
    "Hello Becky! I'd like to place an order for Wellfed Tombrown."
  )}`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={`
          fixed
          left-0
          right-0
          top-0
          z-50
          transition-all
          duration-500
          ${
            scrolled
              ? "border-b border-white/8 bg-[#120A07]/88 shadow-[0_8px_30px_rgba(0,0,0,0.24)] backdrop-blur-2xl"
              : "bg-[#63331f]"
          }
        `}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          {/* Logo */}
       <Link
  href="/"
  className="group relative z-10 flex flex-col"
>
  <span className="font-serif text-2xl font-bold italic tracking-wide text-[#CD9C61] transition-colors duration-300 group-hover:text-[#CD9C61]">
    WELLFED
  </span>

  <span className="-mt-1 font-serif text-xl italic tracking-wide text-[#FFFFFF]">
    -by Becky-
  </span>
</Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-10 md:flex">
            <Link
              href="/"
              className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/65 transition-colors hover:text-[#CD9C61]"
            >
              Home
            </Link>

            <Link
              href="/product"
              className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/65 transition-colors hover:text-[#CD9C61]"
            >
              Collection
            </Link>

            <Link
              href="/about"
              className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/65 transition-colors hover:text-[#CD9C61]"
            >
              Our Story
            </Link>

            <Link
              href="/faq"
              className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/65 transition-colors hover:text-[#CD9C61]"
            >
              FAQs
            </Link>
          </div>

          {/* Desktop Right */}
          <div className="hidden items-center gap-4 md:flex">
            <div className="flex items-center gap-4 border-r border-white/10 pr-5">
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="text-white/45 transition hover:text-[#CD9C61]"
              >
                <InstagramIcon className="h-4.5 w-4.5" />
              </a>

              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="text-white/45 transition hover:text-[#CD9C61]"
              >
                <FacebookIcon className="h-4.5 w-4.5" />
              </a>

              <a
                href={socialLinks.tiktok}
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="text-white/45 transition hover:text-[#CD9C61]"
              >
                <TikTokIcon className="h-4.5 w-4.5" />
              </a>
            </div>

          <CartButton />

<a
  href={whatsappUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="
    rounded-full
    bg-[#CD9C61]
    px-6
    py-3
    text-[10px]
    font-bold
    uppercase
    tracking-[0.18em]
    text-[#120A07]
    shadow-[0_0_20px_rgba(205,156,97,0.15)]
    transition-all
    duration-300
    hover:-translate-y-0.5
    hover:bg-[#E3B77D]
  "
>
  Order Now
</a>
          </div>

          {/* Mobile trigger */}
     <div className="flex items-center gap-3 md:hidden">
  <CartButton />

  <button
    type="button"
    aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
    aria-expanded={mobileMenuOpen}
    onClick={() => setMobileMenuOpen((value) => !value)}
    className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-[#CD9C61]/50 hover:text-[#CD9C61]"
  >
    <MenuIcon open={mobileMenuOpen} />
  </button>
</div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100vh" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="absolute left-0 right-0 top-full overflow-hidden border-t border-white/8 bg-[#100806]/98 backdrop-blur-2xl md:hidden"
            >
              <div className="flex h-[calc(100vh-85px)] flex-col px-6 pb-10 pt-10">
                <div className="space-y-2">
                  {[
                    { label: "Home", href: "/" },
                    { label: "Collection", href: "/product" },
                    { label: "Our Story", href: "/about" },
                    { label: "FAQs", href: "/faq" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.05 * index,
                        duration: 0.35,
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className="flex items-center justify-between border-b border-white/8 py-5 font-serif text-3xl text-white transition hover:text-[#CD9C61]"
                      >
                        {item.label}
                        <span className="text-xl text-[#CD9C61]">↗</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-auto space-y-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center rounded-full bg-[#CD9C61] px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#120A07]"
                  >
                    Order on WhatsApp
                  </a>

                  <a
                    href={`tel:${phone}`}
                    className="flex w-full items-center justify-center rounded-full border border-white/15 px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white"
                  >
                    Call Us
                  </a>

                  <a
                    href={`mailto:${email}`}
                    className="flex w-full items-center justify-center rounded-full border border-white/15 px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white"
                  >
                    Email Us
                  </a>

                  <div className="flex justify-center gap-7 pt-3">
                    <a
                      href={socialLinks.instagram}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Instagram"
                      className="text-white/45 hover:text-[#CD9C61]"
                    >
                      <InstagramIcon className="h-5 w-5" />
                    </a>

                    <a
                      href={socialLinks.facebook}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Facebook"
                      className="text-white/45 hover:text-[#CD9C61]"
                    >
                      <FacebookIcon className="h-5 w-5" />
                    </a>

                    <a
                      href={socialLinks.tiktok}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="TikTok"
                      className="text-white/45 hover:text-[#CD9C61]"
                    >
                      <TikTokIcon className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}