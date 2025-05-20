import WineData from "@/app/lib/data/tours/wine.json";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/app/ui/card/card";

interface Wine {
    page: {
        title: string;
        intro: string;
        sections: {
            id: string;
            title: string;
            intro: string;
            grape_varieties: string[];
            winemaking_methods: {
                traditional: string;
                modern: string;
            }
            wines: {
                name: string;
                description: string;
            }[];
            wineries: string[];
            img_url: string;
        }[];
    };
}
const wine: Wine = WineData
        

export default function Page() {
    return (
        <div>
            <h1>{wine.page.title}</h1>
            <p>{wine.page.intro}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                {wine.page.sections.map((section) => (
                    <Card key={section.id}>
                        <CardHeader>
                            <CardTitle>{section.title}</CardTitle>
                            <CardDescription>{section.intro}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <h2>Grape Varieties</h2>
                            <ul>
                                {section.grape_varieties.map((grape, index) => (
                                    <li key={index}>{grape}</li>
                                ))}
                            </ul>
                            <h2>Winemaking Methods</h2>
                            <ul>
                                <li><strong>Traditional:</strong> {section.winemaking_methods.traditional}</li>
                                <li><strong>Modern:</strong> {section.winemaking_methods.modern}</li>
                            </ul>
                            <h2>Wines</h2>
                            <ul>
                                {section.wines.map((wine, index) => (
                                    <li key={index}>
                                        <strong>{wine.name}:</strong> {wine.description}
                                    </li>
                                ))}
                            </ul>
                            <h2>Wineries</h2>
                            <ul>
                                {section.wineries.map((winery, index) => (
                                    <li key={index}>{winery}</li>
                                ))}
                            </ul>
                            <Image
                                src=""
                                alt={section.title}
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