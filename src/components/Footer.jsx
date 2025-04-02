export default function Footer() {
  return (
    <div className="h-full w-full bg-gradient-to-r from-[#8fafb4] via-[#a9c4cc] to-[#b7c9d4]">
      <div className="max-w-9/10 m-auto my-10 lg:px-14 py-14 flex flex-col lg:flex-row justify-between lg:gap-20 gap-10">
        <div className="md:max-w-3/5 lg:w-2/5">
          <h1 className="text-4xl font-semibold text-white">
            Sign up our Newslatter!
          </h1>
          <p className=" text-white mt-2">
            Dapatkan tips eksklusif, promo spesial, dan update terbaru langsung
            ke inbox kamu!
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
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-20 text-white">
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
        <div className="max-w-9/10 m-auto lg:px-14 flex flex-col lg:flex-row gap-4 justify-between items-center text-white">
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
