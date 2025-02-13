import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toRupiah } from "../helper/toRupiah";
import Footer from "../components/Footer";

export default function OrderDetail() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await fetch(`https://fe-test-api.jmm88.com/api/orders/${id}`);

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
    return <div className="min-h-screen flex items-center justify-center bg-[#ede8de]">Loading...</div>;
  if (error)
    return <div className="min-h-screen flex items-center justify-center text-red-500">{error}</div>;

  return (

    <>
    
    <div className="min-h-screen bg-[#ede8de] px-4 md:px-10 lg:px-20 xl:px-40 pb-10">
      <div className="flex items-center  py-5 border-b">
        <h2 className="text-2xl md:text-3xl font-bold">Order Detail</h2>
      </div>

      <div className="flex flex-col min-h-screen gap-10 max-w-screen-lg mx-auto mt-5">
        {order ? (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Order ID: {order.order_id}
            </h3>
            <p className="text-base md:text-lg">
              <strong>Total Items:</strong> {order.total_item}
            </p>
            <p className="text-base md:text-lg">
              <strong>Total Price:</strong> {toRupiah(order.total_price)}
            </p>

            <h4 className="text-lg md:text-xl font-semibold mt-6">Items:</h4>
            <ul className="mt-2">
              {order.items.map((item) => (
                <li key={item.product_id} className="border-b py-4 flex flex-col md:flex-row gap-5">
                  <div className="h-32 w-32 md:h-36 md:w-36 flex-shrink-0">
                    <img
                      src={item.product.image}
                      alt="Product"
                      className="w-full h-full object-cover rounded-sm"
                    />
                  </div>
                  <div>
                    <p className="text-base md:text-lg font-medium">{item.product.name}</p>
                    <p className="text-sm md:text-base">
                      <strong>Quantity:</strong> {item.quantity}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-center text-gray-500">No order details available.</p>
        )}
      </div>
    </div>


     <Footer />
    </>
  );
}
