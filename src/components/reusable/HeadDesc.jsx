export default function HeadDesc({ title, description }) {
  return (
    <div className="flex flex-col gap-4 w-full p-2 mt-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="opacity-75">{description}</p>
    </div>
  );
}
