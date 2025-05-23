'use client'

import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel/carousel"
import Autoplay from "embla-carousel-autoplay"
import React from "react"
import Image from "next/image"

  const pictureArray = ["/main/carousel1.jpg", "/main/carousel2.jpg", "/main/carousel3.jpg"];

export default function Home() {
    const plugin = React.useRef(
      Autoplay({ delay: 6996, stopOnInteraction: false })
    );
  return (
          <div className="">
                <div className="w-full h-screen grid grid-cols-1 grid-rows-11 gap-5">
                  <Carousel
                  plugins={[plugin.current]}
                  className="row-span-8 w-full h-full"
                  onMouseEnter={plugin.current.stop}
                  onMouseLeave={plugin.current.reset}
                >
                  <CarouselContent className="h-full">
                    {pictureArray.map((img, idx) => (
                      <CarouselItem key={img + idx} className="w-auto h-full relative">
                          <Image
                          src={img}
                          alt="Tour"
                          fill={true}
                          className="object-cover"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
                <header className="">
                      <h1>Your journey starts here</h1>
                    </header>
                </div>
                <p>asdas</p>
              </div>
  )
}