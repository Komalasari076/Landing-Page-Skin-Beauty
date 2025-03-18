export default function HeadDesc2({title, description}) {
    return (
        <div className="text-center max-w-3xl m-auto">
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            <p className="opacity-75">{description}</p>
        </div>
    )
}