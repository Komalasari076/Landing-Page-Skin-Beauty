import niacinamide from "../../assets/niacinamide.png";
import bright from "../../assets/bright.png";
import tested from "../../assets/tested.png";
import BenefitItem from "./BenefitItem";

export default function Benefits() {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-start gap-8 mt-10 mb-20 lg:my-20 lg:px-14">
      <BenefitItem
        title="Kandungan Niacinamide 5%"
        description="Niacinamide adalah bentuk vitamin B3 yang dikenal mampu mencerahkan kulit, mengontrol minyak berlebih, dan memperbaiki skin barrier."
        image={niacinamide}
        alt="Kandungan Niacinamide 5%"
      />

      <BenefitItem
        title="Mencerahkan & Melembapkan"
        description="Formula aktifnya membantu mengurangi hiperpigmentasi, membuat kulit tampak lebih sehat dan bercahaya, serta menjaga kelembapan kulit sepanjang hari."
        image={bright}
        alt="Mencerahkan & Melembapkan"
        reverse
      />

      <BenefitItem
        title="Dermatologically Tested"
        description="Produk ini telah melewati uji klinis dan terbukti aman untuk semua jenis kulit, termasuk kulit sensitif. Bebas dari paraben, alkohol, dan bahan berbahaya lainnya."
        image={tested}
        alt="Dermatologically Tested"
      />
    </section>
  );
}
