import Image from "next/image";

export const EmptySearch = () => {
    return (
        <div className="h-full flex flex-col items-center justify-center">
            <Image 
                src="/empty-search.png"
                height={240}
                width={240}
                alt="Empty"
            />
            <h2 className="text-2xl font-semibold mt-6">
                No results found!
            </h2>
            <p className="text-sm mt-2 text-muted-foreground">Try seaching something else!</p>
        </div>
    )
}