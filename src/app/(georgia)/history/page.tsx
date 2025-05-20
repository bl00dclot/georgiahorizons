import HistoryData from "@/app/lib/data/georgia/history.json"
import RenderCardItem from "@/app/ui/card/RenderCardItem"
import { CardDataArray } from "@/app/lib/types/georgia/general"

const history: CardDataArray = HistoryData

export default function Page() {

    return (
                <div className="container mx-auto">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Brief History of Georgia</h1>
        <p className="mt-4 text-lg text-gray-600">
          Read about the rich history of Georgia, from its ancient origins to modern times.
        </p>
      </header>

<div className="grid grid-cols-1 gap-4 my-4">
{history.map((item, index) => (
        <RenderCardItem key={item.title || `remaining-${index}`} item={item} cardKey={item.title || `remaining-${index}`} />
      ))}
</div>
            </div>
    )
}