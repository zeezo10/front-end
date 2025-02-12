import { Link } from "react-router-dom";
import Card from "../components/Card";
import NavBar from "../components/NavBar";
import { productsAtom } from "../jotai/Jotai";
import { useAtom } from "jotai";
import arrow from "../assets/icons/8666713_arrow_up_right_icon.png";

export default function Home() {
  const [product] = useAtom(productsAtom);

  if (product.state === "hasError") return <h1>ERROR</h1>;
  if (product.state === "loading") return <div className="h-screen bg-[#ede8de] flex justify-center items-center text-4xl font-bold text-[#c06f52] transition-all duration-300 ">LOADING ...</div>;

  const bestSellers = product.data.data;

  return (
    <div className="bg-[#ede8de] ">
      <div className="h-80 w-full xl:h-[700px] p-5 md:h-[500px]  sm:p-10 overflow-hidden relative lg:h-[500px]">
        <div
          style={{
            backgroundImage: `url(https://medleyhome.com/cdn/shop/collections/medley-sofas-collection.jpg?v=1728446489&width=2048)`,
            backgroundSize: "cover",
          }}
          className="flex flex-col w-full h-full relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-t before:from-black/90 before:to-transparent before:z-0 rounded-2xl overflow-hidden shadow-xl"
        >
          <div className="flex flex-col flex-1 z-10">
            <div className="flex h-full w-full bg">
              <div className="md:w-2/3 md:p-10 lg:p-20 p-5 flex flex-col justify-between font-sans w-full">
                <p className="text-white text-xs hidden sm:block">
                  <span className="text-[#c06f52]">A</span> B C D{" "}
                  <span className="text-[#c06f52]">E</span> F G H I J K{" "}
                  <span className="text-[#c06f52]">L</span> M N{" "}
                  <span className="text-[#c06f52]">O</span> P Q{" "}
                  <span className="text-[#c06f52]">R</span> S T U V W{" "}
                  <span className="text-[#c06f52]">X</span> Y Z
                </p>
                <div className="flex-1">
                  <h1 className="md:text-5xl text-sm text-white flex flex-col sm:w-1/2 font-bold">
                    <span>Smart Living Starts Here</span>
                    <span className="text-xl font-medium">
                      with Our Best Deals on Electronics & Furniture!
                    </span>
                  </h1>
                </div>
                <div className="flex flex-col flex-1 justify-center space-y-10">
                  <h1 className="md:text-3xl text-white font-light">
                    "Quality You Can Trust"
                  </h1>
                  <div className="flex gap-2">
                    <div className="md:h-10 sm:w-10 h-4 w-4 rounded-full bg-[#c06f52]"></div>
                    <Link
                      to={"/products"}
                      className="md:h-10 md:w-36 h-5 w-20 text-xs font-thin flex justify-center items-center border-1 rounded-sm border-white text-white backdrop-blur-sm hover:w-40 transition-all hover:text-white"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
            <Link to={"/products"}
            className=" cursor-pointer hover:text-[#505050]"
            >More</Link>
          </div>
        </div>
      </div>







      <div className="h-80 md:h-screen  sm:px-20 flex items-center justify-center p-5 sm:p-10 space-x-3 ">
        <div className="grid grid-cols-6 grid-rows-6 gap-3 h-full w-1/2">
          <div
            className="col-start-3 shadow-lg rounded-lg col-end-7 row-start-3 row-end-7 bg-red-500"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1586023492125-27b2c045efd7)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {}
          </div>

          <div className="col-start-1 shadow-lg rounded-lg col-end-7 row-start-1 row-end-3 text-xs md:text-3xl lg:text-4xl font-thin sm:font-bold p-2 md:p-5 bg-[#f6f6f6]">
            Your home should tell the story of who you are and be a collection
            of what you love<span className="text-[#c06f52]">.</span>
          </div>
          <div
            className="col-start-1 shadow-lg rounded-lg col-end-3 row-start-3 row-end-5 bg-blue-500"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1606171687430-ab21e12b3273)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="col-start-1 shadow-lg rounded-lg col-end-3 row-start-5 row-end-7 bg-purple-500"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1592950630581-03cb41342cc5)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>

        <div className="grid grid-cols-8 grid-rows-7 gap-3 h-full w-1/2">
          <div
            className="col-start-5 shadow-lg rounded-lg col-end-9 row-start-5 row-end-8 bg-red-500"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1550009158-9ebf69173e03)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="col-start-1 shadow-lg rounded-lg col-end-5 row-start-5 row-end-8 bg-[#f6f6f6] text-xs md:text-3xl lg:text-4xl font-thin sm:font-bold p-2 md:p-5 ">
            <span className="text-[#c06f52]">"</span> The future belongs to
            those who innovate today.<span className="text-[#c06f52]">"</span>
          </div>
          <div
            className="col-start-1 shadow-lg rounded-lg col-end-6 row-start-1 row-end-5 bg-green-500"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1567016432779-094069958ea5)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="col-start-6 shadow-lg rounded-lg col-end-9 row-start-3 row-end-5 bg-yellow-500"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1555041469-a586c61ea9bc)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="col-start-6 shadow-lg rounded-lg col-end-9 row-start-1 row-end-3 bg-purple-500"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1503602642458-232111445657)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>

      <div className="h-[100px] bg-[#ede8de]"></div>

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
