import health from "@/app/lib/data/tours/health.json"
import Image from "next/image"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/app/ui/accordion/accordion"
  import Link from "next/link"
  import { WellnessData } from "./interface"

const wellnessTours: WellnessData[] = health


export default function Page() {

    function slugify(text: string) {
        return text.toLowerCase().replace(/\s+/g, '-')
    }

    return (
<div>

<h1 className="text-center">Health & Relax</h1>

<div className="flex justify-center">
<div className="flex justify-center w-5/6 static">
<div className="w-full">
<h2 className="text-center mt-4">Health and Relax</h2>
<p className="text-center mt-2">In Georgia there are plenty of relaxation and health rejuvinating procedures and therapies.</p>
<div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 mt-8 justify-center items-center">
<Image 
    src="/tour-pictures/health-relax/massage.avif" 
    alt="alt" 
    width={0}
    height={0}
    sizes="100vw"
    className="w-full h-auto rounded-lg mb-4 self-center" />
    <Image 
    src="/tour-pictures/health-relax/spa-resort.jpg" 
    alt="alt" 
    width={0}
    height={0}
    sizes="100vw"
    className="w-full h-auto rounded-lg mb-4 col-span-2 items-center self-center" />
    {wellnessTours.map((tour) => (
        <div 
        key={tour.id}
        className="col-span-full bg-white rounded-lg shadow-md p-4 self-center"
        >
        <Accordion type="single" key={tour.id} collapsible>
        <AccordionItem value="item-1">
            <AccordionTrigger>{tour.section}</AccordionTrigger>
            <AccordionContent>
            <div className="flex items-center justify-center gap-4">
            {tour.intro}

            <Link
            href={`/health/${slugify(tour.section)}`}
            className="text-darkGreen font-medium hover:underline active:underline self-baseline "
            >Learn more</Link>
            </div>
            {tour.options.map((option) => (
                <div key={option.id} className="mt-4 flex flex-col">
                    <h3 className="text-lg font-semibold">{option.subtext}</h3>
                    <p>{option.description}</p>
                    <Link
                    href={`/health/${slugify(tour.section)}/${slugify(option.subtext)}`}
                    className="text-darkGreen font-medium hover:underline active:underline self-baseline mt-2"
                    >
                        Locations
                    </Link>
                </div>
            ))}
            </AccordionContent>
        </AccordionItem>
        </Accordion>
        </div>
    ))}
    </div>
</div>
</div>
</div>
</div>
    )
}