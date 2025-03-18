export default function HeadDesc({ title, description }) {
  return (
    <div className="flex flex-col gap-4 w-sm p-2 mt-4">
      <h1 className="text-xl font-semibold">{title}</h1>
      <p className="opacity-75">{description}</p>
    </div>
  );
}
