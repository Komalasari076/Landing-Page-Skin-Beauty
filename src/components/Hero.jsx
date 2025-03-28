import Navigasi from "./Navigasi";
import cover from "../assets/image.png";

export default function Hero() {
  return (
    <>
      <img src={cover} className="w-full h-screen object-cover object-right lg:brightness-50 brightness-40" />
      <div className="max-w-9/10 m-auto lg:my-10 my-6 lg:px-14 px-2 absolute inset-0">
        <Navigasi />

        <section className="pt-24">
          <h1 className="text-4xl text-white font-semibold mb-4">
            Bright<span className="text-white/70"> to Skin</span>
          </h1>
          <h1 className="text-4xl text-white font-semibold">
            Health<span className="text-white/70"> to Within</span>
          </h1>

          <p className="mt-10 max-w-md text-white text-lg">
            Radiant and healthy skin starts with the right care. Discover the
            best solution for your skin here!
          </p>

          <button className="bg-[#039397] hover:bg-[#386d6e] text-xl font-semibold text-white py-2 px-6 rounded-xl mt-20 cursor-pointer">
            Shop Now
          </button>
        </section>
      </div>
    </>
  );
}
