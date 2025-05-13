'use client'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/ui/carousel/carousel"
import Autoplay from "embla-carousel-autoplay"
import React from "react"
import Image from "next/image"
import guideData from "@/app/lib/data/guide.json"
import ScrollToElementButton from "@/app/ui/scrollToElement/scrollToElement"

// Define types for our data
interface Feature {
  name: string;
  intro: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const pictureArray: string[] = [
    "/tour-pictures/guide-pictures/carousel1.jpg",
    "/tour-pictures/guide-pictures/carousel2.jpg",
    "/tour-pictures/guide-pictures/carousel3.jpg",
    "/tour-pictures/guide-pictures/carousel4.jpg",
];

const features: Feature[] = guideData;

export default function Page() {
  

  
  const plugin = React.useRef(
    Autoplay({ delay: 2696, stopOnInteraction: true })
  );


  return (
    <div>  
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
                {pictureArray.map((img, idx) => (
                  <CarouselItem key={img + idx}>
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
          {features.map((feature) => (
            <div key={feature.name}
            className='bg-white rounded-lg shadow-md p-4 font-medium [&>div]:hover:underline [&>div]:active:underline [&>div]:hover:cursor-pointer'
            >
              <ScrollToElementButton
                targetId={feature.name}
                buttonText={feature.name}
                block="end"
                />
              <p className="text-gray-600">{feature.intro}</p>
            </div>
          ))}
        </div>
        
        {features.map((feature) => (
          <div
            id={feature.name}
            key={feature.name} 
            className="col-span-full bg-white rounded-lg shadow-md p-4"
          >
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
        ))}
      </div>
    </div>
  );
}