'use client'

import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel/carousel"
import Autoplay from "embla-carousel-autoplay"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import MaskDef from "./LandingMask"
import { Button } from "@/app/ui/button/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/app/ui/card/card"

  const pictureArray = ["/main/carousel1.jpg", "/main/carousel2.jpg", "/main/carousel3.jpg"];

export default function Home() {
    const plugin = React.useRef(
      Autoplay({ delay: 6996, stopOnInteraction: false })
    );
  return (
          <div className="pt-16">
                            <MaskDef />

                <section className="w-full h-screen grid grid-cols-2 grid-rows-8 mb-4">
                  <Carousel
                  plugins={[plugin.current]}
                  className="row-span-5 col-span-2 w-full h-full
                  mask-[url(#landingShapeMask2)]
                  mask-center"
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
                          className="w-full h-auto object-cover
                          "
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
                  <header className="row-span-3 col-span-2 grid grid-cols-3 gap-3 max-sm:block m-4 justify-center items-center">
                      <h1 className="col-span-2 text-6xl pb-4 max-sm:text-3xl">Explore New Horizons with Us</h1>
                      <div>
                      <p className="text-sm pb-4">Experience Georgia’s stunning landscapes, rich history, and vibrant culture. Embark on mountain adventures and explore charming towns. Discover Georgia’s horizons yourself!</p>
                        <Button>Start the Journey</Button></div>
                    </header>
                </section>
                <section className="w-full h-full max-sm:h-full mt-4">
                  <div className="text-center">
                    <h2 className="text-4xl py-4">Features</h2>
                  <p className="px-6">Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel className aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
                    </div>
                    <div className="flex justify-between p-16 max-md:p-12 max-sm:block max-sm:p-0 max-sm:m-4 max-sm:flex-col gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Tours</CardTitle>
                        <CardDescription><p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.</p></CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Image src="/tour-pictures/guide-pictures/martvili1.jpg" alt="alt" width={1280} height={640} />
                      </CardContent>
                      <CardFooter>
                        <Button>Discover</Button>
                      </CardFooter>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>Adventures</CardTitle>
                        <CardDescription><p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.</p></CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Image src="/tour-pictures/guide-pictures/martvili1.jpg" alt="alt" width={1280} height={640} />
                      </CardContent>
                      <CardFooter>
                        <Button>Experience</Button>
                      </CardFooter>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>Relaxation</CardTitle>
                        <CardDescription><p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.</p></CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Image src="/tour-pictures/guide-pictures/martvili1.jpg" alt="alt" width={1280} height={640} />
                      </CardContent>
                      <CardFooter>
                        <Button>Enjoy</Button>
                      </CardFooter>
                    </Card>
                  </div>
                </section>
                <section className="w-full h-screen max-sm:h-auto mt-4">
                  <div className="text-center">
                    <h2 className="text-4xl py-4">Information</h2>
                  <p className="px-6">Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel className aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
                    </div>
                    <div className="flex justify-between flex-row p-16 max-md:p-12 max-sm:p-0 max-sm:m-4 max-sm:flex-col gap-4">
                    <Link
                    href="/"><Button>General</Button>
                    </Link>
                    <Link
                    href="/"><Button>History</Button>
                    </Link>
                    <Link
                    href="/"><Button>Culture</Button>
                    </Link>
                    <Link
                    href="/"><Button>Nature</Button>
                    </Link>
                  </div>
                    <div className="flex justify-center items-center">
                      <Link
                    href="/">Book Now
                    </Link>
                    </div>
                </section>
                <section className="w-full h-screen max-sm:h-auto mt-4">
                  <h3>About Us & Reviews</h3>
                  <Card>
                    <CardHeader>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>This is the content of the card.</p>
                    </CardContent>
                    <CardFooter>
                      <button className="btn">Click Me</button>
                    </CardFooter>
                  </Card>
                </section>
              </div>
  )
}