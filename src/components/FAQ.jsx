import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
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

  const [open, setOpen] = useState(null);

  function handleToggleFAQ(id) {
    setOpen(open === id ? null : id);
  }

  return (
    <div className="flex justify-between my-30 px-14">
      <div>
        <h2 className="text-6xl font-semibold mb-10">FAQ</h2>
        <div className="font-josefin flex flex-col gap-4">
          <p className="text-3xl">Frequently</p>
          <p className="text-5xl">Asked</p>
          <p className="text-3xl">Questions</p>
        </div>
      </div>
      <div className="w-[1000px] bg-white p-6 rounded-xl shadow-md">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="border-b border-gray-300 last:border-b-0 py-2"
          >
            <button
              className="w-full flex justify-between items-center py-2 text-left font-medium text-gray-900 cursor-pointer"
              onClick={() => handleToggleFAQ(faq.id)}
            >
              <p className="font-semibold">{faq.question}</p>
              {open === faq.id ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>
            {open === faq.id && (
              <p className="text-gray-700 pb-4">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
