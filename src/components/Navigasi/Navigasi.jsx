import { useState } from "react";
import Logo from "./Logo";
import MenuDesktop from "./MenuDesktop";
import Icon from "./Icon";
import MenuMobile from "./MenuMobile";

export default function Navigasi() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white/20 py-4 px-8 rounded-2xl text-white flex justify-between items-center relative">
      <Logo open={open} setOpen={setOpen} />
      <MenuDesktop />
      <Icon />
      <MenuMobile open={open} />
    </nav>
  );
}
