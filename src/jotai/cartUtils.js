import { cartAtom } from "./cartAtom";

export const addToCart = (setCart, product) => {
  setCart((prevCart) => {
    console.log("Inside setCart callback"); // Should log if setCart is working

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
  console.log("addToCart function executed"); // This will log immediately
};

// Function to remove a product from cart
export const removeFromCart = (set, productId) => {

    console.log(productId);
    
  set(cartAtom, (prevCart) => {
    const updatedCart = prevCart.filter((item) => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    return updatedCart;
  });
};
