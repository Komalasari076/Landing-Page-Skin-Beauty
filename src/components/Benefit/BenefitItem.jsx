export default function BenefitItem({ title, description, image, alt, reverse }) {
  return (
    <div
      className={`flex flex-col ${
        reverse ? "lg:flex-col-reverse" : ""
      } gap-4 lg:gap-12 w-full`}
    >
      <div className="flex flex-col gap-4 w-full p-2 mt-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm opacity-80">{description}</p>
      </div>
      <img src={image} alt={alt} />
    </div>
  );
}
