import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  AwaitedReactNode,
  Key,
  useState,
  useEffect,
} from "react";
import { data, useParams } from "react-router-dom";
import { toRupiah } from "../helper/toRupiah";

export default  function ProductDetail() {
    const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(`https://fe-test-api.jmm88.com/api/products/${id}`);
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

  if (error) return <h1>Error fetching product details</h1>;
  if (!product) return <h1>Loading...</h1>;

  let item = product.data

  console.log(product.data);
  
  return (
    <div className="flex flex-col bg-[#ede8de]   ">
      

      <div className="flex pb-36 justify-center pt-20 px-20">
        <div className="font-sans">
          <div className="p-4 ">
            <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-8 max-lg:gap-16 ">
              <div className=" flex top-0 text-center ">

                <div className="h-[560px] w-40 px-2 ">

                    <div className="w-full h-1/4 rounded-sm shadow-lg bg-amber-600"></div>
                    <div className="w-full h-1/4 rounded-sm shadow-lg bg-amber-400"></div>
                    <div className="w-full h-1/4 rounded-sm shadow-lg bg-amber-300"></div>
                    <div className="w-full h-1/4 rounded-sm shadow-lg bg-amber-200"></div>

                </div>
                <div className="h-[560px] w-[560px] rounded-sm shadow-lg"
                
                style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  
                </div>
                <div className="flex flex-wrap gap-4 justify-center mx-auto mt-4">
                  {/* {product.images.map((el: any, index: number) => (
                    <button key={index}>
                      <img
                        src={`${el}`}
                        className="w-16 cursor-pointer rounded-md outline"
                      />
                    </button>
                  ))} */}
                </div>


              </div>


              <div className="flex flex-col justify-between h-full" >

                <div>

                <div className="flex flex-wrap items-start gap-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">
                      {item.name}
                    </h2>
                    <p className="text-sm text-gray-500 mt-2">
                      Well-Versed Commerce
                    </p>
                  </div>
                  <div className="ml-auto flex flex-wrap gap-4">
                 
                  </div>
                </div>

                <hr className="my-8" />

             
    

                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Category</h3>
                  <p className="text-gray-500  text-xl ">
                      {item.category}
                    </p>
                </div>

                <hr className="my-8" />
              
               
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Rating</h3>
                  <p className="text-gray-500  text-xl ">
                      4.6
                    </p>
                </div>

                <hr className="my-8" />
                <div className=" flex flex-col">
                  <h3 className="text-2xl font-bold text-gray-800 self-end ">Stock: <span className="text-gray-500  text-xl font-normal">{item.stock}</span></h3>
                 
                </div>
              

                </div>

                <div className="flex flex-wrap gap-4 self-end justify-between w-full">


                <div className="flex flex-wrap gap-4 ">
                  <div>
                  

                    <p className="text-gray-600  text-3xl">
                      {toRupiah(item.price)}
                    </p>
                  </div>
               
                </div>


                <button className="bg-[#000000] cursor-pointer hover:bg-[#222] transition-all duration-300  text-white  w-1/3 h-10 text-xl  rounded-sm ">
              Add To Cart
            </button>
                  
                </div>

              
              </div>


            </div>
            <div className="mt-20 max-w-4xl">
              <ul className="flex border-b">
                <li className="text-gray-800 font-semibold text-sm  py-3 px-8 border-b-2 border-gray-800  transition-all">
                  Description
                </li>
              </ul>
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-800">
                  Product Description
                </h3>
                <p className="text-sm text-gray-500 mt-4">
                  {item.description}
                </p>
              </div>
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
    </div>
  );
}
