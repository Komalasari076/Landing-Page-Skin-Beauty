export default function MenuMobile({ open }) {
  return (
    <>
      {open && (
        <div className="lg:hidden absolute top-18 left-0 w-full flex flex-col gap-4 bg-white/20 text-white p-6 shadow-lg rounded-2xl backdrop-blur-md transition-opacity duration-300">
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
