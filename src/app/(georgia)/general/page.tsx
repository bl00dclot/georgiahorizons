import GeneralData from "@/app/lib/data/georgia/general.json"
import {CardDataArray} from "@/app/lib/types/georgia/general"
import RenderCardItem from "@/app/ui/card/RenderCardItem"

const general: CardDataArray = GeneralData

export default function Page() {
  const firstTwoItems = general.slice(0, 2);
  const remainingItems = general.slice(2);

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800">General Information About Georgia</h1>
      </header>

      {/* Nested Grid for the first two items */}
      {firstTwoItems.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {firstTwoItems.map((item, index) => (
            <RenderCardItem key={item.title || `first-${index}`} item={item} cardKey={item.title || `first-${index}`} />
          ))}
        </div>
      )}

      {/* Grid for the remaining items */}
      {remainingItems.length > 0 && (
        <div className="grid grid-cols-1 gap-6 my-4">
          {remainingItems.map((item, index) => (
            <RenderCardItem key={item.title || `remaining-${index}`} item={item} cardKey={item.title || `remaining-${index}`} />
          ))}
  </div>
)}
    </div>
    );
}