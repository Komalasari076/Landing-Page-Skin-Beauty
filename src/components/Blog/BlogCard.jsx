export default function BlogCard({title, date, description}) {
    return (
        <div className="flex flex-col justify-between bg-white p-4 rounded-xl shadow-md">
            <div>
                <img src="#" alt={title} className="w-full h-56 bg-gray-100 rounded-xl"/>
                <h3 className="text-lg mt-4 mb-1 font-semibold">{title}</h3>
                <p className="opacity-80 mb-8 mt-2 font-semibold">{date}</p>
            </div>

            <p className="opacity-90 ">{description}</p>
        </div>
    )
}