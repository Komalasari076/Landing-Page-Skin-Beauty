import Heading from "./Heading";
import ProductList from "./ProductList";
import item1 from "../../assets/item1.png"
import item2 from "../../assets/item2.png"
import item3 from "../../assets/item3.png"
import item4 from "../../assets/item4.png"
import item5 from "../../assets/item5.png"
import item6 from "../../assets/item6.png"
import item7 from "../../assets/item7.png"
import item8 from "../../assets/item8.png"

export default function Product() {
  const dataProduct = [
    {
      id: 1,
      name: "Skin Retinol Serum",
      image: item1,
      price: 58000,
      sold: 340,
      rating: 4.9,
    },
    {
      id: 2,
      name: "Skin Daily Moisturizer",
      image: item2,
      price: 46000,
      sold: 243,
      rating: 4.9,
    },
    {
      id: 3,
      name: "Skin Aqua Series",
      image: item3,
      price: 219000,
      sold: 200,
      rating: 4.9,
    },
    {
      id: 4,
      name: "Skin Refreshing Toner",
      image: item4,
      price: 82000,
      sold: 190,
      rating: 4.9,
    },
    {
      id: 5,
      name: "Skin Brightening Serum",
      image: item5,
      price: 65000,
      sold: 280,
      rating: 4.9,
    },
    {
      id: 6,
      name: "Skin Hydration series",
      image: item6,
      price: 195000,
      sold: 150,
      rating: 4.9,
    },
    {
      id: 7,
      name: "Skin UV Protection",
      image: item7,
      price: 56000,
      sold: 175,
      rating: 4.9,
    },
    {
      id: 8,
      name: "Skin Cleansing foam",
      image: item8,
      price: 35000,
      sold: 210,
      rating: 4.9,
    },
  ];

  return (
    <section className="my:20 lg:my-30 lg:px-14">
      <Heading
        title="Pilihan Terbaik untuk Kulit Cerah & Sehat"
        description="Temukan solusi perawatan terbaik untuk kulit yang sehat, lembap, dan bercahaya."
      />

      {/* For Desktop (8 Product) */}
      <ProductList products={dataProduct.slice(0, 8)} isMobile={false} />

      {/* For Mobile (4 Product) */}
      <ProductList products={dataProduct.slice(0, 4)} isMobile={true} />
    </section>
  );
}
