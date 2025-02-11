import { cartAtom } from "./cartAtom";

export const addToCart = (set, product) => {
    set(cartAtom, (prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      let updatedCart;
  
      if (existingProduct) {
        updatedCart = prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        updatedCart = [...prevCart, { ...product, quantity: 1 }];
      }
  
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };
  
  // Function to remove a product from cart
  export const removeFromCart = (set, productId) => {
    set(cartAtom, (prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== productId);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };