'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/ui/carousel/carousel"
import Autoplay from "embla-carousel-autoplay"
import React, { use } from "react"
import Image from "next/image"




const pictureArray = [
    "/tour-pictures/carousel1.jpg",
    "/tour-pictures/carousel2.jpg",
    "/tour-pictures/carousel3.jpg",
    "/tour-pictures/carousel4.jpg",
];
  const features = [
    {
      name: "Kakheti",
      intro: "Kakheti is a region in eastern Georgia known for its picturesque landscapes, vineyards, and rich history. It is famous for its wine production and traditional winemaking methods.",
      description:
        "Kakheti is a region in eastern Georgia known for its picturesque landscapes, vineyards, and rich history. It is famous for its wine production and traditional winemaking methods. The region is home to several ancient monasteries, fortresses, and charming towns, making it a popular destination for tourists seeking both natural beauty and cultural experiences.",
      imageSrc: "/tour-pictures/kakheti.jpg",
      imageAlt: "Kakheti",
    },
    {
      name: "Kazbegi",
      intro: "Kazbegi is a mountainous region in northern Georgia, known for its stunning landscapes and the iconic Gergeti Trinity Church. It offers breathtaking views of Mount Kazbek.",
      description:
        "Kazbegi is a mountainous region in northern Georgia, known for its stunning landscapes and the iconic Gergeti Trinity Church. It offers breathtaking views of Mount Kazbek, making it a popular destination for hiking and outdoor activities. The region is rich in natural beauty, with lush valleys, waterfalls, and unique geological formations.",
      imageSrc: "/tour-pictures/mtskheta1.jpg",
      imageAlt: "Kazbegi",
    },
    {
      name: "Uplistikhe",
      intro: "Uplistikhe is an ancient rock-hewn town in Georgia, carved into a rocky hillside. It dates back to the early Iron Age and features unique cave structures.",
      description:
        "Uplistikhe is an ancient rock-hewn town in Georgia, carved into a rocky hillside. It dates back to the early Iron Age and features unique cave structures, churches, and living quarters. The site offers a glimpse into the region's history and architecture, making it a fascinating destination for history enthusiasts.",
      imageSrc: "/tour-pictures/uplistikhe1.jpg",
      imageAlt: "Uplistikhe",
    },
    {
      name: "Martvili",
      intro: "Martvili is a picturesque region in western Georgia, known for its stunning canyons, waterfalls, and lush greenery. It offers opportunities for outdoor activities.",
      description:
        "Martvili is a picturesque region in western Georgia, known for its stunning canyons, waterfalls, and lush greenery. It offers opportunities for outdoor activities such as hiking, boating, and exploring the natural beauty of the area. The Martvili Canyon is particularly famous for its crystal-clear waters and scenic landscapes.",
      imageSrc: "/tour-pictures/martvili1.jpg",
      imageAlt: "Martvili",
    }
  ]


export default function Page() {

const tour1Ref = React.useRef(null);
const tour2Ref = React.useRef(null);
const tour3Ref = React.useRef(null);
const tour4Ref = React.useRef(null);


const scrollToElement = (elementRef) => {
    elementRef.current.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const plugin = React.useRef(
    Autoplay({ delay: 2690, stopOnInteraction: true })
  )

    return (
                <div className="border-b border-gray-900/10 pb-12">  
                {/* Mobile */}
                <div className="sm:hidden">
                  <Image 
                  src={pictureArray[1]}
                  alt="Tour"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto"
                  priority
                  />
                </div>
                
                {/* Desktop */}
                <div className="hidden sm:block">
                  <div className="flex justify-center">
                    <div className="flex justify-center w-5/6 static">
                      <Carousel
                    plugins={[plugin.current]}
                    className="w-full"
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                    >
                    <CarouselContent>
                        {pictureArray.map((img) => (
                        <CarouselItem key={img}>
                          <Image
                            src={img}
                            alt="Tour"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-auto"
                          />
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                    </Carousel>
                    </div>
                  </div>
                </div>
                <h1 className="text-center mt-4">Tours with guides</h1>
                <p className="text-center">Explore the beauty of Georgia with our guided tours. Discover the rich history, stunning landscapes, and vibrant culture of this amazing country.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                      <div className="grid-cols-1 row-span-4 sm:grid-cols-2 col-span-full grid grid-rows-subgrid gap-4">
                        {features.map((feature, index) => {
                          const getRefForIndex = (idx) => {
                                                  switch(idx) {
                              case 0: return tour1Ref;
                              case 1: return tour2Ref;
                              case 2: return tour3Ref;
                              case 3: return tour4Ref;
                              default: return tour1Ref;
                            }
                          };
                          return (
                          
                          <div key={feature.name} className="bg-white rounded-lg shadow-md p-4">
                          <h2 className="text-lg font-semibold cursor-pointer hover:text-darkGreen underline"
                            onClick={() => scrollToElement(getRefForIndex(index))}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                  scrollToElement(getRefForIndex(index));
                                }
                              }}
                              >{feature.name}</h2>
                            <p className="text-gray-600">{feature.intro}</p>
                          </div> )
                        } 
                        )}
                        </div>
                    {features.map((feature, index) => {
                          const getRefForIndex = (idx) => {
                            switch(idx) {
                              case 0: return tour1Ref;
                              case 1: return tour2Ref;
                              case 2: return tour3Ref;
                              case 3: return tour4Ref;
                              default: return tour1Ref;
                            }
                          };
                  return  (<div
                          ref={getRefForIndex(index)} 
                  key={feature.name} 
                  className="col-span-full bg-white rounded-lg shadow-md p-4">
                        <Image
                            src={feature.imageSrc}
                            alt={feature.imageAlt}
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-auto rounded-lg mb-4"
                        />
                        <h2 className="text-lg font-semibold">{feature.name}</h2>
                        <p className="mt-2 text-gray-500">
                            {feature.description}
                        </p>
                </div>
                    )
                    })}
                    </div>
                    </div>
    )
}