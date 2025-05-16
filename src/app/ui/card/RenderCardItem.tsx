import { Card, CardDescription, CardContent, CardHeader, CardTitle, CardFooter } from "./card";
import { CardType  } from "@/app/lib/types/georgia/general";
import Image from "next/image";
import Link from "next/link";
import RenderContentItem from "@/app/ui/card/RenderContentItem";

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

export default RenderCardItem;