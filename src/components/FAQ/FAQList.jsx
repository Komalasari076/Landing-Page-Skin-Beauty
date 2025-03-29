import FAQCard from "./FAQCard";

export default function FAQList() {
  const faqs = [
    {
      id: 1,
      question: "Apakah produk ini cocok untuk semua jenis kulit?",
      answer:
        "Ya, produk ini diformulasikan untuk berbagai jenis kulit, termasuk sensitif.",
    },
    {
      id: 2,
      question: "Berapa lama hasilnya bisa terlihat?",
      answer: "Hasil dapat terlihat dalam 2–4 minggu dengan pemakaian rutin.",
    },
    {
      id: 3,
      question: "Apakah produk ini aman untuk ibu hamil dan menyusui?",
      answer:
        "Produk ini menggunakan bahan yang aman, tetapi sebaiknya konsultasikan dengan dokter terlebih dahulu.",
    },
    {
      id: 4,
      question: "Apakah produk ini sudah teruji secara klinis?",
      answer:
        "Ya, produk ini telah melalui uji klinis dan dermatologis untuk memastikan keamanannya.",
    },
    {
      id: 5,
      question: "Bagaimana cara penggunaan yang benar?",
      answer:
        "Gunakan sesuai urutan skincare: bersihkan wajah, aplikasikan toner, serum, lalu pelembap.",
    },
    {
      id: 6,
      question: "Apakah produk ini mengandung bahan berbahaya?",
      answer:
        "Tidak, produk ini bebas dari paraben, alkohol berlebihan, dan bahan berbahaya lainnya.",
    },
  ];

  return (
    <div className="lg:w-[80%] w-full bg-white p-6 rounded-xl shadow-md">
      {faqs.map((faq) => (
        <FAQCard
          key={faq.id}
          id={faq.id}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </div>
  );
}
