import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import pinterest from "../../assets/pinterest.svg";
import facebook from "../../assets/facebook.svg";
import youtube from "../../assets/youtube.svg";

export default function SosialIcon() {
  return (
    <div className="flex justify-between items-center gap-8">
      <img src={instagram} alt="instagram" className="w-6 h-6 cursor-text" />
      <img src={twitter} alt="twitter" className="w-5 h-5 cursor-text" />
      <img src={pinterest} alt="pinterest" className="w-8 h-8 cursor-text" />
      <img src={facebook} alt="facebook" className="w-8 h-8 cursor-text" />
      <img src={youtube} alt="youtube" className="w-8 h-8 cursor-text" />
    </div>
  );
}
