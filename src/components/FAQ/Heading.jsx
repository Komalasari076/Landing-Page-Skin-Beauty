export default function Heading() {
  return (
    <div className="flex justify-between md:block lg:px-0 px-2">
      <h2 className="text-6xl font-semibold mb-10">FAQ</h2>
      <div className="font-josefin flex flex-col lg:flex-col md:flex-row md:items-center lg:items-start gap-4">
        <p className="text-3xl">Frequently</p>
        <p className="text-5xl">Asked</p>
        <p className="text-3xl">Questions</p>
      </div>
    </div>
  );
}
