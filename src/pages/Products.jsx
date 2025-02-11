/* eslint-disable */
"use client";

import { useEffect, useState } from "react";
import { productsAtom, searchQueryAtom } from "../jotai/Jotai";
import { useAtom } from "jotai";
import Card from "../components/Card";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Products() {
  const [products] = useAtom(productsAtom);
  const [searchQuery, setSearchQuery] = useAtom(searchQueryAtom);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [visibleCount, setVisibleCount] = useState(8);


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
    <div className="flex flex-col items-center bg-[#ede8de] font-sans">
      {/* Search Bar */}

      <div className="h-[500px] w-full   px-20 flex items-center justify-center">
        <div
          className="flex-1 h-3/4 overflow-hidden flex flex-col justify-center items-center space-y-5"
          //   style={{ backgroundImage: `url(${baner2.src})`, backgroundSize: 'cover' }}
        >
          <div className="flex items-center justify-center w-full h-full bg-gradient-to-t from-[#a1c9c0] to-[#cadfda] rounded-lg">
            <h1 className="text-5xl text-center flex flex-col text-[#292929]  p-5 bg-opacity-50 font-bold">
              <span>Upgrade Your Life</span> <span className="font-thin"> Top Deals on Electronics & Furniture!</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="h-40 flex w-full px-20 justify-between items-center gap-10">
        <div className="h-10 flex items-center">
          <h2 className="text-3xl text-[#292929] font-semibold">
            What are you looking for?
          </h2>
        </div>
        <div className="border-[1px] border-[#504e46] flex-1"></div>
        <div className="pt-2 relative text-gray-600">
          <input
            className="shadow-md border-[1px] border-[#292929] rounded-sm bg-white h-10 px-5 pr-16 text-sm focus:outline-none w-[400px] flex items-center"
            type="search"
            name="search"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
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
        <div className="flex flex-wrap justify-center gap-2 overflow-hidden min-h-[500px] ">
          {filteredProducts.map((el, index) => (
            <div key={el.id || index}>
              <Card product={el} />
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
