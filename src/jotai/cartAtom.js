import { atom } from "jotai";

// Ambil keranjang dari LocalStorage saat pertama kali di-load
const getInitialCart = () => {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem("cart")) || [];
  }
  return [];
};

// Atom untuk menyimpan keranjang
export const cartAtom = atom(getInitialCart());

// Atom untuk menghitung total item di keranjang
export const totalItemsAtom = atom((get) =>
  get(cartAtom).reduce((sum, item) => sum + item.quantity, 0)
);

// Atom untuk menghitung total harga di keranjang
export const totalPriceAtom = atom((get) =>
  get(cartAtom).reduce((sum, item) => sum + item.quantity * item.price, 0)
);
