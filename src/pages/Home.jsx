/* eslint-disable */

import { Link } from "react-router-dom";
import Card from "../components/Card";
import { productsAtom } from "../jotai/Jotai";
import { useAtom } from "jotai";
import arrow from "../assets/icons/8666713_arrow_up_right_icon.png";
import HomeBanner from "../components/HomeBanner";
import HomeCol from "../components/HomeCol";
import Footer from "../components/Footer";

export default function Home() {
  const [product] = useAtom(productsAtom);

  if (product.state === "hasError")
    return (
      <div className="h-screen bg-[#ede8de] flex justify-center items-center text-4xl font-bold text-[#c06f52] transition-all duration-300 ">
        ERROR
      </div>
    );
  if (product.state === "loading")
    return (
      <div className="h-screen bg-[#ede8de] flex justify-center items-center text-4xl font-bold text-[#c06f52] transition-all duration-300 ">
        LOADING
      </div>
    );

  const bestSellers = product.data.data;

  return (
    <div className="bg-[#ede8de] ">
      <div className="h-80 w-full xl:h-[700px] p-5 md:h-[500px]  sm:p-10 overflow-hidden relative lg:h-[500px]">
        <HomeBanner />
      </div>

      <div className="md:h-16 md:w-full h-8 bg-black flex justify-center items-center text-white font-thin text-xs md:text-xl">
        Shop smart, save big! Grab the best deals before they're gone!
      </div>

      <div
        className="w-full justify-center bg-white pb-10 md:pb-20 flex flex-col shadow-inner"
        style={{ boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.2)" }}
      >
        <div className="md:h-40 h-20 flex justify-between p-5 md:px-36 ">
          <div className="flex-1 flex ">
            <h2 className="flex flex-col text-xl md:text-4xl font-light h-full justify-center text-[#292929]">
              <span>Best</span>
              <span className="ml-16">Sellers -</span>
            </h2>

            <div className="flex-1 flex flex-row-reverse items-center gap-5">
              <div className="text-[#000000] text-sm sm:text-xl">SEE MORE</div>
              <Link className="" to={"/products"}>
                <div className="bg-[#d8cdba] hover:bg-[#c06f52]  hover:border-[#d8cdba] sm:h-16  sm:w-16 h-8 w-8 rounded-full flex justify-center items-center hover:w-20 hover:h-20 transition-all  duration-500 shadow-lg ">
                  <img
                    src={arrow}
                    alt="sdsdds"
                    className="sm:h-10 sm:w-10 h-5 w-5"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-center xl:px-20 lg:px-10 md:px-10 px-3 pb-10 border-b-[1px] border-[#a6a6a6] pt-5 sm:p-0 md:pb-10 ">
          {product.state === "loading" ? (
            <h1>Loading</h1>
          ) : (
            <div className=" flex flex-wrap justify-center sm:grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 w-full ">
              {bestSellers.slice(0, 4).map((el, index) => (
                <Card key={index} product={el} />
              ))}
            </div>
          )}
        </div>

        <div className="md:h-96 h-fit py-5">
          <div className="flex flex-wrap sm:flex-nowrap justify-center items-center gap-4 overflow-y-hidden sm:h-full w-full md:px-10 lg:px-10 xl:px-40">
            {bestSellers.slice(9, 15).map((el) => (
              <div
                className="bg-pink-200  md:w-1/5 h-20 w-40 md:h-60 rounded-sm"
                key={el.id}
                style={{
                  backgroundImage: `url(${el.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            ))}
          </div>

          <div className="w-full flex justify-center items-center h-20 md:h-0">
            <Link
              to={"/products"}
              className=" cursor-pointer hover:text-[#c06f52]"
            >
              - More -
            </Link>
          </div>
        </div>
      </div>

      <HomeCol />

      <div className="h-[100px] bg-[#ede8de]"></div>

      <Footer />
    </div>
  );
}
