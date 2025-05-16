import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/app/ui/card/card"
import CultureDataJSON from "@/app/lib/data/georgia/culture.json"
import Image from "next/image";
import Link from "next/link"

interface ParagraphItem {
  type: string;
  text: string;
}
interface ListItem {
  type: string;
  items: string[];
}
type ContentItem = ParagraphItem | ListItem;
interface CardType {
  title: string;
  description: ContentItem[] | null;
  content: ContentItem[] | null;
  footer: string;
  img_src: string;
  img_alt: string;
}
type CardDataArray = CardType[];

const culture: CardDataArray = CultureDataJSON

const RenderContentItem = ({ item, parentKey }: { item: ContentItem; parentKey: string | number }) => {
  if (item.type === "paragraph" && "text" in item) {
    const paragraph = item as ParagraphItem;
    return <p className="my-2">{paragraph.text}</p>;
  }
  if (item.type === "list" && "items" in item) {
    const list = item as ListItem;
    return (
      <ul className="list-disc list-inside my-2 pl-4">
        {list.items.map((listItem, index) => (
          <li key={`${parentKey}-li-${index}`}>{listItem}</li>
        ))}
      </ul>
    );
  }
  return null;
};

const RenderCardItem = ({ item, cardKey }: { item: CardType; cardKey: string | number }) => {
  return (
    // The key is applied by the caller of this component in the .map function
    <Card className="w-full flex flex-col">
      <CardHeader>
        <CardTitle>{item.title}</CardTitle>
        {item.description && item.description.length > 0 && (
          <CardDescription>
            {item.description.map((descItem, descIndex) => (
              <RenderContentItem
                key={`desc-${String(cardKey)}-${descIndex}`}
                item={descItem}
                parentKey={`desc-${String(cardKey)}-${descIndex}`}
              />
            ))}
          </CardDescription>
        )}
      </CardHeader>

      {item.img_src && (
        <div className="relative w-full h-48">
          <Image
            src={item.img_src}
            alt={item.img_alt || item.title || 'Card image'}
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}

      {item.content && item.content.length > 0 && (
        <CardContent className="flex-grow">
          {item.content.map((contentItem, contentIndex) => (
            <RenderContentItem
              key={`content-${String(cardKey)}-${contentIndex}`}
              item={contentItem}
              parentKey={`content-${String(cardKey)}-${contentIndex}`}
            />
          ))}
        </CardContent>
      )}

      {item.footer && (
        <CardFooter>
          {item.footer.startsWith('/') || item.footer.startsWith('http') ? (
            <Link href={item.footer} className="text-blue-600 hover:underline">
              Learn More
            </Link>
          ) : (
            item.footer
          )}
        </CardFooter>
      )}
    </Card>
  );
};


export default function Page() {

    return (
                <div>
                    <header className="mb-8 text-center">
    <h1>Discover the Rich Tapestry of Georgian Culture</h1>
    <p>Welcome to a journey through Georgia’s centuries-old heritage. From haunting mountain melodies to vibrant dance, from majestic medieval churches to warm supra feasts—immerse yourself in the traditions that have shaped this Caucasian gem. Whether you are a cultural enthusiast or a curious traveler, explore these facets of Georgian life and let the spirit of hospitality enchant you.</p>
  </header>
                    <div className="grid grid-cols-1 gap-4">
                        {culture.map((item, index) => (
                            <RenderCardItem key={index} item={item} cardKey={index} />
                        ))}
                    </div>
            </div>
    )
}