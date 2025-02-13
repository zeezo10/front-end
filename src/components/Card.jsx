/* eslint-disable */


import { Link } from "react-router-dom";
import { toRupiah } from "../helper/toRupiah";

export default function Card(props) {
  let product = props.product;

  return (
    <>
      <Link to={`/products/${product.id}`}
      className="flex flex-col gap-2 w-fit items-center  "
      >
        <div className="xl:w-[300px] xl:h-[400px] lg:w-[200px] lg:h-[250px] md:h-[200px] md:w-[200px] w-40  sm:w-[150px] sm:h-[200px] bg-white hover:bg-lime-100 shadow-xl  font-thin rounded-md overflow-hidden">
          <div className="relative h-full w-full bg-[#ccccd0]">
            <div className="w-full h-36 md:h-52 lg:h-[400px] bg-[#dedede]">

            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full   object-cover"
            />

            </div>

            <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 backdrop-blur-sm transition-all duration-300">
              <h1 className="text-2xl text-white font-semibold">
                View<span className="text-[#c06f52]">.</span>
              </h1>
            </div>
          </div>
        </div>

        <div className="text-xs xl:text-xl sm:text-xs font-bold w-full flex  flex-col">
          <p className="text-xs font-thin xl:text-xl sm:text-xs sm:font-bold break-words">
            {product.name}
          </p>
          <div className="text-xs md:text-xs lg:text-lg  sm:text-xs text-thin text-[#a5a5a5]">
            5.4 (99)
          </div>
          <div>{toRupiah(product.price)}</div>
        </div>
      </Link>
    </>
  );
}
