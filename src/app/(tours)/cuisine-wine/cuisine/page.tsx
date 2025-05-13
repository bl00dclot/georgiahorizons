import CuisineData from "@/app/lib/data/cusine.json";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/app/ui/card/card";

interface Cuisine {
    page: {
        title: string;
        intro: string;
        sections: {
            id: string;
            title: string;
            intro: string;
            dishes: {
                name: string;
                description: string;
            }[];
            venues: string[];
            img_src: string;
            img_alt: string;
        }[];
    };
}

    
const cuisine: Cuisine = CuisineData

export default function Page() {

    return (
                <div>
                    <div className="text-center">
                        <h1>{cuisine.page.title}</h1>
                    <p>{cuisine.page.intro}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                    {cuisine.page.sections.map((section) => (
                        <Card key={section.id}>
                            <CardHeader>
                                <CardTitle>{section.title}</CardTitle>
                                <CardDescription>{section.intro}</CardDescription>
                            </CardHeader>
                            <CardContent>
                            <ul>
                                {section.dishes.map((dish, index) => (
                                    <li key={index}>
                                        <strong>{dish.name}:</strong> {dish.description}
                                    </li>
                                ))}
                            </ul>
                            <p>Venues: {section.venues.join(", ")}</p>
                            <Image
                                src=""
                                alt=""
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full h-auto"
                                />
                            </CardContent>
                        </Card>
                    ))}
                    </div>
            </div>
    )
}