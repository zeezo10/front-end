import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toRupiah } from "../helper/toRupiah";
import LoadingProduct from "../components/LoadingProduct";
import { cartAtom } from "../jotai/cartAtom";
import { useSetAtom } from "jotai";
import { addToCart } from "../jotai/cartUtils";
import Footer from "../components/Footer";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(false);
  const setCart = useSetAtom(cartAtom);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(
          `https://fe-test-api.jmm88.com/api/products/${id}`
        );
        if (!response.ok) throw new Error("Failed to fetch product");

        const data = await response.json();
        setProduct(data);
      } catch (err) {
        console.error("Error fetching product:", err);
        setError(true);
      }
    }

    if (id) fetchProduct();
  }, [id]);

  if (error)
    return (
      <h1 className="text-center text-red-500">
        Error fetching product details
      </h1>
    );
  if (!product) return <LoadingProduct />;

  let item = product.data;

  return (
    <>
      <div className="flex flex-col bg-[#ede8de] min-h-screen px-4 md:px-10 lg:px-20 pb-20">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start py-20">
          <div className="flex flex-col-reverse lg:flex-row w-full lg:w-auto gap-4 lg:gap-8">
            <div className="flex lg:flex-col gap-2">
              <div className="w-16 h-16 bg-amber-600 rounded-sm shadow-lg"></div>
              <div className="w-16 h-16 bg-amber-400 rounded-sm shadow-lg"></div>
              <div className="w-16 h-16 bg-amber-300 rounded-sm shadow-lg"></div>
              <div className="w-16 h-16 bg-amber-200 rounded-sm shadow-lg"></div>
            </div>
            <div
              className="w-full h-64 lg:w-[560px] lg:h-[560px] rounded-sm shadow-lg bg-cover bg-center"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>
          </div>

          <div className="flex flex-col justify-between w-full lg:w-1/2 mt-8 lg:mt-0 px-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{item.name}</h2>
              <p className="text-sm text-gray-500 mt-2">Well-Versed Commerce</p>
              <hr className="my-4" />

              <div>
                <h3 className="text-xl font-bold text-gray-800">Category</h3>
                <p className="text-gray-500 text-lg">{item.category}</p>
              </div>

              <hr className="my-4" />
              <div>
                <h3 className="text-xl font-bold text-gray-800">Rating</h3>
                <p className="text-gray-500 text-lg">4.6</p>
              </div>

              <hr className="my-4" />
              <div className="flex justify-between">
                <h3 className="text-xl font-bold text-gray-800">Stock:</h3>
                <p className="text-gray-500 text-lg">{item.stock}</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8">
              <p className="text-gray-600 text-2xl">{toRupiah(item.price)}</p>
              <button
                onClick={() => addToCart(setCart, item)}
                className="bg-black hover:bg-gray-800 cursor-pointer transition-all duration-300 text-white w-full md:w-1/3 h-10 text-lg rounded-sm"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>

        <div className=" max-w-4xl mx-auto px-4">
          <h3 className="text-xl font-bold text-gray-800">
            Product Description
          </h3>
          <p className="text-gray-500 mt-4">{item.description}</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
