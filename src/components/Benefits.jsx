import HeadDesc from "./reusable/HeadDesc";
import niacinamide from "../assets/niacinamide.png";
import bright from "../assets/bright.png";
import tested from "../assets/tested.png";

export default function Benefits() {
  return (
    <section className="flex justify-between items-start my-20 px-14">
      <div className="flex flex-col gap-14">
        <HeadDesc
          title="Kandungan Niacinamide 5%"
          description="Niacinamide adalah bentuk vitamin B3 yang dikenal mampu mencerahkan kulit, mengontrol minyak berlebih, dan memperbaiki skin barrier."
        />
        <img src={niacinamide} alt="Kandungan Niacinamide 5%" />
      </div>

      <div className="flex flex-col-reverse gap-6">
        <HeadDesc
          title="Mencerahkan & Melembapkan"
          description="Formula aktifnya membantu mengurangi hiperpigmentasi, membuat kulit tampak lebih sehat dan bercahaya, serta menjaga kelembapan kulit sepanjang hari."
        />
        <img src={bright} alt="Mencerahkan & Melembapkan" />
      </div>

      <div className="flex flex-col gap-8">
        <HeadDesc
          title="Dermatologically Tested"
          description="Produk ini telah melewati uji klinis oleh dermatologis dan terbukti aman untuk semua jenis kulit, termasuk kulit sensitif. Bebas dari paraben, alkohol, dan bahan berbahaya lainnya."
        />
        <img src={tested} alt="Dermatologically Tested" />
      </div>
    </section>
  );
}
