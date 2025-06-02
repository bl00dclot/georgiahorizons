'use client'

import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel/carousel"
import Autoplay from "embla-carousel-autoplay"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import MaskDef from "./LandingMask"
import { Button } from "@/app/ui/button/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/app/ui/card/card"
import ScrollToElementButton from "@/app/ui/scrollToElement/scrollToElement"

  const pictureArray = ["/main/carousel1.jpg", "/main/carousel2.jpg", "/main/carousel3.jpg"];

export default function Home() {
    const plugin = React.useRef(
      Autoplay({ delay: 6996, stopOnInteraction: false })
    );
  return (
          <div className="pt-16 leading-relaxed">
                            <MaskDef />

                <section id="mainSection" className="w-full h-screen grid grid-cols-2 grid-rows-8 mb-4 border-b border-gray-900/10">
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
                  <header className="row-span-3 col-span-2 grid grid-cols-3 gap-3 max-sm:block m-4 justify-center items-center max-sm:text-center">
                      <h1 className="col-span-2 text-6xl pb-6 max-sm:text-3xl">Explore New Horizons with Us</h1>
                      <div className="flex flex-col self-start max-sm:items-center">
                        <ScrollToElementButton
                        className="py-2"
                        targetId="featureSection">
                          <Button>Start my journey</Button>
                        </ScrollToElementButton>
                      <div className="max-sm:order-first">
                        <p className="text-sm pb-4">Experience Georgia’s stunning landscapes, rich history, and vibrant culture. Embark on mountain adventures and explore charming towns. Discover Georgia’s horizons yourself!</p>
                      </div>
                        </div>
                    </header>
                </section>
                {/* Feature Section */}
                <section id="featureSection" className="w-full h-full max-sm:h-full mt-4 border-b border-gray-900/10">
                  <div className="text-center">
                    <h2 className="text-4xl py-4">Features
                    </h2>
                  <p className="px-6">Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel className aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
                    </div>
                      <ScrollToElementButton
                      targetId="informationSection">
                        <div className="p-4 mt-4 flex justify-center items-center flex-col hover:underline">
                        <span className="text-xl font-medium cursor-pointer">Continue</span>
                        <svg className="w-6 relative cursor-pointer" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 4V20M12 20L18 14M12 20L6 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        </div>
                      </ScrollToElementButton>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                    <Card className="max-sm:mb-4">
                      <CardHeader>
                        <CardTitle>Tours</CardTitle>
                        <CardDescription><p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.</p></CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Image src="/tour-pictures/guide-pictures/martvili1.jpg" alt="alt" width={1280} height={640} />
                      </CardContent>
                      <CardFooter className="flex justify-center">
                        <Button>Discover</Button>
                      </CardFooter>
                    </Card>
                    <Card className="max-sm:mb-4">
                      <CardHeader>
                        <CardTitle>Adventures</CardTitle>
                        <CardDescription><p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.</p></CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Image src="/tour-pictures/guide-pictures/martvili1.jpg" alt="alt" width={1280} height={640} />
                      </CardContent>
                      <CardFooter className="flex justify-center">
                        <Button>Experience</Button>
                      </CardFooter>
                    </Card>
                    <Card className="max-sm:mb-4">
                      <CardHeader>
                        <CardTitle>Relaxation</CardTitle>
                        <CardDescription><p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.</p></CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Image src="/tour-pictures/guide-pictures/martvili1.jpg" alt="alt" width={1280} height={640} />
                      </CardContent>
                      <CardFooter className="flex justify-center">
                        <Button>Enjoy</Button>
                      </CardFooter>
                    </Card>
                  </div>
                </section>
                {/* Information Section */}
                <section id="informationSection" className="w-full h-auto max-sm:h-auto mt-4 border-b border-gray-900/10">
                  <div className="text-center">
                    <h2 className="text-4xl py-4">Information</h2>
                  <p className="px-6">Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel className aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
                    </div>
                    <div className="grid grid-cols-2 max-sm:grid-cols-1 md:grid-cols-4 gap-4 p-6">
                    <Card className="flex flex-col justify-center">
                      <CardHeader></CardHeader>
                      <CardContent>
                        <Image src="/georgia-pictures/general-pictures/flag-georgia.png" alt="alt" width={512} height={384} className="w-full h-auto" />
                      </CardContent>
                      <CardFooter className="flex justify-center">
                    <Link
                    href="/"><Button>General</Button>
                    </Link>
                      </CardFooter>
                    </Card>
                    <Card className="flex flex-col justify-center">
                      <CardHeader></CardHeader>
                      <CardContent>
                        <Image src="/georgia-pictures/history-pictures/King-David-Aghmashenebeli.jpg" alt="alt" width={512} height={384} className="w-full h-auto" />
                      </CardContent>
                      <CardFooter className="flex justify-center">
                    <Link
                    href="/"><Button>History</Button>
                    </Link>
                      </CardFooter>
                    </Card>
                    <Card className="flex flex-col justify-center">
                      <CardHeader></CardHeader>
                      <CardContent>
                        <Image src="/georgia-pictures/culture-pictures/georgian-colchis.png" alt="alt" width={512} height={384} className="w-full h-auto" />
                      </CardContent>
                      <CardFooter className="flex justify-center">
                    <Link
                    href="/"><Button>Culture</Button>
                    </Link>
                      </CardFooter>
                    </Card>
                    <Card className="flex flex-col justify-center">
                      <CardHeader></CardHeader>
                      <CardContent>
                        <Image src="/georgia-pictures/nature-pictures/sataplia.jpg" alt="alt" width={512} height={384} className="w-full h-auto" />
                      </CardContent>
                      <CardFooter className="flex justify-center">
                    <Link
                    href="/"><Button>Nature</Button>
                    </Link>
                      </CardFooter>
                    </Card>
                  </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 justify-center md:items-center text-center">
                      <Link
                    href="/" className="md:col-start-2 hover:underline text-4xl font-bold text-darkGreen text-shadow-sm">Book Now
                    </Link>
                    <ScrollToElementButton
                      targetId="aboutSection"
                      className="">
                        <div className="p-4 mt-4 flex justify-center items-center flex-col hover:underline">
                        <span className="text-xl font-medium cursor-pointer">Read more</span>
                        <svg className="w-6 relative cursor-pointer" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 4V20M12 20L18 14M12 20L6 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        </div>
                      </ScrollToElementButton>
                    </div>
                </section>
                {/* About Us & Reviews section */}
                <section id="aboutSection" className="w-full h-auto max-sm:h-auto my-8 border-b border-gray-900/10">
                  <h3 className="text-3xl text-center">About Us & Reviews</h3>
                  <div className="py-4">
                    <Card className="my-4 mx-2">
                    <CardHeader>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                      <div className="relative w-full overflow-hidden
                       h-96 sm:h-[450px]
                       md:h-full md:pb-0">
                        <Image src="/logoV2.png"
                        alt="alt"
                        fill={true}
                        objectFit="contain"
                        objectPosition="center"
                        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                        />
                      </div>
                      <div>
                        <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </CardContent>
                  </Card>
                  </div>
                </section>
                    <ScrollToElementButton
                      targetId="mainSection"
                      className="">
                        <div className="p-4 mt-4 flex justify-start items-start flex-col hover:underline">
                        <span className="text-xl font-medium cursor-pointer">Back to top</span>
                        <svg className="w-6 relative cursor-pointer order-first" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 20V4M12 4L6 10M12 4L18 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        </div>
                      </ScrollToElementButton>
              </div>
  )
}