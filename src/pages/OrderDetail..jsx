import React from "react";
import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { toRupiah } from "../helper/toRupiah";

export default function OrderDetail() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await fetch(
          `https://fe-test-api.jmm88.com/api/orders/${id}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch order details");
        }

        const data = await response.json();
     
        setOrder(data.data); 
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, [id]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        {error}
      </div>
    );

  return (
    <div className="min-h-screen bg-[#ede8de] px-60 ">
      <div className="py-10 flex w-2/3 items-center">
        <h2 className="text-3xl font-bold">My Order</h2>
      </div>

      <div className="flex flex-col min-h-screen gap-10">
        {order ? (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">
              Order ID: {order.order_id}
            </h3>
            <p className="text-lg">
              <strong>Total Items:</strong> {order.total_item}
            </p>
            <p className="text-lg">
              <strong>Total Price:</strong> {toRupiah(order.total_price)}
            </p>

            <h4 className="text-xl font-semibold mt-6">Items:</h4>
            <ul className="mt-2">
              {order.items.map((item) => (
                <li key={item.product_id} className="border-b py-2 flex gap-5">
                  <div className=" h-36 w-36">
                    <img
                      src={item.product.image}
                      alt="Product"
                      className="w-full h-full object-cover rounded-sm"
                    />
                  </div>
                  <div>
                    <p>{item.product.name}</p>
                    <p>
                      <strong>Quantity:</strong> {item.quantity}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No order details available.</p>
        )}
      </div>
    </div>
  );
}
