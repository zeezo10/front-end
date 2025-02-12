import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";

export default function NavBar() {
  const [fixed, setFixed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    setFixed(window.scrollY > 50);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        fixed
          ? "bg-[rgba(228,228,228,0.3)] backdrop-blur-sm fixed top-0 left-0 right-0 z-50"
          : "bg-[#ede8de] "
      } ${fixed ? "mx-3 my-3 py-3" : "rounded-none py-5"} 
        rounded-lg flex items-center justify-between px-5 lg:px-10 transition-all duration-300 `}
    >
      {/* Logo */}
      <Link to={"/"} className="text-[#141414] text-2xl font-bold hover:text-[#c06f52]">
        Gizmo<span className="text-[#c06f52]">.</span>
      </Link>

      {/* Mobile Menu Button */}
      <button 
        className="lg:hidden text-[#141414] focus:outline-none" 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Navigation Links */}
      <div
        className={`absolute z-50 lg:static top-16  left-0 right-0 pb-5 sm:p-0 shadow-2xl sm:shadow-none bg-[#ede8de] lg:bg-transparent lg:flex flex-col lg:flex-row gap-5 items-center lg:relative transition-all duration-300 ${
          menuOpen ? "flex" : "hidden"
        }`}
      >
        <Link to={"/"} className="hover:text-[#c06f52] text-[#141414] px-4 py-2">
          Home
        </Link>
        <Link to={"/products"} className="hover:text-[#c06f52] text-[#141414] px-4 py-2">
          Products
        </Link>
        <Link to={"/order"} className="hover:text-[#c06f52] text-[#141414] px-4 py-2">
          My Orders
        </Link>
        <Link to={"/cart"} className="hover:text-[#c06f52] text-[#141414] px-4 py-2 flex items-center">
          <BsCart3 size={20} />
        </Link>

        {/* User Icon */}
        <div className="h-8 w-8 cursor-pointer hover:bg-[#f3f3f3] rounded-full bg-white flex justify-center items-center">
          <FaUser />
        </div>
      </div>
    </nav>
  );
}
