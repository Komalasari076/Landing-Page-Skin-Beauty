export default function Footer() {
  return (
    <div className="h-full w-full bg-gradient-to-r from-[#93B4B9] via-[#B1CED6] to-[#BFD2DE]">
      <div className="max-w-9/10 m-auto my-10 px-14 py-14 flex justify-between">
        <div className="w-[450px]">
          <h1 className="text-4xl font-semibold text-white">
            Sign up our Newslatter!
          </h1>
          <p className=" text-white mt-2">
            Dapatkan tips eksklusif, promo spesial, dan update terbaru langsung
            ke inbox kamu!
          </p>

          <div className="mt-10">
            <input
              type="text"
              placeholder="youremail@gmail.com"
              className="w-80 bg-white/20 p-4 rounded-l-2xl placeholder-white"
            />
            <button className="bg-[#039397] p-4 rounded-2xl -ml-2 text-white font-semibold cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
        <div className="flex justify-between gap-20 text-white">
          <ul className="flex flex-col gap-3">
            <li className="text-lg font-semibold">Customer Support</li>
            <li>How to Order</li>
            <li>Shipping & Returns</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>

          <ul className="flex flex-col gap-3">
            <li className="text-lg font-semibold">Resources</li>
            <li>Skincare Guide</li>
            <li>Ingredients Glossary</li>
            <li>Skin Quiz</li>
          </ul>

          <ul className="flex flex-col gap-3">
            <li className="text-lg font-semibold">Partnerships</li>
            <li>Become a Reseller</li>
            <li>Affiliate Program</li>
            <li>Wholesale Inquiry</li>
          </ul>
        </div>
      </div>

      <div className="bg-white/20 py-4">
        <div className="max-w-9/10 m-auto px-14 flex justify-between items-center text-white">
          <p>© 2025 Skin. All rights reserved.</p>
          <div className="flex justify-between gap-6">
            <div className="w-8 h-8 rounded-full bg-white"></div>
            <div className="w-8 h-8 rounded-full bg-white"></div>
            <div className="w-8 h-8 rounded-full bg-white"></div>
            <div className="w-8 h-8 rounded-full bg-white"></div>
            <div className="w-8 h-8 rounded-full bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
