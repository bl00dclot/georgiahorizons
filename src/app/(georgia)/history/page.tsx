import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/app/ui/card/card"
import HistoryData from "@/app/lib/data/georgia/history.json"
import Image from "next/image"
interface HistoryData {
    title: string;
    description: string;
    content: {
      type: string;
      text: string;
      items: string[];
    }[]
    img_src: string;
    img_alt: string;
    footer: string;
  }
const history: HistoryData[] = HistoryData

export default function Page() {

    return (
                <div>
  <h1>History of Georgia</h1>

<div className="grid grid-cols-1 gap-4 my-4">
{history.map((item, index) => (
        <Card key={index} className="w-full">
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
            {item.description === "" ? null : <CardDescription>{item.description}</CardDescription>}
          </CardHeader>
          {item.img_src === "" ? null : (
                      <Image
            src={item.img_src}
            alt={item.img_alt}
            width={500}
            height={300}
            className="object-cover w-full h-48"
            ></Image>)}
          <CardContent>
            {item.content.map((contentItem, contentIndex) => (
              <div key={contentIndex} className="grid grid-cols-1 gap-2 my-2">
                {contentItem.type === "paragraph" && <p>{contentItem.text}</p>}
              </div>
            ))}
          </CardContent>
          {item.footer === "" ? null : (
            <CardFooter>{item.footer}</CardFooter>)}
        </Card>
      ))}
</div>
            </div>
    )
}