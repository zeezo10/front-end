import React from "react";

export default function LoadingProduct() {
  return (
    <div className="flex flex-col bg-[#ede8de]   ">
      
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
                    className="w-full bg-[#d5d5d5] h-64 lg:w-[560px] lg:h-[560px] rounded-sm shadow-lg bg-cover bg-center"
                   
                  ></div>
                </div>
      
                <div className="flex flex-col justify-between w-full lg:w-1/2 mt-8 lg:mt-0 px-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 bg-[#d5d5d5] h-8"></h2>
                    <p className="text-sm text-gray-500 mt-2">Well-Versed Commerce</p>
                    <hr className="my-4" />
      
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">Category</h3>
                      <p className="text-gray-500 text-lg bg-[#d5d5d5] h-8"></p>
                    </div>
      
                    <hr className="my-4" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">Rating</h3>
                      <p className="text-gray-500 text-lg bg-[#d5d5d5] h-8"></p>
                    </div>
      
                    <hr className="my-4" />
                    <div className="flex justify-between">
                      <h3 className="text-xl font-bold text-gray-800">Stock:</h3>
                      <p className="text-gray-500 text-lg bg-[#d5d5d5] h-8"></p>
                    </div>
                  </div>
      
                  <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8">
                   
                  </div>
                </div>
              </div>
      
              <div className=" max-w-4xl mx-auto px-4">
                <h3 className="text-xl font-bold text-gray-800">
                  Product Description
                </h3>
                <p className="text-gray-500 mt-4 "></p>
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
    </div>
  );
}
