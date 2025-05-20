import CultureDataJSON from "@/app/lib/data/georgia/culture.json"
import { CardDataArray } from "@/app/lib/data/interface/general";
import RenderCardItem from "@/app/ui/card/RenderCardItem";

const culture: CardDataArray = CultureDataJSON


export default function Page() {

    return (
                <div className="container mx-auto">
      <header className="mb-12 text-center">
    <h1 className="text-4xl font-bold text-gray-800">Discover the Rich Tapestry of Georgian Culture</h1>
    <p className="mt-4 text-lg text-gray-600">Welcome to a journey through Georgia’s centuries-old heritage. From haunting mountain melodies to vibrant dance, from majestic medieval churches to warm supra feasts—immerse yourself in the traditions that have shaped this Caucasian gem. Whether you are a cultural enthusiast or a curious traveler, explore these facets of Georgian life and let the spirit of hospitality enchant you.</p>
  </header>
                    <div className="grid grid-cols-1 gap-4">
                        {culture.map((item, index) => (
                            <RenderCardItem key={index} item={item} cardKey={index} />
                        ))}
                    </div>
            </div>
    )
}