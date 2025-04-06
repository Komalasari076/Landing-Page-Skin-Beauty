export default function HeadingStats({ title, description }) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-5xl font-bold tracking-wide">{title}</h3>
      <p className="font-semibold opacity-80">{description}</p>
    </div>
  );
}
