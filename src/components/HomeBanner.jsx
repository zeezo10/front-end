/* eslint-disable */

import { Link } from 'react-router-dom'

export default function HomeBanner() {
  return (
    <div
    style={{
      backgroundImage: `url(https://medleyhome.com/cdn/shop/collections/medley-sofas-collection.jpg?v=1728446489&width=2048)`,
      backgroundSize: "cover",
    }}
    className="flex flex-col w-full h-full relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-t before:from-black/90 before:to-transparent before:z-0 rounded-2xl overflow-hidden shadow-xl"
  >
    <div className="flex flex-col flex-1 z-10">
      <div className="flex h-full w-full bg">
        <div className="md:w-2/3 md:p-10 lg:p-20 p-5 flex flex-col justify-between  w-full">
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
  )
}
