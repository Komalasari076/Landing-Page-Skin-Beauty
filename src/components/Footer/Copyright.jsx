import SosialIcon from "./SosialIcon";

export default function Copyright() {
  return (
    <div className="bg-white/20 py-4 tracking-wide">
      <div className="max-w-9/10 m-auto lg:px-14 flex flex-col lg:flex-row gap-4 justify-between items-center text-white">
        <p>© 2025 Skin. All rights reserved.</p>
        <SosialIcon />
      </div>
    </div>
  );
}
