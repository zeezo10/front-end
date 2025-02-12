import { useAtom } from "jotai";
import { ordersAtom } from "../jotai/cartAtom";
import { toRupiah } from "../helper/toRupiah";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Order = () => {
  const [orders] = useAtom(ordersAtom);

  if (orders.state === "hasError")
    return (
      <div className="h-screen bg-[#ede8de] flex justify-center items-center text-4xl font-bold text-[#c06f52] transition-all duration-300 ">
        ERROR
      </div>
    );
  if (orders.state === "loading")
    return (
      <div className="h-screen bg-[#ede8de] flex justify-center items-center text-4xl font-bold text-[#c06f52] transition-all duration-300 ">
        LOADING
      </div>
    );

  return (
    <>
      <div className="min-h-screen bg-[#ede8de] px-4 md:px-10 lg:px-20 xl:px-40 pb-20">
        <div className="py-5 flex md:justify-between items-center gap-5">
          <div className="flex gap-3 items-center">
            <h2 className="text-2xl md:text-3xl font-bold">My Orders</h2>
          </div>
          <div className="text-lg md:text-xl text-[#787878]">
            Items / {orders.length}
          </div>
        </div>
        <div className="flex flex-col min-h-screen">
          {orders.length === 0 ? (
            <p className="text-center text-gray-500">Order empty</p>
          ) : (
            <ul className="w-full border-t ">
              {orders.map((item) => (
                <li
                  key={item.order_id}
                  className="mt-4 border-[#a5a5a5] flex flex-col md:flex-row p-4 bg-white shadow-md rounded-md"
                >
                  <div
                    className="h-32 w-32 md:h-40 md:w-40 bg-[#d9e2cb] rounded-sm flex justify-center items-center text-lg font-bold text-[#7e8672]"
                    style={{
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    ORDER
                  </div>

                  <div className="flex-1 flex flex-col md:flex-row justify-between text-[#777777] mt-4 md:mt-0 md:ml-4">
                    <div className="font-semibold text-lg md:text-xl text-[#2c2c2c] flex flex-col w-full md:w-1/2">
                      <h2>Order ID:</h2>
                      <p>{item.order_id}</p>
                      <p className="font-medium">Status: Shipped</p>
                      <p className="font-thin text-sm text-[#7d7d7d]">
                        Address: 1234 Burrito Boulevard, Apt. 404 Cheeseburger
                        City, Nacho State ZIP: 80085 Phone: (555) 867-5309
                      </p>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center justify-between w-full md:w-1/2 mt-4 md:mt-0">
                      <div>
                        <h2 className="text-sm md:text-base">Total Items</h2>
                        <p>{item.total_item}</p>
                      </div>

                      <div>
                        <h2 className="text-sm md:text-base">Price</h2>
                        <p>{toRupiah(item.total_price)}</p>
                      </div>

                      <Link
                        to={`/order/${item.order_id}`}
                        className="mt-4 md:mt-0 px-4 py-2 text-sm md:text-base rounded-sm border border-gray-400 cursor-pointer hover:bg-gray-200 text-center"
                      >
                        See Detail
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Order;
