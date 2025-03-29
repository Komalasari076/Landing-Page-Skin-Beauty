import cover from "../../assets/image.png";

export default function HeroImage() {
  return (
    <img
      src={cover}
      className="w-full h-screen object-cover object-right lg:brightness-90 brightness-40"
    />
  );
}
