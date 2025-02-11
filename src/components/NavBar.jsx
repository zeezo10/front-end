import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa6";

export default function NavBar() {
  const [fixed, setFixed] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={` ${
        fixed
        ? "bg-[rgba(228,228,228,0.3)] backdrop-blur-sm fixed top-0 left-0 right-0 z-50"
        : "bg-[#ede8de]"
      }  ${
        fixed ? "mx-3  my-3" : " w-full  rounded-none"
      } rounded-lg flex flex-row items-center p-2 transition-colors duration-300 justify-between px-10`}
    >
      <Link className=" w-14 mr-[750px]" href={"/"}>
        <h1 className="text-[#141414] text-2xl font-bold hover:text-[#c06f52]">
        Gizmo<span className="text-[#c06f52]">.</span>
        </h1>
      </Link>
      <div className={"text-[#141414] flex gap-5 items-center"}>
        <Link to={"/products"} className="hover:text-[#c06f52] text-[#141414]">
          Products
        </Link>
        <Link to={"/cart"} className="hover:text-[#c06f52] text-[#141414]">
          Cart
        </Link>

        <div className="h-8 w-8 cursor-pointer hover:bg-[#f3f3f3] rounded-full bg-white flex justify-center items-center">
        <FaUser />
        </div>
      </div>
    </div>
  );
}
