'use client'

import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel/carousel"
import Autoplay from "embla-carousel-autoplay"
import React from "react"
import Image from "next/image"

  const pictureArray = ["/main/carousel1.jpg", "/main/carousel2.jpg", "/main/carousel3.jpg"];

export default function Home() {
    const plugin = React.useRef(
      Autoplay({ delay: 6996, stopOnInteraction: true })
    );
  return (
          <div className="hidden fixed top-0 left-0 pt-16">
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
                </Carousel>
              </div>
  )
}