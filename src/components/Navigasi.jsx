import search from "../assets/search.svg";
import cart from "../assets/cart.svg";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navigasi() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white/20 py-4 px-8 rounded-2xl text-white flex justify-between items-center relative">
      {/* Logo & Hamburger Menu */}
      <div className="flex items-center gap-4">
        <span className="text-2xl font-semibold hidden lg:block">Skin</span>
        <button className="lg:hidden text-2xl" onClick={() => setOpen(!open)}>
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Menu Desktop */}
      <ul className="lg:flex gap-10 font-semibold text-lg hidden">
        <li>Home</li>
        <li>About</li>
        <li>Product</li>
        <li>Blog</li>
        <li>FAQ</li>
        <li>Contact</li>
      </ul>

      {/* Icon Search & Cart */}
      <div className="flex gap-6">
        <img src={search} alt="Search" className="md:w-8 w-6 md:h-8 h-6" />
        <img src={cart} alt="Cart" className="md:w-8 w-6 md:h-8 h-6" />
      </div>

      {/* Menu Mobile (Dropdown) */}
      {open && (
        <div className="absolute top-18 left-0 w-full bg-white/20 text-white p-6 flex flex-col gap-4 lg:hidden shadow-lg rounded-2xl backdrop-blur-sm transition-opacity duration-300">
          <span className="text-2xl font-semibold">Skin</span>
          <ul className="flex flex-col gap-2 font-semibold">
            <li>Home</li>
            <li>About</li>
            <li>Product</li>
            <li>Blog</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
}
