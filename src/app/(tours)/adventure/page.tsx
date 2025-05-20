import adventures from "@/app/lib/data/tours/adventures.json";
import Image from "next/image";

export default function Page() {

    return (
                <div>
            <div className="flex justify-center">
                <div className="flex justify-center w-5/6 static">
                    <div className="w-full">
                        <h2 className="text-center mt-4">Adventure Tours</h2>
                        <p className="text-center mt-2">Explore the wild side of Georgia with our adventure tours. From hiking in the Caucasus mountains to paragliding above them.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                            {adventures.map((adventure) => (
                                <div
                                key={adventure.id}
                                className="col-span-full bg-white rounded-lg shadow-md p-4 grid grid-cols-2 max-sm:grid-cols-1 grid-rows-1 gap-4"
                                >
                                <div className={adventure.id % 2 === 0 ? "order-2 max-sm:order-0" : ""}>
                                <Image src={adventure.imageSrc} alt={adventure.imageAlt} width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="w-full h-auto rounded-lg mb-4"
                                    />
                                </div>
                                    <div className="flex flex-col text-center max-sm:text-left justify-center">
                                    <h2 className="font-bold mb-4">{adventure.name}</h2>
                                    <p>{adventure.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                </div>
        </div>
    )
}