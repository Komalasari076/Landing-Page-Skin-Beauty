export default function ProductCard({ name, price, sold, rating, image }) {
    return (
        <div className="bg-gray-50 p-2 rounded-xl shadow-sm font-semibold">
            <img src={image} alt={name} className="w-full h-48 bg-gray-100 rounded-xl object-cover" />
            <h3 className="mt-4 mb-1 opacity-85">{name}</h3>
            <p className="mb-4 text-sm">Rp. {price.toLocaleString()}<span className="opacity-75 ml-2">({sold} sold)</span></p>
            <p className="text-sm"><span className="text-[#039397] mr-2">&#9733; &#9733; &#9733; &#9733; &#9733;</span>{rating}</p>
        </div>
    )
}