import HeadDesc2 from "./reusable/Headdesc2";

export default function Blog() {
  const dataBlog = [
    {
      id: 1,
      title: "Rahasia Kulit Glowing: 5 Kebiasaan yang Harus Kamu Coba!",
      date: "12 Maret 2025",
      description:
        "Kulit sehat dan bercahaya bukan sekadar hasil dari skincare mahal. Yuk, kenali kebiasaan sederhana yang bisa bikin kulitmu glowing alami setiap hari!",
    },
    {
      id: 2,
      title:
        "Hyaluronic Acid vs Niacinamide: Mana yang Lebih Cocok untuk Kulitmu?",
      date: "5 Maret 2025",
      description:
        "Kedua bahan ini sering jadi favorit dalam dunia skincare, tapi apa perbedaan dan manfaatnya? Yuk, simak panduan lengkapnya agar tidak salah pilih!",
    },
    {
      id: 3,
      title: "Cara Mengatasi Kulit Kusam & Lelah dengan Skincare yang Tepat",
      date: "27 Februari 2025",
      description:
        "Paparan polusi dan kurangnya perawatan bisa membuat kulit tampak kusam. Temukan langkah-langkah mudah untuk mengembalikan kilau alami wajahmu!",
    },
  ];

  return (
    <div className=" my-30 px-14">
      <HeadDesc2
        title="Temukan Tips & Insight Terbaik untuk Kulit Sehat"
        description="Dapatkan berbagai tips, panduan, dan informasi seputar perawatan kulit, tren skincare, serta bahan aktif yang bisa membantu kulitmu tetap sehat dan bercahaya"
      />

      <div className="grid grid-cols-3 gap-10 my-14">
        {dataBlog.map((item) => (
          <div key={item.id} className="flex flex-col justify-between bg-white p-4 rounded-xl shadow-md">
            <div>
              <img src="#" alt={item.title} className="w-full h-56 bg-gray-100 rounded-xl"/>
              <h3 className="text-lg mt-4 mb-1 font-semibold">{item.title}</h3>
              <p className="opacity-80 mb-8 mt-2 font-semibold">{item.date}</p>
            </div>

            <p className="opacity-90 ">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
