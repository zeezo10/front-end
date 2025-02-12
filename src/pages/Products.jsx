/* eslint-disable */
;

import { useEffect, useState } from "react";
import { productsAtom, searchQueryAtom } from "../jotai/Jotai";
import { useAtom, useSetAtom } from "jotai";
import Card from "../components/Card";
import InfiniteScroll from "react-infinite-scroll-component";
import { addToCart } from "../jotai/cartUtils";
import { cartAtom } from "../jotai/cartAtom";
import { FaSearch } from "react-icons/fa";

export default function Products() {
  const [products] = useAtom(productsAtom);
  const [searchQuery, setSearchQuery] = useAtom(searchQueryAtom);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [visibleCount, setVisibleCount] = useState(8);
  const [key, setKey] = useState("");

  const setCart = useSetAtom(cartAtom);

  useEffect(() => {
    if (products.state === "hasData") {
      const allProducts = products.data.data;
      setItems(allProducts);

      const result = allProducts.filter((el) =>
        el.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(result);
    }
  }, [products, searchQuery]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(key);
  };

  const fetchMoreData = () => {
    if (visibleCount >= filteredProducts.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setVisibleCount((prev) => prev + 8);
    }, 500);
  };

  if (products.state === "hasError") return <h1>ERROR</h1>;

  return (
    <div className="flex flex-col items-center  bg-[#ede8de]  font-sans pt-5 ">
      <div className="sm:h-16 w-full text-xs  h-10 bg-[#c06f52] flex justify-center items-center text-white font-thin sm:text-xl">
        Shop smart, save big! Grab the best deals before they're gone!
      </div>

      <div className="sm:h-[500px] w-full h-80 p-2 sm:px-20 flex items-center justify-center">
        <div
          className="flex-1 h-4/5 overflow-hidden flex flex-col justify-center items-center space-y-5 shadow-xl"
          //   style={{ backgroundImage: `url(${baner2.src})`, backgroundSize: 'cover' }}
        >
          <div className=" absolute ">
            <h1 className="lg:text-5xl space-y-5 flex flex-col sm:text-2xl md:text-3xl text-[#ffffff]  p-5 bg-opacity-50 font-bold rounded-lg ">
              <span>
                Upgrade Your Life<span className="text-[#c06f52]">.</span>
              </span>{" "}
              <span className="font-thin">
                {" "}
                Top Deals on Electronics & Furniture!
              </span>
            </h1>
          </div>
          <div className="flex items-center justify-center w-full h-full bg-gradient-to-t from-[#a1c9c0] to-[#cadfda] rounded-lg overflow-hidden shadow-lg">
            <div
              className=" h-full w-1/3"
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1592078615290-033ee584e267)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div
              className=" h-full w-1/3"
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1503602642458-232111445657)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            <div
              className=" h-full w-1/3"
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        </div>
      </div>

      <div className=" h-40 w-full  bottom-40 sm:flex justify-center gap-5 hidden">
        <div className="bg-white h-full w-72 p-2 rounded-md shadow-md  xl:w-80 md:w-52 hidden md:block ">
          <div className="border-[1px] p-2 text-sm md:text-xs  border-slate-400 text-slate-400 font-thin h-full w-full rounded-md flex flex-col gap-2">
            <div>⭐⭐⭐⭐⭐ (5/5)</div>
            "Absolutely love this product! The quality exceeded my expectations,
            and the delivery was super fast. Will definitely order again!"
          </div>
        </div>
        <div className="bg-white h-full w-72 p-2 rounded-md shadow-md  xl:w-80 md:w-52 hidden md:block ">
          <div className="border-[1px] p-2 text-sm md:text-xs  border-slate-400 text-slate-400 font-thin h-full w-full rounded-md flex flex-col gap-2">
            <div>⭐⭐⭐⭐⭐ (5/5)</div>
            "Fantastic purchase! The product is exactly as described, and the
            customer service was top-notch. Will be buying more soon!"
          </div>
        </div>
        <div className="bg-white h-full w-72 p-2 rounded-md shadow-md  xl:w-80 md:w-52 hidden md:block sm:hidden">
          <div className="border-[1px] p-2 text-sm md:text-xs  border-slate-400 text-slate-400 font-thin h-full w-full rounded-md flex flex-col gap-2 ">
            <div>⭐⭐⭐⭐☆ (4/5)</div>
            "Great value for the price! The only reason I’m giving 4 stars
            instead of 5 is that I wish it came in more colors. Still, highly
            recommended!"
          </div>
        </div>
        <div className="bg-white h-full w-72 p-2 rounded-md shadow-md  xl:w-80 md:w-52 hidden md:block sm:hidden">
          <div className="border-[1px] p-2 text-sm md:text-xs  border-slate-400 text-slate-400 font-thin h-full w-full rounded-md flex flex-col gap-2">
            <div>⭐⭐⭐☆☆ (3/5)</div>
            "Decent product, but shipping took longer than expected. The quality
            is good, but I was hoping for a slightly better fit.
          </div>
        </div>
      </div>

      <div className="h-40 sm:flex-row flex flex-col w-full px-20 sm:justify-between justify-center sm:items-center sm:gap-10 ">
        <div className="h-10 flex items-center justify-center ">
          <h2 className="md:text-3xl  text-sm text-[#292929] font-semibold sm:text-lg ">
            What are you looking for?
          </h2>
        </div>
        <div className="border-[1px] border-[#504e46] flex-1 sm:hidden hidden md:block "></div>

        <div className="pt-2 relative text-gray-600 flex justify-center">
          <form onSubmit={handleSearch} className="relative w-full ">
            <input
              className="shadow-sm rounded-sm bg-white h-8 sm:h-10  px-5 pr-12 text-sm focus:outline-none w-full sm:w-[400px] "
              type="search"
              name="search"
              placeholder="Search"
              value={key}
              onChange={(e) => setKey(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
            >
              <FaSearch />
            </button>
          </form>
        </div>
      </div>

      {/* Jika tidak ada hasil pencarian */}
      {searchQuery && filteredProducts.length === 0 && (
        <div className="text-center text-red-500 font-semibold text-lg my-5">
          Produk tidak ditemukan
        </div>
      )}

      {/* Infinite Scroll */}
      <InfiniteScroll
        dataLength={visibleCount}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4 className="text-center my-4">Loading more...</h4>}
      >
        <div className="flex flex-wrap justify-center gap-2 space-y-4 overflow-hidden min-h-[500px] pb-40 xl:px-20 lg:p-20 md:p-10">
          {filteredProducts.map((el, index) => (
            <div
              key={el.id || index}
              className="bg-white p-1 sm:p-2 rounded-md flex-col flex justify-between items-center h-64 sm:h-fit w-44 sm:w-fit"
            >
              <Card product={el} />
              <div className="w-full flex flex-row-reverse p-2 ">
                <button
                  onClick={() => addToCart(setCart, el)}
                  className="border-2 w-full h-8 lg:text-xs lg:w-1/2 md:w-full text-sm sm:w-full hover:bg-black hover:text-white cursor-pointer transition-all duration-300   rounded-full flex justify-center items-center"
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </InfiniteScroll>

      <footer className="  shadow bg-black text-white w-full ">
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
    </div>
  );
}
