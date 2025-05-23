import nightlifeJsonData from "@/app/lib/data/tours/nightlife.json";
import { NightlifeData } from "@/app/(content)/(tours)/nightlife/interface";
import ScrollToElementButton from "@/app/ui/scrollToElement/scrollToElement";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/app/ui/card/card";

const nightlife: NightlifeData = nightlifeJsonData;



export default function Page() {

    return (
        <div>
            <div className="text-center grid grid-cols-1 justify-center items-center m-4">
            <h1>NightLife</h1>
            <h2>Experience Georgia After Dark</h2>
            <p className="my-4">
                Dive into Georgia’s vibrant nightlife, where ancient streets pulse with modern beats and every corner hides a new adventure. From Tbilisi’s underground techno temples to Batumi’s beach-side dance floors, the night is yours to explore.
            </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center text-center m-4">
            {Object.entries(nightlife).map(([cityName]) => {
                return (
                    <div key={cityName}
                                className='bg-white rounded-lg shadow-md p-4 font-medium [&>div]:hover:underline [&>div]:active:underline [&>div]:hover:cursor-pointer'
                    >
                        <ScrollToElementButton
                            targetId={cityName}
                            buttonText={cityName}
                        />
                    </div>
                )
            })}
            </div>
            {Object.entries(nightlife).map(([cityName, venuesArray]) => {
                return (
                    <div key={cityName} id={cityName}>
                        <h2 className="text-2xl font-bold text-center">{cityName}</h2>
                        <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-center text-center m-4">
                            {venuesArray.map((venue, index) => (
                                <Card key={index} className="mb-4">
                                    <CardHeader>
                                        <CardTitle>{venue.name}</CardTitle>
                                        <CardDescription>{venue.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p><strong>Category:</strong> {venue.category}</p>
                                        <p><strong>Type:</strong> {venue.type}</p>
                                    </CardContent>
                                </Card>
                            ))}
                                {/* <li key={index} className="mb-4">
                                    <h3 className="text-xl font-semibold">{venue.name}</h3>
                                    <p>{venue.description}</p>
                                    <p><strong>Category:</strong> {venue.category}</p>
                                    <p><strong>Type:</strong> {venue.type}</p>
                                </li>
                            ))} */}
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}