export default function DetailsPage({ title }: { title: String }) {
    return (<div className="flex flex-col justify-center gap-4">
        <h1 className="text-5xl text-center font-bold mt-20">
            {title}
        </h1>
    </div>)
}