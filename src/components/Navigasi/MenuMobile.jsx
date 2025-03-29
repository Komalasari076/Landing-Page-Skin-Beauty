export default function MenuMobile({open}) {
  return (
    <>
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
    </>
  );
}
