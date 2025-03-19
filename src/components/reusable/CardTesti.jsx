export default function CardTesti({ image, title, description }) {
  return (
    <div className="w-full h-80 bg-white rounded-2xl relative overflow-hidden">
      <img src={image} alt="Nadia" className="w-full h-72 object-cover" />

      <div className="absolute bottom-0 w-full bg-white/60 backdrop-blur-md p-4 rounded-2xl">
        <h3 className="font-bold text-xl mb-4">{title}</h3>
        <p className="opacity-90">"{description}"</p>
      </div>
    </div>
  );
}
