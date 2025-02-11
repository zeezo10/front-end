import { atom } from "jotai";


const getInitialCart = () => {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem("cart")) || [];
  }
  return [];
};

export const cartAtom = atom(getInitialCart());



const getInitialOrders = () => {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem("orders")) || [];
  }
  return [];
};


export const ordersAtom = atom(getInitialOrders());



export const totalItemsAtom = atom((get) =>
  get(cartAtom).reduce((sum, item) => sum + item.quantity, 0)
);


export const totalPriceAtom = atom((get) =>
  get(cartAtom).reduce((sum, item) => sum + item.quantity * item.price, 0)
);


export const createOrderAtom = atom(null, async (get, set) => {
    try {
      const cartItems = get(cartAtom);
  
      if (cartItems.length === 0) {
        console.log("Cart is empty, no order created.");
        return;
      }
  
      
      const orderItems = cartItems.map(item => ({
        product_id: item.id,
        quantity: item.quantity,
      }));
  
      const orderPayload = {
        items: orderItems,
        total_item: get(totalItemsAtom),
        total_price: get(totalPriceAtom),
      };

      console.log(orderPayload);
      
  
      // API call
      const response = await fetch("https://fe-test-api.jmm88.com/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderPayload),
      });
  
      if (!response.ok) {
        throw new Error("Failed to create order");
      }
  
      const data = await response.json();
      console.log("Order created successfully:", data);
  
   
      const existingOrders = get(ordersAtom);
      const newOrder = {
        order_id: data.data.order_id,
        total_price: orderPayload.total_price,
        total_item: orderPayload.total_item,
      };
  
      const updatedOrders = [...existingOrders, newOrder];
      localStorage.setItem("orders", JSON.stringify(updatedOrders));
      set(ordersAtom, updatedOrders);
  
     
      set(cartAtom, []);
      localStorage.removeItem("cart");
      
   
      
      return data;
    } catch (error) {
      console.error("Error creating order:", error.message);
    }
  });