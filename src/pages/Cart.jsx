/* eslint-disable */

import { useAtom, useSetAtom } from "jotai";
import {
  cartAtom,
  createOrderAtom,
  totalItemsAtom,
  totalPriceAtom,
} from "../jotai/cartAtom";
import { removeFromCart } from "../jotai/cartUtils";
import { useCheckCartStock } from "../hooks/useCheckCartStock";
import { toRupiah } from "../helper/toRupiah";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import Footer from "../components/Footer";

const Cart = () => {
  const cart = useCheckCartStock(); // Auto-check stock
  const [totalItems] = useAtom(totalItemsAtom);
  const [totalPrice] = useAtom(totalPriceAtom);
  const [, setCart] = useAtom(cartAtom);
  const createOrder = useSetAtom(createOrderAtom);
  const removeCart = useSetAtom(removeFromCart);
  const navigate = useNavigate();

  if (cart.state === "hasError")
    return (
      <div className="h-screen bg-[#ede8de] flex justify-center items-center text-4xl font-bold text-[#c06f52] transition-all duration-300 ">
        ERROR
      </div>
    );
  if (cart.state === "loading")
    return (
      <div className="h-screen bg-[#ede8de] flex justify-center items-center text-4xl font-bold text-[#c06f52] transition-all duration-300 ">
        LOADING
      </div>
    );

  return (
    <>
      <div className="min-h-screen bg-[#ede8de] px-4 md:px-10 lg:px-20 xl:px-40  pb-20 ">
        {/* Header */}
        <div className="py-5 flex md:justify-between items-center gap-5">
          <div className="flex gap-3 items-center">
            <h2 className="text-2xl md:text-3xl font-bold">My Cart</h2>
            <BsCart3 size={28} />
          </div>
          <div className="text-lg md:text-xl text-[#787878]">
            Items / {cart.length}
          </div>
        </div>

        {/* Cart Content */}
        <div className="flex flex-col lg:flex-row gap-5 border-t-[1px]">
          {cart.length === 0 ? (
            <div className="w-full flex flex-col items-center pt-10">
              <p className="text-lg md:text-xl">Your Cart is empty! :(</p>
              <p className="text-xl md:text-2xl">
                Discover Today's Best Deals!
              </p>
              <Link
                to={"/products"}
                className="h-10 w-32 md:w-36 flex justify-center items-center border rounded-sm mt-6 bg-[#c06f52] text-white hover:bg-black transition-all"
              >
                SHOP NOW
              </Link>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row w-full">
              {/* Cart Items */}
              <ul className="w-full lg:w-2/3">
                {cart.map((item) => (
                  <li
                    key={item.id}
                    className="flex flex-row items-center bg-white mt-3 shadow-md p-1 sm:p-4"
                  >
                    <div
                      className="h-28 w-28 sm:h-40 sm:w-40 bg-[#d9e2cb] rounded-sm"
                      style={{
                        backgroundImage: `url(${item.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>

                    <div className="flex-1 flex flex-col h-full  sm:flex-row justify-between text-[#777777] px-4 sm:mt-0 w-full">
                      <div className="w-full flex  sm:flex-row justify-between  ">
                        <div className="text-sm sm:text-sm md:text-lg  font-semibold   text-[#2c2c2c] sm:w-1/2">
                          {item.name}
                        </div>
                        <div className="sm:flex  justify-between flex-1 sm:px-4 md:pr-10 min-w-24 ">
                          <div className="text-xs sm:text-sm md:text-base">
                            <h2 className="text-xs sm:text-sm md:text-base">
                              Quantity:
                            </h2>
                            {item.quantity}
                          </div>

                          <div className="text-xs sm:text-sm md:text-base">
                            <h2 className="text-xs sm:text-sm md:text-base">
                              Price:
                            </h2>
                            {toRupiah(item.price)}
                          </div>
                        </div>

                        <button
                          className="mt-3 sm:mt-0 hover:text-red-400 cursor-pointer  h-full"
                          onClick={() => removeCart(item.id)}
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="w-full lg:w-1/3 flex flex-col lg:pl-3 py-3 ">
                <div className="bg-white shadow-md p-5">
                  <div className="text-lg border-b pb-2">Total Cart</div>
                  <div className="py-6 space-y-3 text-[#777777]">
                    <p className="flex justify-between text-sm sm:text-base">
                      Shipping Address:
                      <span className="text-right">
                        1234 Burrito Blvd, Nacho City
                      </span>
                    </p>
                    <p className="flex justify-between text-sm sm:text-base">
                      Total Items: <span>{totalItems}</span>
                    </p>
                    <p className="flex justify-between text-sm sm:text-base">
                      Shipping Fee: <span>Free</span>
                    </p>
                  </div>

                  <div className="border-t pt-3">
                    <p className="flex justify-between text-sm sm:text-base">
                      Total Price: <span>{toRupiah(totalPrice)}</span>
                    </p>
                  </div>

                  {cart.length > 0 && (
                    <button
                      onClick={() => createOrder(navigate)}
                      className="bg-black hover:bg-[#222] transition-all text-white w-full h-10 mt-5 text-lg rounded-sm"
                    >
                      Check Out
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Cart;
