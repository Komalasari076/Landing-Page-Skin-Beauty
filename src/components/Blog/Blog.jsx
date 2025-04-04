import Heading from "../Product/Heading";
import BlogList from "./BlogList";
import blog1 from "../../assets/blog1.png"
import blog2 from "../../assets/blog2.png"
import blog3 from "../../assets/blog3.png"

export default function Blog() {
  const dataBlog = [
    {
      id: 1,
      title: "Rahasia Kulit Glowing: 5 Kebiasaan yang Harus Kamu Coba!",
      image: blog1,
      date: "12 Maret 2025",
      description:
        "Kulit sehat dan bercahaya bukan sekadar hasil dari skincare mahal. Yuk, kenali kebiasaan sederhana yang bisa bikin kulitmu glowing alami setiap hari!",
    },
    {
      id: 2,
      title:
        "Hyaluronic Acid vs Niacinamide: Mana yang Lebih Cocok untuk Kulitmu?",
      image: blog2,
      date: "5 Maret 2025",
      description:
        "Kedua bahan ini sering jadi favorit dalam dunia skincare, tapi apa perbedaan dan manfaatnya? Yuk, simak panduan lengkapnya agar tidak salah pilih!",
    },
    {
      id: 3,
      title: "Cara Mengatasi Kulit Kusam & Lelah dengan Skincare yang Tepat",
      image: blog3,
      date: "27 Februari 2025",
      description:
        "Paparan polusi dan kurangnya perawatan bisa membuat kulit tampak kusam. Temukan langkah-langkah mudah untuk mengembalikan kilau alami wajahmu!",
    },
  ];

  return (
    <div className="my-16 lg:my-20 lg:px-14">
      <Heading
        title="Temukan Tips & Insight Terbaik untuk Kulit Sehat"
        description="Dapatkan berbagai tips, panduan, dan informasi seputar perawatan kulit."
      />

       {/* For Desktop (3 blog) */}
      <BlogList blogs={dataBlog.slice(0,3)} isMobile={false}/>

      {/* For Mobile (2 blog) */}
      <BlogList blogs={dataBlog.slice(0,2)} isMobile={true}/>
    </div>
  );
}
