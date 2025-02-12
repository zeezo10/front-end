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
import { useNavigate } from "react-router-dom"
import { BsCart3 } from "react-icons/bs";

const Cart = () => {
  const cart = useCheckCartStock(); // Auto-check stock
  const [totalItems] = useAtom(totalItemsAtom);
  const [totalPrice] = useAtom(totalPriceAtom);
  const [, setCart] = useAtom(cartAtom);
  const createOrder = useSetAtom(createOrderAtom);

  const removeCart = useSetAtom(removeFromCart);
  
  const navigate = useNavigate()

  return (
    <>
      <div className="min-h-screen bg-[#ede8de] px-20 pb-40 ">
       

        <div className="py-10 flex flex-row-reverse w-2/3 justify-between items-center gap-5  px-5">
        <div className="flex gap-5">

          <h2 className="text-3xl font-bold">My Cart</h2> 
          <BsCart3 size={30} /> 

        </div>
          <div className="text-xl text-[#787878]">Items / {cart.length} </div>
        </div>

        <div className="flex justify-between min-h-screen gap-5 border-t-[1px]">
          {cart.length === 0 ? (
            <div className="w-full flex flex-col items-center pt-20">
              <p className="text-xl">Your Cart is empty! :(</p>
              <p className="text-2xl">Discover Today's Best Deals!</p>
              <Link
                to={"/products"}
                className="h-10 w-36 flex justify-center items-center border-1 rounded-sm mt-10 border-white text-white bg-[#c06f52] hover:bg-[#000000]  hover:w-40 transition-all hover:text-white"
              >
                SHOP NOW
              </Link>
            </div>
          ) : (
            <ul className="w-2/3">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="  border-[#a5a5a5] flex p-2  items-center bg-white mt-3 shadow-md"
                >
                  <div
                    className="h-40 w-40 bg-[#d9e2cb] rounded-sm"
                    style={{
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>

                  <div className="flex-1 flex  justify-between text-[#777777]  px-4">
                    <div className=" font-semibold text-xl text-[#2c2c2c] w-1/2 ">
                      {item.name}
                    </div>

                    <div className=" w-1/2 flex  justify-between ">
                      <div>
                        <h2>Ouantity</h2>
                        {item.quantity}
                      </div>

                      <div>
                        <h2>Price</h2>

                        {toRupiah(item.price)}
                      </div>

                      <button
                        className=" h-10   hover:text-red-400 cursor-pointer"
                        onClick={() => removeCart(item.id)}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}

          <div className="min-h-full  w-1/3 flex flex-col px-5 py-3">
            <div className=" justify-between flex flex-col h-1/2 p-5 items-center bg-white shadow-md">
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

              {cart.length > 0 && (
                <button
                  onClick={() => createOrder(navigate)}
                  className="bg-[#000000] cursor-pointer hover:bg-[#222] transition-all duration-300  text-white  w-1/2 h-10 text-xl rounded-sm "
                >
                  Check out
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

  

      <footer className="  shadow bg-black text-white  ">
        <div className="w-full mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Gizmo<span className="text-[#c06f52]">.</span>
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 ">
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025{" "}
            <a href="#" className="hover:underline">
              Gizmo™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Cart;
