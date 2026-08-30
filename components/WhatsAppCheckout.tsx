"use client";

import React from 'react';

interface WhatsAppCheckoutProps {
  productName: string;
  size: string;
  price: string;
  quantity?: number;
}

export default function WhatsAppCheckoutButton({
  productName,
  size,
  price,
  quantity = 1,
}: WhatsAppCheckoutProps) {
  const phone = "2347017096710"; // Becky's Phone Number

  // Format pre-filled WhatsApp message
  const message = `Hello Becky! I would like to place an order from your website:
  
📦 *Product:* ${productName}
⚖️ *Size:* ${size}
🔢 *Quantity:* ${quantity}
💰 *Total Price:* ${price}

Please let me know how to proceed with payment and delivery details. Thanks!`;

  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <div className="flex flex-col sm:flex-row gap-3 w-full">
      {/* Primary WhatsApp Order Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-[#25D366] hover:bg-[#20ba5a] text-white py-4 px-6 rounded-sm text-xs font-bold tracking-widest uppercase text-center transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
      >
        <span>💬 Order via WhatsApp ({price})</span>
      </a>

      {/* Fallback Direct Call Button */}
      <a
        href="tel:+2347017096710"
        className="border border-white/20 hover:border-[#CD9C61] hover:text-[#CD9C61] text-white/80 py-4 px-6 rounded-sm text-xs font-bold tracking-widest uppercase text-center transition-colors flex items-center justify-center gap-2"
      >
        <span>📞 Call to Order</span>
      </a>
    </div>
  );
}

 {/* Call */}
              {/* <a
                href={`tel:${phone}`}
                title="Direct Call"
                className="p-2 rounded-full border border-white/10 hover:border-[#CD9C61] text-white/70 hover:text-[#CD9C61] transition-colors text-xs"
              >
                📞 <span className="hidden lg:inline ml-1">Call </span>
              </a> */}

              {/* Email */}
              {/* <a
                href={`mailto:${email}?subject=Wellfed%20Tombrown%20Order`}
                title="Send Email"
                className="p-2 rounded-full border border-white/10 hover:border-[#CD9C61] text-white/70 hover:text-[#CD9C61] transition-colors text-xs"
              >
                ✉️ <span className="hidden lg:inline ml-1">Email</span>
              </a> */}