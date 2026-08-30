// src/store/cart.ts

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = {
  productId: string;
  slug: string;
  title: string;
  size: string;
  price: number;
  quantity: number;
  image: string;
};

type CartStore = {
  items: CartItem[];

  addItem: (item: CartItem) => void;
  removeItem: (productId: string, size: string) => void;
  updateQuantity: (
    productId: string,
    size: string,
    quantity: number
  ) => void;
  clearCart: () => void;

  getItemCount: () => number;
  getSubtotal: () => number;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (item) => {
        set((state) => {
          const existingItem = state.items.find(
            (existing) =>
              existing.productId === item.productId &&
              existing.size === item.size
          );

          if (existingItem) {
            return {
              items: state.items.map((existing) =>
                existing.productId === item.productId &&
                existing.size === item.size
                  ? {
                      ...existing,
                      quantity:
                        existing.quantity + item.quantity,
                    }
                  : existing
              ),
            };
          }

          return {
            items: [...state.items, item],
          };
        });
      },

      removeItem: (productId, size) => {
        set((state) => ({
          items: state.items.filter(
            (item) =>
              !(
                item.productId === productId &&
                item.size === size
              )
          ),
        }));
      },

      updateQuantity: (
        productId,
        size,
        quantity
      ) => {
        if (quantity <= 0) {
          get().removeItem(productId, size);
          return;
        }

        set((state) => ({
          items: state.items.map((item) =>
            item.productId === productId &&
            item.size === size
              ? {
                  ...item,
                  quantity,
                }
              : item
          ),
        }));
      },

      clearCart: () => {
        set({ items: [] });
      },

      getItemCount: () => {
        return get().items.reduce(
          (total, item) => total + item.quantity,
          0
        );
      },

      getSubtotal: () => {
        return get().items.reduce(
          (total, item) =>
            total + item.price * item.quantity,
          0
        );
      },
    }),
    {
      name: "wellfed-cart",
    }
  )
);