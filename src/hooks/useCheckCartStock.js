import { useAtom } from "jotai";
import { useEffect } from "react";
import { cartAtom } from "../jotai/cartAtom";  // Update the import path based on your project structure


const checkCartStock = async (setCart) => {

    console.log("masukk boosss");
    
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    console.log(cart);
    
  
    const updatedCart = await Promise.all(
      cart.map(async (item) => {
        try {
          const response = await fetch(`https://fe-test-api.jmm88.com/api/products/${item.id}`);
          let productData = await response.json();
          productData = productData.data
           
            
          if (productData.stock < item.quantity) {
            return productData.stock > 0
              ? { ...item, quantity: productData.stock }
              : null;
          }
          return item;
        } catch (error) {
          console.error("Error fetching product stock:", error);
          return item;
        }
      })
    );
  
    const finalCart = updatedCart.filter(Boolean);
    setCart(finalCart);
    localStorage.setItem("cart", JSON.stringify(finalCart));
  };
  
  export const useCheckCartStock = () => {
    const [cart, setCart] = useAtom(cartAtom);
  
    useEffect(() => {
      checkCartStock(setCart);
    }, []);
  
    return cart;
  };
