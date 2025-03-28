import HeadDesc2 from "./reusable/Headdesc2";

export default function Product() {
  const dataProduct = [
    {
      id: 1,
      name: "Skin Retinol Serum",
      price: 58000,
      sold: 340,
      rating: 4.9,
    },
    {
      id: 2,
      name: "Skin Daily Moisturizer",
      price: 46000,
      sold: 243,
      rating: 4.9,
    },
    {
      id: 3,
      name: "Skin Aqua Series",
      price: 219000,
      sold: 200,
      rating: 4.9,
    },
    {
      id: 4,
      name: "Skin Refreshing Toner",
      price: 82000,
      sold: 190,
      rating: 4.9,
    },
    {
      id: 5,
      name: "Skin Brightening Serum",
      price: 75000,
      sold: 280,
      rating: 4.9,
    },
    {
      id: 6,
      name: "Skin Hydration Gel",
      price: 49000,
      sold: 150,
      rating: 4.9,
    },
    {
      id: 7,
      name: "Skin UV Protection",
      price: 56000,
      sold: 175,
      rating: 4.9,
    },
    {
      id: 8,
      name: "Skin Cleansing foam",
      price: 35000,
      sold: 210,
      rating: 4.9,
    },
  ];

  return (
    <section className="my:20 lg:my-30 lg:px-14">
      <HeadDesc2
        title="Pilihan Terbaik untuk Kulit Cerah & Sehat"
        description="Temukan solusi perawatan terbaik untuk kulit yang sehat, lembap, dan bercahaya. Diformulasikan dengan bahan berkualitas untuk hasil maksimal, karena kulitmu layak mendapatkan yang terbaik!"
      />

      {/* For Desktop (8 Product) */}
      <div className="hidden md:grid lg:grid-cols-4 grid-cols-2 gap-10 my-14">
        {dataProduct.slice(0, 8).map((item) => (
          <div key={item.id} className="bg-white p-2 rounded-xl shadow-md font-semibold">
            <img src="#" alt="" className="w-full h-48 bg-gray-100 rounded-xl" />
            <h3 className="text-lg mt-4 mb-1 opacity-85">{item.name}</h3>
            <p className="mb-4">Rp. {item.price.toLocaleString()} <span className="opacity-75">({item.sold} sold)</span></p>
            <p><span className="text-[#039397]">&#9733; &#9733; &#9733; &#9733; &#9733;</span> {item.rating}</p>
          </div>
        ))}
      </div>

      {/* For Mobile (4 Product) */}
      <div className="grid grid-cols-1 gap-6 my-8 md:hidden">
        {dataProduct.slice(0, 4).map((item) => (
          <div key={item.id} className="bg-white p-2 rounded-xl shadow-md font-semibold">
            <img src="#" alt="" className="w-full h-48 bg-gray-100 rounded-xl" />
            <h3 className="text-lg mt-4 mb-1 opacity-85">{item.name}</h3>
            <p className="mb-4">Rp. {item.price.toLocaleString()} <span className="opacity-75">({item.sold} sold)</span></p>
            <p><span className="text-[#039397]">&#9733; &#9733; &#9733; &#9733; &#9733;</span> {item.rating}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
