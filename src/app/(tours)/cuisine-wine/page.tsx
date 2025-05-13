import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/app/ui/card/card";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
    const cardStyle = "max-sm:w-mx-auto sm:w-sm text-center hover:scale-105 transition-transform duration-269 ease-in-out active:scale-100";
    return (
                <div className="flex max-sm:flex-col md:flex-row items-baseline justify-center gap-12 m-4">
                    <Link href="/cuisine-wine/cuisine"
                     className={cardStyle}>
                    <Card>
                        <CardHeader>
                            <CardTitle>Cuisine</CardTitle>
                            <CardDescription>Georgia&apos;s Culinary Heritage</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Image src="/tour-pictures/cuisine-wine/cuisine.jpg" alt="Khinkali and Khachapuri" width={0} height={0} sizes="100vw" className="w-full rounded-lg mb-4" />
                            <p>
                                Discover the rich tapestry of Georgia&apos;s culinary heritage.
                            </p>
                        </CardContent>
                    </Card>
                    </Link>
                    <Link href="/cuisine-wine/wine"
                     className={cardStyle}>
                    <Card>
                        <CardHeader>
                            <CardTitle>Wine</CardTitle>
                            <CardDescription>Georgia&apos;s Wine Paradise</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Image  src="/tour-pictures/cuisine-wine/wine.jpg" alt="Grapes and Wine" width={0} height={0} sizes="100vw" className="w-full rounded-lg mb-4" />
                            <p>
                                Georgia, the cradle of wine, invites you to explore its ancient vineyards and taste the essence of its terroir.
                            </p>    
                        </CardContent>
                    </Card>
                    </Link>
            </div>
    )
}