/* eslint-disable */

export default function HomeCol() {
  return (
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
  )
}
