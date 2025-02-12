import { useAtom } from "jotai";
import { ordersAtom} from "../jotai/cartAtom";
import { toRupiah } from "../helper/toRupiah";
import { Link } from "react-router-dom";

const Order = () => {
  const [orders] = useAtom(ordersAtom);
 
  
  
  return (
    <div className="min-h-screen bg-[#ede8de] px-40 pb-20">
      <div className="py-10 flex w-2/3 items-center gap-5">
        <h2 className="text-3xl font-bold">My Order</h2>
        <h2 className="text-3xl">{orders.length}</h2>
      </div>

      <div className="flex justify-between min-h-screen gap-20">
        {orders.length === 0 ? (
          <p>Order kosong</p>
        ) : (
          <ul className="w-full border-t-[1px]">
            {orders.map((item) => (
              <li
                key={item.order_id}
                className="mt-4 border-[#a5a5a5] flex p-2 pr-5 bg-white shadow-md"
              >
                <div
                  className="h-40 w-40 bg-[#d9e2cb] rounded-sm flex justify-center items-center text-xl font-bold text-[#7e8672]"
                  style={{
                    
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  ORDER
                </div>

                <div className="flex-1 flex justify-between text-[#777777]">
                  <div className="font-semibold text-xl text-[#2c2c2c] w-1/2 px-4 flex flex-col ">
                  <h2>Order ID :</h2>
                  <p>

                    {item.order_id}

                  </p>

                  <p className="font-medium">
                    Status : Shipped

                  </p>
                  <p className="font-thin text-sm text-[#7d7d7d]">
                    Address : 1234 Burrito Boulevard, Apt. 404 Cheeseburger City, Nacho State ZIP: 80085 Phone: (555) 867-5309

                  </p>
                  </div>

                  <div className="w-1/2 flex justify-between  items-center">
                    <div>
                      <h2>Total Items</h2>
                      {item.total_item}
                    </div>

                    <div>
                      <h2>Price</h2>
                      {toRupiah(item.total_price)}
                    </div>

                    <Link
                    to={`/order/${item.order_id}`}
                    className="px-4 py-1 rounded-sm border-[1px]  cursor-pointer  hover:bg-[#dfdfdf] flex justify-center items-center ">See Detail</Link>

                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Order;
