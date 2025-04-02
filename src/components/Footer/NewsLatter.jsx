export default function NewsLatter() {
  return (
    <div className="md:max-w-3/5 lg:w-2/5">
      <h1 className="text-4xl font-semibold text-white">
        Sign up our Newslatter!
      </h1>
      <p className=" text-white mt-2">
        Dapatkan tips eksklusif, promo spesial, dan update terbaru langsung ke
        inbox kamu!
      </p>

      <div className="lg:mt-10 mt-6">
        <input
          type="text"
          placeholder="youremail@gmail.com"
          className="w-3/5 bg-white/20 p-4 rounded-l-2xl placeholder-white"
        />
        <button className="bg-[#039397] p-4 rounded-2xl -ml-2 text-white font-semibold cursor-pointer">
          Subscribe
        </button>
      </div>
    </div>
  );
}
