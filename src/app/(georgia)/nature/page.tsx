import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/app/ui/card/card"
import NatureData from "@/app/lib/data/georgia/nature.json"
import Image from "next/image"

interface NatureData {
    title: string;
    description: string | null;
    content: {
      type: string;
      text: string;
    }[]
    footer: string;
    img_src: string;
    img_alt: string;
  }
  const nature: NatureData[] = NatureData;
export default function Page() {

    return (
                <div>
                      <header className="mb-8 text-center">
    <h1>Explore Georgia&apos;s Natural Wonders</h1>
    <p>From soaring Caucasus peaks to lush Black Sea coastlines, Georgia’s landscapes offer unparalleled diversity. Discover ancient forests, hidden caves, vibrant wetlands, and more in this guide to the country’s most breathtaking natural destinations.</p>
  </header>
<div className="grid grid-cols-1 gap-4 my-4">
{nature.map((item, index) => (
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
              <div key={contentIndex}>
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