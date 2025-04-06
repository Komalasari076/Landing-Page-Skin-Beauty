import HeadingStats from "./HeadingStats";

export default function Statistik() {
    return(
        <div className="w-full flex flex-row lg:flex-col justify-center md:justify-end gap-10">
            <HeadingStats title="95%" description="Clients Report" />
            <HeadingStats title="9/10" description="Clients recomended" />
        </div>
    )
}