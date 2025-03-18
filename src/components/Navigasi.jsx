import search from "../assets/search.svg";
import cart from "../assets/cart.svg";

export default function Navigasi() {
  return (
    <nav className="bg-white/20 py-4 px-8 rounded-2xl text-white flex justify-between items-center">
      <div className="logo">
        <span className="text-2xl font-semibold">Skin</span>
      </div>

      <ul className="flex gap-10 font-semibold text-lg">
        <li>Home</li>
        <li>About</li>
        <li>Product</li>
        <li>Blog</li>
        <li>FAQ</li>
        <li>Contact</li>
      </ul>

      <div className="flex gap-6">
        <img src={search} alt="icon search" />
        <img src={cart} alt="acon cart" />
      </div>
    </nav>
  );
}
