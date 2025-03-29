import Heading from "./Heading";
import FAQList from "./FAQList";

export default function FAQ() {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-6 lg:my-30 my-16 lg:px-14">
      <Heading />
      <FAQList />
    </div>
  );
}
