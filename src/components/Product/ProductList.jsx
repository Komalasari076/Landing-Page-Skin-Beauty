import ProductCard from "./ProductCard";

export default function ProductList({ products, isMobile }) {
  return (
    <div
      className={`grid gap-10 my-14 ${
        isMobile
          ? "grid-cols-1 md:hidden"
          : "hidden md:grid lg:grid-cols-4 grid-cols-2"
      }`}
    >
      {products.map((item) => (
        <ProductCard
          key={item.id}
          name={item.name}
          image={item.image}
          price={item.price}
          sold={item.sold}
          rating={item.rating}
        />
      ))}
    </div>
  );
}
