import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../../components/Navbar";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

const rawPhone = "2347017096710";
const phone = "+2347017096710";
const email = "wellfedbybecky@gmail.com";

const whatsappUrl = `https://wa.me/${rawPhone}?text=${encodeURIComponent(
  "Hello Becky! I'd like to make an inquiry about Wellfed Tombrown."
)}`;

const socialLinks = {
  instagram: "https://instagram.com/wellfedbybecky",
  facebook: "https://facebook.com/wellfedbybecky",
  tiktok: "https://www.tiktok.com/@wellfedbybecky",
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
    aria-hidden="true"
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
    aria-hidden="true"
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
    aria-hidden="true"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-2.89-2.89 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 1 0 16.33 15V8a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

export const metadata: Metadata = {
  title: "Wellfed by Becky | Premium Tombrown",
  description:
    "Premium Tombrown blends crafted from carefully selected grains and nuts for everyday nourishment.",
  keywords: [
    "Wellfed by Becky",
    "Tombrown",
    "Tombrown Nigeria",
    "healthy weight gain",
    "protein rich breakfast",
    "natural nutrition",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0A0503] text-[#F9F4EE] antialiased">
        <Navbar
          phone={phone}
          rawPhone={rawPhone}
          email={email}
          socialLinks={socialLinks}
        />

        <main className="min-h-screen">{children}</main>

        {/* Floating WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Wellfed by Becky on WhatsApp"
          className="
            fixed
            right-5
            bottom-5
            sm:right-7
            sm:bottom-7
            z-40
            group
            flex
            items-center
            justify-center
            w-14
            h-14
            rounded-full
            bg-[#25D366]
            text-white
            shadow-[0_10px_35px_rgba(37,211,102,0.30)]
            transition-all
            duration-300
            hover:scale-105
            hover:shadow-[0_12px_45px_rgba(37,211,102,0.45)]
          "
        >
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
          </svg>

          <span
            className="
              absolute
              right-full
              mr-3
              whitespace-nowrap
              rounded-full
              border
              border-white/10
              bg-[#120A07]/95
              px-4
              py-2
              text-[10px]
              font-bold
              tracking-[0.18em]
              uppercase
              text-white
              opacity-0
              translate-x-2
              pointer-events-none
              transition-all
              duration-300
              group-hover:opacity-100
              group-hover:translate-x-0
            "
          >
            Chat on WhatsApp
          </span>
        </a>

        <footer className="border-t border-white/8 bg-[#63331f] px-6 pb-10 pt-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-14 md:grid-cols-12">
              {/* Brand */}
              <div className="md:col-span-5">
         <Link
  href="/"
  className="group inline-flex flex-col"
>
  <span className="font-serif text-2xl font-bold italic tracking-wide text-[#CD9C61] transition-colors duration-300 group-hover:text-[#CD9C61]">
    WELLFED
  </span>

  <span className="-mt-1 font-serif text-xl italic tracking-wide text-[#FFFFFF]">
    -by Becky-
  </span>
</Link>
                <p className="mt-7 max-w-md text-sm font-light leading-7 text-white/50">
                  Premium Tombrown blends made with carefully selected
                  ingredients, crafted for nourishment, everyday wellness and
                  better mornings.
                </p>

                <div className="mt-8 flex items-center gap-3">
                  <a
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/55 transition hover:border-[#CD9C61]/50 hover:text-[#CD9C61]"
                  >
                    <InstagramIcon className="h-4 w-4" />
                  </a>

                  <a
                    href={socialLinks.facebook}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/55 transition hover:border-[#CD9C61]/50 hover:text-[#CD9C61]"
                  >
                    <FacebookIcon className="h-4 w-4" />
                  </a>

                  <a
                    href={socialLinks.tiktok}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="TikTok"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/55 transition hover:border-[#CD9C61]/50 hover:text-[#CD9C61]"
                  >
                    <TikTokIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Connect */}
              <div className="md:col-span-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#CD9C61]">
                  Connect
                </p>

                <div className="mt-7 space-y-5 text-sm text-white/65">
  {/* WhatsApp */}
  <a
    href={whatsappUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 transition hover:text-white"
  >
    <svg
      className="h-5 w-5 shrink-0"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>

    <span>+234 701 709 6710</span>
  </a>

  {/* Phone */}
  <a
    href={`tel:${phone}`}
    className="flex items-center gap-3 transition hover:text-white"
  >
    <Phone className="h-5 w-5 shrink-0" />
    <span> 0701 709 6710</span>
  </a>

  {/* Email */}
  <a
    href={`mailto:${email}?subject=Wellfed%20Inquiry`}
    className="flex items-center gap-3 transition hover:text-white"
  >
    <Mail className="h-5 w-5 shrink-0" />
    <span>{email}</span>
  </a>

  <a href=""
      className="flex items-center gap-3 transition hover:text-white"
>
   <TikTokIcon className="h-5 w-5" />
   @Wellfedbybecky
   
  </a>
</div>
              </div>

              {/* Explore */}
              <div className="md:col-span-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#CD9C61]">
                  Explore
                </p>

                <div className="mt-7 space-y-4 text-sm text-white/65">
                  <Link
                    href="/"
                    className="block transition hover:translate-x-1 hover:text-white"
                  >
                    Home
                  </Link>

                  <Link
                    href="/product"
                    className="block transition hover:translate-x-1 hover:text-white"
                  >
                    Collection
                  </Link>

                  <Link
                    href="/about"
                    className="block transition hover:translate-x-1 hover:text-white"
                  >
                    Our Story
                  </Link>

                  <Link
                    href="/faq"
                    className="block transition hover:translate-x-1 hover:text-white"
                  >
                    FAQs
                  </Link>

                  
                  <Link
                    href="/policy"
                    className="block transition hover:translate-x-1 hover:text-white"
                  >
                    Business Policy
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-16 flex flex-col gap-4 border-t border-white/8 pt-7 text-[9px] font-medium uppercase tracking-[0.18em] text-white/35 md:flex-row md:items-center md:justify-between">
              <p>
                © {new Date().getFullYear()} WELLFED BY BECKY. ALL RIGHTS
                RESERVED.
              </p>

              <p className="text-[#CD9C61]">
                We dey work, e dey show ✨
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}