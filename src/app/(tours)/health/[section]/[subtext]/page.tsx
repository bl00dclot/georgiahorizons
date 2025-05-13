import healthData from "@/app/lib/data/health.json"
import Image from "next/image"
import { WellnessData } from "../../interface"
import { Breadcrumb, BreadcrumbLink, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator, BreadcrumbPage } from "@/app/ui/breadcrumb/breadcrumb"
import Link from "next/link"



function slugify(text: string) {
    return text.toLowerCase().replace(/\s+/g, '-')
}

export default async function Page({params
    }: {
    params: Promise<{ section: string; subtext: string }>
}) {
    const { section, subtext } = await params
    const health: WellnessData[] = healthData
    const healthSection = health.find((item) => slugify(item.section) === section.toLowerCase());
    if (!healthSection) {
        return <div>Section not found</div>;
    }
    const healthSubtext = healthSection?.options.find((item) => slugify(item.subtext) === subtext.toLowerCase());
    if (!healthSubtext) {
        return <div>Subtext not found</div>;
    }

    return (
        <div>
            <h1 className="text-center">{healthSubtext.subtext}</h1>
            <Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink asChild>
        <Link href="/health">Health & Relax</Link>
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink asChild>
        <Link href={`/health/${slugify(healthSection.section)}`}>{healthSection.section}</Link>
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
        <BreadcrumbPage>
        {healthSubtext.subtext}
        </BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
            <div className="flex justify-center">
                <div className="flex justify-center w-5/6 static">
                    <div className="w-full">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                            {healthSubtext.locations.map((loc) => (
                                <div 
                                key={loc.id}
                                className="col-span-full bg-white rounded-lg shadow-md p-4 text-center"
                                >
                                    <h2>{loc.name}</h2>
                                    <h3>{loc.location}</h3>
                                    <Image src={loc.imageSrc} alt={loc.imageAlt} width={0} height={0} sizes="100vw" className="w-full h-auto rounded-lg my-4 self-center" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}