export default function TestimonialCard({ image, title, description }) {
  return (
    <div className="w-full lg:h-80 h-96 bg-gray-100 rounded-4xl relative overflow-hidden">
      <img src={image} alt="Nadia" className="w-full lg:h-72 h-80 object-cover object-top" />

      <div className="absolute bottom-0 w-full bg-white/60 backdrop-blur-md p-4 rounded-2xl">
        <h3 className="font-bold text-xl mb-4">{title}</h3>
        <p className="opacity-90">"{description}"</p>
      </div>
    </div>
  );
}
