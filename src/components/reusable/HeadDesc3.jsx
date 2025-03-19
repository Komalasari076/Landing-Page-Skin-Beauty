export default function HeadCase3({title, description}) {
    return(
        <div className="flex flex-col gap-2">
            <h3 className="text-6xl font-bold">{title}</h3>
            <p className="font-semibold opacity-80">{description}</p>
        </div>
    )
}