import NatureData from "@/app/lib/data/georgia/nature.json"
import RenderCardItem from "@/app/ui/card/RenderCardItem"
import { CardDataArray } from "@/app/lib/types/georgia/general"

const nature: CardDataArray = NatureData;
export default function Page() {

    return (
                <div className="container mx-auto">
      <header className="mb-12 text-center">
    <h1 className="text-4xl font-bold text-gray-800">Explore Georgia&apos;s Natural Wonders</h1>
    <p className="mt-4 text-lg text-gray-600">From soaring Caucasus peaks to lush Black Sea coastlines, Georgia’s landscapes offer unparalleled diversity. Discover ancient forests, hidden caves, vibrant wetlands, and more in this guide to the country’s most breathtaking natural destinations.</p>
  </header>
<div className="grid grid-cols-1 gap-4 my-4">
{nature.map((item, index) => (
        <RenderCardItem key={item.title || `nature-${index}`} item={item} cardKey={item.title || `nature-${index}`} />
      ))}
</div>
            </div>
    )
}