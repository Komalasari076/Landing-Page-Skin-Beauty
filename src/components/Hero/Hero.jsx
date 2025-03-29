import Navigasi from "../Navigasi/Navigasi";
import HeroImage from "./HeroImage";
import HeroText from "./HeroText";
import HeroButton from "./HeroButton";

export default function Hero() {
  return (
    <>
      <HeroImage />
      <div className="max-w-9/10 m-auto lg:my-10 my-6 lg:px-14 px-2 absolute inset-0">
        <Navigasi />
        <HeroText />
        <HeroButton />
      </div>
    </>
  );
}
