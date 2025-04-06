export default function Heading() {
  return (
    <div className="flex justify-between md:block lg:px-0 px-2">
      <h2 className="text-5xl font-semibold mb-10">FAQ</h2>
      <div className="font-josefin font-semibold flex flex-col lg:flex-col md:flex-row md:items-center lg:items-start gap-2">
        <p className="text-2xl">F<span className="opacity-60">requently</span></p>
        <p className="text-4xl">A<span className="opacity-60">sked</span></p>
        <p className="text-2xl">Q<span className="opacity-60">uestions</span></p>
      </div>
    </div>
  );
}
