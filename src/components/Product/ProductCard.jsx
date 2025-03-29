export default function ProductCard({ name, price, sold, rating }) {
    return (
        <div className="bg-white p-2 rounded-xl shadow-md font-semibold">
            <img src="#" alt="" className="w-full h-48 bg-gray-100 rounded-xl" />
            <h3 className="text-lg mt-4 mb-1 opacity-85">{name}</h3>
            <p className="mb-4">Rp. {price.toLocaleString()} <span className="opacity-75">({sold} sold)</span></p>
            <p><span className="text-[#039397]">&#9733; &#9733; &#9733; &#9733; &#9733;</span> {rating}</p>
        </div>
    )
}