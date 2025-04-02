import TestimonialCard from "./TeastimonialCard";
import nadia from "../../assets/nadia.png";
import putri from "../../assets/putri.png";

export default function TestimonialList() {
  const testimonials = [
    {
      image: nadia,
      title: "Nadia, 25 tahun",
      description:
        "Beneran bikin kulit lebih sehat dan terawat. Rasanya lebih kenyal, halus, dan nggak gampang kering lagi. Highly recommended!",
    },
    {
      image: putri,
      title: "Putri, 29 tahun",
      description:
        "Setelah rutin pakai, kulitku jadi lebih lembap dan glowing. Nggak kusam lagi, dan rasanya lebih sehat dari sebelumnya. Suka banget!",
    },
  ];

  return (
    <div className="w-full lg:w-3/4 flex flex-col md:flex-row md:gap-10 gap-6 justify-between">
      {testimonials.map((item, index) => (
        <TestimonialCard
          key={index}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}
