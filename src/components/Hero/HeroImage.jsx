import cover from "../../assets/image.png";

export default function HeroImage() {
  return (
    <img
      src={cover}
      className="w-full h-screen bg-[#97B6C0] object-cover object-right lg:brightness-80 lg:contrast-150 brightness-40"
    />
  );
}
