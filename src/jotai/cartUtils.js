import { atom } from "jotai";
import { cartAtom } from "./cartAtom";

export const addToCart = (setCart, product) => {
  setCart((prevCart) => {
    console.log("Inside setCart callback"); 

    const existingProduct = prevCart.find((item) => item.id === product.id);
    let updatedCart;

    if (existingProduct) {
      console.log("Product exists, increasing quantity");
      updatedCart = prevCart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      console.log("Product not in cart, adding new item");
      updatedCart = [...prevCart, { ...product, quantity: 1 }];
    }

    console.log("Updated Cart:", updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    return updatedCart;
  });
  console.log("addToCart function executed"); 
};



export const removeFromCart = atom(null, (get, set, productId) => {
 
  
  const updatedCart = get(cartAtom).filter(item => item.id !== productId);
  
  
  localStorage.setItem("cart", JSON.stringify(updatedCart));
  set(cartAtom, updatedCart);
});

