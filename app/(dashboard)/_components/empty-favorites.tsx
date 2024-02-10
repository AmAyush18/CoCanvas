import Image from "next/image";

export const EmptyFavorites = () => {
    return (
        <div className="h-full flex flex-col items-center justify-center">
            <Image 
                src="/empty-favorites.png"
                height={240}
                width={240}
                alt="Empty"
            />
            <h2 className="text-2xl font-semibold mt-6">
                No favorite canvas!
            </h2>
            <p className="text-sm mt-2 text-muted-foreground">Try favoriting a canvas!</p>
        </div>
    )
}