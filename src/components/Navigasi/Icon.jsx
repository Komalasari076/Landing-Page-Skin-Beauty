import search from "../../assets/search.svg";
import cart from "../../assets/cart.svg";

export default function Icon() {
  return (
    <div className="flex gap-6">
      <img
        src={search}
        alt="Search"
        className="md:w-7 w-6 md:h-7 h-6 cursor-text"
      />
      <img
        src={cart}
        alt="Cart"
        className="md:w-7 w-6 md:h-7 h-6 cursor-text"
      />
    </div>
  );
}
