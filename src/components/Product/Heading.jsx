export default function Heading({ title, description }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="font-semibold opacity-80">{description}</p>
    </div>
  );
}
