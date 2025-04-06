import { FiMenu, FiX } from "react-icons/fi";

export default function Logo({ open, setOpen }) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-xl font-semibold hidden lg:block tracking-wide">Skin</span>

      {/* hambueger menu mobile version */}
      <button className="lg:hidden text-xl" onClick={() => setOpen(!open)}>
        {open ? <FiX /> : <FiMenu />}
      </button>
    </div>
  );
}
