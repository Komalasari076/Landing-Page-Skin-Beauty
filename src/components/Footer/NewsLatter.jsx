export default function NewsLatter() {
  return (
    <div className="md:max-w-3/5 lg:w-[450px] tracking-wide">
      <h1 className="text-2xl font-semibold text-white ">
        Sign up for our Newslatter!
      </h1>
      <p className="text-sm text-white mt-3">
        Dapatkan tips eksklusif, promo spesial, dan update terbaru langsung ke
        inbox kamu!
      </p>

      <div className="lg:mt-10 mt-8 text-sm">
        <input
          type="text"
          placeholder="youremail@gmail.com"
          className="w-2/3 outline-none bg-white/20 p-3 rounded-l-xl text-white"
        />
        <button className="bg-[#039397] hover:bg-[#386d6e] p-3 rounded-xl -ml-2 text-white font-semibold cursor-not-allowed">
          Subscribe
        </button>
      </div>
    </div>
  );
}
