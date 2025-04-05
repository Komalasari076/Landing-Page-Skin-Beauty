import { useState } from "react";
import Logo from "./Logo";
import MenuDesktop from "./MenuDesktop";
import Icon from "./Icon";
import MenuMobile from "./MenuMobile";

export default function Navigasi() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative flex justify-between items-center bg-white/20 text-white py-4 px-8 rounded-2xl">
      <Logo open={open} setOpen={setOpen} />
      <MenuDesktop />
      <Icon />
      <MenuMobile open={open} />
    </nav>
  );
}
