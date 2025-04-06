export default function BlogCard({ title, date, description, image }) {
  return (
    <div className="flex flex-col justify-between bg-gray-50 p-4 rounded-xl shadow-md tracking-wide">
      <div>
        <img
          src={image}
          alt={title}
          className="w-full h-56 bg-gray-100 rounded-xl object-cover"
        />
        <h3 className="mt-4 mb-1 font-semibold">{title}</h3>
        <p className="tetx-sm opacity-80 mb-8 mt-2 font-semibold">{date}</p>
      </div>

      <p className="text-sm opacity-90 ">{description}</p>
    </div>
  );
}
