/* eslint-disable */
"use client";

import { Link } from "react-router-dom";
import { toRupiah } from "../helper/toRupiah";

export default function Card(props) {
    let product = props.product
  
  return (
    <>
    
    <Link to={`/products/${product.id}`}>
      <div className="w-[300px] h-[400px] bg-white hover:bg-lime-100 shadow-xl font-sans font-thin rounded-md overflow-hidden">
       
        <div
          style={{
            // backgroundImage: `url(${product.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="h-full w-full overflow-hidden bg-[#ccccd0]"
        >
          
          <div className="h-full w-full justify-center flex flex-col opacity-0 hover:opacity-100 backdrop-blur-sm hover:translate-y-0 transition-all duration-300">
            <div className="h-12 w-full justify-center flex flex-row-reverse px-5 items-center">
              <h1 className="text-2xl text-white font-semibold">View<span className="text-[#c06f52]">.</span></h1>
            </div>
          </div>

          {/* <img
          src={`https://zohobrand.com/cdn/shop/files/29_640x640_crop_center.jpg?v=1719774723`}
          className="h-[500px] w-full  bg-cover rounded-md"
          /> */}
        </div>
     
      </div>
      <div className=" h-20 p-2 flex flex-col items-center">

    <div className="text-md font-bold">{product.name}</div>
    <div>{toRupiah(product.price)}</div>
      </div>
    </Link>
    </>
  );
}
