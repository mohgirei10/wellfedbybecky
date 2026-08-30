"use client";

import React, {
  useEffect,
  useMemo,
  useState,
} from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, type Variants } from "framer-motion";
import { useCartStore } from "@/store/cart";

type CheckoutForm = {
  name: string;
  phone: string;
  city: string;
  address: string;
  note: string;
};

const initialForm: CheckoutForm = {
  name: "",
  phone: "",
  city: "",
  address: "",
  note: "",
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function formatCurrency(value: number) {
  return `₦${value.toLocaleString("en-NG")}`;
}

export default function CheckoutPage() {
  const router = useRouter();

  const items = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clearCart);

  const [form, setForm] =
    useState<CheckoutForm>(initialForm);

  const [submitted, setSubmitted] =
    useState(false);

  const subtotal = useMemo(() => {
    return items.reduce(
      (total, item) =>
        total + item.price * item.quantity,
      0
    );
  }, [items]);

  useEffect(() => {
    if (items.length === 0) {
      router.replace("/product");
    }
  }, [items.length, router]);

  const updateField = (
    field: keyof CheckoutForm,
    value: string
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const isValid =
    form.name.trim().length > 1 &&
    form.phone.trim().length > 5 &&
    form.city.trim().length > 1 &&
    form.address.trim().length > 5;

  const handleWhatsAppCheckout = () => {
    setSubmitted(true);

    if (!isValid || items.length === 0) {
      return;
    }

    const orderLines = items.map(
      (item, index) => {
        const lineTotal =
          item.price * item.quantity;

        return [
          `${index + 1}. ${item.title}`,
          `   Size: ${item.size}`,
          `   Quantity: ${item.quantity}`,
          `   Price: ${formatCurrency(item.price)} each`,
          `   Subtotal: ${formatCurrency(lineTotal)}`,
        ].join("\n");
      }
    );

    const noteLine = form.note.trim()
      ? [
          "",
          `Note: ${form.note.trim()}`,
        ].join("\n")
      : "";

    const message = [
      "Hello Becky! I'd like to place an order.",
      "",
      "🛒 WELLFED ORDER",
      "",
      orderLines.join("\n\n"),
      "",
      "────────────────────",
      `Subtotal: ${formatCurrency(subtotal)}`,
      "Delivery: To be confirmed",
      "",
      "👤 CUSTOMER DETAILS",
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `City: ${form.city.trim()}`,
      `Address: ${form.address.trim()}`,
      noteLine,
      "",
      "Please confirm my order, delivery fee and payment details.",
    ].join("\n");

    const whatsappUrl =
      `https://wa.me/2347017096710?text=` +
      encodeURIComponent(message);

    /*
     * Open WhatsApp first.
     * We only clear the cart once the checkout
     * information has been successfully handed
     * off to WhatsApp.
     */
    window.open(whatsappUrl, "_blank");

    clearCart();

    router.push("/checkout/success");
  };

  if (items.length === 0) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#120A07] text-[#F9F4EE]">
      {/* Header */}
      <section className="border-b border-white/8 bg-[#120A07] px-6 pb-12 pt-36 sm:pt-40">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/product"
            className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/35 transition hover:text-[#CD9C61]"
          >
            ← Continue shopping
          </Link>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-8"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#CD9C61]">
              Secure your order
            </p>

            <h1 className="mt-4 font-serif text-5xl leading-none tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Checkout.
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/45">
              Tell us where you'd like your Wellfed order
              delivered. We'll send the complete order to
              WhatsApp for confirmation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Checkout */}
      <main className="px-6 py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[1fr_0.65fr] lg:gap-20">
          {/* =====================================================
              CUSTOMER DETAILS
          ====================================================== */}
          <motion.section
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <div className="mb-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#CD9C61]">
                01
              </p>

              <h2 className="mt-2 font-serif text-3xl text-white">
                Delivery details
              </h2>
            </div>

            <div className="space-y-4">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-[9px] font-bold uppercase tracking-[0.17em] text-white/35"
                >
                  Full name
                </label>

                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(event) =>
                    updateField(
                      "name",
                      event.target.value
                    )
                  }
                  placeholder="Your full name"
                  className={`
                    h-14
                    w-full
                    rounded-xl
                    border
                    bg-white/[0.025]
                    px-4
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-white/20
                    transition
                    focus:border-[#CD9C61]/50
                    ${
                      submitted && !form.name.trim()
                        ? "border-red-500/50"
                        : "border-white/10"
                    }
                  `}
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-[9px] font-bold uppercase tracking-[0.17em] text-white/35"
                >
                  Phone number
                </label>

                <input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(event) =>
                    updateField(
                      "phone",
                      event.target.value
                    )
                  }
                  placeholder="0801 234 5678"
                  className={`
                    h-14
                    w-full
                    rounded-xl
                    border
                    bg-white/[0.025]
                    px-4
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-white/20
                    transition
                    focus:border-[#CD9C61]/50
                    ${
                      submitted && !form.phone.trim()
                        ? "border-red-500/50"
                        : "border-white/10"
                    }
                  `}
                />
              </div>

              {/* City */}
              <div>
                <label
                  htmlFor="city"
                  className="mb-2 block text-[9px] font-bold uppercase tracking-[0.17em] text-white/35"
                >
                  City
                </label>

                <input
                  id="city"
                  type="text"
                  value={form.city}
                  onChange={(event) =>
                    updateField(
                      "city",
                      event.target.value
                    )
                  }
                  placeholder="Lagos, Abuja, Kaduna..."
                  className={`
                    h-14
                    w-full
                    rounded-xl
                    border
                    bg-white/[0.025]
                    px-4
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-white/20
                    transition
                    focus:border-[#CD9C61]/50
                    ${
                      submitted && !form.city.trim()
                        ? "border-red-500/50"
                        : "border-white/10"
                    }
                  `}
                />
              </div>

              {/* Address */}
              <div>
                <label
                  htmlFor="address"
                  className="mb-2 block text-[9px] font-bold uppercase tracking-[0.17em] text-white/35"
                >
                  Delivery address
                </label>

                <textarea
                  id="address"
                  value={form.address}
                  onChange={(event) =>
                    updateField(
                      "address",
                      event.target.value
                    )
                  }
                  rows={5}
                  placeholder="Street, area, landmark..."
                  className={`
                    w-full
                    resize-none
                    rounded-xl
                    border
                    bg-white/[0.025]
                    px-4
                    py-4
                    text-sm
                    leading-6
                    text-white
                    outline-none
                    placeholder:text-white/20
                    transition
                    focus:border-[#CD9C61]/50
                    ${
                      submitted &&
                      form.address.trim().length < 6
                        ? "border-red-500/50"
                        : "border-white/10"
                    }
                  `}
                />
              </div>

              {/* Note */}
              <div>
                <label
                  htmlFor="note"
                  className="mb-2 block text-[9px] font-bold uppercase tracking-[0.17em] text-white/35"
                >
                  Order note{" "}
                  <span className="font-normal text-white/20">
                    · optional
                  </span>
                </label>

                <textarea
                  id="note"
                  value={form.note}
                  onChange={(event) =>
                    updateField(
                      "note",
                      event.target.value
                    )
                  }
                  rows={3}
                  placeholder="Any delivery instructions?"
                  className="
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.025]
                    px-4
                    py-4
                    text-sm
                    leading-6
                    text-white
                    outline-none
                    placeholder:text-white/20
                    transition
                    focus:border-[#CD9C61]/50
                  "
                />
              </div>
            </div>

            {submitted && !isValid && (
              <p className="mt-4 text-xs text-red-400">
                Please complete your name, phone, city and
                delivery address.
              </p>
            )}
          </motion.section>

          {/* =====================================================
              ORDER SUMMARY
          ====================================================== */}
          <motion.aside
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <div className="rounded-2xl border border-white/8 bg-[#0E0705] p-6 sm:p-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#CD9C61]">
                02
              </p>

              <h2 className="mt-2 font-serif text-3xl text-white">
                Your order
              </h2>

              <div className="mt-7 space-y-5">
                {items.map((item) => (
                  <div
                    key={`${item.productId}-${item.size}`}
                    className="flex gap-4"
                  >
                    <div className="h-20 w-16 shrink-0 overflow-hidden rounded-lg bg-[#120A07]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex justify-between gap-3">
                        <div>
                          <h3 className="font-serif text-base text-white">
                            {item.title}
                          </h3>

                          <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.14em] text-white/30">
                            {item.size} · Qty {item.quantity}
                          </p>
                        </div>

                        <p className="shrink-0 text-sm text-[#CD9C61]">
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

              <div className="mt-7 border-t border-white/8 pt-6">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/35">
                    Subtotal
                  </span>

                  <span className="font-serif text-2xl text-white">
                    {formatCurrency(subtotal)}
                  </span>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/25">
                    Delivery
                  </span>

                  <span className="text-xs text-white/35">
                    To be confirmed
                  </span>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-[#CD9C61]/15 bg-[#CD9C61]/5 p-4">
                <div className="flex gap-3">
                  <span className="text-[#CD9C61]">
                    ✦
                  </span>

                  <p className="text-xs leading-6 text-white/45">
                    Your order will be sent to WhatsApp
                    with all your selected products and
                    delivery details already filled in.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleWhatsAppCheckout}
                className="
                  mt-6
                  flex
                  h-14
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  bg-[#25D366]
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-white
                  transition
                  hover:bg-[#20ba5a]
                "
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>

                Checkout on WhatsApp
              </button>

              <p className="mt-4 text-center text-[9px] leading-5 text-white/25">
                By continuing, WhatsApp will open with your
                order details pre-filled.
              </p>
            </div>
          </motion.aside>
        </div>
      </main>
    </div>
  );
}