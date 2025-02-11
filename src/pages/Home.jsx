import { Link } from "react-router-dom";
import Card from "../components/Card";
import NavBar from "../components/NavBar";
import { productsAtom } from "../jotai/Jotai";
import { useAtom } from "jotai";
import arrow from "../assets/icons/8666713_arrow_up_right_icon.png";

export default function Home() {
  const [product] = useAtom(productsAtom);

  if (product.state === "hasError") return <h1>ERROR</h1>;
  if (product.state === "loading")  return <></>
 
  const bestSellers = product.data.data;

  return (
    <div className="bg-[#ede8de] ">
      <div className="h-screen p-10 overflow-hidden relative ">
        <div
          style={{
            backgroundImage: `url(https://medleyhome.com/cdn/shop/collections/medley-sofas-collection.jpg?v=1728446489&width=2048)`,
            backgroundSize: "cover",
          }}
          className="flex flex-col w-full h-full relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-t before:from-black/90 before:to-transparent before:z-0 rounded-2xl overflow-hidden shadow-xl"
        >
          <div className="flex flex-col flex-1 z-10">
            <div className="flex h-full">
              <div className="w-2/3 p-20 flex flex-col justify-between font-sans">
                <p className="text-white">
                  <span className="text-[#c06f52]">A</span> B C D{" "}
                  <span className="text-[#c06f52]">E</span> F G H I J K{" "}
                  <span className="text-[#c06f52]">L</span> M N{" "}
                  <span className="text-[#c06f52]">O</span> P Q{" "}
                  <span className="text-[#c06f52]">R</span> S T U V W{" "}
                  <span className="text-[#c06f52]">X</span> Y Z
                </p>
                <div className="flex-1">
                  <h1 className="text-5xl text-white flex flex-col w-1/2 font-bold">
                    <span>Smart Living Starts Here</span>
                    <span className="text-xl font-medium">
                      with Our Best Deals on Electronics & Furniture!
                    </span>
                  </h1>
                </div>
                <div className="flex flex-col flex-1 justify-center space-y-10">
                  <h1 className="text-3xl text-white font-light">
                    "Quality You Can Trust"
                  </h1>
                  <div className="flex gap-2">
                    <div className="h-10 w-10 rounded-full bg-[#c06f52]"></div>
                    <Link
                      href={""}
                      className="h-10 w-36 flex justify-center items-center border-1 rounded-sm border-white text-white backdrop-blur-sm hover:w-40 transition-all hover:text-white"
                    >
                      SHOP NOW
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-screen justify-center bg-white flex flex-col shadow-inner"
        style={{ boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.2)" }}
      >
        <div className="h-40 flex justify-between px-36">
          <div className="flex-1 flex ">
            <h2 className="flex flex-col text-4xl font-light h-full justify-center text-[#292929]">
              <span>Best</span>
              <span className="ml-16">Sellers -</span>
            </h2>

            <div className="flex-1 flex flex-row-reverse items-center gap-5">
              <div className="text-[#000000]">SEE MORE</div>
              <Link className="" to={"/products"}>
                <div className="bg-[#d8cdba] hover:bg-[#c06f52]  hover:border-[#d8cdba] h-16 w-16 rounded-full flex justify-center items-center hover:w-20 hover:h-20 transition-all  duration-500 shadow-lg ">
                  <img src={arrow} alt="sdsdds" className="h-10 w-10" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-center px-36">
          {product.state === "loading" ?  <h1>Loading</h1> :
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
          {bestSellers.slice(0, 4).map((el, index) => (
            <Card key={index} product={el} />
          ))}
          </div>
          }

           
        </div>
        
      </div>

      <div className="h-screen  px-20 flex items-center justify-center p-10 space-x-3 ">


    <div className="grid grid-cols-6 grid-rows-6 gap-3 h-full w-1/2">
      <div className="col-start-3 shadow-lg rounded-lg col-end-7 row-start-3 row-end-7 bg-red-500"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1586023492125-27b2c045efd7)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      >
        {}
      </div>
    
      <div className="col-start-1 shadow-lg rounded-lg col-end-7 row-start-1 row-end-3  text-4xl font-bold p-5 bg-[#f6f6f6]">

      Your home should tell the story of who you are and be a collection of what you love<span className="text-[#c06f52]">.</span>
      </div>
      <div className="col-start-1 shadow-lg rounded-lg col-end-3 row-start-3 row-end-5 bg-blue-500"
       style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1606171687430-ab21e12b3273)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}></div>
      <div className="col-start-1 shadow-lg rounded-lg col-end-3 row-start-5 row-end-7 bg-purple-500"
       style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1592950630581-03cb41342cc5)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      ></div>
    </div>



      <div className="grid grid-cols-8 grid-rows-7 gap-3 h-full w-1/2">
      <div className="col-start-5 shadow-lg rounded-lg col-end-9 row-start-5 row-end-8 bg-red-500"
       style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1550009158-9ebf69173e03)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      ></div>
      <div className="col-start-1 shadow-lg rounded-lg col-end-5 row-start-5 row-end-8 bg-[#f6f6f6] text-4xl font-bold p-5"
      >
       <span className="text-[#c06f52]">"</span> The future belongs to those who innovate today.<span className="text-[#c06f52]">"</span> 

      </div>
      <div className="col-start-1 shadow-lg rounded-lg col-end-6 row-start-1 row-end-5 bg-green-500"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1567016432779-094069958ea5)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}></div>
      <div className="col-start-6 shadow-lg rounded-lg col-end-9 row-start-3 row-end-5 bg-yellow-500"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1555041469-a586c61ea9bc)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}></div>
      <div className="col-start-6 shadow-lg rounded-lg col-end-9 row-start-1 row-end-3 bg-purple-500"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1503602642458-232111445657)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}></div>
    </div>

      
      </div>

      <div className="h-[100px] bg-[#ede8de]">
       
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
