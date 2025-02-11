import { useAtom, useSetAtom } from "jotai";
import { cartAtom, createOrderAtom, totalItemsAtom, totalPriceAtom } from "../jotai/cartAtom";
import { removeFromCart } from "../jotai/cartUtils";
import { useCheckCartStock } from "../hooks/useCheckCartStock";
import { toRupiah } from "../helper/toRupiah";

const Cart = () => {
  const cart = useCheckCartStock(); // Auto-check stock
  const [totalItems] = useAtom(totalItemsAtom);
  const [totalPrice] = useAtom(totalPriceAtom);
  const [, setCart] = useAtom(cartAtom);
  const createOrder = useSetAtom(createOrderAtom);

  return (
    <div className="min-h-screen bg-[#ede8de] p-10">
      <div className="py-10 flex w-2/3  items-center ">
        <h2 className="text-3xl font-bold">My Cart</h2>
      </div>

      <div className="flex justify-between min-h-screen gap-20 ">
        {cart.length === 0 ? (
          <p>Keranjang kosong</p>
        ) : (
          <ul className="w-2/3">
            {cart.map((item) => (
              <li
                key={item.id}
                className=" border-t-[1px] border-[#a5a5a5] flex p-5"
              >
                <div className="h-40 w-40 bg-[#d9e2cb] rounded-sm"
                
                style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>

                <div className="flex-1 flex  justify-between text-[#777777] ">
                  <div className=" font-semibold text-xl text-[#2c2c2c] w-1/2 px-4">
                    {item.name}
                  </div>

                <div className=" w-1/2 flex  justify-between">

                  <div>
                    <h2>Ouantity</h2>
                    {item.quantity}
                  </div>

                  <div>
                    <h2>Price</h2>

                    {toRupiah(item.price)}
                  </div>

                </div>
                </div>

                {/* <button onClick={() => removeFromCart(setCart, item.id)}>
                  Hapus
                </button> */}
              </li>
            ))}
          </ul>
        )}

        <div className="min-h-full  w-1/3 flex flex-col px-5 bg-white shadow-xl">
          <div className=" justify-between flex flex-col h-1/2 p-5 items-center">
            <div className="text-lg border-b-[1px] w-full">Total Cart</div>
            <div className="flex flex-col justify-between py-10 flex-1 w-full text-[#777777] ">
                <div>

              <p className="flex justify-between ">
                Shiping:{" "}
                <span className="text-right">
                  1234 Burrito Boulevard, Apt. 404 Cheeseburger City, Nacho
                  State ZIP: 80085 Phone: (555) 867-5309
                </span>
              </p>
              <p className="flex justify-between ">
                Total Items: <span>{totalItems}</span>
              </p>
              <p className="flex justify-between ">
                shipping fee: <span>free</span>
              </p>

                </div>

              <div className="border-t-[1px]">
                <p className="flex justify-between">
                  Total Price: <span>{toRupiah(totalPrice)}</span>
                </p>
              </div>


            </div>
            <button 
            onClick={() => createOrder()}
            className="bg-[#000000] cursor-pointer hover:bg-[#222] transition-all duration-300  text-white  w-1/2 h-10 text-xl rounded-sm ">
              Check out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
