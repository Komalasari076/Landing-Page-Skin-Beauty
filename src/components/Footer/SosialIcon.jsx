import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import pinterest from "../../assets/pinterest.svg";
import facebook from "../../assets/facebook.svg";
import youtube from "../../assets/youtube.svg";

export default function SosialIcon() {
  return (
    <div className="flex justify-between items-center gap-8">
      <img src={instagram} alt="" className="w-7 h-7" />
      <img src={twitter} alt="" className="w-6 h-6" />
      <img src={pinterest} alt="" className="w-9 h-9" />
      <img src={facebook} alt="" className="w-9 h-9" />
      <img src={youtube} alt="" className="w-9 h-9" />
    </div>
  );
}
